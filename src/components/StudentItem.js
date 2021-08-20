import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/ProgressBar';

const TOTAL_MISSION = 1914;

export default function StudentItem({ student }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h6>{student.firstName}</h6>
      <ProgressBar now={(student.clusterMission / TOTAL_MISSION) * 100} label={student.clusterMission} />
    </div>
  );
}

StudentItem.propTypes = {
  student: PropTypes.object.isRequired,
};
