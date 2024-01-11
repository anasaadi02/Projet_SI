from django.db import models

# Create your models here.
class Entreprise(models.Model):
    nom = models.CharField(max_length=255, default='entreprise')
    nSiret = models.CharField(max_length=255, primary_key=True)
    fJuridique = models.CharField(max_length=10)
    rSociale = models.CharField(max_length=255)
    adresse = models.CharField(max_length=255)  
    suite = models.CharField(max_length=255, blank=True)  
    codeP = models.CharField(max_length=255)
    ville = models.CharField(max_length=255)
    Tele = models.CharField(max_length=15)
    FAX = models.CharField(max_length=255)
    contact = models.CharField(max_length=255)
    teleContact = models.CharField(max_length=15)

    def __str__(self):
        return self.nSiret

class Professeur(models.Model):
    nProf = models.IntegerField(primary_key=True)
    qualite = models.CharField(max_length=255)
    nom = models.CharField(max_length=255)
    prenom = models.CharField(max_length=255)
    adresse = models.CharField(max_length=255)
    suite = models.CharField(max_length=255, blank=True, null=True)
    code_postal = models.CharField(max_length=10)
    ville = models.CharField(max_length=255)
    tel_ecole = models.CharField(max_length=15)
    tel_domicile = models.CharField(max_length=15)
    date_embauche = models.DateField(null=True, blank=True)
    date_depart = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.nProf

class Etudiant(models.Model):
    nEtudiant = models.IntegerField(primary_key=True)
    nom = models.CharField(max_length=255)
    prenom = models.CharField(max_length=255)
    promo = models.CharField(max_length=9)
    adresse = models.CharField(max_length=255)
    suite = models.CharField(max_length=255, blank=True)
    code_postal = models.CharField(max_length=10)
    ville = models.CharField(max_length=255)
    sexe = models.CharField(max_length=1)
    date_de_naissance = models.DateField(null=True, blank=True)
    telephone = models.CharField(max_length=15)
    mention = models.CharField(max_length=255)
    
    def __str__(self):
        return self.nEtudiant

class Stage(models.Model):
    nStage = models.AutoField(primary_key=True)
    promo = models.CharField(max_length=9)
    nEtudiant = models.IntegerField()
    prof = models.CharField(max_length=255)
    tuteur = models.CharField(max_length=255)
    entreprise = models.CharField(max_length=255)
    tpe = models.CharField(max_length=255)
    annee = models.CharField(max_length=4)
    compte_rendu = models.TextField()
    
    def __str__(self):
        return self.nStage

    
    