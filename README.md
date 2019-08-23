# Blockchain Web Application
# 프로젝트 명 : 인공지능 음성인식을 통한 편의점 상품정보 알림 시스템
- 이마트24 협업
# 진행 시기 : 18.09.03 – 18.12.21 
## 프로젝트 설명 : 이마트 24와 연계한 무인 편의점 프로젝트 입니다. 해당 프로젝트는 교내 우수상을 받은 작품입니다. [33팀 중 2등]
(1) 제작 내용 및 제작 방법

 	- 음성인식 API을 활용하여 사용자가 편의점에 있는 상품의 위치, 재고, 정보 등을 확인할 수 있는 어플리케이션 개발
 	- 사용자의 검색에 따른 추천 상품 제공
 	- 사용자 구매정보를 통하여 같이 구매한 제품 정보 수집 및 제공
 	- 웹 음성인식 API(Annyang, SpeechSynthesis)을 활용한 편의점 상품정보 알림 및 추천 시스템 웹 어플리케이션을 개발

(2) 제작 결과

	- 음성인식 API : 사용자의 음성을 입력받고 분석하기 위해 웹에서 작동하는 음성인식 API인 ‘Annyang’과 ‘SpeechSynthesis’를 사용하였다.<br> Annyang은 Asynchronous Speech Recognition에 해당하는 음성인식 기술로, 사용자가 말했을 때 이를 Text로 변환시켜주는 API이고, SpeechSynthesis는 Text-to-Speech에 해당하는 음성인식 기술로, 문자를 음성으로 변환해 내보내는 API이다.
 즉, Annyang API를 통해 사용자의 음성을 입력받아 문자열로 변환하여 분석 후, 결과를 SpeechSynthesis를 통해 문자를 소리로 변환해 사용자에게 알려주는 기능을 한다.

	- Web Application : Web Application을 구현하기 위해 Node.js의 Express 프레임워크를 사용하여 서버를 구성하였고, 웹페이지 템플릿은 Bootstrap4 기초 템플릿을 활용하여 AJAX를 사용하여 비동기적으로 데이터를 불러오며, JQuery, CSS등을 이용하여 역동적인 Front를 개발하였다. 또한 Google Material Design의 다양한 Component를 불러와 구현하였다.

 	- DataBase : AWS의 RDS를 사용하여, 데이터베이스 서버를 구축하였다. 데이터베이스는 이마트에서 제공한 emart24 매장 내 제품 목록, 가격, 재고 수량 등의 데이터를 토대로 DB의 Product Table를 만들었으며, 사용자의 음성인식 결과를 Query문에 활용하여, 찾고자하는 상품의 정보를 사용자에게 알려줄 수 있으며, 또한 Recommendation Table로 추천 상품 서비스를 제공할 수 있다. 
<br>

본인 역할<br>
1. 데이터베이스 설계<br>
2. Raspberry Pi 최적화<br>
3. Node.js 와 DB 연동<br>
4. Ajax 적용<br>
5. 쿼리문 작성 및 예외처리<br>
개발언어 : Java script, MySQL

![그림1](https://user-images.githubusercontent.com/15652602/63578442-72689400-c5cb-11e9-9419-ab5c3b0575da.png)
![그림2](https://user-images.githubusercontent.com/15652602/63578443-73012a80-c5cb-11e9-9ae4-e11be0b0b30d.png)
![그림3](https://user-images.githubusercontent.com/15652602/63578444-73012a80-c5cb-11e9-8649-0a08731739d0.png)
