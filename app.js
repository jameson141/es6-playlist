function rockSection () {
const filterRock =data.filter(song=>{
    
    return song.genre === "rock"
})

.map((songs) => {
    console.log('rock', song);
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

function bestSection () {
const filterBest =data.filter(song=>{
    return song.genre === "best"
})  

.map((songs) => {
    console.log('best', musical);
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








