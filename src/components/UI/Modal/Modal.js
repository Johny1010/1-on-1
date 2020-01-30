import React from 'react';

import classes from './Modal.module.css'

const Modal = ({ children, hide }) => {
  return (
          <div className={classes.Modal}>
              <div className={classes.Backdrop}
                   onClick={hide}>
              </div>
              <div className={classes.ModalCard}>
                  { children }
              </div>
          </div>

  );
};

export default Modal;