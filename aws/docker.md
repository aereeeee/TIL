# 도커

입문추천   
- [1](https://futurecreator.github.io/2018/11/16/docker-container-basics/)
- [2](https://subicura.com/2017/01/19/docker-guide-for-beginners-1.html)
  
클라우드 컴퓨팅 -> 이제 백 개발자가 서버세팅, 배포 모두 책임지게 됨

### 도커
VM - 서버위에 OS를 돌리기위해 엄청난 오버헤드
도커 - 컨테이너 단위로 프로세스만 격리되어 다른 서비스로서 동작(느끼기에는 다른 OS), 오버헤드 거의 없음  
이미지를 이용해서 여러개의 컨테이너를 만듦  
컨테이너는 종료되면서 내용다 삭제됨  

#### 이미지
> 이미지는 컨테이너 실행에 필요한 파일과 설정값등을 포함하고 있는 것으로 상태값을 가지지 않고 변하지 않는다(Immutable). 컨테이너는 이미지를 실행한 상태라고 볼 수 있고 추가되거나 변하는 값은 컨테이너에 저장된다. 같은 이미지에서 여러개의 컨테이너를 생성할 수 있고 컨테이너의 상태가 바뀌거나 컨테이너가 삭제되더라도 이미지는 변하지 않고 그대로 남아있는다.

* 레이어방식 - 우분투 이미지 받아서 엔지닉스 설치/ 도커파일이 레이어로 쌓임 / run 명령어 기준으로 쌓임? 따라서 한줄로 명령하면 오버헤드 줄일 수 있음
* 이미지 확장자 - 도커파일 
* 운영체제까지 완전히 감싸서 프로그램 관리. 버전이 다른 서버도 처리가능..
* 원래는 pip3 list 했을떄 아무것도 없는 깨끗한 환경이여야.

```
django-admin startproject myself 
python3 manage.py runserver 
```
```
vi requirements.txt

    Django==2.1.5
    pytz==2018.9

cat requirements.txt
```
파이썬 컨테이너 깔기  
```
docker run --rm -it python:3.7.2-slim /bin/bash
```
--rm : 컨테이너 꺼지면 삭제한다  
it : 쉘처럼 쓰는  
파이썬까지 : 이미지 이름  
bash : 실행할 프로그램 

- cf) [pyenv와 virtualenv를 사용한 파이썬 개발환경 구성](https://lhy.kr/configuring-the-python-development-environment-with-pyenv-and-virtualenv)
  
컨테이너 내부
root@-:/# python
root@-:/# pwd //루트에 있음

여기서 디장고 깔고 런서버해보기   
기본적으로 도커는 호스트(컨테이너를 실행한 환경)와 격리되어있음  
컨테이너 바깥쪽에서 `docker ps`보면 포트없음  
호스트-컨테이너 통신방법 필요

```
docker run --rm -it -p 7999:8000 python:3.7.2-slim /bin/bash
```
#### ignore파일 만들기
**gitignore.io**  
누가받아도 유효하도록 맥, 윈도우 등등 포함시키면 좋음

도커파일 작성
```dockerfile
FROM        python:3.7.2-slim
MAINTAINER dofl5576@gmail.com

#실헹할 명령어
RUN         pip install django
# cd와 같은 효과
WORKDIR     /srv

RUN     django-admin startproject myself
WORKDIR /srv/myself
# 이 이미지로 컨테이너 런 했을 때 실행할 명령
CMD     python manage.py runserver 0:8000
#커맨드는 도커파일 전체에서 단 한번만 쓸수있음
```
```
docker build -t myself .
```
빌드 계속해도 변화없음 using cache로 씀  
변경되면 항상 빌드해야함  
  
이제 이미지 만들었기 때문에 바로 myself를 런시킬수 있음 
``` 
docker run --rm -it -p 7999:8000 myself
```

```dockerfile
#설치 패키지 정보가 담긴 파일을 이미지의 tmp에 복사
COPY        requirements.txt   /tmp/requirements.txt
#이미지에 파이썬 패키지 설치
RUN         pip install -r /tmp/requirements.txt
#현재 디렉토리 모든 내용을 srv/에 복사
COPY        . /srv/project/
#복사한 소스 경로로 이동후 개발서버 실행
WORKDIR     /srv/project
CMD     python manage.py runserver 0:8000
```

## AWS
우분투18.04 인스턴스  
보안그룹 만들기 - 인바운드 ssh 22번 포트 열기/http 80번 포트도
  
키페어 옮기기 mv downloads/dd.pem ~/.ssh/  
ssh -i ~/.ssh/docker-practice.pem ubuntu@ec2-.ap-northeast-2.compute.amazonaws.com

#### 권한 바꾸기
cd ~/.ssh
.ssh chmod 400 dd.pem
-rw-r--r--@   1 j  staff   1.7K  2  2 17:34 dd.pem
-r--------@   1 j  staff   1.7K  2  2 17:34 dd.pem

#### 아마존 서버에 장고 설치 런서버
```
  sudo apt update
  sudo apt install python3-pip
  pip3 install django
  # 재접속
  mkdir ~/example
  cd ~/example
  django-admin startproject app
  cd app
  sudo python3 manage.py runserver 0:80
```

  * 도커파일은 이미지 만드는용
  * myself안의 파일이 실행파일

  - [참조](https://github.com/LeeHanYeong/DockerExample)