//variable and function definitions

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

//raw text strings

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas', 'Fatty Bolger', 'Bonzu Pippinpaddleopsicopolis', 'Chips Dubbo', 'Avina'];

let insertY = ['the soup kitchen', 'Disneyland', 'the White House', 'the Met', 'Mount Olympos', 'the Forum Romanum', 'Dixie', 'Karnak', 'Shangri-la'];

let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away', 'collapsed into a singularity', 'was smote by lightning from on high', 'blinked out of existence by way of time paradox', 'was punched by Kyle'];

//event listener and partial function definition

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    
    let xItem = randomValueFromArray(insertX);
    console.log(xItem)
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem);
    
    let yItem = randomValueFromArray(insertY);

    newStory = newStory.replace(':inserty:', yItem);

    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertz:', zItem);

    if (customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace('Bob', name)
    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(300 / 14) + ' stone';
        // console.log(weight)
        newStory = newStory.replace('300 pounds', weight)
        let temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
        newStory = newStory.replace('94 fahrenheit', temperature)

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}