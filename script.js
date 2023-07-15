{/* <div class="joke" id="joke">Awesome Joke is Loading ...</div>
        <button id="jokebtn" class="btn">Next Joke</button> */}

// Promises - either Fulfilled or Rejected
// GET https://icanhazdadjoke.com/



const jokes = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokebtn');

// Using Prommises 
const generateJokes = () => {

    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }
    fetch('https://icanhazdadjoke.com', setHeader)
        .then((res) => res.json())
        .then((data) => {
            jokes.innerHTML = data.joke;
        }).catch((error) => {
            console.log(error);
        }
        )
}

jokebtn.addEventListener('click', generateJokes);
generateJokes();


// Using async await  -> asnyc way of writing the code & await is used to wait karo
// const generateJokes = async () => {

//     try {
//         const setHeader = {
//             headers: {
//                 Accept: "application/json"
//             }
//         }

//         const res = await fetch('https://icanhazdadjoke.com', setHeader)
//         const data = await res.json();
//         jokes.innerHTML = data.joke;

//     } catch (err) {
//         console.log(`the error is ${err}`);
//     }


// }
