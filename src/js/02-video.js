import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log(Player)

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onPlay = function(data) {

    window.localStorage["videoplayer-current-time"] = data.seconds;
    console.log(localStorage["videoplayer-current-time"]);
};


player.on('timeupdate', throttle(onPlay, 1500));

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});




player.setCurrentTime(localStorage["videoplayer-current-time"]).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

