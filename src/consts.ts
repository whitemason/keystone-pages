// App Store 주소가 생기면 넣는다. 비어 있으면 App Store 버튼을 숨긴다.
export const APP_STORE_URL = 'https://apps.apple.com/kr/app/id6824511302';
// App Store 차트 순위. 날마다 바뀌는 값이라 기준 날짜를 함께 적고, 손으로 고친다. 보여 주지 않으려면 null.
export const APP_STORE_CHART: { category: string; rank: number; date: string } | null = {
  category: '개발자 도구',
  rank: 53,
  date: '2026년 10월 29일',
};
// TestFlight 공개 베타. 출시 후 베타를 닫으면 비운다.
// 상단 막대에는 App Store 버튼이 있으면 그것만, 없으면 TestFlight 버튼을 보여 준다.
// 홈에는 App Store 버튼 밑에 TestFlight 텍스트 링크를 둔다. (App Store 주소가 없으면 TestFlight 버튼, 둘 다 없으면 "출시 준비 중")
export const TESTFLIGHT_URL = 'https://testflight.apple.com/join/FAw87bVZ';

/** Casebook 문서 사이트. Keystone이 처음 다루는 앱이라 홈에서 한 번 소개한다. */
export const CASEBOOK_URL = 'https://casebook.whitemason.club/';

/** base(astro.config.mjs)를 붙인 사이트 안 주소 */
export function url(path = '') {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
}
