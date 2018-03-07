$(function() {
    $.getJSON('api', updateFeedback);

    function updateFeedback(data) {
        var output = '';
        $.each(data, function(key, item) {

        });
    }
});
