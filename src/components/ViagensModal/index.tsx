import { Dialog, DialogHeader, DialogContent, DialogTitle } from "../ui/dialog"

interface ViagensModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ViagensModal({isOpen, onClose}: ViagensModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>




    );
}