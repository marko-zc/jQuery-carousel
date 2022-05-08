let firstRow, secondRow;
let throttlePause = false;

firstRow = $("#first-row > .image-row");
secondRow = $("#second-row > .image-row");

function onClickSliderRight() {
    if (throttlePause) return;
    throttlePause = true;
    slideRight(firstRow);
    slideRight(secondRow);
}

function onClickSliderLeft() {
    if (throttlePause) return;
    throttlePause = true;
    slideLeft(firstRow);
    slideLeft(secondRow);
}

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