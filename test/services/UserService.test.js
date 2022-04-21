const UserService = require('./../../app/services/UserService')

describe('Test for UserService', () => {
    // Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
    // Criterios de aceptación:
    // 1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
    // 2. El valor de `bio` deberá ser por default para todos los `user` creados.

    test('1. Create a new user using the UserService', () => {
        const user = UserService.create(1, 'julietadelgado', 'Julieta Delgado')
        expect(user.id).toBe(1)
        expect(user.username).toBe('julietadelgado')
        expect(user.name).toBe('Julieta Delgado')
        expect(user.bio).not.toBeUndefined()
    })

    //Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.
    test('2. Get all user data in a list', () => {
        const user = UserService.create(1, 'julietadelgado', 'Julieta Delgado')
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe('julietadelgado')
        expect(userInfoList[2]).toBe('Julieta Delgado')
        expect(userInfoList[3]).toBe('Without bio')

    })

    //Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`. 
    test('2. Update username', () => {
        const user = UserService.create(1, 'julietadelgado', 'Julieta Delgado')
        UserService.updateUserUsername(user,'juls__dem')
        expect(user.user).toBe('juls__dem')

    })
})