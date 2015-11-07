var topics = ['Web Developer','Marketer','Learner',];
var topicIndex = 0;
var writingIndex = 0;

$(document).ready(function() {
	if (topicIndex < topics.length - 1) writeNextWord();
});

function writeNextWord() {
	writingIndex = 0;
	writeWord();
	topicIndex++;
	if(topicIndex >= topics.length) topicIndex = 0;
}

function writeWord() {
	writingIndex++;
	if(writingIndex > topics[topicIndex].length) return setTimeout(removeWord, 2000);

	var part = topics[topicIndex].substr(0, writingIndex);
	$('.typing').text(part);

	setTimeout(writeWord, 200);
}

function removeWord() {
	var text = $('.typing').text();
	var newText = text.substr(0, (text.length - 1))
	$('.typing').text(newText);

	if(newText.length <= 0) return setTimeout(writeNextWord, 200);
	setTimeout(removeWord, 200);
}

