# Generated by Django 4.0.6 on 2022-07-19 08:02

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('category_id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('product_id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False, unique=True)),
                ('image', models.ImageField(upload_to='productimages')),
                ('name', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=320)),
                ('price', models.IntegerField(default=0)),
                ('sold', models.BooleanField(default=False)),
                ('category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='store.category')),
            ],
        ),
    ]
