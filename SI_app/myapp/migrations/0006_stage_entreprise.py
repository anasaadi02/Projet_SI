# Generated by Django 4.2.3 on 2024-01-09 16:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0005_alter_etudiant_suite'),
    ]

    operations = [
        migrations.AddField(
            model_name='stage',
            name='entreprise',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]
