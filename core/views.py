from django.shortcuts import render


# Create your views here.
def home(request):
    params ={
            "description": "The all-in-one ERP platform designed for modern enterprises. Seamlessly integrate hospitals, labs, and educational institutions with zero friction.",
            "Uptime": "99.9%",
            "ExperT_Support": "24/7",
            "Integrations":"100+",
            "Daily_Events": "500+",
            "Intelligent_Modules":{
                "desc":"Everything you need to run your institution. Integrated, powerful, and built for scale.",
                "Pathology_LIS":"Automated sample tracking, report generation, and machine interfacing. Reduce report turnaround time by 40%.",
                "Hospital_HMS":"Complete patient lifecycle management from OPD to discharge.",
                "Campus_Edu":"Digital campus solution for universities and colleges.",

                "Real_time_Analytics":"Live dashboards for financial, operational, and clinical metrics. Make data-driven decisions instantly."
            },
            "Simple_Pricing":{
                "desc":"Start small and scale as you grow. Transparent costs, no hidden fees.",
                "Starter":"$99",
                "Business":"$299",
                "Enterprise":"Custom pricing ",
                "duration":"/mon"

            },
            "Ready_to_modernize":"Join the next generation of enterprises running on Droham. Safe, secure, and scalable."
    }


    return render(request, './luncher/index.html', params)