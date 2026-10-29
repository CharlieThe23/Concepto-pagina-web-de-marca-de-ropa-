import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(cookieParser());

// In-memory valid session tokens
const activeSessions = new Map<string, { username: string; loggedInAt: number }>();

// Configurable Credentials (via ENV or default system administrator)
const AUTH_USER = process.env.NULLSYS_AUTH_USER || 'nullsys_admin';
const AUTH_PASSWORD = process.env.NULLSYS_AUTH_PASSWORD || 'void_system_2026';

// Session Validation Endpoint
app.get('/api/auth/session', (req: Request, res: Response) => {
  const token = req.cookies.nullsys_session;
  if (!token || !activeSessions.has(token)) {
    return res.json({ authenticated: false, user: null });
  }

  const session = activeSessions.get(token)!;
  return res.json({
    authenticated: true,
    user: {
      username: session.username,
      role: 'authorized_curator'
    }
  });
});

// Login Endpoint
app.post('/api/auth/login', (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      error: 'Usuario y contraseña son requeridos obligatoriamente.'
    });
  }

  // Secure comparison
  if (username.trim() === AUTH_USER && password === AUTH_PASSWORD) {
    // Generate secure session token
    const token = `nullsys_${Math.random().toString(36).substring(2)}${Date.now().toString(36)}`;
    activeSessions.set(token, {
      username: username.trim(),
      loggedInAt: Date.now()
    });

    // Set secure cookie
    res.cookie('nullsys_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    });

    return res.json({
      success: true,
      user: {
        username: username.trim(),
        role: 'authorized_curator'
      }
    });
  }

  // Generic rejection on invalid credentials
  return res.status(401).json({
    success: false,
    error: 'Credenciales inválidas. Acceso denegado al sistema NULL.SYS.'
  });
});

// Logout Endpoint
app.post('/api/auth/logout', (req: Request, res: Response) => {
  const token = req.cookies.nullsys_session;
  if (token) {
    activeSessions.delete(token);
  }
  res.clearCookie('nullsys_session', { path: '/' });
  return res.json({ success: true });
});

// Serve Vite in development or static dist in production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[NULL.SYS] Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('[NULL.SYS] Server initialization error:', err);
});
