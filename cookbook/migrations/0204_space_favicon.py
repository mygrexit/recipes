# Generated by Django 4.2.5 on 2023-11-21 21:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cookbook', '0203_alter_unique_contstraints'),
    ]

    operations = [
        migrations.AddField(
            model_name='space',
            name='favicon',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='space_favicon', to='cookbook.userfile'),
        ),
    ]
