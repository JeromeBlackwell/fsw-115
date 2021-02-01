var answers = [
    {name: "Labrador Retriever", color: "pink"},
    {name: "blue", color: "green"},
    {name: "Phillipines", color: "purple"},
    {name: "Lucas", color: "gold"},
    {name: "Rosemead California", color: "white"},
    {name: "October 23, 2077", color: "crimson"},
    {name: "Husker", color: "yellow"},
    {name: "George H. W. Bush", color: "orange"},
    {name: "Female Flower", color: "blue"},
    {name: "Thus Spoke Zarathustra", color: "grey"}
]

var answersList = document.getElementById("answers")

for (var i = 0; i < answers.length; i++) {
    answersList.innerHTML += "<li>" + answers[i] + "</li>"
}

// {
//     "response_code": 0,
//     "results": [
//         {
//             "category": "Entertainment: Film",
//             "type": "multiple",
//             "difficulty": "easy",
//             "question": "What breed of dog was Marley in the film &quot;Marley &amp; Me&quot; (2008)?",
//             "correct_answer": "Labrador Retriever",
//             "incorrect_answers": [
//                 "Golden Retriever",
//                 "Dalmatian",
//                 "Shiba Inu"
//             ]
//         },
//         {
//             "category": "Science & Nature",
//             "type": "multiple",
//             "difficulty": "hard",
//             "question": "What is considered the rarist form of color blindness?",
//             "correct_answer": "Blue",
//             "incorrect_answers": [
//                 "Red",
//                 "Green",
//                 "Purple"
//             ]
//         },
//         {
//             "category": "Entertainment: Japanese Anime & Manga",
//             "type": "multiple",
//             "difficulty": "hard",
//             "question": "Which of the following countries does &quot;JoJo&#039;s Bizarre Adventure: Stardust Crusaders&quot; not take place in?",
//             "correct_answer": "Philippines",
//             "incorrect_answers": [
//                 "India",
//                 "Pakistan",
//                 "Egypt"
//             ]
//         },
//         {
//             "category": "Entertainment: Video Games",
//             "type": "multiple",
//             "difficulty": "medium",
//             "question": "Which of the following characters were considered for inclusion in Super Smash Bros. Melee?",
//             "correct_answer": "Lucas",
//             "incorrect_answers": [
//                 "Mega Man",
//                 "Meta Knight",
//                 "Diddy Kong"
//             ]
//         },
//         {
//             "category": "Geography",
//             "type": "multiple",
//             "difficulty": "hard",
//             "question": "Where is the fast food chain &quot;Panda Express&quot; headquartered?",
//             "correct_answer": "Rosemead, California",
//             "incorrect_answers": [
//                 "Sacramento, California",
//                 "Fresno, California",
//                 "San Diego, California"
//             ]
//         },
//         {
//             "category": "Entertainment: Video Games",
//             "type": "multiple",
//             "difficulty": "hard",
//             "question": "In the Fallout series, on which date did The Great War happen?",
//             "correct_answer": "October 23rd, 2077",
//             "incorrect_answers": [
//                 "May 15th, 2058",
//                 "December 14th, 2069",
//                 "November 5th, 2076"
//             ]
//         },
//         {
//             "category": "Entertainment: Television",
//             "type": "multiple",
//             "difficulty": "hard",
//             "question": "What was the callsign of Commander William Adama in Battlestar Galactica (2004)?",
//             "correct_answer": "Husker",
//             "incorrect_answers": [
//                 "Starbuck",
//                 "Apollo",
//                 "Crashdown"
//             ]
//         },
//         {
//             "category": "History",
//             "type": "multiple",
//             "difficulty": "medium",
//             "question": "Which U.S. President was in office when the Gulf War began?",
//             "correct_answer": "George H. W. Bush",
//             "incorrect_answers": [
//                 "Richard Nixon",
//                 "George W. Bush ",
//                 "Ronald Regan"
//             ]
//         },
//         {
//             "category": "Science & Nature",
//             "type": "multiple",
//             "difficulty": "medium",
//             "question": "Which portion of the Marijuana plant produces the psychoactive substance known as THC?",
//             "correct_answer": "Female Flower",
//             "incorrect_answers": [
//                 "Leaves",
//                 "Male Flower",
//                 "Root Ball"
//             ]
//         },
//         {
//             "category": "Entertainment: Japanese Anime & Manga",
//             "type": "multiple",
//             "difficulty": "hard",
//             "question": "In the first episode of Yu-Gi-Oh: Duel Monsters, what book is Seto Kaiba seen reading at Domino High School?",
//             "correct_answer": "Thus Spoke Zarathustra",
//             "incorrect_answers": [
//                 "Beyond Good and Evil",
//                 "The Republic",
//                 "Meditations"
//             ]
//         }
//     ]
// }