var loadConfig = () => {
  const url = "https://api.adviceslip.com/advice";
  document.querySelector(".phraseContent a").addEventListener("click", () => {
    document.querySelector(".initialContainer").style.display = "none";
    try {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            return new Error("A requisição falhou")
          }
          if (response.status === 404) {
            return new Error("não encontrou qualquer resultado")
          }
          else {
            return response.json();
          }
        })
        .then(data => {
          document.querySelector(".advice p").innerText = data.slip.advice;
          document.querySelector(".secondContainer").style.display = "flex"
          }
        );
    }
    catch(err) {
      console.log("oops, algo deu errado")
    }
  })
}

loadConfig();
