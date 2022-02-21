import React from 'react';
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useModalContext } from "../../contexts/ModalContext";

interface OverlayProps {
    visible?: boolean,
    fadeType?: string | null
}

const StyledOverlay = styled(motion.div)<OverlayProps>`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.56);
    top: 0;
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(2px);
`;

const StyledModal = styled(motion.div)<OverlayProps>`
    min-width: 450px;
    min-height: 450px;
    width: auto;
    height: auto;
    padding: 40px;
    background-color: #f2f2f2;
    padding: 38px 40px 40px 40px;
    // border-radius: 12px;
    display: flex;
    justify-content: center;
    @media (max-width: 650px) {
        min-width: 250px;
        min-height: 300px;
        width: 70%;
        padding: 15px;
    }
`;

const StyledClose = styled.div`
    position: absolute;
    top: 0;
    right: -40px;
    color: black;
    font-size: 40px;
    line-height: 21px;
    cursor: pointer;
    z-index: 101;
    &:hover {
        color: white;
    }
`;

interface ModalProps {
    handleClose?(): any
}

const Modal: React.FC<ModalProps> = () => {
    const { modal, handleModal, modalContent, onKeydown } = useModalContext();
    
    const handleClose = (e: any) => {
        e.preventDefault();
        handleModal(false);
    };
    
    React.useEffect(() => {
        modal
            ? document.addEventListener('keydown', onKeydown)
            : document.removeEventListener('keydown', onKeydown)
    }, [ modal ]);
    
    return (
        <AnimatePresence>
            {
                modal && (
                    <StyledOverlay
                        onClick={ handleClose }
                        visible={ modal }
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1 } }
                        transition={ { duration: .5 } }
                        exit={ { opacity: 0 } }
                    >
                        <StyledModal
                            onClick={ (e) => e.stopPropagation() }
                            initial={ { opacity: 0, transform: 'translateY(-20%)' } }
                            animate={ { opacity: 1, transform: 'translateY(0%)' } }
                            transition={ { duration: .4 } }
                            exit={ { opacity: 0, transform: 'translateY(-20%)' } }
                        >
                            <StyledClose onClick={ handleClose }>&times;</StyledClose>
                            { modalContent }
                        </StyledModal>
                    </StyledOverlay>
                )
            }
        </AnimatePresence>
    )
};

export default Modal;
