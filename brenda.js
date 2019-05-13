/*
 * An elaborate inside joke for your pleasure
 * 2019 - Christian Erwin
*/

// namespace
var brenda = brenda || {};

// constructor
brenda.Brenda = function(leader, number) {
    return {number: number, leader: leader, followers: []};
}

brenda._brendas = [ // the brendas
    // the legendary first brenda
    {number: 1, leader: 0, followers: [2, 3, 4]},

    {number: 2, leader: 1, followers: []},
    {number: 3, leader: 2, followers: []},
    {number: 4, leader: 3, followers: []}
];

brenda.getNextNumber = function() {
    return brenda._brendas.length + 1;
}

brenda.addNewBrenda = function(newBrenda) {
    brenda._brendas.push(newBrenda);
}

brenda.title = function(theBrenda) {
    let name = `The ${theBrenda.number} Brenda,`;
}