import React, { ReactElement } from 'react';

import styles from 'fragments/spinner/Spinner.module.scss';

const Spinner = (): ReactElement => (
  <div className={styles['lds-ring']}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Spinner;
