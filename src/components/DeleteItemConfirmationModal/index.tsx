
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";
import { ItemListType } from "@/lib/data";
import LargeButton from "../LargeButton";
interface DeleteItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  item: ItemListType | null;
}

export default function DeleteItemModal({ isOpen, onClose, onConfirm, item }: DeleteItemModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
        
          <DialogTitle><span className="text-primary"> Confirmar exclusão</span></DialogTitle>
          <DialogDescription>
            {`Tem certeza que deseja excluir o item "${item?.name}"? Essa ação não pode ser desfeita.`}
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-end gap-2">

          <Button onClick={onClose} type="button" className="h-full bg-red-600 text-white cursor-pointer" variant="outline">Cancelar</Button>
              <LargeButton onClick={onConfirm} text="Excluir"/>
        </div>
      </DialogContent>
    </Dialog>
  );
}
