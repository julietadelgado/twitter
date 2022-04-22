const UserView = require('./../../app/views/UserView')

describe('Test for UserView', () => {
    // Crea un método en esta clase llamado `createUser` que sirva para crear un nuevo objeto user a partir de un `payload`
    // Requerimiento 1. Valida que al enviar en el `payload` un valor `null`, 
    // obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
    test('1. Return an error object when try to create a new user with a null payload', () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })

    // Requerimiento 2. 2. Valida que un `payload` contenga en alguna de las llaves 
    // `username`, `name`, o `id` un valor en `null`. Si hay un valor `null` 
    // regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.
    test('2. Validate if payload has username, name or id, if theres a null value retur an error object', () => {
        const payload = {username: 'a', name: null, id: 'b'}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })
})