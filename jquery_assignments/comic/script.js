let speed = 250;
let delay = 1500;

let $blanks = $('[id^=blind]');

function animate() {
  $blanks.each(function(idx) {
    $(this).delay(delay * (idx + 1)).animate({
      top: `+=${$(this).css('height')}`,
      height: 0,
    }, speed);
  });
}

$('a').on('click', function(event) {
  event.preventDefault();
  $blanks.finish();
  $blanks.removeAttr('style');
  animate();
});

animate();