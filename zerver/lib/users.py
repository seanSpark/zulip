from __future__ import absolute_import
from typing import Text

from django.utils.translation import ugettext as _

from zerver.lib.actions import do_change_full_name
from zerver.lib.request import JsonableError
from zerver.models import UserProfile, Service

def check_full_name(full_name_raw):
    # type: (Text) -> Text
    full_name = full_name_raw.strip()
    if len(full_name) > UserProfile.MAX_NAME_LENGTH:
        raise JsonableError(_("Name too long!"))
    if len(full_name) < UserProfile.MIN_NAME_LENGTH:
        raise JsonableError(_("Name too short!"))
    if list(set(full_name).intersection(UserProfile.NAME_INVALID_CHARS)):
        raise JsonableError(_("Invalid characters in name!"))
    return full_name

def check_short_name(short_name_raw):
    # type: (Text) -> Text
    short_name = short_name_raw.strip()
    if len(short_name) == 0:
        raise JsonableError(_("Bad name or username"))
    return short_name

def check_change_full_name(user_profile, full_name_raw, acting_user):
    # type: (UserProfile, Text, UserProfile) -> Text
    """Verifies that the user's proposed full name is valid.  The caller
    is responsible for checking check permissions.  Returns the new
    full name, which may differ from what was passed in (because this
    function strips whitespace)."""
    new_full_name = check_full_name(full_name_raw)
    do_change_full_name(user_profile, new_full_name, acting_user)
    return new_full_name

def check_valid_bot_type(bot_type):
    # type: (int) -> None
    if bot_type not in UserProfile.ALLOWED_BOT_TYPES:
        raise JsonableError(_('Invalid bot type'))

def check_valid_interface_type(interface_type):
    # type: (int) -> None
    if interface_type not in Service.ALLOWED_INTERFACE_TYPES:
        raise JsonableError(_('Invalid interface type'))
