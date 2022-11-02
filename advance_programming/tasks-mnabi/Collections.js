// Data structures Used @ this file
// [List, Dictionary, Sets, Array, Objects]
// HW by Mohammad Nabi

const List = require('collections/list');
var Dictionary = require('collections/dict');

// List

let peopleAges = new List([10, 20, 30]);

// Common methods of List -----------------------------------------

// GET length of list (Property)
let length = peopleAges.length;

// Insert element at the end
peopleAges.push(50);

// Insert element at the start
peopleAges.unshift(5);

// Get element and remove the element at the end
let removedItemAtTheEnd = peopleAges.pop();

// Get element and remove the element at the start
let removedItemAtTheTop = peopleAges.shift();

// Returns the value at the beginning of a collection
let peekedValue = peopleAges.peek();

// Dictionary ----------------------------------------------------------------------------
// A mapping from string keys to values:-

var phoneContacts = new Dictionary({ ahmad: '703001000' });

// Properties
let lengthOfContactsNumbers = phoneContacts.length;

// Methods

// Get value by key
let ahmadsNumber = phoneContacts.get('ahmad');
console.log(ahmadsNumber);

// Set value by key
phoneContacts.set('ahmad', '700000020');
let ahmdsNewPhoneNo = phoneContacts.get('ahmad');
console.log(ahmdsNewPhoneNo);

//Add a value for a given key to a map.
phoneContacts.add('mahmood', '703027381');

//Deletes the value for a given key. Returns whether the key was found and successfully deleted.
let deletedNumber = phoneContacts.delete('ahmad');

// JavaScript Sets ----------------------------------------------------------------------------

let phoneModels = new Set(['Galaxy S7', 'Galaxy S8', 'Galaxy S9']);

// Properties----
let phoneModelsLength = phoneModels.size;

// Methods----
// Add a new phone
phoneModels.add('Galaxy S10 Plus');

// Delete a phone model
phoneModels.delete('Galaxy S7');

// Phone Exists?
let phoneExists = phoneModels.has('Galaxy S7');

// Empty the phones' Set
phoneModels.clear();

// JavaScript's Arrays
let books = ['Java - Complete Guide', 'Introduction to Clean Coding in Python'];

// Properties ----
let lengthOfBooks = books.length;

// Methods ----

// Add new book at the end
books.push('Web Engineering - Code Like A Pro!');

// Add new book at the start
books.unshift('Introduction to C# - A Crash Course');

// Delete Last Book
let deletedBookAtTheEnd = books.pop();

// Delete Last Book
let deletedBookAtTheStart = books.shift();

// JavaScript's Objects

let ahmadsFamily = new Object({
   name: 'Ahmad',
   dob: 2000,
   family: ['Mahmood', 'Ehsan'],
   get age() {
      return new Date().getFullYear() - this.dob;
   }
});

// Get Age
console.log(ahmadsFamily.age);
