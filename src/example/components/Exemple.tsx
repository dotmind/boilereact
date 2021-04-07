import React, { ReactElement, useCallback, useMemo } from 'react';
import Status from 'internal/constants/status';

import styles from 'example/components/Exemple.module.scss';
import { FetchDogStartType } from 'example/types/actions';

import Spinner from 'fragments/spinner/Spinner';

export type StateProps = {
  dogs: string[],
  status: Status,
};

export type DispatchProps = {
  fetchDog: () => FetchDogStartType,
};

type Props = StateProps & DispatchProps;

const Example = ({ status, dogs, fetchDog }: Props): ReactElement => {
  const renderImages = useMemo(() => {
    return dogs.map((dog, i) => (
      <img className={styles.container__image} key={i} src={dog} alt='dogs' />
    ));
  }, [dogs]);

  const fetchDogImage = useCallback(() => {
    fetchDog();
  }, [fetchDog]);

  const renderLoader = useMemo(() => (
    <Spinner />
  ), []);

  return (
    <div className={styles.container}>
      <button className={styles.container__button} onClick={fetchDogImage}>Do an exemple fetch</button>
      <div className={styles.container__imageWrapper}>
        {renderImages}
      </div>
      {status === Status.LOADING && renderLoader}
    </div>
  );
};

export default Example;
