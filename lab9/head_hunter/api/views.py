from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from .models import Company,Vacancy
import json

from django.views.decorators.csrf import csrf_exempt

# CRUD => create / read / update / delete

# Create your views here.
@csrf_exempt
def get_companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        company = Company.objects.create(name=data.get("name"), description=data.get("description"), city=data.get("city"), address=data.get("address"))

        return JsonResponse(company.to_json())


@csrf_exempt
def get_company(request, id = None):
    company = Company.objects.get(id=id)
    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)

        if 'name' in data:
            company.name = data['name']
        if 'description' in data:
            company.description = data['description']
        if 'city' in data:
            company.city = data['city']
        if 'address' in data:
            company.address = data['address']

        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({"deleted": True})


@csrf_exempt
def get_vac_by_comp(request, id = None):
    company = Company.objects.get(id=id)
    vacancies_filtered = Vacancy.objects.filter(company=company)
    if request.method == 'GET':
        vacancies_json = [vacancy.to_json() for vacancy in vacancies_filtered]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        company = Company.objects.create(name=data.get("name"), description=data.get("description"),
                                         salary=data.get("salary"), company=data.get("company"))
        return JsonResponse({"added" : True})


@csrf_exempt
def get_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        vacancy = Vacancy.objects.create(name=data.get("name"), description=data.get("description"),salary=data.get("salary"), company=data.get("company"))

        return JsonResponse(vacancy.to_json())

@csrf_exempt
def top_ten(request):
    top_ten_vacancies = Vacancy.objects.order_by('-salary')[:10]
    top_ten_vacancies_to_json = [vacancy.to_json() for vacancy in top_ten_vacancies]
    return JsonResponse(top_ten_vacancies_to_json, safe=False)

@csrf_exempt
def get_vacancy(request, id = None):
    vacancy = Vacancy.objects.get(id=id)
    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())

    elif request.method == 'PUT':
        data = json.loads(request.body)

        if 'name' in data:
            vacancy.name = data['name']
        if 'description' in data:
            vacancy.description = data['description']
        if 'salary' in data:
            vacancy.salary = data['salary']
        if 'company' in data:
            vacancy.company = data['company']

        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({"deleted": True})