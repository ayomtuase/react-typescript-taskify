export default interface Todo{
    id: number,
    todo: string,
    isDone: boolean,
}

export type TODOACTION =
  | { type: "add"; payload: Todo["todo"] }
  | { type: "edit"; payload: { id: Todo["id"]; todo: Todo["todo"] } }
  | { type: "delete"; payload: Todo["id"] }
  | { type: "completed"; payload: Todo["id"] };