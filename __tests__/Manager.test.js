const Manager = require("../lib/Manager");

test('creates the manager object', () => {
    const manager = new Manager('Dave', 123, 'dave@email.com', '123-456-7890');
  
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
    expect(manager.role).toEqual('Manager');
});

test('getRole returns "manager"', () => {
    const manager = new Manager('Dave', 123, 'dave@email.com', '123-456-7890');

    expect(manager.role).toBe('Manager');
});