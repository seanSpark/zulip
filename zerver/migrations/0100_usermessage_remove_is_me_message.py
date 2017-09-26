# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-27 17:08
from __future__ import unicode_literals

import bitfield.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('zerver', '0099_index_wildcard_mentioned_user_messages'),
    ]

    operations = [
        migrations.AlterField(
            model_name='archivedusermessage',
            name='flags',
            field=bitfield.models.BitField(['read', 'starred', 'collapsed', 'mentioned', 'wildcard_mentioned', 'summarize_in_home', 'summarize_in_stream', 'force_expand', 'force_collapse', 'has_alert_word', 'historical'], default=0),
        ),
        migrations.AlterField(
            model_name='usermessage',
            name='flags',
            field=bitfield.models.BitField(['read', 'starred', 'collapsed', 'mentioned', 'wildcard_mentioned', 'summarize_in_home', 'summarize_in_stream', 'force_expand', 'force_collapse', 'has_alert_word', 'historical'], default=0),
        ),
    ]
