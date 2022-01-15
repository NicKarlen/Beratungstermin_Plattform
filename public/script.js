document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems);
});

function ShowButtonBerater(){
    elements = document.getElementsByName('goRight')
    for (ele in elements){
          elements[ele].style.display = 'inline';
    }
}

function HideButtonBerater(){
  elements = document.getElementsByName('goRight')
  for (ele in elements){
        elements[ele].style.display = 'none';
  }
}

function showContent(){
    elements = document.getElementsByClassName("loggedIn")
    for (ele in elements){
          elements[ele].style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems);
});

function minimizeChatbot(){
  document.getElementById('ChatBotLog').style.display = 'block'
  var ele1 = document.getElementById('chatbot');
  var ele2 = document.getElementById('chatbot_textfield')
  if (ele1.style.width == '250px'){
    ele1.style.width = '800px';
  }else{
    ele1.style.width = '250px';
    ele2.style.display = 'block'
  }
}

document.getElementById('ChatBotLog').value = 'ChatBot: How can I help you?\n\n'  
count = 0
function postTextToLog(){
  ele = document.getElementById('ChatBotLog');
  
  ele.value = ele.value + 'Happy customer: '+document.getElementById('icon_prefix2').value +'\n\n'

  if(count == 0){
    ele.value = ele.value + 'ChatBot: I can not understand you. Could you please repeat!' +'\n\n'
  }else if(count == 1){
    ele.value = ele.value + 'ChatBot: Hmm let me think... no still do not understand, sry. Give me one last try' +'\n\n'
  }else if(count == 2){
    ele.value = ele.value + 'ChatBot: Really?' +'\n\n'
  }else if(count == 3){
    ele.value = ele.value + 'ChatBot: Just kidding i do not actually work' +'\n\n'
  }else if(count == 4){
    ele.value = ele.value + 'ChatBot: stop txting with me! I am not your servant ;)' +'\n\n'
  }
  count++
}
