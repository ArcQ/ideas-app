# Generated by Django 3.1.7 on 2021-03-27 03:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_auto_20210326_2113'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='lab',
            options={'permissions': (('view', 'view'), ('create', 'create'), ('modify', 'modify'), ('delete', 'delete'))},
        ),
        migrations.AlterModelOptions(
            name='labjoin',
            options={'permissions': (('accept_join', 'accept_join'),)},
        ),
    ]
