/**
 * Squeezebox jQuery plugin
 *
 * @author: Jimmy Hillis <jimmy@hatchd.com.au>
 * @version: 0.1
 * @see: http://github.com/hatchddigital/jquery.squeezebox
 *
 * The following code builds a required JS object and jQuery
 * function for an accordian-like function. It allows a set of
 * content to show a single area at once, sliding up like a
 * squeezebox, when switching between them.
 *
 */
(function ( $ ) {

    var console = window.console;

    /**
     * JS Object for building an managing required state changes.
     */

    var Squeezebox = function (options) {
        this.that = this;
        this.options = options;
    };

    /**
     * jQuery plugin for managing and attaching required events
     * to DOM elements as required.
     */

    $.fn.squeezebox = function (options) {
        options = $.extend({
            'toggle': true,
            'show_initial': true
        }, options);
        return this.each(function () {
            var $this = $(this)
              , squeezebox = new Squeezebox()
              , pleats = $this.find('.squeezebox-pleat') || []
              , pleat_contents = pleats.find('.squeezebox-content')
              , current = false;
            // Setup default height for each content box to fix transition
            // issue (doesn't work without a height set!)
            $(pleat_contents).each(function() {
                //$(this).css('height', $(this).height());
            });
            // Collapse all pleats to start with
            pleat_contents.addClass('collapse');
            // Show the current (or first) element depending on which
            // is available to us
            if (options.show_initial) {
                current = $this.find('.current');
                if (!current.length) {
                    current = $this.find('.squeezebox-pleat')
                        .first()
                        .addClass('current')
                        .removeClass('collapse');
                }
                current.addClass('current')
                    .find('.squeezebox-content')
                        .removeClass('collapse');
            }
            // Event listener for all active buttons and switches
            pleats.find('.squeezebox-head').on('click', function (e) {
                var $this = $(this)
                  , pleat = $this.parents('.squeezebox-pleat');
                e.preventDefault();
                if (options.toggle) {
                    if (pleat.hasClass('current')) {
                        return pleats.removeClass('current');
                    }
                }
                pleats.removeClass('current');
                pleat_contents.addClass('collapse');
                $this.next('.squeezebox-content')
                    .removeClass('collapse');
                pleat.addClass('current');
            });
        });
    };

}( window.jQuery )) ;
