# Generated by Django 4.0.6 on 2022-07-21 16:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0003_alter_product_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='sold',
        ),
    ]
