const UserView = require('./../../app/views/UserView')

describe('Test for UserView', () => {
    // Crea un método en esta clase llamado `createUser` que sirva para crear un nuevo objeto user a partir de un `payload`
    // Requerimiento 1. Valida que al enviar en el `payload` un valor `null`, 
    // obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
    test('Return an error object when try to create a new user with a null payload', () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result).toMatch(/payload doesn't exist/)
    })
})