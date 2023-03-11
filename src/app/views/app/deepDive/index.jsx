import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { FetchDeepDiveURL } from '../../../../redux/actions/DeepDiveActions';

function DeepDiveAnalysis({ loading, deepDive }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchDeepDiveURL());
  }, []);
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}>
      {loading && (
        <div style={{ height: '100%', display: 'grid', placeItems: 'center' }}>
          <Spinner animation='border' variant='warning' />
        </div>
      )}
      {!loading &&
        deepDive &&
        (deepDive?.data != null || deepDive?.data !== '') && (
          <iframe
            title='iframe'
            src={deepDive?.data}
            width='100%'
            height='100%'
          />
        )}
    </div>
  );
}

const mapStateToProps = state => {
  const { deepDive } = state;
  return deepDive;
};

export default connect(mapStateToProps)(DeepDiveAnalysis);
