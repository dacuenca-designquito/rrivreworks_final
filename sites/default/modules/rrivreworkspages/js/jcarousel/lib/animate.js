/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*
Scrolls the caroussel to the index of the id in the thumbnail carousel
 */
function photo_carousel_initCallback(carousel) {
    jQuery('.view-photos-in-the-album img').bind('click', function() {
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).attr('id')));
        /*
        jQuery('div#photo-title-description').text(jQuery(this).attr('id'));
        */
        return false;
    });
    
};

function video_carousel_initCallback(carousel) {
    jQuery('.view-videos-in-the-album img').bind('click', function() {
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).attr('id')));
        /*
        jQuery('div#photo-title-description').text(jQuery(this).attr('id'));
        */
        return false;
    });
    
};

function product_hero_photo_carousel_initCallback(carousel) {
    jQuery('.view-product-photos-in-product-page img').bind('click', function() {
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).attr('id')));
        return false;
    });

};


/*
Adds an id with the index of the photo in a thumbnail carousel
*/


jQuery(document).ready(function () {    
    
    jQuery('.view-product-photos-in-product-page').each(function() {
        jQuery(this).find("img").each(function(i) {
            jQuery(this).attr('id',i+1);
        });
    });
    
    jQuery('.view-photos-in-the-album').each(function() {
        jQuery(this).find("img").each(function(i) {
            jQuery(this).attr('id',i+1);
        });
    });
    
    jQuery('.view-videos-in-the-album').each(function() {
        jQuery(this).find("img").each(function(i) {
            jQuery(this).attr('id',i+1);
        });
    });
       
    /* 
 * alignt even images to left in photo thumbnail carousel
 */
    jQuery('.view-photos-in-the-album').each(function() {
        jQuery(this).find("img").each(function(i) {
            if(jQuery(this).attr('id') % 2 != 0){
                jQuery(this).attr('align','left');
            }
        });
    });    
});