const User = require('./../../app/models/User')

describe('Unit test for User Class', () => {
    test('1. Create an User object', () => {
        const user = new User(1, 'julietadelgado', 'Julieta Delgado', 'Bio')
        expect(user.id).toBe(1)
        expect(user.username).toBe('julietadelgado')
        expect(user.name).toBe('Julieta Delgado')
        expect(user.bio).toBe('Bio')
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
    test('2. Add Getters', () => {
        const user = new User(1, 'julietadelgado', 'Julieta Delgado', 'Bio')
        expect(user.getUsername).not.toBeUndefined()
        expect(user.getBio).not.toBeUndefined()
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
    test('3. Add Setters', () => {
        const user = new User(1, '', 'Julieta Delgado', '')
        user.setUsername = 'julietadelgado'
        user.setBio = 'Bio'
        expect(user.username).toBe('julietadelgado')
        expect(user.bio).toBe('Bio')
    })
})