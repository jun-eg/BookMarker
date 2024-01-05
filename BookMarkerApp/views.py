from django.shortcuts import render
from django.http import JsonResponse
from .models import Bookmark
from django.views.decorators.http import require_http_methods

def add_bookmark(request):
    url = request.POST.get('url', None)
    if url:
        bookmark, created = Bookmark.objects.get_or_create(url=url)
        if created:
            return JsonResponse({'message': 'ブックマークが追加されました。'}, status=201)
        else:
            return JsonResponse({'message': 'このURLは既にブックマークされています。'}, status=200)
    else:
        return JsonResponse({'message': 'URLが指定されていません。'}, status=400)


def delete_bookmark(request):
    url = request.POST.get('url', None)
    if url:
        try:
            bookmark = Bookmark.objects.get(url=url)
            bookmark.delete()
            return JsonResponse({'message': 'ブックマークが削除されました。'}, status=200)
        except Bookmark.DoesNotExist:
            return JsonResponse({'message': '指定されたURLのブックマークは存在しません。'}, status=404)
    else:
        return JsonResponse({'message': 'URLが指定されていません。'}, status=400)


def get_bookmarks(request):
    bookmarks = Bookmark.objects.all()
    bookmarks_data = [{'id': bookmark.id, 'url': bookmark.url} for bookmark in bookmarks]
    return JsonResponse({'bookmarks': bookmarks_data}, status=200)