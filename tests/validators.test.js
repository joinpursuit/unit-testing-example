const {isValidType} = require('../validators')

test("It returns a boolean", () => {
    // this is our crappy ad-hoc approach towards doing the same thing
    //console.log(isValidType({}, "foo", "bar"), "false")

    // jest defined way to "assert" that your function matches
    // test case
    expect(typeof isValidType({}, "foo", "bar")).toBe("boolean")
})

test("It returns true if object property is not available", () => {
    expect(isValidType({}, "foo", "undefined")).toBe(true)
})

test("It returns false if object property is not available but we expect it to exist", () => {
    expect(isValidType({}, "foo", "string")).toBe(false)
})

test("It returns true if object property matches property type", () => {
    expect(isValidType({'foo': 1}, 'foo', 'number')).toBe(true)
})
