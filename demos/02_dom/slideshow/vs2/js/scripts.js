/*
 * Page-specific scripts
 *
 * @author Rogier van der Linde <rogier.vanderlinde@odisee.be>
 */

// shows large image when lnk has been clicked
var showImage = function(lnk) {
    // find thumb image
    var img = lnk.querySelector('img');

    // find big image
    var photoBig = document.getElementById('photoBig');
    photoBig.src = img.getAttribute('data-src-l');
    photoBig.alt = img.alt;
}

// start scripts
window.addEventListener('load', function() {
    var imglinks = document.querySelectorAll('#thumbsmenu li>a');
    for (var i = 0; i < imglinks.length; i++) {
        imglinks[i].addEventListener('click', function(e) {
            // prevent default
            e.preventDefault();

            // show image
            showImage(this);
        });
    }
});
