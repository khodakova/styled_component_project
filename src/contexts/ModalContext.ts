import {createContext, useContext} from "react";

export type ModalType = {
    modal: boolean,
    handleModal: (arg?: any) => any,
    modalContent: React.ReactNode | boolean,
    handleClose: () => any,
    handleChangeContent: (arg?: any) => any,
    onKeydown: (arg?: any) => any,
}

export const ModalContext = createContext<ModalType>({
    modal: false,
    handleModal: () => {},
    modalContent: false,
    handleClose: () => {},
    handleChangeContent: () => {},
    onKeydown: () => {},
});

export const useModalContext = () => useContext(ModalContext);
