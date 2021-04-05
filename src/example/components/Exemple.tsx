import React, { ReactElement, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useApi, { Methods } from 'internal/hooks/useApi';
import Status from 'internal/constants/status';

import { RANDOM_DOG_ENDPOINT } from 'example/constants/endpoints';
import { selectDog } from 'example/selectors/exempleSelectors';
import { addDog } from 'example/slices/exempleSlice';

import Spinner from 'fragments/spinner/Spinner';

import styles from 'example/components/Exemple.module.scss';

const Example = (): ReactElement => {
  const dogs = useSelector(selectDog);
  const dispatch = useDispatch();

  const { request, response, status } = useApi(Methods.GET, RANDOM_DOG_ENDPOINT);

  const renderImages = useMemo(() => {
    return dogs.map((dog, i) => (
      <img className={styles.container__image} key={i} src={dog} alt='dogs' />
    ));
  }, [dogs]);

  const fetchDogImage = useCallback(() => {
    request();
  }, [request]);

  useEffect(() => {
    if (!response) {
      return;
    }

    if (response.success) {
      dispatch(addDog(response.data.dog));
    }
  }, [response, dispatch]);

  const renderLoader = useMemo(() => (
    <Spinner />
  ), []);

  return (
    <div className={styles.container}>
      <button className={styles.container__button} onClick={fetchDogImage}>Do an exemple fetch</button>
      {renderImages}
      {status === Status.LOADING && renderLoader}
    </div>
  );
};

export default Example;
