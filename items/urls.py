from django.urls import path
from . import views

urlpatterns = [
    path('purchase_item_confirmation/<int:item_id>', views.purchase_item_confirmation, name='purchase_item_confirmation'),
    path('purchase_item/<int:item_id>', views.purchase_item, name='purchase_item'),
    path('view_item/<int:item_id>', views.view_item, name='view_item'),
    path("search", views.search, name="search"),
]
