const Engineer = require('../lib/Engineer');

//class
test("Can instantiate Engineer instance", () => {
    const eng = new Engineer();
    expect(typeof(eng)).toBe('object')
});

//getName, getID and getEmail, getRole method and get Office number
test("Returns Name, Id, Email, Role and github", () => {
    const eng = new Engineer('Bob',2,'Bob@yahoo.com','BOB123');
    expect(eng.getName()).toBe('Bob');
    expect(eng.getId()).toBe(2);
    expect(eng.getEmail()).toBe('Bob@yahoo.com');
    expect(eng.getRole()).toBe('Engineer');
    expect(eng.getGithub()).toBe('BOB123');
});