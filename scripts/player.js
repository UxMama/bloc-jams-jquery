//This file declares a class, Player, instantiates it, and assigns it to a global  player variable.
//The Player class contains six methods:
//constructor()
//getDuration()
//getTime()
//playPause()
//skipTo()
//setVolume()
//The constructor() method sets initial values for the currentlyPlaying,  playState, volume, and soundObject properties.
//currentlyPlaying is set to the first item in album.songs.
//The initial playState is "stopped".
//volume is set to the number 80.
//The soundObject instantiates a new buzz.sound object using the  soundFileUrl property of this.currentlyPlaying. The buzz variable doesn't appear to be initialized here, so presumably it's a dependency loaded elsewhere.
//The getDuration() method returns this.soundObject.getDuration(). It appears to be a wrapper for a method available on this.soundObject.
//The getTime() method returns this.soundObject.getTime(). It also appears to be a wrapper for a method available on this.soundObject.
//The playPause() method accepts one parameter, song. It sets it to  this.currentlyPlaying by default. It checks to see if this.currentlyPlaying is different from song, and if so, it:
//Stops the soundObject property.
//Removes the "playing" and "paused" classes from the element property of  this.currentlyPlaying.
//Sets this.currentlyPlaying to the function's parameter, song.
//Changes the playState property to "stopped".
//Instantiates a new sound object using this.currentlyPlaying, which was just updated to song.'
