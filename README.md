# Droham - Enterprise ERP Platform

Droham is a next-generation ERP (Enterprise Resource Planning) platform designed for hospitals, colleges, and custom enterprises. Built with modern stack for 2030 standards.

## Features

- **Pathology LIS**: Automated sample tracking, report generation, and machine interfacing
- **Hospital HMS**: Complete patient lifecycle management from OPD to discharge
- **Campus Edu**: Digital campus solution for universities and colleges
- **Real-time Analytics**: Live dashboards for financial, operational, and clinical metrics
- **99.9% Uptime**: Enterprise-grade reliability
- **24/7 Support**: Expert support available round the clock

## Tech Stack

- **Backend**: Django 5.1.4
- **Frontend**: HTML5, CSS3, JavaScript
- **Database**: SQLite (Development), PostgreSQL (Production)
- **Python**: 3.8+

## Project Structure

```
droham/
├── core/                 # Core Django app
│   ├── models.py         # Database models
│   ├── views.py          # View logic
│   ├── urls.py           # URL routing
│   └── admin.py          # Admin configuration
├── droham/               # Project configuration
│   ├── settings.py       # Django settings
│   ├── urls.py           # Main URL configuration
│   └── wsgi.py           # WSGI configuration
├── templates/            # HTML templates
│   └── luncher/
│       └── index.html    # Homepage template
├── static/               # Static files (CSS, JS, Images)
│   ├── style/
│   │   └── style.css
│   ├── script/
│   │   └── script.js
│   └── img/
├── manage.py             # Django management script
└── db.sqlite3            # Development database
```

## Getting Started

### Prerequisites

- Python 3.8 or higher
- pip (Python package installer)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/SudipBera083/Droham.git
cd Droham
git checkout django-fullstack
```

2. **Create a virtual environment**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**
```bash
pip install django==5.1.4
```

4. **Apply migrations**
```bash
python manage.py migrate
```

5. **Create a superuser** (optional)
```bash
python manage.py createsuperuser
```

6. **Run the development server**
```bash
python manage.py runserver
```

Visit `http://localhost:8000` in your browser.

## Configuration

### Static Files

Static files are served from the `static/` directory. The configuration in `settings.py`:

```python
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_DIRS = [
    BASE_DIR / 'static',
]
```

### Templates

Django templates are located in the `templates/` directory. The template directory is configured in `settings.py`:

```python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ["templates"],
        'APP_DIRS': True,
        ...
    }
]
```

## Pricing Plans

### Starter - ₹9,999/month
- 1 Core Module
- Up to 50 Users
- Basic Analytics
- Email Support

### Business - ₹49,999/month (Most Popular)
- All Modules Included
- Unlimited Users
- Advanced Analytics + AI
- 24/7 Priority Support
- Custom Integrations

### Enterprise - Custom Pricing
- Everything in Business
- On-Premise / Private Cloud
- Dedicated Infrastructure
- Custom SLAs & Contracts
- White-label Options

## Development

### Creating a New App

```bash
python manage.py startapp app_name
```

### Database Migrations

```bash
# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Show migration history
python manage.py showmigrations
```

### Admin Panel

Access the Django admin at `http://localhost:8000/admin/` with your superuser credentials.

## Deployment

For production deployment:

1. Set `DEBUG = False` in `settings.py`
2. Configure secure settings (SECRET_KEY, ALLOWED_HOSTS, etc.)
3. Collect static files: `python manage.py collectstatic`
4. Use a production WSGI server (Gunicorn, uWSGI)
5. Configure a reverse proxy (Nginx, Apache)

## Branches

- **master**: Main production branch
- **django-fullstack**: Development branch with latest features

## Contributing

1. Create a feature branch
2. Make your changes
3. Commit with clear messages
4. Push to your fork
5. Create a Pull Request

## License

Proprietary - Droham Private Limited

## Support

For support, contact: support@droham.com

## About

Droham is building the operating system for modern enterprises. Scalable, secure, and always online.

Visit us at: https://droham.com
