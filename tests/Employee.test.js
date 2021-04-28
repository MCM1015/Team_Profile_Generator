const Employee = require('../lib/Employee');

//class
test("Can instantiate Employee instance", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe('object')
});

//getName, getID and getEmail and getRole method
test("Returns Name, Id, Email and Role", () => {
    const emp = new Employee('Bob',2,'Bob@yahoo.com');
    expect(emp.getName()).toBe('Bob');
    expect(emp.getId()).toBe(2);
    expect(emp.getEmail()).toBe('Bob@yahoo.com');
    expect(emp.getRole()).toBe('Employee')
});

