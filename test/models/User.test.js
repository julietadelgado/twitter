describe('Unit test for User Class', () => {
    test('1. Create an User object', () => {
        const user = new User(1, 'julietadelgado', 'Julieta Delgado', 'Bio', new Date(), new Date())
        expect(user.id).toBe('a')
        expect(user.username).toBe('a')
        expect(user.name).toBe('a')
        expect(user.bio).toBe('a')
        expect(user.dateCreated).toBe('a')
        expect(user.lastUpdated).toBe('a')
    })
})