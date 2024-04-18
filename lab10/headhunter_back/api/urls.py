from django.urls import path, include
from api.views import *

urlpatterns = [
    path('companies', CompanyListAPIView.as_view()),
    path('companies/<int:id>/', CompanyDetailAPIView.as_view()),
    path('companies/<int:id>/vacancies', company_vacancies),
    path('vacancies/', vacancies),
    path('vacancies/<int:id>/', vacancy_detail),
    path('vacancies/top_ten/', top_ten_vacancy)
]

