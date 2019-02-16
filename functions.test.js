const functions = require('./functions');

// Lifecycle methods
// run for each test
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// run at beginning and end of the all the test
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase()); 

// targeting specific function
const nameCheck = () => console.log('Checking names...');

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Tashi', () => {
        const user = 'Tashi';
        expect(user).toBe('Tashi');
    });

    test('User is Nyima', () => {
        const user = 'Nyima';
        expect(user).toBe('Nyima');
    });
});

const initDatabase = () => console.log('Database initialized...');
const closeDatabase = () => console.log('Database Closed...');

// toBe is for premitive type
test('Add 2 + 2 equals 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Add 2 + 2 not equals 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY AND FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that is an if statement treats as true
// toBeFalsy matches anything that is an if statement treats as false

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull( );
});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

// toeTruthy
test('Should be truthy', () => {
    expect(functions.checkValue(2)).toBeTruthy();
});

// toEqual is for objects. arrays
test('User should be Tashi Nyima', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Tashi',
        lastName: 'Nyima'
    });
});

// Less than and greater than
test('Should be under 1500', () => {
    const load1 = 1000;
    const load2 = 400;
    expect(load1 + load2).toBeLessThan(1500);
});

// Regex - toMatch
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays
test('admin should be in userNames', () => {
    userNames = ['tashi', 'nyima', 'admin'];
    expect(userNames).toContain('admin');
});

// Working with async data - Promise
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);

//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham');
//         });
// });

// Async wait
test('User fetched name should be Leanne Graham', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});