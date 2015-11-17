var topics = ['Placeholder','Developer','Marketer','Learner'], topicIndex = 0, writingIndex = 0;

$(document).ready(function() {
    writeNextWord();
 
});

//selects the next word in array to write
function writeNextWord() {
	writingIndex = 0;
	if(topicIndex == topics.length -1)  return;
	writeWord();
	topicIndex++;
	if(topicIndex >= topics.length) topicIndex = 1;
    
   
}

//writes each letter of word
function writeWord() {
	//go to next letter
	writingIndex++;
	
	//after last letter, remove the word
	if(writingIndex > topics[topicIndex].length) return setTimeout(removeWord, 1500);
	
	//applies typing effect
	var part = topics[topicIndex].substr(0, writingIndex);
	$('.typing').text(part);
	
	//speed the next letter is typed
	setTimeout(writeWord, 100);
}

function removeWord() {
    if(topicIndex == topics.length -1)  return;
	//grab word 
	var text = $('.typing').text();
	
	//applies backspace effect
	var newText = text.substr(0, (text.length - 1));
	$('.typing').text(newText);

	//once the word is deleted, write next word in array
	if(newText.length <= 0 ) return setTimeout(writeNextWord, 450);
	
	//remove the next letter
	setTimeout(removeWord, 100);
}

$('.typing').after('<span class=\'blinking\'>|</span>');
