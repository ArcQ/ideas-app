# Generated by Django 3.1.7 on 2021-03-21 04:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20210103_1645'),
    ]

    operations = [
        migrations.AddField(
            model_name='labmember',
            name='isAdmin',
            field=models.BooleanField(null=True),
        ),
        migrations.AddField(
            model_name='labmember',
            name='is_admin',
            field=models.BooleanField(null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]
