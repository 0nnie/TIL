# URI > URL
> URI는 식별하고, URL은 위치를 가리킨다


### URI 
특정 리소스를 식별하는 **통합 자원 식별자Uniform Resource Identifier**의미
논리적 또는 물리적 리소스를 식별하는 고유한 문자열 시퀀스다. url 보다 큰 개념

### URL 
웹주소. 컴퓨터 네크워크 상에서 리소스가 어디 있는지 알려주기 위한 규약이다.

URI와 URL 구분 예시
- case01 . https://example.io 의 경우 https://example.io 라는 서버를 나타내기 때문에 URL이면서 URI이다.
- https://example.io/images 의 경우 example.io 서버의 images라는 네트워크 상의 자원의 위치를 의미하기 때문에 URL이면서 URI이다.
- https://example.io/images/dog.jpeg 의 경우 example.io 서버의 images 디렉터리 아래의 dog.jpeg를 가리키므로 URL이면서 URI이다.
- https://example.io/user/123 의 경우 URL은 https://example.io/user 까지고 원하는 정보에 도달하기 위한 식별자 123을 포함하면 URI이다. 즉, URI이지만 URL은 아니다.
- https://example.io/profile?id=11 의 경우도 마찬가지로 https://example.io/profile 까지는 URL이지만 원하는 정보에 도달하기 위한 식별자(여기서는 ?id=11)를 포함하면 URI가 된다. 즉, URI이지만 URL은 아니다.