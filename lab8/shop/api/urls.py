from django.urls import path, include

from api.views import get_categories, get_category, get_product, get_products, get_prod_by_cat

urlpatterns = [
    path('categories/', get_categories),
    path('categories/<int:pk>', get_category),
    path('products/', get_products),
    path('products/<int:id>/', get_product),
    path('categories/<int:id>/products/', get_prod_by_cat)
]
