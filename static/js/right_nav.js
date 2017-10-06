// This file is the Mustache JS that powers right_nav.handlebars.

function build_right_nav() {
    if (narrow_state.active()) {
        var filter = narrow_state.filter();
        var right_nav = $("#right-nav-box");
        right_nav.empty();
        var rendered;
        var picture;
        var name;
        if (filter.has_operator("pm-with")) {
            // 1:1 Message.
            var person = people.get_from_pm_filter(filter);
            picture = person.avatar_url;
            name = person.full_name;
            rendered =  templates.render('right_nav', {is_private: true, name: name, picture_url: picture});
        } else {
            // Group chat
            name = filter.operands("stream")[0];
            picture = '#';
            rendered =  templates.render('right_nav', {name: name, picture_url: picture});
        }
        right_nav.append(rendered);
    }
}

$(function () {
    $(document).on('narrow_activated.zulip', function () {
        build_right_nav();
    });
    $(document).on('narrow_deactivated.zulip', function () {
        build_right_nav();
    });
    build_right_nav();
});

if (typeof module !== 'undefined') {
    // module.exports = right_nav; What does this do?
}
