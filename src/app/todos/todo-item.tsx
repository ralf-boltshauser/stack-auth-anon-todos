"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Todo } from "@/generated/prisma";
import { Trash2 } from "lucide-react";

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <div className="flex items-center gap-2 p-3 border rounded-md bg-card shadow-sm">
      <Checkbox checked={todo.completed} />
      <span className="text-base">{todo.title}</span>
      <Button variant="ghost" size="icon" className="ml-auto">
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
}
