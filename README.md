# PoinT 통증관리 시스템

<div align="center">
<img width="330" alt="image" src="src/assets/images/Logo.svg">
</div>

## 프로젝트 정보

> **Piehealthcare - PoinT**
<br/>**센터 회원용 웹앱 서비스 제작(모바일)** 
<br/>**개발기간: 2023.07.17 ~ 2023.08.10**

#### Note
백엔드 API가 종료되어 현재는 사용이 불가능합니다.
</br>
https://4-19-19px-fmny.vercel.app/
</br>
(더미데이터가 활용된 배포입니다.)

## 팀 소개

|팀장|팀원|팀원|팀원|
|:---:|:---:|:---:|:---:|
|<img width="160px" src="https://avatars.githubusercontent.com/u/94895962?v=4" />|<img width="160px" src="https://avatars.githubusercontent.com/u/45960361?v=4">|<img width="160px" src="https://avatars.githubusercontent.com/u/133086881?s=400&v=4">|<img width="160px" src="https://avatars.githubusercontent.com/u/137749126?v=4">|
|정혜인|강경서|남궁기현|박동진|
|[@Hyen636](https://github.com/Hyen636)|[@kangkyeongseo](https://github.com/kangkyeongseo)|[@CODINGANGRYBIRD](https://github.com/CODINGANGRYBIRD)|[@eastvvv](https://github.com/eastvvv)|
|- 퍼스널 레포트 리스트 페이지 <br/> - 강의 예약 페이지|- 퍼스널 레포트 상세 페이지 제작 <br/> - SWR 데이터 관리|- 로그인 페이지 <br/> - 알림 메세지 페이지|- 마이 페이지 <br/> - 초기 API 설정|

## 프로젝트 소개
**통증 관리 전문가들을 위한 올인원 고객 관리 전문 SaaS, 포인티**
</br>
</br>
회원 계정관리, 퍼스널 레포트 목록 및 상세 조회 가능하고 
</br>
센터에서 생성된 그룹 수업을 예약할 수 있는 시스템을 개발했습니다.

## 시작 가이드

### Requirements

For building and running the application you need:

- [Node.js](https://nodejs.org/ko/download)
- [npm](https://www.npmjs.com/package/package)

### Installation

``` bash
$ git clone https://github.com/pie-sfac/4-19-19px
$ cd 4-19-19px
$ npm ci
$ npm run dev
```

### ID / PASSWORD
id: test19</br>
password: test19!!

## 기술 스택

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) 

### Development

![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white)
![Eslint](https://img.shields.io/badge/eslint-4B32C3.svg?&style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-DF0067.svg?&style=for-the-badge&logo=prettier&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4.svg?&style=for-the-badge&logo=tailwindcss&logoColor=white)
![SWR](https://img.shields.io/badge/SWR-EEEEEE.svg?&style=for-the-badge&logo=&logoColor=white)
![Recoil](https://img.shields.io/badge/Recoil-3578E5.svg?&style=for-the-badge&logo=recoil&logoColor=white)
### Communication

![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white)

## 주요 기능

### Login
- 회원 인증을 통한 로그인이 가능합니다.
- 잘못된 ID 혹은 password 입력시 오류메세지를 브라우저에 나타냅니다.
- 비밀번호를 볼 수 있는 버튼이 있습니다.

### Personal Detail
- 날짜 슬라이더
    - 퍼스널 레포트 리스트 데이터를 통해 디테일 데이터의 유무를 표시합니다.
    - 퍼스널 디테일 페이지를 이동합니다.
- 미디어 섹션
    - 미디어 데이터(이미지, 비디오)를 모달창으로 표시합니다.
    - 모달상태에서 슬라이드를 통한 미디어 이동이 가능합니다.
- 아카이브 링크 섹션
    - 아카이브 링크(유튜브, 인스타그램, 틱톡)의 메타데이터를 파싱하여 리스트로 표시합니다.
- 피드백 섹션
    - 피트백 데이터를 표시합니다.
- 통증 그래프
    - 통증 데이터를 항목별로 그래프로 표시합니다.
- 리뷰 작성하기
    - 리뷰 데이터를 생성할 수 있습니다.
    - 중복된 리뷰 데이터 작성이 불가능합니다.
- 공유 섹션
    - 카카오톡 공유 API를 사용하여 링크를 공유할 수 있습니다.

### Personal Detail List
- 퍼스널 레포트 리스트를 조회합니다.
- 날짜와 통증에 따라 데이터를 정렬합니다.
- 무한 스크롤을 통해 데이터를 표시합니다.

### Reservation Page
- 날짜별 강의를 필터링합니다.
- 강의 예약 및 취소를 할 수 있습니다. 
- 예약된 강의 리스트를 조회합니다.

### Alarm Page
- 알림 메세지를 표시합니다.
- 무한 스크롤을 통해 데이터를 표시합니다.

### My Page
- 로그아웃 버튼을 통해 Token을 삭제하고 로그인 페이지로 이동할 수 있습니다.

## 구현 화면
### Login Page
![login](https://user-images.githubusercontent.com/45960361/262874437-f798d007-a2aa-47b2-ab6f-201e9d4f8684.gif)
### Detail Page
![detail](https://user-images.githubusercontent.com/45960361/262874704-d6125fea-3640-4ec2-9efa-f23a5fde82fe.gif)
### List Page
![list](https://user-images.githubusercontent.com/45960361/262874800-df0ca683-dee6-4a71-8769-6a7c3350db3f.gif)
### Reservation Page
![reservation](https://user-images.githubusercontent.com/45960361/262874912-2e245b14-283c-4a18-983c-7db6fbe01266.gif)
### Alarm & My Page
![alarm](https://user-images.githubusercontent.com/45960361/262875038-41046318-e01b-4629-8e9f-c2df7db84b99.gif)
