'use client';

import { useState } from "react"
import { LucideEdit } from "lucide-react"
import { LucideTrash2 } from "lucide-react"
interface ItemListProps {
    name: string
    quantity: number
    category: string
  }
export default function ItemList({ name, quantity, category }: ItemListProps) {

    const [checked, setChecked] = useState(false);
  
    return (
      <div className="flex flex-wrap items-center justify-between bg-gray-100 rounded-lg p-2">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="outline-0 border-solid border  border-primary size-5 text-[#0c70b6]" onChange={() => setChecked(!checked)} />
          <span className={`text-primary font-medium ${ checked ? 'line-through text-gray-500' : ''} `}>
            {name} ({quantity}) - {category}
          </span>
        </div>
        <div className="flex ml-auto gap-3 text-primary justify-self-end">
          <LucideEdit className="cursor-pointer hover:opacity-70" size={20} />
          <LucideTrash2 className="cursor-pointer hover:opacity-70" size={20} />
        </div>
      </div>
    )
  }