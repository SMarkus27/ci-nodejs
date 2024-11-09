const sayHello = require('./index');


it("should return hello Marcus", () => {
    const name = "Marcus";

    expect(sayHello(name)).toEqual("Hello Marcus!");
})

it("should return hello John", () => {
    const name = "John";

    expect(sayHello(name)).toEqual("Hello John!");
})