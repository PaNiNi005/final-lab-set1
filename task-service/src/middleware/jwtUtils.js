// tassk-service/../jwtUtils.js
const jwt = require('jsonwebtoken');

// ต้องมั่นใจว่า SECRET นี้ตรงกับที่ auth-service ใช้สร้าง Token
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-production';

function verifyToken(token) {
  // jwt.verify จะคืนค่า payload { sub, email, role, username } ออกมา
  return jwt.verify(token, JWT_SECRET);
}

module.exports = { verifyToken };