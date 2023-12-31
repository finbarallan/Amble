# Generated by Django 4.0.10 on 2023-07-19 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Nodes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_str', models.CharField(max_length=50)),
                ('name', models.CharField(max_length=255, null=True)),
                ('type', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=255, null=True)),
                ('internet_access', models.CharField(max_length=100, null=True)),
                ('wheelchair_accessible', models.CharField(max_length=100, null=True)),
                ('opening_hours', models.CharField(max_length=100, null=True)),
                ('grid_id', models.IntegerField()),
                ('taxi_zone', models.IntegerField()),
                ('precinct', models.IntegerField()),
                ('b_score', models.JSONField()),
                ('c_score', models.JSONField(null=True)),
                ('rating', models.FloatField()),
                ('latitude', models.FloatField()),
                ('longitude', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('first_name', models.CharField(max_length=30, verbose_name='First Name')),
                ('last_name', models.CharField(max_length=30, verbose_name='Last Name')),
                ('email', models.EmailField(default='missing', max_length=50, primary_key=True, serialize=False)),
                ('address', models.CharField(max_length=100, verbose_name='Address')),
                ('password', models.CharField(default='missing', max_length=30, verbose_name='Password')),
                ('registrationDate', models.DateField(auto_now_add=True, verbose_name='Registration Date')),
            ],
        ),
        migrations.CreateModel(
            name='UserRoute',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('latitude', models.CharField(max_length=30, verbose_name='Latitude')),
                ('longitude', models.CharField(max_length=30, verbose_name='Longitude')),
                ('distance', models.CharField(max_length=30, verbose_name='Distance')),
                ('hour', models.IntegerField(verbose_name='Hour')),
            ],
        ),
        migrations.AddField(
            model_name='userpref',
            name='library',
            field=models.CharField(max_length=30, null=True, verbose_name='Libraries'),
        ),
        migrations.AddField(
            model_name='userpref',
            name='park',
            field=models.CharField(max_length=30, null=True, verbose_name='Parks'),
        ),
        migrations.AlterField(
            model_name='userpref',
            name='community',
            field=models.CharField(max_length=30, null=True, verbose_name='Community Centres'),
        ),
        migrations.AlterField(
            model_name='userpref',
            name='museum',
            field=models.CharField(max_length=30, null=True, verbose_name='Museums & Art Galleries'),
        ),
        migrations.AlterField(
            model_name='userpref',
            name='park_node',
            field=models.CharField(max_length=30, null=True, verbose_name='Other Park Nodes'),
        ),
        migrations.AlterField(
            model_name='userpref',
            name='walking_node',
            field=models.CharField(max_length=30, null=True, verbose_name='Other Walking Nodes'),
        ),
        migrations.AlterField(
            model_name='userpref',
            name='worship',
            field=models.CharField(max_length=30, null=True, verbose_name='Places of Worship'),
        ),
    ]
