from rest_framework import permissions


class IsReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return (request.method in permissions.SAFE_METHODS)


class IsAuthor(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return (obj.author == request.user)


class IsAuthorOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return (
            request.method in permissions.SAFE_METHODS
            or obj.author == request.user
        )