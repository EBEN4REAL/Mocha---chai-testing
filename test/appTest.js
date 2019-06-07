const assert = require('chai').assert;
const sayHello = require('../app').sayHello;

describe('App'  , () => {
	it('sayHello should return hello' , () => {
		assert.equal(sayHello() , 'Hello');
	})
	it('sayHello should return type string' , () => {
		let result = sayHello();
		assert.typeOf(result, 'string');
	})
})