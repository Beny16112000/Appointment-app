import re


# Handle request headers


class HeadersRequest:
    
    def __init__(self, request):
        self.request = request


    def headers(self):
        regex = re.compile('^HTTP_')
        data = dict((regex.sub('', header), value) for (header, value) 
        in self.request.META.items() if header.startswith('HTTP_'))
        return data


    def token(self):
        data = self.headers()
        return data['AUTHORIZATION']


