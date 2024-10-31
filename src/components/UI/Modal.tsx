import { type ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    title: string;
};

const Modal = ({ open, onClose, children, title }: ModalProps) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            sx={{ '& .MuiDialog-paper': { backgroundColor: '#3f3a46' } }}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default Modal;