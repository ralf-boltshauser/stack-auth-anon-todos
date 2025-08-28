"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Todo } from "@/generated/prisma";
import { useState } from "react";
import { createTodo } from "./actions";
import TodoItem from "./todo-item";

export default function TodosList({ todos }: { todos: Todo[] }) {
  const [title, setTitle] = useState("");

  const handleCreateTodo = async () => {
    await createTodo({ title });
    setTitle("");
  };

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold">Todos</h1>
      <div className="flex gap-2">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a todo"
        />
        <Button onClick={handleCreateTodo}>Add</Button>
      </div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
