import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onPlay = function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
    // window.localStorage["videoplayer-current-time"] = data.seconds;
    // console.log(localStorage["videoplayer-current-time"]);
 
};


function geCurrentTime() {
const time = localStorage.getItem("videoplayer-current-time");
if (time) {
    const timePars = JSON.parse(time);
    
    return timePars;
}
}
// const time = localStorage.getItem("videoplayer-current-time");
console.log(geCurrentTime())

player.on('timeupdate', throttle(onPlay, 1500));




player.setCurrentTime(geCurrentTime()).then(function(seconds) {
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

