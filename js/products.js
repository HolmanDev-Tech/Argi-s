$(document).ready(function App(){
    window.onload = function(event){
        var app = new App();
        window.app = app;
    }

    App.prototype.processingButton = function(event){

        const btn = event.currentTarget;
        const slide = event.currentTarget.parentNode;
        const track = event.currentTarget.parentNode.querySelector("#slider-body")
        const cardList = track.querySelectorAll('.card')
        
        const cardWith = cardList[0].offsetWidth;
        const listWitdh = slide.offsetWidth;
        const trackWidth = track.offsetWidth;

        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2) * -1)
        btn.dataset.button == "prev" ? prevAction(leftPosition,cardWith,track) : nextAction(leftPosition,trackWidth,listWitdh,cardWith,track)
    }

    let prevAction = (leftPosition, cardWith, track) => {
        if (leftPosition > 0){
            track.style.left = `${-1 * (leftPosition - cardWith)}px`;
        }
    }

    let nextAction = (leftPosition, trackWidth, listWitdh, cardWith, track) => {
        if (leftPosition < (trackWidth - listWitdh)){
            track.style.left = `${-1 * (leftPosition + cardWith)}px`;
        }
    }
})