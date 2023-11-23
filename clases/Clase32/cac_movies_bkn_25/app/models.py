from django.db import models

# Create your models here.
#La clase Movie hereda de la clase Model.
class Movie(models.Model):
    
    title = models.CharField(max_length=150)
    director = models.CharField(max_length=100)
    release_date = models.DateField(null=True)
    #banner = models.ImageField(upload_to='imagenes/',null=True,verbose_name='Portada')
    