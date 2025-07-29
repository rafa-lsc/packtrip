'use client';

import { useState } from "react";
import { LucideEdit, LucideTrash2 } from "lucide-react";
import { malaAPI } from "@/lib/storageApi/mala";

interface ItemListProps {
  id: string;
  name: string;
  quantity: number;
  category: string;
  marked?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function ItemList({
  id,
  name,
  quantity,
  category,
  marked,
  onEdit,
  onDelete,
}: ItemListProps) {
  const [checked, setChecked] = useState(marked || false);

  const handleCheck = () => {
    const newChecked = !checked;
    setChecked(newChecked);

    malaAPI.update({
      id,
      name,
      quantity,
      category,
      marked: newChecked,
    });
  };

  return (
    <div className="flex flex-wrap items-center justify-between bg-gray-100 rounded-lg p-2">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="outline-0 border border-primary size-5 text-[#0c70b6]"
          checked={checked}
          onChange={handleCheck}
        />
        <span
          className={`text-primary font-medium ${
            checked ? 'line-through text-gray-500' : ''
          }`}
        >
          {name} ({quantity}) - {category}
        </span>
      </div>

      <div className="flex ml-auto gap-3 text-primary justify-self-end">
        <LucideEdit
          className="cursor-pointer hover:opacity-70"
          size={20}
          onClick={onEdit}
        />
        <LucideTrash2
          className="cursor-pointer hover:opacity-70"
          size={20}
          onClick={onDelete}
        />
      </div>
    </div>
  );
}
