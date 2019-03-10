const { isRequiredsNeeded, } = require('../utils')

test('An empty body returns true', () => {
    expect(isRequiredsNeeded({})).toBe(true)
})

test('A fully expected body returns false', () => {
    const mockValidBody = {
        "name": "aaa",
        "email": "bbb",
        "password": "ccc",
        "phone_number": "ddd",
    };

    // no required values are needed because body enocdes it!
    expect(isRequiredsNeeded(mockValidBody)).toBe(false)
})
