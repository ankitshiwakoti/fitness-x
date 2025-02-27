import { request } from '@umijs/max';

/** get dicts GET /api/dict/getDicts
 * @param options request config
 * @returns dicts
 */
export async function getMembers(options?: Record<string, any>) {
  return request<API.R<API.Service.Member[]>>('/api/members', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function deactivateMember(id: number) {
  return request<API.R<API.Service.Member>>(`/api/members/${id}/deactivate`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function activateMember(id: number) {
  return request<API.R<API.Service.Member>>(`/api/members/${id}/activate`, {
    method: 'PATCH',
  });
}
