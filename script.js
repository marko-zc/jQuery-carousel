
$( document ).ready(function() {
    
const firstRow = $(".first-row > .image-row");
const secondRow = $(".second-row > .image-row");

let throttlePause = false;

$(".right-arrow").click(function() {
    if (throttlePause) return;
    throttlePause = true;
    slideRight(firstRow);
    slideRight(secondRow);
});

$(".left-arrow").click(function() {
    if (throttlePause) return;
    throttlePause = true;
    slideLeft(firstRow);
    slideLeft(secondRow);
});

function slideRight(sliderRow) {
    const firstElement = sliderRow.children().first();
    firstElement.hide().appendTo(sliderRow).animate(
        { width: 'toggle' },
        {
            duration: "slow",
            complete: () => {
                throttlePause = false;
            }
        }
    );
}

function slideLeft(sliderRow) {
    const lastElement = sliderRow.children().last();
    lastElement.animate(
        { width: 'toggle' }, 
        {
            duration: "slow",
            complete: () => {
                lastElement.prependTo(sliderRow).show();
                throttlePause = false;
            }
        }
    );
}

});