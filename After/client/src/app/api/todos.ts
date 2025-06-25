import React from 'react'

export interface Todo {
    id: number,
    title: string,
    completed: boolean,
}

export default async function getTodos(): Promise<Todo[]> {
    const res = await fetch(`${process.env.API_URL}/todos`);
    const data = await res.json();

  return data as Todo[];
}
