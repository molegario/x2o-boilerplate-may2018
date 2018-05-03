const add = (a, b) => a + b;

const generateGreeting = (name='Anonymous') => `Hello ${name}!!!`;

test('Should add 2 numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('Should greet the person identified', ()=>{
    const result = generateGreeting('Mike');
    expect(result).toBe('Hello Mike!!!');
});

test('Should default empty name string to Anonymous.', ()=>{
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!!!');
});