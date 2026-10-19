// App Store 주소가 생기면 넣는다. 비어 있으면 다운로드 버튼 대신 "출시 준비 중"을 보여 준다.
export const APP_STORE_URL = '';

/** Casebook 문서 사이트. Keystone이 처음 다루는 앱이라 홈에서 한 번 소개한다. */
export const CASEBOOK_URL = 'https://casebook.whitemason.club/';

/** base(astro.config.mjs)를 붙인 사이트 안 주소 */
export function url(path = '') {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
}
