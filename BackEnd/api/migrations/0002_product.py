# Generated by Django 3.2.7 on 2021-09-15 00:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('productname', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=100)),
                ('original_price', models.IntegerField()),
                ('price', models.IntegerField()),
                ('image_name', models.CharField(max_length=20)),
                ('is_listimage', models.BooleanField(default=True)),
                ('url', models.URLField()),
            ],
            options={
                'db_table': 'id',
            },
        ),
    ]
