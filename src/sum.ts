export default function sum(...numbers: number[]) {
    return numbers.reduce((total, number) => total + number, 0);
}

/* The piece of code below shows how inline tests can be ran */
// if (import.meta.vitest) {
//     const { describe, expect, it } = import.meta.vitest;

//     describe('#sum', () => {
//         it('returns 0 with no numbers', () => {
//             expect(sum()).toBe(0);
//         });

//         it('returns same number with one number', () => {
//             const anyNumber: number = 5;
//             expect(sum(anyNumber)).toBe(anyNumber);
//         });

//         it('returns sum with multiple numbers', () => {
//             expect(sum(...[1,2,3])).toBe(6);
//         });
//     });
// }