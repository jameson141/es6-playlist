const containerMusic = document.querySelector('#musicContainer');
var infoArray = [];

for(var i=0; i < data.length; i++) {
    let temp = document.createElement('div');
    temp.innerHTML = `
        <img src=${data[i].image}>
        <h2> ${data[i].song} </h2>
        <h3> ${data[i].artist} <h3>
        <h4> ${data[i].genre} </h3>
    `;
    temp.classList.add('Containers');
    infoArray.push(temp);
    containerMusic.appendChild(temp);
}

