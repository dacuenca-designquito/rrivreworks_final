/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*
Scrolls the caroussel, with a clic of the photo thumbnail carousel
*/
function mycarousel_initCallback(carousel) {
    jQuery('.view-photos-in-the-album img').bind('click', function() {
        carousel.scroll(jQuery.jcarousel.intval(1));
        return false;
    });

};

/*
Adds a class to a photo in the thumbnail carousel
*/

/*
jQuery(document).ready(
    function () {
        jQuery('.view-photos-in-the-album img').attr('class',jQuery(this).attr('src'));
    });

*/