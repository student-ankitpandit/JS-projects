const marval_heros = ["spiderman", "ironman", "thor"]
const dc_heros = ["superman", "batman"]

// marval_heros.push(dc_heros)

// console.log(marval_heros);  not a good pratice

// console.log(marval_heros[3][1]); not a good pratice

// const allHeros = marval_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marval_heros, ...dc_heros] //spread method
// console.log(all_new_heros);

// const another_array = [12, 4, 5, [5, 8, 6, 5], 7, 5, [6, 5, [5, 9]]]

// const kind_array = another_array.flat(Infinity)
// console.log(kind_array);

// console.log(Array.isArray("ankit"));
// console.log(Array.from("ankit"));
// console.log(Array.from({name: "ankit"})); //intersting case

let score = 100;
let score2 = 500
let score3 = 1000

console.log(Array.of(score, score2, score3));