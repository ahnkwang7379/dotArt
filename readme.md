<h1 align="center">Dot Art</h1>

<p align="center">
  <img src="./frontend/screenshots/jellyppi.gif" width="216px"/>
</p>

# Div를 이용해 도트를 찍어보자

Div와 CSS를 이용해 도트를 찍는 앱입니다.
CSS의 box-shadow와 keyframes를 이용해 도트 그림으로 만들 수 있습니다.

귀여운 젤리가 그려진 데모 사이트 [직접 해보러 가기](https://ahnkwang7379.github.io/dotArt/) :pencil2:

<p align="center"> 
  <img src="./frontend/screenshots/jellyppi.png" width="700px"/> 
</p>

<br>

# 간단한 사용법

## Paint Tool

<img src="./frontend/screenshots/paintTools.png"/>

- 연필, 색 채우기, 지우개 등 기본적인 기능
- 프레임 전체를 움직일수 있는 move 툴
- 각 도구별 단축키가 지정되어있습니다.
  <br>

---

## Layer

<img src="./frontend/screenshots/layer.png"/>

- 레이어 생성/복사/삭제/합치기 기능
- merge시 상위 레이어에게 우선 순위가 있습니다.

---

## Palette

<img src="./frontend/screenshots/palette.png"/>

- 사용자 정의 팔레트 사용 가능
- 한 라인에 최대 7개까지 색이 지정 가능하며 키보드 위 아래 방향키를 이용해 라인을 이동할 수 있습니다.
- 1 ~ 7까지 단축키가 지정되어 각 라인별 색상을 바로바로 사용 가능합니다.

---

## Minimap

<img src="./frontend/screenshots/minimap.png"/>

- 빨간 네모박스는 실제로 보고있는 화면의 범위를 나타내줍니다.
- 네모박스를 드래그하면 그에 맞춰 화면을 조절해 원하는 곳으로 편하게 이동할 수 있게 해줍니다.
- 그 외에 애니메이션 시간을 조절할 수 있습니다. (FPS가 아니라 조금 어색할 수 있지만 CSS의 animation은 총 애니메이션 시간인 duration으로 표현되기 때문에 몇 초 내에 전체 프레임을 다 보여주는 지 표현했습니다.)
- <img src="./frontend/screenshots/frame.png"/>
- frame list의 하단 숫자를 바꾸는 것으로 각 frame이 애니메이션에서 차지하는 비율을 따로 지정할 수 있습니다.
- 위의 이미지에서 20은 2초의 애니메이션의 20%인 0.4초동안 유지됨을 의미합니다.

---

## etc

<img src="./frontend/screenshots/setting.png"/>

- localStorage에 세이브/로드가 가능합니다.
- 작업물을 png, gif형식으로 다운로드 가능하며 sprite 형식으로도 가능합니다.
- <img src="./frontend/screenshots/jellysprite.png"/>
- 웹에서 사용 가능한 CSS 코드도 지원합니다. 복사 후 html 요소에 class 이름으로 .dotArt-to-css를 붙여주면 됩니다.
- 또한 dotArt를 JSON 형식으로 다운로드 받을 수 있으며 (.dotart 파일로 다운로드 됩니다), 다른 컴퓨터에서 import해 작업을 이어나갈 수 있습니다.

# 기술 스택

- [react](https://facebook.github.io/react/) : 인터페이스 구현을 위한 react
- [react-hooks](https://ko.reactjs.org/docs/hooks-reference.html) : 함수형으로 설계되었습니다.
- [redux](http://redux.js.org/) : 넓은 범위에서 쓰이는 state를 편하게 관리하기 위해 적용
- [redux-actions](https://redux-actions.js.org/) : redux의 action을 더 간단하게 만들었습니다.
- [style-components](https://styled-components.com/) : CSS IN JS 라이브러리
- [immer](https://immerjs.github.io/immer/docs/introduction) : 불변성 + 코드 가독성을 위해 적용

## 설치

frontend 폴더에서

```
yarn install
```

## 실행

frontend 폴더에서

```
yarn start
```
