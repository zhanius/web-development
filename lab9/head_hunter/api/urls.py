from django.urls import path, include

from .views import *
urlpatterns = [
    path('companies', get_companies), # works
    path('companies/<int:id>/',get_company), # works
    path('companies/<int:id>/vacancies', get_vac_by_comp),
    path('vacancies/', get_vacancies), # works
    path('vacancies/<int:id>/', get_vacancy),
    path('vacancies/top_ten/', top_ten)
]

