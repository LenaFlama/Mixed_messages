const random = word => {
    return word[Math.floor(Math.random() * word.length)]
};

let firstPhrase = ['Did you know?', 'Bad luck!', 'Good luck with that!', 'Better watch out!', 'Did you hear?'];
let friendName = ['Raul', 'Lena', 'Angi', 'Laura', 'Ionut'];
let message = ['does not sleep. He/She waits.', 'counted to infinity... twice.', 'stands faster than anyone can run.', 'can kill two stones with one bird.', 'can cook minute rice in 30 seconds.', 'can build a snowman out of rain.', 'is the reason why Waldo is hiding.', `Before he forgot a gift for ${random(friendName)}, Santa Claus was real.`];

let randomMess = [random(message)];
let newMess = [message.pop()];

if (friendName.some(el => randomMess[0].includes(el)) === true) {
    console.log(random(firstPhrase), random(newMess));
} else {
    console.log(random(firstPhrase),random(friendName), random(message));
}