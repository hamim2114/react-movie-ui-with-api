import React, { useContext, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './modal.scss'
import { ModalContext } from '../../context/modalContext'

const Modal = (props) => {
    const {modalActive, dispatch} = useContext(ModalContext)
    
  return (
    <div id={props.id} className={`modal ${modalActive ? 'active' : ''}`}>
        {props.children}
    </div>
  )
}

Modal.PropTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
}

export const ModalContent = ({children}) => {
    const {modalActive, dispatch} = useContext(ModalContext)
    const contentRef = useRef(null);

    const closeModal = () => {
        dispatch({type: "DEACTIVE_MODAL"})
    }
    return (
        <div className="modal__content">
            {children}
            <div className="modal__content__close" onClick={closeModal}>
                <i className='bx bx-x'></i>
            </div>
        </div>
    )
}

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
}

export default Modal