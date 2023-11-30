from rest_framework import serializers
from app.models import Movie 

class MovieSerializer(serializers.ModelSerializer):
   
    class Meta:
        #Hacemos correspondencia del serializador con la el modelo
        model = Movie
        fields = ['id','title','director','release_date','banner']
