# Serverless Framework으로 SPA(single page application) 배포하기
- https://serverless.com/framework/docs/


> AWS Lambda와 api gateway를 사용하여 작업하면 배포하는 부분에서 상당부분 시간을 사용한다. 또한 API Gateway와 lambda를 엮는 것은 별도의 설정 과정이 필요하며, Resource & Stage 개념이 있어서 변경사항이 생길 경우에 API배포를 매번 해주어야 한다.

Serverless framework는 이 모든 것을 자동화해주며, 내부적으로 CloudFormation을 사용하기 때문에 API gateway에서 api변동사항을 더욱 쉽게 반영해줄 수 있다

* AWS IAM -권한관리
* API Gateway - aws자원을 api로 연결 / http 엔드 포인트제공
* Lambda - 서버레스컴퓨팅
* S3 - data storage
* CloudFormation - aws 자원 총괄 / 모델링

## IAM 설정하기


