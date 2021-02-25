import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Card from '../components/Card';
import CircularProgress from '../components/CircularProgress';
import { fetchLocationById } from '../redux/locations/actions';
import {
  selectIsLoading,
  selectSingleLocation,
} from '../redux/locations/selectors';

const LocationPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const location = useSelector(selectSingleLocation);

  React.useEffect(() => {
    dispatch(fetchLocationById(id));
  }, []);

  if (Object.keys(location).length === 0) {
    return (
      <section>
        <Link className="section__link" to="/location">
          &larr; Go back
        </Link>
        <h3>There is no location...</h3>
      </section>
    );
  }

  const { name, type, dimension } = location;

  return (
    <section>
      <Link className="section__link" to="/location">
        &larr; Go back
      </Link>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Card horizontal title={name}>
          <ul>
            <li>{type}</li>
            <li>{dimension}</li>
          </ul>
        </Card>
      )}
    </section>
  );
};

export default LocationPage;
