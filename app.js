function rock () {
const filterRock =data.filter(song=>{
    
    return song.genre === "rock"
})
console.log('filterRock', filterRock);
map(function (genre){
    return
    `
    <div class = "rockCategory">
        <img src="${genre.image}" class>="images">
        <div>Artist: ${genre.artist}</div>
        <div>Song: ${genre.song}</div>
        
    </div>
    `
})
}

function best () {
const filterBest =data.filter(song=>{
    return song.genre === "best"
})  
console.log('filterBest', filterBest);
map(function (genre){
    return
    `
    <div class = "bestCategory">
        <img src="${genre.image}" class>="images">
        <div>Artist: ${genre.artist}</div>
        <div>Song: ${genre.song}</div>
        
    </div>
    `
})
}








