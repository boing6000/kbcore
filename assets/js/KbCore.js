(function ($) {
    $('.ipWidget-Gallery ._container').each(function () {
        var $gal = $(this);

        console.log(ipIsManagementState)

        if (ipIsManagementState) {
            $gal.justifiedGallery({
                border: 0,
                margins: 10,
                captions: false,
                waitThumbnailsLoad: true
            }).on('jg.complete', function () {
                //$gal.find('.spinner').addClass('hide');
            });

        } else {
            $gal.justifiedGallery({
                border: 0,
                margins: 10,
                captions: false
            }).on('jg.complete', function () {

            });
        }
    });


    $.fn.kbCoreMask = function () {

        $('.type-money, .type-m3, .type-m2').mask("#.##0,00", {reverse: true});

        var logic = function (currentDateTime, $input) {
            // 'this' is jquery object datetimepicker
            if ($input.attr('min-date')) {
                minDate = $('#' + $input.attr('min-date')).val();
                this.setOptions({
                    minDate: minDate ? minDate : false,
                    formatDate: 'd/m/Y'
                });
            }

            if ($input.attr('max-date')) {
                maxDate = $('#' + $input.attr('max-date')).val();
                this.setOptions({
                    maxDate: maxDate ? maxDate : false,
                    formatDate: 'd/m/Y'
                });
            }
        };

        $('.date-field').datetimepicker({
            timepicker: false,
            format: 'd/m/Y',
            // onChangeDateTime:logic,
            onShow: logic
        });

        $('.time-field').datetimepicker({
            datepicker: false,
            format: 'H:i',
            step: 15,
            //onChangeDateTime:logic,
            //onShow:logic
        });

        $('.type-icon').fontIconPicker({
            source: {
                "Web Applications": ["ipt-icomoon-bed", "ipt-icomoon-connection", "ipt-icomoon-feed", "ipt-icomoon-book2", "ipt-icomoon-address-book", "ipt-icomoon-notebook", "ipt-icomoon-feed2", "ipt-icomoon-feed3", "ipt-icomoon-feed4"],
                "Spinners": ["ipt-icomoon-bus"],
                "Business Icons": ["ipt-icomoon-comment2", "ipt-icomoon-library_books", "ipt-icomoon-library_music", "ipt-icomoon-play_for_work", "ipt-icomoon-verified_user", "ipt-icomoon-user", "ipt-icomoon-comments", "ipt-icomoon-comment-o", "ipt-icomoon-comments-o", "ipt-icomoon-user-md", "ipt-icomoon-file", "ipt-icomoon-life-bouy", "ipt-icomoon-ra", "ipt-icomoon-newspaper-o", "ipt-icomoon-user-secret", "ipt-icomoon-object-group", "ipt-icomoon-office", "ipt-icomoon-newspaper", "ipt-icomoon-bullhorn2", "ipt-icomoon-books", "ipt-icomoon-library", "ipt-icomoon-file2", "ipt-icomoon-file3", "ipt-icomoon-support", "ipt-icomoon-phone-hang-up", "ipt-icomoon-bubbles", "ipt-icomoon-bubbles2", "ipt-icomoon-bubble", "ipt-icomoon-bubbles3", "ipt-icomoon-bubbles4", "ipt-icomoon-users", "ipt-icomoon-user2", "ipt-icomoon-users2", "ipt-icomoon-user3", "ipt-icomoon-user4", "ipt-icomoon-lab", "ipt-icomoon-briefcase2", "ipt-icomoon-signup"],
                "eCommerce": ["ipt-icomoon-shopping-cart", "ipt-icomoon-automobile", "ipt-icomoon-tags2", "ipt-icomoon-cart", "ipt-icomoon-cart2", "ipt-icomoon-cart3", "ipt-icomoon-rouble", "ipt-icomoon-krw", "ipt-icomoon-bitcoin", "ipt-icomoon-try", "ipt-icomoon-coin"],
                "Multimedia Icons": ["ipt-icomoon-equalizer2", "ipt-icomoon-forward5", "ipt-icomoon-photo2", "ipt-icomoon-pause4", "ipt-icomoon-play_circle_filled", "ipt-icomoon-music", "ipt-icomoon-film", "ipt-icomoon-play-circle-o", "ipt-icomoon-volume-off", "ipt-icomoon-volume-down", "ipt-icomoon-volume-up", "ipt-icomoon-video-camera", "ipt-icomoon-image3", "ipt-icomoon-play", "ipt-icomoon-fast-forward", "ipt-icomoon-step-forward", "ipt-icomoon-play-circle", "ipt-icomoon-youtube-play", "ipt-icomoon-file-image-o", "ipt-icomoon-empire", "ipt-icomoon-pause-circle", "ipt-icomoon-pause-circle-o", "ipt-icomoon-volume-control-phone", "ipt-icomoon-wind", "ipt-icomoon-headphones2", "ipt-icomoon-play2", "ipt-icomoon-camera2", "ipt-icomoon-forward2", "ipt-icomoon-brightness-contrast", "ipt-icomoon-image2", "ipt-icomoon-images", "ipt-icomoon-camera3", "ipt-icomoon-film2", "ipt-icomoon-music2"],
                "Location and Contact": ["ipt-icomoon-flag3", "ipt-icomoon-phone3", "ipt-icomoon-home5", "ipt-icomoon-map4", "ipt-icomoon-speaker_phone", "ipt-icomoon-envelope-o", "ipt-icomoon-map-marker", "ipt-icomoon-phone-square", "ipt-icomoon-envelope", "ipt-icomoon-flag-o", "ipt-icomoon-flag-checkered", "ipt-icomoon-location-arrow", "ipt-icomoon-envelope-square", "ipt-icomoon-map-signs", "ipt-icomoon-map-o", "ipt-icomoon-map3", "ipt-icomoon-compass", "ipt-icomoon-home2", "ipt-icomoon-home3", "ipt-icomoon-home4", "ipt-icomoon-phone2", "ipt-icomoon-envelop", "ipt-icomoon-location", "ipt-icomoon-location2", "ipt-icomoon-map2", "ipt-icomoon-mobile", "ipt-icomoon-target", "ipt-icomoon-flag2", "ipt-icomoon-mail2", "ipt-icomoon-mobile2", "ipt-icomoon-mail3", "ipt-icomoon-mail4"],
                "Travel and Living": ["ipt-icomoon-road", "ipt-icomoon-plane", "ipt-icomoon-truck", "ipt-icomoon-coffee", "ipt-icomoon-fighter-jet", "ipt-icomoon-ticket", "ipt-icomoon-paper-plane", "ipt-icomoon-paper-plane-o", "ipt-icomoon-ticket2", "ipt-icomoon-trophy2", "ipt-icomoon-glass2", "ipt-icomoon-mug", "ipt-icomoon-food", "ipt-icomoon-rocket2", "ipt-icomoon-airplane", "ipt-icomoon-truck2", "ipt-icomoon-road2", "ipt-icomoon-checkmark-circle", "ipt-icomoon-checkmark", "ipt-icomoon-checkmark2", "ipt-icomoon-checkbox-checked"],
                "Weather & Nature Icons": ["ipt-icomoon-leaf", "ipt-icomoon-fire-extinguisher", "ipt-icomoon-sun-o", "ipt-icomoon-moon-o", "ipt-icomoon-sunrise", "ipt-icomoon-sun", "ipt-icomoon-moon", "ipt-icomoon-sun2", "ipt-icomoon-windy", "ipt-icomoon-snowflake", "ipt-icomoon-cloudy", "ipt-icomoon-weather", "ipt-icomoon-weather2", "ipt-icomoon-weather3", "ipt-icomoon-lightning", "ipt-icomoon-lightning2", "ipt-icomoon-rainy", "ipt-icomoon-rainy2", "ipt-icomoon-windy2", "ipt-icomoon-windy3", "ipt-icomoon-snowy", "ipt-icomoon-snowy2", "ipt-icomoon-snowy3", "ipt-icomoon-weather4", "ipt-icomoon-cloudy2", "ipt-icomoon-lightning3", "ipt-icomoon-sun3", "ipt-icomoon-moon2", "ipt-icomoon-cloudy3", "ipt-icomoon-lightning4", "ipt-icomoon-rainy3", "ipt-icomoon-rainy4", "ipt-icomoon-windy4", "ipt-icomoon-windy5", "ipt-icomoon-snowy4", "ipt-icomoon-snowy5", "ipt-icomoon-weather5", "ipt-icomoon-cloudy4", "ipt-icomoon-lightning5", "ipt-icomoon-leaf2", "ipt-icomoon-lightning6", "ipt-icomoon-brightness-medium"],
                "Material Icons: Maps": ["ipt-icomoon-add_location", "ipt-icomoon-flight", "ipt-icomoon-beenhere", "ipt-icomoon-directions", "ipt-icomoon-directions_bike", "ipt-icomoon-directions_bus", "ipt-icomoon-directions_car", "ipt-icomoon-directions_transit", "ipt-icomoon-directions_walk", "ipt-icomoon-edit_location", "ipt-icomoon-ev_station", "ipt-icomoon-terrain", "ipt-icomoon-my_location", "ipt-icomoon-local_hotel", "ipt-icomoon-layers", "ipt-icomoon-layers_clear", "ipt-icomoon-local_play", "ipt-icomoon-local_airport", "ipt-icomoon-local_atm", "ipt-icomoon-local_bar", "ipt-icomoon-local_cafe", "ipt-icomoon-local_car_wash", "ipt-icomoon-local_convenience_store", "ipt-icomoon-restaurant_menu", "ipt-icomoon-local_drink", "ipt-icomoon-local_florist", "ipt-icomoon-local_gas_station", "ipt-icomoon-local_hospital", "ipt-icomoon-local_laundry_service", "ipt-icomoon-local_library", "ipt-icomoon-local_mall", "ipt-icomoon-local_offer", "ipt-icomoon-local_parking", "ipt-icomoon-local_pharmacy", "ipt-icomoon-local_pizza", "ipt-icomoon-local_shipping", "ipt-icomoon-local_taxi", "ipt-icomoon-navigation", "ipt-icomoon-near_me", "ipt-icomoon-person_pin", "ipt-icomoon-person_pin_circle", "ipt-icomoon-pin_drop", "ipt-icomoon-rate_review", "ipt-icomoon-restaurant", "ipt-icomoon-satellite", "ipt-icomoon-store_mall_directory", "ipt-icomoon-streetview", "ipt-icomoon-traffic", "ipt-icomoon-tram", "ipt-icomoon-transfer_within_a_station", "ipt-icomoon-zoom_out_map", "ipt-icomoon-train", "ipt-icomoon-subway", "ipt-icomoon-map"],
                "Material Icons: Places": ["ipt-icomoon-ac_unit", "ipt-icomoon-airport_shuttle", "ipt-icomoon-all_inclusive", "ipt-icomoon-beach_access", "ipt-icomoon-business_center", "ipt-icomoon-casino", "ipt-icomoon-child_care", "ipt-icomoon-fitness_center", "ipt-icomoon-free_breakfast", "ipt-icomoon-golf_course", "ipt-icomoon-hot_tub", "ipt-icomoon-kitchen", "ipt-icomoon-pool", "ipt-icomoon-room_service", "ipt-icomoon-rv_hookup", "ipt-icomoon-smoke_free", "ipt-icomoon-spa"]
            },
            theme: 'fip-bootstrap',
            iconsPerPage: 30,
            searchSource: false,
            hasSearch: false
        });

        $('select').select2({
            theme: 'bootstrap',
            /*ajax: {
             url: function (params) {
             var term = params.term != undefined ? params.term : '';
             return '?aa=KbRealEstate.s_city&query=' + term;
             },
             dataType: 'json',
             processResults: function(data){
             return {
             results: data
             };
             }
             },
             templateResult: function (record) {
             if (!record.id) {
             return '';
             }

             return record.label;
             },
             templateSelection: function(record){
             return record.id;
             },*/
            allowClear: true
        });

        $('.ui-autocomplete').css('z-index', 10000);
    };

    $('.ipsGrid').on('init.ipGrid',
        function (id) {
            setTimeout(function () {
                $(id).kbCoreMask();
            }, 600);
        }
    );
    $('.ipsGrid').on('updateModalOpen.ipGrid',
        function (modal) {
            setTimeout(function () {
                $(modal).kbCoreMask();
            }, 600);
        }
    );
    $('.ipsGrid').on('searchModalOpen.ipGrid',
        function (modal) {
            setTimeout(function () {
                $(modal).kbCoreMask();
            }, 600);
        }
    );
    $('.ipsGrid').on('createModalOpen.ipGrid',
        function (modal) {
            setTimeout(function () {
                $(modal).kbCoreMask();
            }, 600);
        }
    );

    $(window.body).on('shown.bs.modal', function () {
        setTimeout(function () {
            $(this).kbCoreMask();
        }, 600);
    })
})(jQuery);