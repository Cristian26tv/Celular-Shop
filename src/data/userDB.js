// src/data/usersDB.js

// Este será nuestro "diccionario" de usuarios en memoria
// clave: correo, valor: objeto con nombre, correo y password
const users = {
  "admin@celularshop.com": {
    nombre: "Admin",
    correo: "admin@celularshop.com",
    password: "admin123",
    role: "admin",
  },
};

/**
 * Guarda un usuario nuevo.
 * Si el correo ya existe, devuelve false.
 */
export function saveUser(nombre, correo, password) {
  if (users[correo]) {
    // ya existe un usuario con ese correo
    return false;
  }

  users[correo] = { nombre, correo, password, role: "user" };
  return true;
}

/**
 * Valida un usuario al hacer login.
 * Devuelve:
 *  - { ok: true, user } si está bien
 *  - { ok: false, reason: 'not_found' } si no existe
 *  - { ok: false, reason: 'wrong_password' } si la contraseña no coincide
 */
export function validateUser(correo, password) {
  const user = users[correo];

  if (!user) {
    return { ok: false, reason: 'not_found' };
  }

  if (user.password !== password) {
    return { ok: false, reason: 'wrong_password' };
  }

  return { ok: true, user: { ...user, role: user.role } };
}