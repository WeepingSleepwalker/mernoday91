// findObjectsFilter(searchFor, itemsArr)

// given a 'search for' object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor1 = {
    firstName: "Bob",
    age: 31
};

// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

const searchFor2 = {
  lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
  ];

const findObjectsFilter = (searchObj, itemsArr) => {
    const feild1 = Object.values(searchObj);
    const feild2 = Object.entries(searchObj);
    console.log(feild1);
    console.log(feild2);
  return itemsArr;  
}
console.log(findObjectsFilter(searchFor1, items))


const findObjFilter = (search, items) => {
    let filteredArray = [],
        isHere = false
    const searchPairs = Object.entries(search);
    items.map(
        item => {
            for (pair of searchPairs) {
                if (item.hasOwnProperty(pair[0])) {
                    if (item[pair[0]] === pair[1]){
                        isHere = true;
                        continue
                    }
                    isHere = false;
                }
            }
            if (isHere === true) {
                filteredArray.push(item);
            }
        }
    )
    console.log(filteredArray);
}