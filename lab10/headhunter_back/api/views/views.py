from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer
from django.http.response import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


#cbv views
class CompanyListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)

class CompanyDetailAPIView(APIView):
    def get_object(self, id=None):
        try:
            company = Company.objects.get(id=id)
            return company
        except Company.DoesNotExist as e:
            return Response({"error": str(e)},
                            status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, id=None):
        company = self.get_object(id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def put(self, request, id=None):
        company = self.get_object(id)
        serializer = CompanySerializer(
            instance=company,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id=None):
        company = self.get_object(id)
        company.delete()
        return Response({"deleted": True})


# fbc views
@api_view(["GET", "POST"])
def vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def vacancy_detail(request, id=None):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return Response({"error": str(e)},
                        status=status.HTTP_400_BAD_REQUEST)

    if request.method == "GET":
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    elif request.method == "PUT":
        serializer = VacancySerializer(
            instance=vacancy,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,
                        status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        vacancy.delete()
        return Response({"deleted": True})

@api_view(["GET"])
def company_vacancies(request, id=None):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=400)

    vacancies_json = [v.to_json() for v in company.vacancies.all()]
    return JsonResponse(vacancies_json, safe=False)

@api_view(["GET"])
def top_ten_vacancy(request):
    try:
        vacancies = Vacancy.objects.order_by("-salary")[:10]
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=400)

    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)
