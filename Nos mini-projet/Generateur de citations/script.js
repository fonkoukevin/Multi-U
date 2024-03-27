const quotes = [
    {
      text: "Le patriotisme, c'est aimer son pays. Le nationalisme, c'est détester celui des autres.",
      author: "Charles De Gaulle"
    },
    {
      text: "La fin de l'espoir est le commencement de la mort.",
      author: "Charles De Gaulle"
    },
    {
      text: "La valeur d'un homme tient dans sa capacité à donner et non dans sa capacité à recevoir.",
      author: "Albert Einstein"
    },
    {
      text: "Une lecture amusante est aussi utile à la santé que l'exercice du corps.",
      author: "Emmanuel Kant"
    },
    {
      text: "La morale n'est donc pas à proprement parler la doctrine qui nous enseigne comment nous devons nous rendre heureux, mais comment nous devons nous rendre dignes du bonheur.",
      author: "Emmanuel Kant"
    },
    {
      text: "Ce n'est pas la conscience des hommes qui déterminent leur existence, c'est au contraire leur existence sociale qui détermine leur conscience.",
      author: "Karl Marx"
    },
    {
      text: "Toute classe qui aspire à la domination doit conquérir d'abord le pouvoir politique pour représenter à son tour son intérêt propre comme étant l'intérêt général.",
      author: "Karl Marx"
    },
    {
      text: "Nous ne sommes jamais aussi mal protégés contre la souffrance que lorsque nous aimons.",
      author: "Sigmund Freud"
    },
    {
      text: "Au fond, personne ne croit à sa propre mort, et dans son inconscient, chacun est persuadé de son immortalité.",
      author: "Sigmund Freud"
    },
    {
      text: "Tout refus de communiquer est une tentative de communication ; tout geste d'indifférence ou d'hostilité est appel déguisé.",
      author: "Albert Camus"
    },
    {
      text: "Il n'y a qu'un problème philosophique vraiment sérieux : c'est le suicide. Juger que la vie vaut ou ne vaut pas la peine d'être vécue, c'est répondre à la question fondamentale de la philosophie.",
      author: "Albert Camus"
    },
    {
      text: "Ne demandez jamais quelle est l'origine d'un homme ; interrogez plutôt sa vie et vous saurez ce qu'il est.",
      author: "Abd El-Kader"
    },
    {
      text: "Le savant est l'homme par lequel s'opère facilement la distinction entre la franchise et le mensonge dans les paroles, entre la vérité et l'erreur dans les convictions entre la beauté et la laideur dans les actes.",
      author: "Abd El-Kader"
    },
    {
      text: "On passe une moitié de sa vie à attendre ceux qu'on aimera et l'autre moitié à quitter ceux qu'on aime.",
      author: "Victor Hugo"
    },
    {
      text: "On ne souffre jamais que du mal que nous font ceux qu'on aime. Le mal qui vient d'un ennemi ne compte pas.",
      author: "Victor Hugo"
    },
    {
      text: "Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.",
      author: "Confucius"
    },
    {
      text: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
      author: "Albert Einstein"
    },
    {
      text: "L'éducation est l'arme la plus puissante que vous pouvez utiliser pour changer le monde.",
      author: "Nelson Mandela"
    },
    {
      text: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
      author: "Winston Churchill"
    }
  ];
  
  const text = document.getElementById("text");
  const author = document.getElementById("author");
  const newQuoteButton = document.getElementById("new-quote");
  
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  function updateQuote() {
    const quote = getRandomQuote();
    text.innerHTML = quote.text;
    author.innerHTML = "— " + quote.author;
  }
  
  updateQuote();
  
  newQuoteButton.addEventListener("click", updateQuote);
  