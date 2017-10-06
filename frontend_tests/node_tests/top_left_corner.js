set_global('$', global.make_zjquery());

zrequire('Filter', 'js/filter');
zrequire('unread_ui');

zrequire('top_left_corner');

var noop = function () {};

(function test_update_count_in_dom() {
    function make_elem(elem, count_selector, value_selector) {
        var count = $(count_selector);
        var value = $(value_selector);
        elem.set_find_results('.count', count);
        count.set_find_results('.value', value);
        count.set_parent(elem);

        return elem;
    }

    var counts = {
        mentioned_message_count: 222,
        home_unread_messages: 333,
    };

    make_elem(
        $("#global_filters li[data-name='mentioned']"),
        '<mentioned-count>',
        '<mentioned-value>'
    );

    make_elem(
        $("#global_filters li[data-name='home']"),
        '<home-count>',
        '<home-value>'
    );


    top_left_corner.update_dom_with_unread_counts(counts);

    assert.equal($('<mentioned-value>').text(), '222');
    assert.equal($('<home-value>').text(), '333');

}());
