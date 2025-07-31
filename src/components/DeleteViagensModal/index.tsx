
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";
import { ViagemData } from "@/lib/data";
import LargeButton from "../LargeButton";

interface DeleteViagemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  item: ViagemData | null;
}


export default function DeleteViagemModal({ isOpen, onClose, onConfirm, item }: DeleteViagemModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
        
          <DialogTitle><span className="text-primary"> Confirmar exclusão</span></DialogTitle>
          <DialogDescription>
            {`Tem certeza que deseja excluir? Essa ação não pode ser desfeita.`}
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-end gap-2">

          <Button onClick={onClose} type="button" className="h-full rounded-xl bg-red-600 text-white cursor-pointer" variant="outline">Cancelar</Button>
              <LargeButton onClick={onConfirm} text="Excluir"/>
        </div>
      </DialogContent>
    </Dialog>
  );
}