const Engineer = require("../lib/Engineer");

test('creates the engineer object', () => {
    const engineer = new Engineer('Dave', 123, 'dave@email.com', 'dave-github');
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toEqual('Engineer');
});

test('getGithub returns the github username', () => {
    const engineer = new Engineer('Dave', 123, 'dave@email.com', 'dave-github');

    expect(engineer.github).toBe('dave-github');
});

test('getRole returns "Engineer"', () => {
    const engineer = new Engineer('Dave', 123, 'dave@email.com', 'dave-github');

    expect(engineer.role).toBe('Engineer');
});