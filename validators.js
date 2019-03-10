const isValidType = (obj, propertyName, propertyType) => {
    return typeof obj[propertyName] === propertyType
}

/*
console.log( true); // true
console.log(isValidType({'foo': 1}, 'foo', 'string'),false); // false
console.log(isValidType({'foo': 1}, 'foo'), false); // false
*/

module.exports = {
    isValidType,
}
