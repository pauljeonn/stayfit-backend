![이미지](https://pauljeon.s3.ap-northeast-2.amazonaws.com/stayfit-hero3.svg)

# STAYFIT

가장 쉬운 건겅관리의 첫걸음

## Introduction

의지가 부족해서, 또는 바쁘다는 이유로 운동 계획이 항상 작심삼일로 끝나버리는 사람들을 위하여 제작한 앱 입니다. 사용자가 오늘 완료해야 하는 운동에만 집중할 수 있도록 직관적이고 미니멀한 UI를 적용하였습니다.

## Key Features

- **운동 생성** - 사용자는 새로운 운동을 추가할 수 있습니다. 운동을 추가하면 자동으로 목록이 업데이트 됩니다.
- **운동 편집** - 사용자는 운동을 추가할 때 지정한 운동 이름, 목표, 요일을 수정할 수 있습니다.
- **운동 삭제** - 사용자는 생성한 운동을 삭제할 수 있습니다.
- **운동 완료 / 완료 취소** - 메인 화면에서 목록에 있는 운동의 체크박스를 클릭하면 체크 표시가 생기며 해당 운동이 완료됩니다. 다시 클릭하면 체크 표시가 사라지며 미완료 상태로 변경됩니다.
- **회원가입** - 회원가입 페이지에서 새로운 계정을 생성할 수 있습니다.
- **로그인** - 로그인 페이지에서 존재하는 계정으로 로그인 할 수 있습니다.

## Tech Stack

- Language: `JavaScript`
- Frontend: `React`, `Redux`, `redux-persist`, `styled-components`, `day.js`, `react-icons`
- Backend: `Node.js`, `express`, `mongoose`, `dotenv`, `bcrypt`
- Database: `MongoDB`
- [프론트엔드 Repository](https://github.com/pauljeonn/stayfit-frontend)

## Contribution

@pauljeonn (개인 프로젝트)

## What I Learned

- Redux, React Redux, Redux Toolkit을 사용하여 전역 상태 관리
- React Redux에서 제공하는 useSelector 및 useDispatch Hook을 통해 상태 추출 및 액션 호출
- Redux Toolkit에서 제공하는 createSlice 함수를 통해 액션 및 리듀서 기능 구현
- Redux Toolkit에서 제공하는 createAsyncThunk 함수를 통해 비동기 작업 처리
- Redux Persist 라이브러리를 통해 localStorage에 리듀서 상태 저장 (새로고침 시 로그인 유지)
- Day.js 라이브러리 사용하여 날짜 포매팅 및 표시
- Mongoose 라이브러리를 사용하여 NoSQL 스키마 정의 및 모델 생성
- Mongoose Query를 사용하여 MongoDB와 연동된 데이터 조작
- bcrypt 라이브러리 통해 암호 해시화 및 보안 강화
- Postman 사용하여 REST API 테스트 진행

## Demo

### 1. 운동 완료 / 운동 취소

![완료](https://pauljeon.s3.ap-northeast-2.amazonaws.com/stayfit-done.gif)

### 2. 운동 생성

![생성](https://pauljeon.s3.ap-northeast-2.amazonaws.com/stayfit-add.gif)

### 3. 운동 편집

![편집](https://pauljeon.s3.ap-northeast-2.amazonaws.com/stayfit-edit.gif)

### 4. 운동 삭제

![삭제](https://pauljeon.s3.ap-northeast-2.amazonaws.com/stayfit-delete.gif)

### 7. 회원가입

![회원가입](https://pauljeon.s3.ap-northeast-2.amazonaws.com/stayfit-register.gif)

### 8. 로그인

![로그인](https://pauljeon.s3.ap-northeast-2.amazonaws.com/stayfit-login.gif)

### 9. 로그아웃

![로그아웃](https://pauljeon.s3.ap-northeast-2.amazonaws.com/stayfit-logout.gif)
