const Intern = require('../lib/Intern');

//class
test("Can instantiate Intern instance", () => {
    const tern = new Intern();
    expect(typeof(tern)).toBe('object')
});

//getName, getID and getEmail, getRole method and get Office number
test("Returns Name, Id, Email, Role and School", () => {
    const tern = new Intern('Bob',2,'Bob@yahoo.com','JHU');
    expect(tern.getName()).toBe('Bob');
    expect(tern.getId()).toBe(2);
    expect(tern.getEmail()).toBe('Bob@yahoo.com');
    expect(tern.getRole()).toBe('Intern');
    expect(tern.getSchool()).toBe('JHU');
});