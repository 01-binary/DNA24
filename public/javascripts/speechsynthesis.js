var message = new SpeechSynthesisUtterance();
var voices = speechSynthesis.getVoices();
message.lang = 'ko-KR';
message.voice = voices[0];

function speak(text) {
  if (typeof SpeechSynthesisUtterance === 'undefined' || typeof speechSynthesis === 'undefined') {
    alert('This browser does not support speech API');
    return;
  }
  message.text = text;
  speechSynthesis.speak(message);
}
