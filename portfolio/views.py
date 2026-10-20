from django.shortcuts import render, redirect
from .forms import ContactForm


def home(request):
    success = False

    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('/?success=1#contact')
    else:
        form = ContactForm()

    success = request.GET.get('success') == '1'

    # Updated to 'index.html' to match your folder structure
    return render(request, 'index.html', {
        'form': form,
        'success': success,
    })