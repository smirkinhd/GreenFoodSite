import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;
const SALT_ROUNDS = 10;

app.use(cors());
app.use(bodyParser.json());

async function initializeDatabase() {
  const db = await open({
    filename: './database.db',
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return db;
}

const dbPromise = initializeDatabase();

app.post('/api/register', async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    const db = await dbPromise;

    const existingUser = await db.get(
      'SELECT * FROM users WHERE phone = ? OR email = ?',
      [phone, email]
    );

    if (existingUser) {
      const errors = {};
      if (existingUser.phone === phone) errors.phone = 'Этот номер телефона уже зарегистрирован';
      if (existingUser.email === email) errors.email = 'Этот email уже зарегистрирован';
      return res.status(400).json({ success: false, errors });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const result = await db.run(
      'INSERT INTO users (name, phone, email, password) VALUES (?, ?, ?, ?)',
      [name, phone, email, hashedPassword]
    );

    res.json({ 
      success: true, 
      message: 'Регистрация прошла успешно!',
      userId: result.lastID
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ success: false, message: 'Ошибка сервера' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    let { phone, password } = req.body;
    const db = await dbPromise;

    console.log('Login attempt for phone:', phone);
    console.log('Password received (length):', password.length);

    phone = phone.replace(/\D/g, '');
    phone = '+'+phone
    console.log('Cleaned phone:', phone);

    const user = await db.get(
      'SELECT * FROM users WHERE phone = ?',
      [phone]
    );

    console.log('User found:', !!user);

    if (!user) {
      console.log('User not found');
      return res.status(401).json({ 
        success: false, 
        message: 'Пользователь с таким номером не найден' 
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Password valid:', isPasswordValid);

    if (!isPasswordValid) {
      console.log('Invalid password');
      return res.status(401).json({ 
        success: false, 
        message: 'Неверный пароль' 
      });
    }

    console.log('Login successful for user:', user.id);
    res.json({ 
      success: true,
      user: {
        id: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Ошибка сервера' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});