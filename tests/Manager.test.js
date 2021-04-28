const Manager = require('../lib/Manager');

//class
test("Can instantiate Manager instance", () => {
    const man = new Manager();
    expect(typeof(man)).toBe('object')
});

//getName, getID and getEmail, getRole method and get Office number
test("Returns Name, Id, Email, Role, and office number", () => {
    const man = new Manager('Bob',2,'Bob@yahoo.com',1);
    expect(man.getName()).toBe('Bob');
    expect(man.getId()).toBe(2);
    expect(man.getEmail()).toBe('Bob@yahoo.com');
    expect(man.getRole()).toBe('Manager');
    expect(man.getOfficeNumber()).toBe(1);
});