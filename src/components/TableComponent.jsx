import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { Container, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";

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
          <Link to={"detail/" + row.id}>
            <Button color="dark" className="me-2">
              <FontAwesomeIcon icon={faInfo} /> Detail
            </Button>
          </Link>

          <Link to={"edit/" + row.id}>
            <Button color="dark" className="me-2">
              <FontAwesomeIcon icon={faEdit} /> Edit
            </Button>
          </Link>

          <Link>
            <Button color="dark" className="me-2">
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </Link>
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
          data={props.users}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <div className="row">
                <div className="col">
                <Link to={"create"}>
            <Button color="dark" className="me-2">
              <FontAwesomeIcon icon={faUserPlus} /> Create
            </Button>
          </Link>
                </div>
                <div className="col-auto">
                  <SearchBar {...props.searchProps} placeholder="Search" />
                </div>
              </div>
              <hr />
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      </Container>
    </div>
  );
};

export default TableComponent;
