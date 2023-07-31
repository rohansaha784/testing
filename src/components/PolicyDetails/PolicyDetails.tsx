import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import styles from './policyDetails.module.css';

interface LocationState {
    selectedRowData: any;
  }

const PolicyDetails = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation<LocationState>();
    const selectedRowData = location.state?.selectedRowData;

  

  // Fetch the data for the selected row based on the id

  return (
    <div className={styles.container}>
      <Box className={styles.custombox}>
        <h2 className={styles.header}>Policy Details</h2>
        <p className={styles.details}>
          <span>Owner:</span> {selectedRowData?.Owner}
        </p>
        <p className={styles.details}>
          <span>Policy Number:</span> {selectedRowData?.policyNumber}
        </p>
        <p className={styles.details}>
          <span>Carrier:</span> {selectedRowData?.carrier}
        </p>
        <p className={styles.details}>
          <span>Product Line:</span> {selectedRowData?.productLine}
        </p>
        <p className={styles.details}>
          <span>Issue Date:</span> {selectedRowData?.issueDate}
        </p>
        {/* Display the information of the selected row */}
      </Box>
    </div>
  );

};

export default PolicyDetails;
