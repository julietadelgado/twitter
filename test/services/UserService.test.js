describe('Test for UserService', () => {
    // Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
    // Criterios de aceptación:
    // 1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
    // 2. El valor de `bio` deberá ser por default para todos los `user` creados.

    test('Create a new user using the UserService', () => {
        const user = new UserService(1, 'julietadelgado', 'Julieta Delgado')
        expect(user.id).toBe(1)
        expect(user.username).toBe('julietadelgado')
        expect(user.name).toBe('Julieta Delgado')
        expect(user.bio).not.toBeUndefined()
    })
})