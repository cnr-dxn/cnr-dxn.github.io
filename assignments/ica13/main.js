const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// METHOD 1: Callback hell
// idk what that means 

// METHOD 2: Promise Chain 
// const a1 = alice1.animate(aliceTumbling, aliceTiming);
// a1.finished.then(() => {
//     const a2 = alice2.animate(aliceTumbling, aliceTiming);
//     a2.finished.then(() => {
//         const a3 = alice3.animate(aliceTumbling, aliceTiming);
//         a3.finished.then(() => {
//             console.log("wtf is happening" );
//         });
//     });
// });
 
// METHOD 3: Async/Await 
async function callall() {
    try {
        const a1 = alice1.animate(aliceTumbling, aliceTiming);
        await a1.finished;
        console.log("wtf is happening")
        const a2 = alice2.animate(aliceTumbling, aliceTiming);
        await a2.finished;
        console.log("wtf is happening again")
        const a3 = alice3.animate(aliceTumbling, aliceTiming);
        await a3.finished;
        console.log("wtf is happening a third time")
    }
    catch (error) {
        console.log("this was never taught lol")
    }
}
callall();