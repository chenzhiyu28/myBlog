export interface User {
  name: string;
  email: string;
}


export function getUsers(options) {
  const res = fetch(`${process.env.API_URL}/users`,options);
  const data = res.json();
  return data as User[];
}

export function getUser(userId, options) {
  return baseApi.get(`users/${userId}`, options).then(res => res.data)
}
