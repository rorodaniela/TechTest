function checkCombination(data) {
  let count = 0;
  data.map((a, i) => {
    if (i <= data.length -2) {
      data.map((b, j) => {
        if (i !== j && JSON.stringify(a) === JSON.stringify(b)) {
          count ++
        }
      })
    }
  })

  if (count === 0) {
    return true
  } else {
    return false
  }
  
}

const data1 = [
  ["JakartaJS"],
  ["AWSome Day", "Elixir"],
  ["GoJakarta", "Elixir"]
]

const data2 = [
  ["JakartaJS", "Elixir"],
  ["Elixir"],
  ["JakartaJS", "Elixir"],
];

console.log(" Ini hasil data pertama : >>", checkCombination(data1));
console.log(" Ini hasil data kedua : >>", checkCombination(data2));
