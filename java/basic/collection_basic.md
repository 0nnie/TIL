# Collection Framework



자바에서 말하는 컬렉션이란? java.util 패키지에 인터페이스와 클래스를 모두 일컫는다.

<img src="/image/c01.png">


## Map collection

key(객체)-value(객체)로 구성된 Entry객체를 저장한다.
만약 동일 키를 저장한다면 이전 key는 없어지고 새로운 값으로 대체된다.

### HashMap
```java

//HashMap 생성
//Map< keyType, valueType > map = new HashMap< keyType, valueType >();
Map< String, Integer > map = new HashMap< String, Integer >();

//map에 저장된 객체 수 
map.size();

//key 값 검색해서 value 출력
map.get("keyName");


```

