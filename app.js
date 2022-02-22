// Exercise 1

// function filter(numbers) {
//     let results = [];
//     for (const number of numbers) {
//         if (number % 2 != 0) {
//             results.push(number);
//         }
//     }
//     return results;
// }
// let numbers = [1, 2, 4, 3, 5, 6];
// console.log(filter(numbers));



// Exercise 2

// function isOdd(number) {
//     return number % 2 != 0;
// }


// function filter(numbers, fn) {
//     let results = [];
//     for (const number of numbers) {
//         if (fn(number)) {
//             results.push(number);
//         }
//     }
//     return results;
// }
// let numbers = [1, 2, 4, 7, 3, 5, 6];
// console.log(filter(numbers, isOdd));



// Exercise 3

// function isOdd(number) {
//     return number % 2 != 0;
// }
// function isEven(number) {
//     return number % 2 == 0;
// }

// function filter(numbers, fn) {
//     let results = [];
//     for (const number of numbers) {
//         if (fn(number)) {
//             results.push(number);
//         }
//     }
//     return results;
// }
// let numbers = [1, 2, 4, 7, 3, 5, 6];

// console.log(filter(numbers, isOdd));
// console.log(filter(numbers, isEven));



// Exercise 4 Anonymous

// function filter(numbers, callback) {
//     let results = [];
//     for (const number of numbers) {
//         if (callback(number)) {
//             results.push(number);        
//     }
// }
// return results;
// }

// let numbers = [1, 2, 4, 7, 3, 5, 6];

// let oddNumbers = filter(numbers, function (number) {
//     return number % 2 != 0;
// });
// console.log(oddNumbers);



// Exercise 5 Arrow function

// function filter(numbers, callback) {
//     let results = [];
//     for (const number of numbers) {
//       if (callback(number)) {
//         results.push(number);
//       }
//     }
//     return results;
//   }
  
//   let numbers = [1, 2, 4, 7, 3, 5, 6];
  
//   let oddNumbers = filter(numbers, (number) => number % 2 != 0);
  
//   console.log(oddNumbers);



// Exercise 6 Asychronous

// function download(url) {
//     //...
// }

// function process(picture) {
//     //...
// }

// download(url);
// process(picture);


// function download(url) {
//     setTimeout(() => {
//         // script to download the picture here
//         console.log(`Downloading ${url} ...`);
//     },1000);
// }

// function process(picture) {
//     console.log(`Processing ${picture}`);
// }

// let url = 'https://www.javascripttutorial.net/pic.jpg';

// download(url);
// process(url);

// function download(url, callback) {
//     setTimeout(() => {
//         // script to download the picture here
//         console.log(`Downloading ${url} ...`);
        
//         // process the picture once it is completed
//         callback(url);
//     }, 1000);
// }

// function process(picture) {
//     console.log(`Processing ${picture}`);
// }

// let url = 'https://wwww.javascripttutorial.net/pic.jpg';
// download(url, process);



// Define as an anonymous function

// function download(url, callback) {
//     setTimeout(() => {
//         // script to download the picture here
//         console.log(`Downloading ${url} ...`);
//         // process the picture once it is completed
//         callback(url);

//     }, 1000);
// }

// let url = 'https://www.javascripttutorial.net/pic.jpg';
// download(url, function(picture) {
//     console.log(`Processing ${picture}`);
// }); 

// Exercise 7

// function download(url, success, failure) {
//     setTimeout(() => {
//         console.log(`Downloading the picture from ${url} ...`);
//         !url ? failure(url) : success(url);
//     }, 1000);
// }

// download(
//     '',
//     (url) => console.log(`Processing the picture ${url}`),
//     (url) => console.log(`The '${url}'is not valid`)
// );

// Exercise 8 Nesting and Callback Hell

// function download(url, callback) {
//     setTimeout(() => {
//         console.log(`Downloading ${url}...`);
//         callback(url);
//     }, 1000);
// }

// const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
// const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
// const url3 = 'https://www.javascripttutorial.net/pic3.jpg';

// download(url1, function (url) {
//   console.log(`Processing ${url}`);
//   download(url2, function (url) {
//     console.log(`Processing ${url}`);
//     download(url3, function (url) {
//       console.log(`Processing ${url}`);
//     });
//   });
// });

