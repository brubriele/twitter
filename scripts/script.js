
function getMsgForm() {
    const x = document.forms["tweetform"]["tweetmsg"].value;
    document.getElementById("fisrtTwt").innerHTML = x;
    event.preventDefault()
  }

  function activeDiv(){
    const div = document.getElementById("fisrtTwt");
    div.style.display = "block";
    }


// próximo passo

var newYork = moment.tz("2014-06-01 12:00", "America/New_York");
console.log(newYork)

// var newParagraph = document.createElement('p');
// var paragraphText = document.createTextNode('Novo parágrafo.');
// newParagraph.appendChild(paragraphText);

// // Armazenamos em uma varipavel o pai e em outra variável o segundo parágrafo
// var container = document.getElementById('container');
// var secondParagraph = container.getElementsByTagName('p')[1];

// // Agora inserimos
// container.insertBefore(newParagraph, secondParagraph);