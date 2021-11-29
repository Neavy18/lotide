const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([5,7,6]), 5);
assertEqual(head(["Hellos", "Lighthouse", "Labs"]), "Helloo");