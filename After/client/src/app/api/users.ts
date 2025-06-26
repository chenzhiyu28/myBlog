export interface User {
  id: number;
  name: string;
  email: string;
  website: string;
  address: address;
  company: company;
}


export interface address {
  city: string;
  street: string;
  zipcode:string;
  suite: string;
}

export interface company {
  name: string;
}

export async function getUsers() {
  wait(1000);
  const res = await fetch(`${process.env.API_URL}/users`);
  const data = await res.json();
  return data as User[];
}

export async function getUserById(userId: string|number) {
  await wait(1000);
  const url = `${process.env.API_URL}/users/${userId}`;
  const res = await fetch(url);
  const data = await res.json();
  return data as User;
}

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}