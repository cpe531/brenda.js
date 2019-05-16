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
    alive: true,

    title: function() {
        let s = `The ${brenda.nth(this.number)} Brenda\n`;

        if (this.leader != 0) { // make sure we're not the first brenda
            let f = 1;
            let l = brenda._brendas[brenda.indexByNumber(this.leader)];

            for (let i = 0; i < l.followers.length; i++) {
                if (l.followers[i] == this.number) f = i + 1;
            }

            s += `${brenda.nth(f)} follower of ${l.title()}`;
        }
        return s;
    }
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

    // add new brenda to it's leader's list of followers
    let i = brenda.indexByNumber(leader);
    let n = brenda._brendas[i];
    n.followers.push(b.number);

    brenda._brendas.push(b);
    return b;
};

brenda.nextNumber = function() {
    // find last element and add next number to list
    let i = brenda._numbers[brenda._numbers.length - 1];
    brenda._numbers.push(i + 1);

    // return first element
    return brenda._numbers.shift();
};

brenda.nth = function(n) {
    if(n >= 10 && n <= 20) return n + 'th'; // <-- weird teens
    let mod = n % 10;
    switch(mod) {
        case 1:     return n + 'st';
        case 2:     return n + 'nd';
        case 3:     return n + 'rd';
        default:    return n + 'th';
    }
};

/*
create the first brenda and followers
*/
let _first = Object.create(brenda.Brenda);
_first.number = brenda.nextNumber();
_first.leader = 0;
_first.followers = [];
_first.alive = undefined;    // oh, how strange...
brenda._brendas.push(_first);
brenda.create(1);
for(let i = 0; i < 3; i++) brenda.create(2);    // 3 4 5