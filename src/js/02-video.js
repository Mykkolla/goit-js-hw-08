import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onPlay = function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
    // window.localStorage["videoplayer-current-time"] = data.seconds;
    // console.log(localStorage["videoplayer-current-time"]);
 
};

const time = localStorage.getItem("videoplayer-current-time");
const timePars = JSON.parse(time);
console.log(timePars); 

player.on('timeupdate', throttle(onPlay, 1500));




player.setCurrentTime(timePars).then(function(seconds) {
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

