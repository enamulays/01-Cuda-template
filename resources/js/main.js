$(document).ready(function(){
    var mixer = mixitup('.container');
});

$(document).ready(function () {
    var mixer = mixitup('.container');

    $('.portfolio-filter button').on('click', function () {
        var filterValue = $(this).attr('data-filter');

        // Toggle the "hidden" class based on the filter value
        if (filterValue === 'all') {
            $('.box').removeClass('hidden');
        } else {
            $('.box').addClass('hidden');
            $(filterValue).removeClass('hidden');
        }

        // Refresh the MixItUp instance
        mixer.refresh();
    });
});
