import React, { useEffect, useState, useRef } from 'react';
import { Grid, TextField, Button, MenuItem } from '@material-ui/core';
import { DataGrid, GridDensity, GridRowParams } from '@mui/x-data-grid';
import styles from './policies.module.css';
import { useHistory, BrowserRouter as Router } from 'react-router-dom';

const Policies = () => {
  const [density, setDensity] = useState<GridDensity>('standard');
  const [searchText, setSearchText] = useState('');
  const [isSideSheetOpen, setIsSideSheetOpen] = useState(false);

  const handleDensityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDensity(event.target.value as GridDensity);
  };

  const history = useHistory();

  const gridApiRef = useRef<any>(null);

//create a function 
const handleExport = () => {
  // Get the current page of the grid
  const currentPage = gridApiRef.current?.state.pagination.page;
  const pageSize = 10;

  // Compute the starting index for the current page
  const startIndex = currentPage ? (currentPage - 1) * pageSize : 0;

  // Get the rows on the current page
  const pageRows = rows.slice(startIndex, startIndex + pageSize);

  // Extract the data from the rows
  const data = pageRows.map(row => ({
    id: row.id,
    Owner: row.Owner,
    policyNumber: row.policyNumber,
    carrier: row.carrier,
    productLine: row.productLine,
    issueDate: row.issueDate
  }));

  // Get the labels of the row as the first row
  const labels = Object.keys(data[0]);
  const rowsWithLabels = [labels, ...data];

  // Convert the data to CSV format
  const csvContent = rowsWithLabels.map(item => Object.values(item).join(',')).join('\n');

  // Create a Blob object
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

  // Create a download link
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'data.csv';

  // Append the link to the document body and trigger a click event
  document.body.appendChild(link);
  link.click();

  // Clean up
  document.body.removeChild(link);

  console.log('Exporting data...');
};

  const [selectedRowData, setSelectedRowData] = useState<any>(null);

  const handleDoubleClick = (params: GridRowParams) => {
    setSelectedRowData(params.row);
    history.push({
      pathname: `/policies/${params.row.id}`,
      state: { selectedRowData: params.row },
    });
  };



  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const toggleSideSheet = () => {
    setIsSideSheetOpen(!isSideSheetOpen);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'Owner', headerName: 'Owner', width: 300 },
    { field: 'policyNumber', headerName: 'Policy Number', width: 200 },
    { field: 'carrier', headerName: 'Carrier', width: 200 },
    { field: 'productLine', headerName: 'Product Line', width: 200 },
    { field: 'issueDate', headerName: 'Issue Date', width: 200 },
    { field: 'effectiveDate', headerName: 'Effective Date', width: 200 },
  ];

  const rows = [
    { id: 1, Owner: 'John Doe', policyNumber: 5145935131, carrier: 'PS', productLine: 'EWE', issueDate: '2020-01-01' },
    { id: 2, Owner: 'Jane Smith', policyNumber: 9186367413, carrier: 'PS', productLine: 'EWE', issueDate: '2020-03-10' },
    { id: 3, Owner: 'Bob Johnson', policyNumber: 8587995351, carrier : 'PS', productLine: 'EWE', issueDate: '2020-07-10' },
    { id: 4, Owner: 'Rob Pony', policyNumber: 3798703176, carrier : 'PS', productLine: 'EWE', issueDate: '2020-03-30' },
    { id: 5, Owner: 'Cade Jaman', policyNumber: 2876603444, carrier : 'TQ', productLine: 'EWE', issueDate: '2020-09-20' },
    { id: 6, Owner: 'Darshan Patel', policyNumber: 6683370890, carrier : 'PS', productLine: 'FDD', issueDate: '2020-01-13' },
    { id: 7, Owner: 'Ritisha Banerjee', policyNumber: 4922357035, carrier : 'PS', productLine: 'CDD', issueDate: '2020-06-23' },
    { id: 8, Owner: 'Rohan Federer', policyNumber: 9011273589, carrier : 'JE', productLine: 'EWE', issueDate: '2020-05-26' },
    { id: 9, Owner: 'Emily Jenkinson', policyNumber: 1771849201, carrier : 'RD', productLine: 'BFL', issueDate: '2020-11-12' },
    { id: 10, Owner: 'Jake Jenkinson', policyNumber: 2290808782, carrier : 'PS', productLine: 'WRW', issueDate: '2020-12-12' },
  ];

  const filteredRows = rows.filter((row) =>
    row.Owner?.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Router>
      <div className={`page ${isSideSheetOpen ? styles['side-sheet-open'] : ''}`} style={{ color: '#FF0000' }}>
        <div className={styles.page}>
          <div className={styles.container}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container spacing={10} alignItems="center">
                  <Grid item xs={3}>
                    <TextField
                      className={styles['search-field']}
                      label="Search"
                      variant="outlined"
                      value={searchText}
                      onChange={handleSearch}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      className={styles['export-button']}
                      variant="contained"
                      color="primary"
                      onClick={handleExport}
                      fullWidth
                    >
                      Export
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      className={styles['density-select']}
                      select
                      label="Density"
                      value={density}
                      onChange={handleDensityChange}
                      variant="outlined"
                      fullWidth
                    >
                      <MenuItem value="standard">Standard</MenuItem>
                      <MenuItem value="comfortable">Comfortable</MenuItem>
                      <MenuItem value="compact">Compact</MenuItem>
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <div className={styles['data-grid']}>
                  <DataGrid
                    rows={filteredRows}
                    columns={columns}
                    density={density}
                    autoPageSize
                    onRowDoubleClick={handleDoubleClick}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Policies;
