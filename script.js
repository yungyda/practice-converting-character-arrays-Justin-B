// Task 1: Decode the following reversed messages
function decodeMessage(message) {
    return message.split('').reverse().join('');
}

// Given reversed messages
const messages = [
    " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC",
    "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB",
    "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY",
    ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ"
];

// Decoding and logging messages
messages.forEach((msg, index) => {
    console.log(`Decoded Message ${index + 1}: ${decodeMessage(msg)}`);
});

// Task 2: Write and reverse new inspirational messages
const myMessages = [
    "Never give up on your dreams!",
    "Success is built with consistency.",
    "Believe in yourself, and nothing is impossible.",
    "Every challenge is an opportunity in disguise."
];

// Reversing and logging messages
myMessages.forEach((msg, index) => {
    console.log(`Reversed Message ${index + 1}: ${msg.split('').reverse().join('')}`);
});
