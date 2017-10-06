$(function () {
    var full_name = people.my_full_name();
    var picture = people.my_full_avatar();
    var rendered = templates.render('current_user_nav', {full_name: full_name, picture_url: picture});
    var current_user_nav = $("#current_user_nav");
    current_user_nav.empty();
    current_user_nav.append(rendered);
});
