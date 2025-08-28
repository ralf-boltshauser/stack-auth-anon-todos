"use server";

import { prisma } from "@/lib/client";
import { stackServerApp } from "@/stack";

export async function getTodos() {
  const user = await stackServerApp.getUser({ or: "anonymous" });
  const todos = await prisma.todo.findMany({
    where: {
      userId: user.id,
    },
  });
  return todos;
}

export async function createTodo({ title }: { title: string }) {
  const user = await stackServerApp.getUser({ or: "anonymous" });
  const todo = await prisma.todo.create({
    data: {
      title,
      userId: user.id,
    },
  });
  return todo;
}

export async function deleteTodo({ id }: { id: string }) {
  const user = await stackServerApp.getUser({ or: "anonymous" });
  const todo = await prisma.todo.delete({
    where: {
      id,
      userId: user.id,
    },
  });
  return todo;
}

export async function updateTodo({
  id,
  completed,
}: {
  id: string;
  completed: boolean;
}) {
  const user = await stackServerApp.getUser({ or: "anonymous" });
  const todo = await prisma.todo.update({
    where: { id, userId: user.id },
    data: {
      completed,
    },
  });
  return todo;
}
