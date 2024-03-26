export const userService = {
  authenticate,
}

function authenticate(email, password) {
  if (email !== 'admin@gmail.com' && password !== 'P@ssword1') {
    return null
  }

  const user = {
    id: '9001',
    name: 'Web Admin',
    email: 'admin@gmail.com',
  }

  return user
}
