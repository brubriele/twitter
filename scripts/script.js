document.getElementById('btn').addEventListener('click', getMsgForm)
document.getElementById('input').addEventListener('input', ()=> {
  ableBtn();
  contador();
  autoAjusteArea();
})

function autoAjusteArea() {
  const area = document.getElementById('input').value;
  area.style.height = 'auto';
  area.style.height = area.scrollHeight + 'px';

}

function getMsgForm() {
  let horas = document.createElement('p');
  horas.innerHTML = getDate()
  const novaMensagem = document.forms["tweetform"]["tweetmsg"].value;
  let tweet = document.createElement('p');
  tweet.innerHTML = novaMensagem;
  document.getElementById('mural').appendChild(horas);
  document.getElementById('mural').appendChild(tweet);


  document.forms["tweetform"]["tweetmsg"].value = '';
  btn.disabled = true;
  btn.style.cursor = 'not-allowed';
  event.preventDefault()
}

function ableBtn() {
  const btn = document.getElementById('btn');
  const textArea = document.forms["tweetform"]["tweetmsg"].value;
  if (textArea === '') {
    btn.disabled = true;
  } else {
    btn.disabled = false;
    btn.style.cursor = 'pointer';
  }
}

  function contador (){
    const textArea = document.forms["tweetform"]["tweetmsg"].value;
    const btn = document.getElementById('btn');
    let conta = 140 - textArea.length;
    let negativeArea  =  document.getElementById('contador');
    document.getElementById('contador').textContent = conta;
  
    if (conta < 0) {
      negativeArea.style.color = 'red';
      btn.disabled = true;
      btn.style.cursor = 'not-allowed';
    } 
    else if (conta >= 10 && conta < 20) {
      negativeArea.style.color = '#FFAD1F';
    }
    else if (conta < 10) {
      negativeArea.style.color = '#E0245E';
    }
    else if (conta >= 0) {
      negativeArea.style.color = 'gray';
    } 
  }


  function getDate(){
    let date = new Date;
    let horas = date.getHours();
    let min = date.getMinutes();
    let horaFinal = horas + ":" + min;
    // console.log(horaFinal)
    
    if (horas < 10){
      horaFinal = horas + '0' + ":" + min;
    }
    else if (min < 10) {
      horaFinal = horas + ":" + '0' + min;
    }
    else if (horas < 10 && min < 10){
      horaFinal = horas + '0' + ":" + '0' + min;
    }
    return horaFinal
    }

