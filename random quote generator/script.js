const qoute = document.getElementById("qoute");
const generate = document.getElementById("submit");
const author = document.getElementById("author");
generate.addEventListener('click',() => {
    generateQoute();
});

async function generateQoute() {
    fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((qoutes) => {
      console.log(qoutes);
      renderQoute(qoutes);
    })
    .catch((error) => {
        throw error;
    });
}

function renderQoute(qoutes) {
    let randNum = Math.floor(Math.random()*10);
    qoute.innerText = qoutes?.[randNum]?.text;
    author.innerText = `~${qoutes?.[randNum]?.author?.split(",")?.[0]}`;
}

