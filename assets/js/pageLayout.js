var kbPagesResize;

(function ($) {
    "use strict";

    function getQuery(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    kbPagesResize = function (container) {
        container = container == undefined ? window : container;
        var $window = $(window);
        var $container = $('.ipsAdminPages');
        var $containerForScroll = $('.ipsAdminPagesContainer');
        var $languages = $('.main-sidebar');
        var $menus = $('.ipsMenus');
        var $pages = $('.ipsPagesContainer');
        var $properties = $('.ipsProperties');

        var navbarHeight = parseInt($('.main-header').outerHeight());

        var contentHeight = parseInt($window.height());
        if (navbarHeight > 0) {
            contentHeight -= navbarHeight; // leaving place for navbar
        }

        var windowWidth = parseInt($window.width());
        var propertiesWidth = windowWidth;
        propertiesWidth -= parseInt($languages.outerWidth());
        propertiesWidth -= parseInt($menus.outerWidth());
        propertiesWidth -= parseInt($pages.outerWidth());

        var minimumPropertiesWidth = 400;
        var maximumPropertiesWidth = 680;
        var containerWidth = windowWidth;

        // if properties doesn't fit, fix
        if (propertiesWidth < minimumPropertiesWidth) {
            containerWidth += minimumPropertiesWidth - propertiesWidth;
            propertiesWidth = minimumPropertiesWidth;
        }

        // don't allow properties to be to wide
        if (propertiesWidth > maximumPropertiesWidth) {
            propertiesWidth = maximumPropertiesWidth;
        }

        $container.innerHeight(contentHeight - 15);
        // add scrollbar only if properties will be visible
        if (!getQuery('disableActions')) {
            $containerForScroll.innerWidth(containerWidth);
        }
//        $languages.innerHeight(contentHeight);
//        $menus.innerHeight(contentHeight);
//        $pages.innerHeight(contentHeight);
//        $properties.innerHeight(contentHeight);
        $properties.innerWidth(propertiesWidth - 20);
    };

    $(document).ready(function () {
        kbPagesResize();
    });

    $(window).bind('resize.ipPages,ipAdminPanelInit', kbPagesResize);

})(jQuery);
