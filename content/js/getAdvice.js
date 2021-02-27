var loadConfig = () => {
  const url = "https://api.adviceslip.com/advice";
  document.querySelector(".phraseContent a").addEventListener("click", async () => {
    document.querySelector(".initialContainer").style.display = "none";
    try {
      await fetch(url)
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
