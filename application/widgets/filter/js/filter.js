/**
 * Created by evgen-d on 20.08.14.
 */

function getUrl(url) {
    var match = url.match(/([^\?]*)/i);
    url = match[1];
    var params = {};
    $('.filter-dynamic .filter-form [name]').each(function(index) {
        var $this = $(this);
        if ($this.val() != "") {
            params[$this.attr("name")] = $this.val();
        } else {
            delete params[$this.attr("name")];
        }
    });
    var query = "";
    if (Object.keys(params).length > 0) {
        query += "?" + $.param(params);
    }
    return url + query;
}

jQuery.fn.getFilters = function() {
    $(this).on('click', 'a', function() {
        location.href = getUrl($(this).attr('href'));
        return false;
    });
    $(this).find('.filter-form').on('focusout', 'input', function() {
        location.href = getUrl(location.href);
    });
};