from django.db import models

# Create your models here.
#model for stages data
class StageData(models.Model):
    num = models.AutoField(primary_key=True)
    promo = models.CharField(max_length=9)
    numEtudiant = models.IntegerField()
    prof = models.CharField(max_length=255)  # Adjust the max_length as needed
    tuteur = models.CharField(max_length=255)  # Adjust the max_length as needed
    Entreprise = models.CharField(max_length=255)  # Adjust the max_length as needed
    type = models.CharField(max_length=255)  # Adjust the max_length as needed
    année = models.IntegerField()
    cr = models.FileField(upload_to='pdfs/', help_text="Upload a PDF file")

    def __str__(self):
        return f"{self.promo} - {self.numEtudiant}"

    class Meta:
        verbose_name_plural = "StageData"