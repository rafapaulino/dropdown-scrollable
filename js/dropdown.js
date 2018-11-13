(function ( $ ) {
 
    $.fn.dropdownScrollable = function() {

        var $dropdown = this;
        var $search = $dropdown.find('input.form-control');

        //search dropdown
        $search.on('keyup', function(){
            var $this = $(this);
            var value = $this.val();
            value = value.toLowerCase();
            var parent = $this.parent();
            var elem = parent.find('a.dropdown-item');

            elem.each(function( index ) {
                var item = $(this).text();
                if (item.toLowerCase().indexOf(value) > -1) {
                    $(this).removeClass('d-none');
                } else {
                    $(this).addClass('d-none');
                }
            });

        });

        //parte de acessibilidade
        $dropdown.bind('keydown', function (event) {
            var $element = $(this);
            $element.addClass("show");
            var $menu = $element.find('.dropdown-menu');
            $menu.addClass('show');

            switch(event.keyCode) {
                case 13: // Enter key
                case 38: // Up arrow
                case 27: // Escape key
                $element.removeClass("show");
                $menu.removeClass('show');
                $element.blur();
                break;
            }
        });

        return $dropdown.addClass('dropdown-scrollable');
 
    };
 
}( jQuery ));