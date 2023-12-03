import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { Container, Button, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faCartPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartAction";

const { SearchBar } = Search;

const mapDispatchToProps = {
  addToCart,
};

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getList: state.generals.getList.filter(item => item.active !== false),
  };
};

const CatalogueComponent = (props) => {
  const { getList } = props;
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
      dataField: "code",
      text: "Code Barang",
      sort: true,
      headerStyle: { wordWrap: "break-word" },
      style: { wordWrap: "break-word", maxHeight: "100px" },
    },
    {
      dataField: "product_name",
      text: "Nama Barang",
      sort: true,
    },
    {
      dataField: "name",
      text: "Varian",
      sort: true,
    },
    {
      dataField: "product_category_name",
      text: "Kategori",
      sort: true,
    },
    {
      dataField: "link",
      text: "Image",
      formatter: (rowContent, row) => {
        return (
          <div>
            <img
              src={row.image_link}
              alt={row.image_link}
              style={{ width: "100px" }}
            />
          </div>
        );
      },
    },
    {
      dataField: "qty",
      text: "Stok",
      sort: true,
    },
    {
      dataField: "price",
      text: "Harga",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Button
              color="dark"
              className="me-2"
              onClick={() => props.addToCart(row)}
            >
              <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
            </Button>
          </div>
        );
      },
    },
  ];

   
  return (
    <div>
      <Container className="mt-3">
        {/* <Html5QrcodeComponent 
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={this.onNewScanResult}/> */}

        {props.getList ? (
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={props.getList}
            columns={columns}
            defaultSorted={defaultSorted}
            search
          >
            {(props) => (
              <div>
                <div className="row">
                  <div className="col">
                    <h4>Catalog</h4>
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
        ) : (
          <div className="text-center">
            {props.errorUsersList ? (
              <h1>{props.errorUsersList}</h1>
            ) : (
              <Spinner color="dark" />
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogueComponent);
