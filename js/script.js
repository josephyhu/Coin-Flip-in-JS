let n = parseInt(prompt("Enter a positive integer."));
let heads = 0;
let tails = 0;
let flip;

while (n < 1 || !Number.isInteger(n)) {
  n = parseInt(prompt("Enter a positive integer."));
}

for (let i = 0; i < n; i += 1) {
  flip = Math.floor(Math.random() * 2);
  if (flip === 1) {
    tails += 1;
  } else {
    heads += 1;
  }
}

document.querySelector('#coinflip').innerHTML = "<p>" + n + " flips</p>" + 
  "</p>Heads: " + heads + ", Tails: " + tails + "</p>";