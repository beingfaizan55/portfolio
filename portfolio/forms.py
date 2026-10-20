from django import forms
from .models import Contact

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'subject', 'message']
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Your Name'}),
            'email': forms.EmailInput(attrs={'placeholder': 'Your Email Address'}),
            'subject': forms.TextInput(attrs={'placeholder': 'Subject of your message'}),
            'message': forms.Textarea(attrs={'placeholder': 'Write your message here...', 'rows': 5}),
        }