# keystone-pages

Keystone 앱의 웹사이트예요. 홈(소개 · 기능 · 키와 개인정보 · 시작하기 · 지원)과 개인정보 처리방침이 있어요.
Casebook 문서 사이트(casebook-pages)와 같은 디자인 토큰 · 레이아웃을 써요. [Astro](https://astro.build)로 만들고, `main`에 푸시하면 GitHub Actions가 빌드해서 GitHub Pages에 배포해요.

- 사이트: https://keystone.whitemason.club/

## 로컬에서 실행하기

Node 22.12 이상이 필요해요.

```sh
npm install --no-package-lock
npm run dev      # 미리 보기
npm run build    # 빌드(커밋 전에 경고 없이 성공해야 해요)
```

## 꼭 알아 둘 것

- `privacy.html` · `/#support` 주소와 처리방침 `#p1`~`#p12` 앵커는 App Store Connect에 등록할 주소예요. 공개한 뒤에는 바꾸지 않아요(`build.format: 'preserve'`).
- 처리방침 본문은 운영자의 승인 없이 고치지 않아요. 앱의 키 저장 · 연결 대상이 바뀌면(whitemason-appstoreconnect-appleos의 "키와 개인정보") 처리방침도 함께 고쳐요.
- 연락처 `engineering@whitemason.club`은 처리방침 11장에만 적어요. 홈에는 이메일을 쓰지 않아요.
- App Store · TestFlight 링크는 `src/consts.ts`의 `APP_STORE_URL` · `TESTFLIGHT_URL`에서 바꿔요. 둘 다 비어 있으면 "App Store 출시 준비 중"이 보여요.
- 디자인 토큰(`src/styles/tokens.css`)은 casebook-pages에서 가져왔어요. 그쪽 토큰이 바뀌면 함께 맞춰요.
- 홈의 앱 화면 그림은 실제 App Store Connect 화면 캡처가 아니라 HTML로 그린 그림이에요. 계정 정보가 보이는 캡처를 넣지 않아요.
