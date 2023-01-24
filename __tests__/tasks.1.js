const rewire = require("rewire");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe('Student Object', () => {
  test("`student` Object should be defined", () => {
    const solution = rewire("../solution");
    const student = solution.__get__("student");
    expect(student).toBeDefined();
  });

  test("`student` Object should have `firstName` `lastName` and `class` properties", () => {
    const solution = rewire("../solution");
    const student = solution.__get__("student");
    expect(student).toEqual(expect.objectContaining({
      firstName: expect.any(String),
      lastName: expect.any(String),
      class: expect.any(Number),
    }));
  });
}); 

describe('Student Object Methods', () => {
  test("`student` object should contain `printDetails` method", () => {
    const solution = rewire("../solution");
    const student = solution.__get__("student");
    expect(student.printDetails).toBeDefined();
    expect(typeof student.printDetails).toBe('function');
  });
  test("`student` object's `printDetails` method should return a concatenated string with student info", () => {
    const solution = rewire("../solution");
    const student = solution.__get__("student");
    expect(typeof student.printDetails()).toBe("string");
    expect(student.printDetails()).toContain(student.firstName);
    expect(student.printDetails()).toContain(student.lastName);
    expect(student.printDetails()).toContain(student.class);
  });
});

describe("Person Object", () => {
  test("`person` Object should be defined", () => {
    const solution = rewire("../solution");
    const Person = solution.__get__("person");
    expect(Person).toBeDefined();
  }
  );
  test("`person` Object should have `firstName` `lastName`, `age`, `job` and `city` properties", () => {
    const solution = rewire("../solution");
    const Person = solution.__get__("person");
    expect(Person).toEqual(expect.objectContaining({
      firstName: expect.any(String),
      lastName: expect.any(String),
      age: expect.any(Number),
      job: expect.any(String),
      city: expect.any(String),
    }));
  }
  );
});

describe("Person Object Methods", () => {
  test("`person` object should contain `printDetails` method", () => {
    const solution = rewire("../solution");
    const Person = solution.__get__("person");
    expect(Person.printDetails).toBeDefined();
    expect(typeof Person.printDetails).toBe('function');
  }
  );
  test("`person` object's `printDetails` method should return a concatenated string with person info", () => {
    const solution = rewire("../solution");
    const person = solution.__get__("person");
    expect(typeof person.printDetails()).toBe("string");
    expect(person.printDetails()).toContain(person.firstName);
    expect(person.printDetails()).toContain(person.lastName);
    expect(person.printDetails()).toContain(person.age);
    expect(person.printDetails()).toContain(person.job);
    expect(person.printDetails()).toContain(person.city);
  });
});