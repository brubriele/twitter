document.getElementById('btn').addEventListener('click', getMsgForm)
document.getElementById('input').addEventListener('input', ableBtn)
document.getElementById('input').addEventListener('input', contador)


function getMsgForm() {
  const novaMensagem = document.forms["tweetform"]["tweetmsg"].value;
  let tweet = document.createElement('p');
  let text = document.createTextNode(novaMensagem);
  tweet.appendChild(text);
  document.getElementById('mural').appendChild(tweet);
  // document.getElementById("fisrtTwt").innerHTML = novaMensagem;
  document.forms["tweetform"]["tweetmsg"].value = '';
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

// function contador (){
//     const textArea = document.forms["tweetform"]["tweetmsg"].value;
//     const btn = document.getElementById('btn');
//     let conta = 140 - textArea.length;
//     document.getElementById('contador').textContent = conta;
  
//     if (conta < 0) {
//       let negativeArea  =  document.getElementById('contador');
//       negativeArea.style.color = 'red';
//       btn.disabled = true;
//     } 
//     else if (conta >= 0) {
//       let negativeArea  =  document.getElementById('contador');
//       negativeArea.style.color = 'gray';
//     } 
    
//   }

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


//   Se você passar os 140 caracteres, desative o botão.
// Se você passar os 120 caracteres, mostre o contador com outra cor.
// Se você passar os 130 caracteres, mostre o contador com outra cor.
// Se você passar os 140 caracteres, mostre o contador em negativo.

// próximo passo

// var newParagraph = document.createElement('p');
// var paragraphText = document.createTextNode('Novo parágrafo.');
// newParagraph.appendChild(paragraphText);

// // Armazenamos em uma varipavel o pai e em outra variável o segundo parágrafo
// var container = document.getElementById('container');
// var secondParagraph = container.getElementsByTagName('p')[1];

// // Agora inserimos
// container.insertBefore(newParagraph, secondParagraph);

// function myFunction() {
//     var x = document.createElement("INPUT");
//     x.setAttribute("type", "text");
//     x.setAttribute("value", "Hello World!");
//     document.body.appendChild(x);
//   }


// contador

// function myFunction() {
//   var x = document.getElementById("input").value;
//   document.getElementById("contador").innerHTML = 144 - x;
// }

