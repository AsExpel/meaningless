import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}
export async function testdb() {
  const testa=request.get("http://localhost/index.php/admin/index/get_id_to_name");
  console.log(testa);
  return testa;
}
export async function queryCurrent() {
  return request('/api/currentUser');
}
export async function queryNotices() {
  return request('/api/notices');
}
