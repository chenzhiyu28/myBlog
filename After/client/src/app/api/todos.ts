export interface Todo {
    id: number,
    title: string,
    completed: boolean,
}

export default async function getTodos(): Promise<Todo[]> {
    wait(1000);
    const res = await fetch(`${process.env.API_URL}/todos`);
    const data = await res.json();

  return data as Todo[];
}

function wait(duration: number) {
    return new Promise((resolve) => 
        setTimeout(resolve, duration));
}