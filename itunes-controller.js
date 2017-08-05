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
    if(song.kind == 'song'){
    template += `
                  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card">
                        <div class="row">
                            <div class=" col-xs-6">
                                <img src="${song.albumArt}" class="image img-responsive " alt="album art ">
                            </div>
                            <div class="col-xs-6">
                                <div class="title text-center ">
                                    <h4>${song.title}
                                        <h4>
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <div class="replacement ">
                                    <div class="change ">
                                        <h3>${song.artist}</h3>
                                        <h4>${song.collection}</h4>
                                        <h5>Album Cost:${song.price}</h5>
                                        <audio controls>
                                            <source src="${song.preview} " type="audio/mp3 ">
                                        </audio>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                `
    }
  }
  songElem.innerHTML = template

}

document.addEventListener("play", function(evt){
    if(window.$_currentlyPlaying && window.$_currentlyPlaying != evt.target)
    {
        window.$_currentlyPlaying.pause();
    } 
    window.$_currentlyPlaying = evt.target;
}, true);


  
}