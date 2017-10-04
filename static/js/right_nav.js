// This file is the Mustache JS the powers right_nav.handlebars.

// For a more involved example of Mustache, take a look at nav

function get_name() {
    var filter = narrow_state.filter();
    if (narrow_state.active()) {
        if (filter.has_operator("pm-with")) {
            var emails = filter.operands("pm-with")[0].split(',');
            var names = _.map(emails, function (email) {
                if (! people.get_by_email(email)) {
                    return email;
                }
                return people.get_by_email(email).full_name;
            });
            return names;
        }
    }
    return 'no name found';
}

function build_right_nav() {
    var name = get_name();
    var right_nav = $("#right-nav-box");
    right_nav.empty();

    var rendered =  templates.render('right_nav', {name: name});

    right_nav.append(rendered);
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
