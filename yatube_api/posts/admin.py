from django.contrib import admin

from posts.models import Group, Post, Comment, Follow


# Register your models here.
class GroupAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'slug',
        'description',
    )

class PostAdmin(admin.ModelAdmin):
    list_display = (
        'text',
        'pub_date',
        'author',
        'image',
        'group'
    )

class CommentAdmin(admin.ModelAdmin):
    list_display = (
        'author',
        'post',
        'text',
        'created'
    )

class FollowAdmin(admin.ModelAdmin):
    list_display = (
        'user',
        'following'
    )

admin.site.register(Group, GroupAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Follow, FollowAdmin)