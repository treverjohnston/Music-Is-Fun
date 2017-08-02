function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
function drawSongs(artist){
  let template = ''
  let songElem = document.getElementById('songs')

  for (var i = 0; i < artist.length; i++) {
    var song = artist[i];
    template += `
           <div class="col-xs-12 col-sm-6 col-md-4">
              <div class = "card">
                <img src="${song.albumArt}" class = "image img-responsive" alt="album art">
                  <div class = "title text-center">
                    <h4>${song.title}<h4>
                  </div>
                <div class="replacement">
                    <div class="change">
                          <h4>${song.artist}</h4>
                          <p>${song.collection}</p>
                          <p>Album Cost:${song.price}</p>
                          <audio controls> 
                            <source = src="${song.preview}" type ="audio/mp3">
                          </audio>
                    </div>
                </div>
              </div>
            </div> 
                `
    
  }
  songElem.innerHTML = template

}

    // <div class="card well col-xs-4">
    //               <img src="${song.albumArt}" class= "img-responsive img" alt="album art">
    //                 <div class="text">
    //                     <h2>${song.title}</h2>
    //                     <h3>${song.artist}</h3>
    //                     <h4>${song.collection}</h4>
    //                     <h4>Album Cost:${song.price}</h4>
    //                     <a href="{song.preview}"><h4>Preview</h4></a>
    //                 </div>
    //              </div>


  
}