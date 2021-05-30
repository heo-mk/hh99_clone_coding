# hh99_clone_coding
![unnamed (1)](https://user-images.githubusercontent.com/79818840/114365531-85234880-9bb5-11eb-844e-5909d9f38d47.jpg)

## 항해99 1기 클론코딩 프로젝트 - 인스타그램

## 개요
- 개발 인원 : 3명 (프론트 2명[허민규,이대호], 백엔드 3명[조항덕])
- 개발 기간 : 2021.04.02 ~ 2021.04.08
- 개발 환경 : React, Spring
- 형상 관리 툴 : git
- 일정 관리 툴 : [Notion](https://www.notion.so/e42a377457bb4cd0be96e1f9b3cb3b66)
- 사이트링크 : [CloneStagram](http://instagram99.shop/)
- 시연 영상 : [유튜브 링크](https://www.youtube.com/watch?v=ixMeFdVdCLs&t=118s)

## 프로젝트 특징
- 클론코딩 : 프론트엔드와 백엔드가 자신이 배운 주특기를 이용해 실제 운영하는 웹사이트와 최대한 비슷한 기능과 뷰를 구현하는 것이 목표
- React, Spring을 기반으로 프로젝트 구현
    - 각 파트의 별도 Repository를 생성 후 작업
    - 프론트 : AWS S3 정적 호스팅
    - 백엔드 : AWS EC2 서버 호스팅
    - 빌드 후, S3와 EC2 연동

## 배운것

### **새로 배운 개념**

1\.  **Axios**를 사용해서 서버와 데이터를 주고 받기.
2\.  **Mock API**를 이용해서 서버와 데이터를 주고받기 전에 내 데이터가 잘 보내지고 받아지는지 테스트 하기.

<br>

### **기능 구현**

### **1\. 로그인 & 회원가입**

로그인 회원가입은 **firebase에서 Authorization**을 사용해서 구현했습니다. 회원가입에는 사용할 아이디를 이메일 형식으로 만들게했고, 유저 이름, 비밀번호, 프로필 사진을 첨부하게했습니다. 프로필 사진을 따로 넣지 않으면 default로 되었있는 이미지를 넣었습니다. **로그인을해야 게시물을 볼 수있게 App.js에서 조건부 렌더링**을 사용했습니다.
