let $nextBtn = $('.next');
let $prevBtn = $('.prev');

let $slider = $('.slider');
let $sliderList = $slider.find('.list');
let $thumbnail = $slider.find('.thumbnail');
let $thumbnailItems = $thumbnail.find('.item');

$thumbnail.append($thumbnailItems.eq(0));

// Function for next button
$nextBtn.on('click', function() {
    moveSlider('next');
});

// Function for prev button
$prevBtn.on('click', function() {
    moveSlider('prev');
});

function moveSlider(direction) {
    let $sliderItems = $sliderList.find('.item');
    let $thumbnailItems = $thumbnail.find('.item');

    if (direction === 'next') {
        $sliderList.append($sliderItems.eq(0));
        $thumbnail.append($thumbnailItems.eq(0));
        $slider.addClass('next');
    } else {
        $sliderList.prepend($sliderItems.last());
        $thumbnail.prepend($thumbnailItems.last());
        $slider.addClass('prev');
    }

    $slider.one('animationend', function () {
        if (direction === 'next') {
            $slider.removeClass('next');
        } else {
            $slider.removeClass('prev');
        }
    });
}
