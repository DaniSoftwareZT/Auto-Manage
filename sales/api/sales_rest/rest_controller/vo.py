from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from sales_rest.models import AutomobileVO
from sales_rest.encoders import AutomobileVOEncoder


@require_http_methods(["GET"])
def api_automobileVOs(request):
    if request.method == "GET":
        automobileVO = AutomobileVO.objects.all()
        return JsonResponse(
            {"automobileVO": automobileVO},
            encoder=AutomobileVOEncoder,
        )
