# Generated by Django 4.2.3 on 2024-01-08 18:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_alter_entreprise_nsiret_alter_entreprise_rsociale_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Etudiant',
            fields=[
                ('nEtudiant', models.IntegerField(primary_key=True, serialize=False)),
                ('nom', models.CharField(max_length=255)),
                ('prenom', models.CharField(max_length=255)),
                ('promo', models.CharField(max_length=9)),
                ('adresse', models.CharField(max_length=255)),
                ('suite', models.CharField(max_length=255)),
                ('code_postal', models.CharField(max_length=10)),
                ('ville', models.CharField(max_length=255)),
                ('sexe', models.CharField(max_length=1)),
                ('date_de_naissance', models.DateField(blank=True, null=True)),
                ('telephone', models.CharField(max_length=15)),
                ('mention', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Professeur',
            fields=[
                ('nProf', models.IntegerField(primary_key=True, serialize=False)),
                ('qualite', models.CharField(max_length=255)),
                ('nom', models.CharField(max_length=255)),
                ('prenom', models.CharField(max_length=255)),
                ('adresse', models.CharField(max_length=255)),
                ('suite', models.CharField(max_length=255)),
                ('code_postal', models.CharField(max_length=10)),
                ('ville', models.CharField(max_length=255)),
                ('tel_ecole', models.CharField(max_length=15)),
                ('tel_domicile', models.CharField(max_length=15)),
                ('date_embauche', models.DateField(blank=True, null=True)),
                ('date_depart', models.DateField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Stage',
            fields=[
                ('nStage', models.AutoField(primary_key=True, serialize=False)),
                ('promo', models.CharField(max_length=9)),
                ('nEtudiant', models.IntegerField()),
                ('prof', models.CharField(max_length=255)),
                ('tuteur', models.CharField(max_length=255)),
                ('tpe', models.CharField(max_length=255)),
                ('annee', models.CharField(max_length=4)),
                ('compte_rendu', models.TextField()),
            ],
        ),
        migrations.AlterField(
            model_name='entreprise',
            name='Tele',
            field=models.CharField(max_length=15),
        ),
        migrations.AlterField(
            model_name='entreprise',
            name='teleContact',
            field=models.CharField(max_length=15),
        ),
    ]