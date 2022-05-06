let firstRow, secondRow;

firstRow = $("#first-row > .image-row");
secondRow = $("#second-row > .image-row");

function onClickSliderRight() {
    slideRight(firstRow);
    slideRight(secondRow);
}

function onClickSliderLeft() {
    slideLeft(firstRow);
    slideLeft(secondRow);
}

function slideRight(sliderRow) {
    const firstElement = sliderRow.children().first();
    firstElement.hide().appendTo(sliderRow).animate({ width: 'toggle' }, "slow");
}

function slideLeft(sliderRow) {
    const lastElement = sliderRow.children().last();
    lastElement.animate({ width: 'toggle' }, { duration: "slow", complete: () => { lastElement.show().prependTo(sliderRow) } });
}