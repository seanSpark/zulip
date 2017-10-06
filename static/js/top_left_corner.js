var top_left_corner = (function () {

var exports = {};

exports.get_global_filter_li = function (filter_name) {
    var selector = "#global_filters li[data-name='" + filter_name + "']";
    return $(selector);
};

exports.update_count_in_dom = function (unread_count_elem, count) {
    var count_span = unread_count_elem.find('.count');
    var value_span = count_span.find('.value');

    if (count === 0) {
        count_span.hide();
        value_span.text('');
        return;
    }

    count_span.show();
    value_span.text(count);
};


exports.update_dom_with_unread_counts = function (counts) {
    // Note that "Private messages" counts are handled in pm_list.js.

    // mentioned/home have simple integer counts
    var mentioned_li = exports.get_global_filter_li('mentioned');
    var home_li = exports.get_global_filter_li('home');

    exports.update_count_in_dom(mentioned_li, counts.mentioned_message_count);
    exports.update_count_in_dom(home_li, counts.home_unread_messages);

    unread_ui.animate_mention_changes(mentioned_li,
                                      counts.mentioned_message_count);
};

return exports;
}());
if (typeof module !== 'undefined') {
    module.exports = top_left_corner;
}
