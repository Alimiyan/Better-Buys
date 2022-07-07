# Generated by Django 4.0.5 on 2022-07-07 11:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('price', models.FloatField()),
                ('image', models.ImageField(upload_to='uploads/images')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('description', models.TextField()),
                ('category', models.CharField(max_length=255)),
            ],
        ),
    ]