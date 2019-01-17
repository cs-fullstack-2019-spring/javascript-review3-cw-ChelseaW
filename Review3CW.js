

function main()
{
    //p1();
    p2();
}


// Put the start of your program in a main function.
// Create a loop that takes user input and put it in an array.
//     Once the user quits, print all items in the array.
//     DO NOT print the array, print the items/elements in the array.
// function p1()
// {
//     var wordList = [];
//     while (true)
//     {
//       var userInput = prompt("Enter a word:");
//       if(userInput == "q"){
//           break;
//       }
//       wordList.push(userInput);
//
//     }
//     console(wordList);
//
// }
// main();
//     var blankMan =
//     {
//         name: "BlankMan",
//         genre: "Comedy",
//         rating:10,
//     };
// var allMovies =
//     {
//         {name: "BlankMan", genre: "Comedy", rating: 2}
//         {name: "IT", genre: "Horror", rating: 5},
//         {name: "Equalizer", genre: "Action", rating:8}
//     }
//
//
// allMovies.forEach(printRating);
//     function printRating(eachElementInOurArray)
//     {
//         console.log(eachElementInOurArray);
//     }
//         }
//     if()
//     {
//         var userInput = prompt('');
//         while(userInput != 'q')
//         {
//         }
//     }
//
//     else
//     {
//         console.log()
//     }
// }// allMovies[2].changeRating =
//     //     function(ratingToChangeItTo)
//     //     {
//     //         this.rating = ratingToChangeItTo;
//     //     }
//     //     allMovies[2].changeRating =
//     //         console.log(allMovies);

// Problem 2
// Put the start of your program in a main function.
// // Create a function that can translate five English words into Spanish words.
// //     You should be able to call your function from your main function.


function p2() {
    var userInput = (prompt("Enter your spanish word:"));
    switch (userInput) {
        case 'dog':
            console.log('Perro');
            break;
        case 'cat':
            console.log('Gato');
            break;
        case 'pizza':
            console.log('Couche');
            break;
        case 'elephant':
            console.log('Elefante');
            break;
        case 'table':
            console.log('Mesa');
            break;

        // default:


    }

}
main();
