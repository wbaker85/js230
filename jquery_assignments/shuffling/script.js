$('body > header').prependTo('body');
$('main > h1').prependTo('body > header');
$('figure').eq(1).appendTo('article');
$('figure').eq(1).appendTo('article');

let $captions = $('figcaption');

let text1 = $captions.eq(0).text();
let text2 = $captions.eq(1).text();

$captions.eq(0).text(text2);
$captions.eq(1).text(text1);