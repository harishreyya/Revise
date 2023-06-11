let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};


let work = {
    jobTitle: 'JavaScript Developer',
    location: 'USA'
};

let employee = {
    ...person,
    ...work
};//combining two objects

console.log(employee);
// output
// {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     ssn: '123-456-2356',
//     jobTitle: 'JavaScript Developer',
//     location: 'USA'
//   }

// -------------------------------

// If objects have a property with the same name, then the right-most object property overwrites the previous one. For example:

let job = {
    jobTitle: 'JavaScript Developer',
    country: 'USA'
};

let location = {
    city: 'London',
    country: 'England'
};

let remoteJob = {
    ...job,
    ...location
};

console.log(remoteJob);
// output
//   {
//     jobTitle: 'JavaScript Developer',
    // country: 'England',  //overlaping country USA to England
//     city: 'London'
//   }


// ------------------using Object.assign(object-1, object-2);-----------------

let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356',
    contact: {
        phone: '408-989-8745',
        email: 'john.doe@example.com'
    }
};


let job1 = {
    jobTitle: 'JavaScript Developer',
    country: 'USA'
};


let employee1 = Object.assign(person1, job1);
console.log(employee1);
// output
// {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,
//     ssn: '123-456-2356',
//     contact: { phone: '408-989-8745', email: 'john.doe@example.com' },
//     jobTitle: 'JavaScript Developer',
//     country: 'USA'
//   }