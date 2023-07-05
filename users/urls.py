from django.contrib import admin
from django.urls import path, re_path, include
from users import views

urlpatterns = [
    
    path('users', views.user_route),
    path('users', views.user_view),
    
    # re_path(r'^users/$', views.user_view),
    # re_path(r'^api/users/(?P<pk>[0-9]+)$', views.user_view),
    # path('users', views.handle_routeinpput_data),
    # re_path(r'^users/$', views.handle_routeinpput_data),
    # re_path(r'^api/users/(?P<pk>[0-9]+)$', views.handle_routeinpput_data),
]


    