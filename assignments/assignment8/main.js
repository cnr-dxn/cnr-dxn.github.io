const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// --------------------------

let storyText = `It was a Thursday, and :insertx: was in his Web recitation class. 
                 :insertx: was eager to leave, as he had plans to visit the :insertY:
                 after they left, and it felt like he had worked on this assignment for
                 at least 94 hours at that point. Nevertheless, he chugged through the assignment and
                 was confident that he had finished it. When he was about to turn 
                 it in, however, he noticed that they had forgot to change the 
                 story at ALL which was like HALF of the assignment. He promply felt like
                 he had :insertZ:, as he was dissapointed with himself that he couldn't read
                 a simple rubric. If the TA Eli knew he surely would've laughed because 
                 :insertX: apparently can't read a simple set of instructions.`

let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']

let insertY = ['the soup kitchen', 'Disneyland', 'the White House']

let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']

randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    // storyText = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. Bob saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`
    storyText = `It was a Thursday, and ${xItem} was in his Web recitation class. 
                ${xItem} was eager to leave, as he had plans to visit the ${yItem}
                after they left, and it felt like he had worked on this assignment for
                at least 94 hours at that point. Nevertheless, he chugged through the assignment, and finally
                was confident that he had finished it. When he was about to turn 
                it in, however, he noticed that they had forgot to change the 
                story at ALL which was like HALF of the assignment. He promply felt like
                he had ${zItem}, as he was disappointed with himself that he couldn't read
                a simple rubric. If the TA Eli knew he surely would've laughed because 
                ${xItem} apparently can't read a simple set of instructions. ${xItem} then spent 
                300 more hours working on it because he couldn't come up with a story to 
                save his life.`

    

    var name = ''
    if(customName.value !== '') {
        name = customName.value;
        // storyText = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`
    }

    else {
        name = 'Eli'
    }

    storyText = `It was a Thursday, and ${xItem} was in his Web recitation class. 
                ${xItem} was eager to leave, as he had plans to visit the ${yItem}
                after they left, and it felt like he had worked on this assignment for
                at least 94 hours at that point. Nevertheless, he chugged through the assignment, and finally
                was confident that he had finished it. When he was about to turn 
                it in, however, he noticed that they had forgot to change the 
                story at ALL which was like HALF of the assignment. He promply felt like
                he had ${zItem}, as he was disappointed with himself that he couldn't read
                a simple rubric. If the TA ${name} knew he surely would've laughed because 
                ${xItem} apparently can't read a simple set of instructions. ${xItem} then spent 
                300 more hours working on it because he couldn't come up with a story to 
                save his life.`


    if(document.getElementById("uk").checked) {
        const weight = Math.round(300.00 * 0.071428571428571);
        const temperature =  Math.round((94.0 - 32.0) * (5.0/9.0));
        // storyText = `It was ${temperature} centigrade outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs ${weight} stone, and it was a hot day.`
        storyText = `It was a Thursday, and ${xItem} was in his Web recitation class. 
                    ${xItem} was eager to leave, as he had plans to visit the ${yItem}
                    after they left, and it felt like he had worked on this assignment for
                    at least ${weight} hours at that point. Nevertheless, he chugged through the assignment, and finally
                    was confident that he had finished it. When he was about to turn 
                    it in, however, he noticed that they had forgot to change the 
                    story at ALL which was like HALF of the assignment. He promply felt like
                    he had ${zItem}, as he was disappointed with himself that he couldn't read
                    a simple rubric. If the TA ${name} knew he surely would've laughed because 
                    ${xItem} apparently can't read a simple set of instructions. ${xItem} then spent 
                    ${temperature} more hours working on it because he couldn't come up with a story to 
                    save his life.`
    }

    story.textContent = storyText;
    story.style.visibility = 'visible';
    console.log(storyText)
}