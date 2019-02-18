
function getMsgForm() {
    const x = document.forms["tweetform"]["tweetmsg"].value;
    document.getElementById("fisrtTwt").innerHTML = x;
    event.preventDefault()
  }




// próximo passo

// var newParagraph = document.createElement('p');
// var paragraphText = document.createTextNode('Novo parágrafo.');
// newParagraph.appendChild(paragraphText);

// // Armazenamos em uma varipavel o pai e em outra variável o segundo parágrafo
// var container = document.getElementById('container');
// var secondParagraph = container.getElementsByTagName('p')[1];

// // Agora inserimos
// container.insertBefore(newParagraph, secondParagraph);