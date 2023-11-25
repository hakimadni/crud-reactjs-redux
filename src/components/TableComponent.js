import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { Container, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import paginationFactory from 'react-bootstrap-table2-paginator';

const { SearchBar } = Search;
const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "nama",
    text: "Nama",
    sort: true,
  },
  {
    dataField: "alamat",
    text: "Alamat",
    sort: true,
  },
  {
    dataField: "umur",
    text: "Umur",
    sort: true,
  },
  {
    dataField: "noHP",
    text: "HP",
    sort: true,
  },
  {
    dataField: "link",
    text: "Action",
    headerStyle: () => {
      return { width: "25%" };
    },
    formatter: (rowContent, row) => {
      return (
        <div>
          <Button color="dark" className="me-2">
            <FontAwesomeIcon icon={faInfo} /> Detail
          </Button>

          <Button color="dark" className="me-2">
            <FontAwesomeIcon icon={faEdit} /> Edit
          </Button>

          <Button color="dark" className="me-2">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const TableComponent = (props) => {
  return (
    <div>
      <Container className="mt-3">
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.Users}
          columns={columns}
          defaultSorted={defaultSorted}
          search
          
        >
          {(props) => (
            <div>
              <div className="row">
                <div className="col">
                  <h2>Data Calon Siswa</h2>
                </div>
                <div className="col-auto">
                <SearchBar {...props.searchProps} placeholder="Search" />
                </div>
              </div>
              <hr />
              <BootstrapTable {...props.baseProps} pagination={ paginationFactory() }/>
            </div>
          )}
        </ToolkitProvider>
      </Container>
    </div>
  );
};

export default TableComponent;
