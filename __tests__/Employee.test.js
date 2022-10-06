const Employee = require("../lib/Employee");

test('creates the employee object', () => {
    const employee = new Employee('Dave', 123, 'dave@email.com');
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual('Employee');
});

test('getName returns a name', () => {
    const employee = new Employee('Dave', 123, 'dave@email.com');

    expect(employee.name).toBe('Dave');
});

test('getId returns a number', () => {
    const employee = new Employee('Dave', 123, 'dave@email.com');

    expect(employee.id).toBe(123);
});

test('getEmail returns an email', () => {
    const employee = new Employee('Dave', 123, 'dave@email.com');

    expect(employee.email).toBe('dave@email.com');
});

test('getRole returns "Employee"', () => {
    const employee = new Employee('Dave', 123, 'dave@email.com');

    expect(employee.role).toBe('Employee');
});


