/*
brenda.js
An elaborate and useless inside joke.

MIT License

Copyright (c) 2019 Christian Erwin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var brenda = brenda || {};

brenda.Brenda = {
    number: 0,
    leader: 0,
    followers: [],
    alive: true
};

brenda._brendas = []; 
brenda._numbers = [1]; 

/* 
returns the index of the brenda 
*/
brenda.indexByNumber = function(number) {
    for(let i = 0; i < brenda._brendas.length; i++)
        if(brenda._brendas[i].number === number) return i;
};

/* 
constructor
*/
brenda.create = function(leader) {
    let b = Object.create(brenda.Brenda);
    b.number = brenda.nextNumber();
    b.leader = leader;
    b.followers = [];
    b.alive = true;

    // add new brenda to it's leaders list of followers
    let i = brenda.indexByNumber(leader);
    let n = brenda._brendas[i];
    n.followers.push(b.number);

    brenda._brendas.push(b);
};

brenda.nextNumber = function() {
    // find last element and add next number to list
    let i = brenda._numbers[brenda._numbers.length - 1];
    brenda._numbers.push(i + 1);

    // return first element
    return brenda._numbers.shift();
};

brenda.title = function(theBrenda) {
    let name = `The ${theBrenda.number} Brenda,`;
};

/*
create the first brenda and followers
*/
brenda._brendas.push({number: brenda.nextNumber(), leader: 0, followers: []});
brenda.create(1);
for(let i = 0; i < 3; i++) brenda.create(2);    // 3 4 5