import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { Button, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import {
  deleteProductCategory,
  deleteProductCategoryCreate,
} from "../actions/productCategoryAction";
import {
  getProductCategoriesList,
  getProductsList,
  getProductVariantsList,
} from "../actions/generalAction";
import { BackHomeComponent } from "./BackHomeComponent";
import { deleteProduct, deleteProductCreate } from "../actions/productAction";
import {
  deleteProductVariant,
  deleteProductVariantCreate,
} from "../actions/productVariantAction";

const handleClick = (dispatch, id, dataType) => {
  const confirmMessage = `Are you sure you want to delete this ${dataType}?`;

  Swal.fire({
    title: "Confirm Deletion",
    text: confirmMessage,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      const deleteAction = getDeleteActionByType(dataType);
      dispatch(deleteAction(id));
      Swal.fire({
        title: "Deleted!",
        text: `${dataType} ${id} has been deleted.`,
        icon: "success",
      }).then(() => {
        // Dispatch the action to get the updated list
        const getListAction = getGetListActionByType(dataType);
        dispatch(getListAction());
        dispatch(getDeleteCreateActionByType(dataType));
      });
    }
  });
};

// Helper functions to get the corresponding actions based on data type
const getDeleteActionByType = (dataType) => {
  switch (dataType) {
    case "Product Category":
      return deleteProductCategory;
    case "Product":
      return deleteProduct;
    case "Product Variant":
      return deleteProductVariant;
    // Add more cases for other data types as needed
    default:
      throw new Error(`Unsupported data type: ${dataType}`);
  }
};

const getGetListActionByType = (dataType) => {
  switch (dataType) {
    case "Product Category":
      return getProductCategoriesList;
    case "Product":
      return getProductsList;
    case "Product Variant":
      return getProductVariantsList;
    // Add more cases for other data types as needed
    default:
      throw new Error(`Unsupported data type: ${dataType}`);
  }
};

const getDeleteCreateActionByType = (dataType) => {
  switch (dataType) {
    case "Product Category":
      return deleteProductCategoryCreate;
    case "Product":
      return deleteProductCreate;
    case "Product Variant":
      return deleteProductVariantCreate;
    // Add more cases for other data types as needed
    default:
      throw new Error(`Unsupported data type: ${dataType}`);
  }
};

const { SearchBar } = Search;

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    mode: state.generals.mode,
    getList: state.generals.getList,
    errorUsersList: state.generals.errorUsersList,
  };
};

const TableComponent = (props) => {
  const { getList } = props;
  const isTransaction = props.mode != "Transaction";
  const sampleData = getList && getList.length > 0 ? getList[0] : {};

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
  });

  const columns = Object.keys(sampleData).map((key) => {
    const width = key.toLowerCase() === "id" ? "60px" : "auto";

    return {
      dataField: key,
      text: key.charAt(0).toUpperCase() + key.slice(1),
      sort: true,
      headerStyle: { wordWrap: "break-word", width },
      style: { wordWrap: "break-word", maxHeight: "100px", width },
      formatter: (cellContent) => {
        if (
          key.toLowerCase() === "total_amount" ||
          key.toLowerCase() === "price"
        ) {
          return formatter.format(cellContent);
        } else {
          return cellContent && cellContent.length > 50
            ? `${cellContent.substring(0, 50)}...`
            : cellContent;
        }
      },
    };
  });

  if (columns.some((col) => col.dataField === "image_link")) {
    columns.push({
      dataField: "image_link",
      text: "Image Preview",
      headerStyle: () => {
        return { width: "auto" };
      },
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
    });
  }

  columns.push({
    dataField: "link",
    text: "Action",
    headerStyle: () => {
      return { width: "auto" };
    },
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.id}>
            <Button color="dark" className="me-2">
              <FontAwesomeIcon icon={faInfo} /> Detail
            </Button>
          </Link>

          {isTransaction && (
            <Link to={"edit/" + row.id}>
              <Button color="dark" className="me-2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>
          )}

          <Link>
            <Button
              color="dark"
              className="me-2"
              onClick={() => handleClick(props.dispatch, row.id, props.mode)}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </Link>
        </div>
      );
    },
  });

  return (
    <div className="mx-5">
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
              <BackHomeComponent />
              <div className="row">
                <div className="col">
                  {isTransaction ? (
                    <Link to={"create"}>
                      <Button color="dark" className="me-2">
                        <FontAwesomeIcon icon={faUserPlus} /> Create
                      </Button>
                    </Link>
                  ) : null}
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
    </div>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
