let adviceTitle = document.querySelector(".advice__title");
let advieparagraph = document.querySelector(".advice__paragraph");
fetch("https://api.adviceslip.com/advice")
    .then(function (res) {
            return res.json()
    }).then(function (res) {
        let data = res.slip;
        return data
    }).then(function (data) {
        adviceTitle.textContent = `advice #${data.id}`
        advieparagraph.innerHTML = `<q>${data.advice}</q>`;
    }).catch(function (error) {
        console.log("there's an error in",error)
    })
 


