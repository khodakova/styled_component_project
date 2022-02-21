import React from "react";

const useModal = () => {
    let [modal, setModal] = React.useState(false);
    let [modalContent, setModalContent] = React.useState<React.ReactElement | boolean>(false);

    let handleModal = (content: React.ReactElement | boolean = false) => {
        setModal(!modal);
        if (content) {
            setModalContent(content);
        }
    };

    const onKeydown = ({ key }: KeyboardEvent) => {
        switch (key) {
            case 'Escape':
                handleModal(false);
                break
        }
    };

    const handleClose = () => {
        setModal(!modal);
        setModalContent(false);
    };

    let handleChangeContent = (content: React.ReactElement | boolean = false) => {
        if (content) {
            setModalContent(content);
        }
    };

    return { modal, handleModal, modalContent, handleClose, handleChangeContent, onKeydown };
};

export default useModal;
