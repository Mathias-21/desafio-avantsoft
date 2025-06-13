export function getLocalStoragedToken() {
  const token = localStorage.getItem('token');

  return token;
}
