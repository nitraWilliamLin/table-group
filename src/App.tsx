import './App.css'
import TableCell from "@mui/material//TableCell";
import TableRow from "@mui/material//TableRow";
import MUIDataTable from "mui-datatables";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider
} from "@mui/material/styles";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";

const columns = [
  {
    name: "hero",
    label: "Superhero",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "age",
    label: "Age",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "sex",
    label: "Sex",
    options: {
      filter: true,
      sort: false
    }
  }
];

type DataItem = {
  name: String,
  hero: String,
  age: Number,
  sex: String
}

const data: Array<DataItem> = [
  {name: "test1", hero: "Batman", age: 10, sex: 'male'},
  {name: "test2", hero: "Superman", age: 53, sex: 'male'},
  {name: "test3", hero: "Aquaman", age: 10, sex: 'female'},
  {name: "test4", hero: "Aquaman", age: 10, sex: 'female'},
  {name: "test5", hero: "Aquaman", age: 40, sex: 'female'},
  {name: "test6", hero: "Aquaman", age: 40, sex: 'female'},
  {name: "test7", hero: "Aquaman", age: 40, sex: 'female'},
  {name: "test8", hero: "Aquaman", age: 10, sex: 'female'},
  {name: "test9", hero: "Aquaman", age: 10, sex: 'female'},
  {name: "test10", hero: "Aquaman", age: 24, sex: 'female'},
  {name: "test11", hero: "Aquaman", age: 24, sex: 'female'},
  {name: "test12", hero: "Aquaman", age: 24, sex: 'female'},
  {name: "test13", hero: "Aquaman", age: 10, sex: 'female'}
];


const options = {
  filter: true,
  onFilterChange: (changedColumn, filterList) => {
    console.log(changedColumn, filterList);
  },
  selectableRows: "single",
  filterType: "dropdown",
  tableBodyMaxHeight: '499px',
  rowsPerPage: 5,
  rowsPerPageOptions: [],
  expandableRows: true,
  renderExpandableRow: (rowData: Array<any>) => {
    const groupByAge = data.filter((item) => item.age === rowData[2]);
    return (
      <React.Fragment>
        <tr>
          <td colSpan={5} style={{
            overflow: "auto",
          }}>
            <TableContainer component={Paper} sx={{
              padding: "24px",
            }}>
              <Table style={{ minWidth: "650" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Superhero</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Sex</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {groupByAge.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.hero}
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.age}</TableCell>
                      <TableCell>{row.sex}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </td>
        </tr>
      </React.Fragment>
    );
  },
  page: 1
};

function App() {

  return (
    <>
      <div style={{ height: 400, width: '800px' }}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={createTheme()}>
            <MUIDataTable
              title={"Superheros List"}
              data={data}
              columns={columns}
              options={options}
            />
          </ThemeProvider>
        </StyledEngineProvider>
      </div>
    </>
  )
}

export default App
