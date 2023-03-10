# Generated by Django 4.1.4 on 2023-01-02 14:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_store'),
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.EmailField(max_length=254)),
                ('day', models.CharField(choices=[('1', 'Sunday'), ('2', 'Monday'), ('3', 'Tuesday'), ('4', 'Wednesday'), ('5', 'Thursday'), ('6', 'Friday'), ('7', 'Saturday')], default='1', max_length=30)),
                ('start', models.TimeField()),
                ('end', models.TimeField()),
                ('confirm', models.BooleanField(default=False)),
                ('store', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.store')),
            ],
        ),
    ]
