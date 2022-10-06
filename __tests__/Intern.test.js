const Intern = require("../lib/Intern");

test('creates the intern object', () => {
    const intern = new Intern('Dave', 123, 'dave@email.com', 'College');
  
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.role).toEqual('Intern');
});

test('getSchool returns the school', () => {
    const intern = new Intern('Dave', 123, 'dave@email.com', 'College');

    expect(intern.school).toBe('College');
});

test('getRole returns "intern"', () => {
    const intern = new Intern('Dave', 123, 'dave@email.com', 'College');

    expect(intern.role).toBe('Intern');
});