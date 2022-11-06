from django.shortcuts import render,redirect
from .models import Widget
from .forms import WidgetForm
# Create your views here.


def index(request):
    widgets = Widget.objects.all()
    widget_form = WidgetForm
    context = {"widgets": widgets, "widget_form": widget_form}
    return render(request, 'index.html', context)

def add_widget(request):
    form=WidgetForm(request.POST)
    if form.is_valid():
        form.save()
    return redirect('index')
