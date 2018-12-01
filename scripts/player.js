
//1. This file declares a class, Player, instantiates it, and assigns it to a global player variable.
//2.The Player class contains four methods:
  //constructor()
 //playPause()
 //skipTo()
 //3.setVolume()
  //The constructor() method sets initial values for the currentlyPlaying, playState, volume, and soundObject properties.
//currentlyPlaying is set to the first item in album.songs.
  //The initial playState is "stopped".
  //The volume is set to the number 80.
  //The soundObject instantiates a new buzz.sound object using the soundFileUrl property of this.currentlyPlaying. The buzz variable doesn't appear to be initialized here, so presumably it's a dependency loaded elsewhere.
//4.The playPause() method accepts one parameter, song. It sets it to this.currentlyPlaying by default. It checks to see if this.currentlyPlaying is different from song, and if so, it:
  //Stops the soundObject property.
  //Removes the "playing" and "paused" classes from the element property of this.currentlyPlaying.
  //Sets this.currentlyPlaying to the function's parameter, song.
  //Changes the playState property to "stopped".
  //Instantiates a new sound object using this.currentlyPlaying, which was just updated to song.
//5.The skipTo() method has one parameter, percent. It checks if this.playState is different from playing. If it is different, then it will return the sound object set time.

//6.The setVolume has one parameter, percent and it sets the volume property to percent.

//7.The const (constant) player is set to new Player
