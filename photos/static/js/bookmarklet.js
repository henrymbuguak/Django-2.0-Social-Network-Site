(function () {
    var jquery_version = '1.11.1';
    var site_url = 'http://127.0.0.1:8000/';
    var static_url = site_url + 'static/';
    var min_width = 100;
    var min_height = 100;
    
    
    function bookmarklet(msg) {
        var css = jQuery('link');
        css.attr({
            rel: 'stylesheet',
            type: 'text/css',
            href: static_url + 'css/bookmarklet.css?r=' + Math.floor(Math.random()*99999999999999999999)
        });

        jQuery('head').append(css);

        box_html = '<div class="img-responsive"> id="bookmarklet"' +
            '<a href="#" class="close">&times;</a>' +
            '<h2>Select an image to Bookmark:</h2>' +
            '<div class="img-responsive"></div>' +
            '</div>';
        jQuery('body').append(box_html);
        jQuery('#bookmarklet .close').click(function () {
            jQuery('#bookmarklet').remove()
        });
    };

    if (typeof window.jQuery != 'undefined') {
        bookmarklet();
    } else {
        var conflict = typeof window.$ != 'undefined';
        var script = document.createElement('script');
        script.setAttribute('src','http://ajax.googleapis.com/ajax/libs/jquery/'+ jquery_version+ '/jquery.min.js');
        document.getElementsByTagName('head')[0].appendChild(script);
        var attempts = 15;
        
        (function () {
            if (typeof window.jQuery != 'undefined'){
                if (--attempts > 0) {
                    window.setInterval(arguments.callee, 250)
                } else {
                    alert('An error ocurred while loading jQuery')
                }
            } else {
                bookmarklet();
            }
        }) ();
    }
})();