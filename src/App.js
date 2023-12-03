import React, { Component, useEffect, useState } from "react";
import NavbarComponent from "./components/NavbarComponent";
import HomeContainer from "./containers/HomeContainer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

import CreateProductCategoryContainer from "./containers/ProductCategories/CreateProductCategoryContainer";
import ProductCategoriesListContainer from "./containers/ProductCategories/ProductCategoriesListContainer";
import DetailProductCategoryContainer from "./containers/ProductCategories/DetailProductCategoryContainer";
import EditProductCategoryContainer from "./containers/ProductCategories/EditProductCategoryContainer";

import CreateProductContainer from "./containers/Products/CreateProductContainer";
import ProductsListContainer from "./containers/Products/ProductsListContainer";
import DetailProductContainer from "./containers/Products/DetailProductContainer";
import EditProductContainer from "./containers/Products/EditProductContainer";

import CreateProductVariantContainer from "./containers/ProductVariants/CreateProductVariantContainer";
import DetailProductVariantContainer from "./containers/ProductVariants/DetailProductVariantContainer";
import ProductVariantsListContainer from "./containers/ProductVariants/ProductVariantsListContainer";
import EditProductVariantContainer from "./containers/ProductVariants/EditProductVariantContainer";

import CreateTransactionContainer from "./containers/Transactions/CreateTransactionContainer";
import DetailTransactionContainer from "./containers/Transactions/DetailTransactionContainer";
import TransactionsListContainer from "./containers/Transactions/TransactionsListContainer";
import InvoiceContainer from "./containers/Transactions/InvoiceContainer";


library.add(fas, faTwitter, faFontAwesome);

function DetailPC() {
  let params = useParams();
  return <DetailProductCategoryContainer id={params.userId} />;
}

function EditPC() {
  let params = useParams();
  return <EditProductCategoryContainer id={params.userId} />;
}

function DetailP() {
  let params = useParams();
  return <DetailProductContainer id={params.userId} />;
}

function EditP() {
  let params = useParams();
  return <EditProductContainer id={params.userId} />;
}

function DetailPV() {
  let params = useParams();
  return <DetailProductVariantContainer id={params.userId} />;
}

function EditPV() {
  let params = useParams();
  return <EditProductVariantContainer id={params.userId} />;
}

function InvoiceT() {
  let params = useParams();
  return <InvoiceContainer id={params.userId} />;
}

function DetailT() {
  let params = useParams();
  return <DetailTransactionContainer id={params.userId} />;
}


class App extends Component {
  render() {
    
    return (
      <div>
        <NavbarComponent />
          <Router>
            <Routes>
                <Route path="/" element={<HomeContainer />} />
                <Route path="productcategories">
                    <Route path="" element={<ProductCategoriesListContainer />} />
                    <Route path="create" element={<CreateProductCategoryContainer />} />
                    <Route path="detail/:userId" element={<DetailPC />}/>
                    <Route path="edit/:userId" element={<EditPC />} />
                </Route>
                <Route path="products">
                    <Route path="" element={<ProductsListContainer />} />
                    <Route path="create" element={<CreateProductContainer />} />
                    <Route path="detail/:userId" element={<DetailP />}/>
                    <Route path="edit/:userId" element={<EditP />} />
                </Route>
                <Route path="productvariants">
                    <Route path="" element={<ProductVariantsListContainer />} />
                    <Route path="create" element={<CreateProductVariantContainer />} />
                    <Route path="detail/:userId" element={<DetailPV />}/>
                    <Route path="edit/:userId" element={<EditPV />} />
                </Route>
                <Route path="transactions">
                    <Route path="" element={<TransactionsListContainer />} />
                    <Route path="create" element={<CreateTransactionContainer />} />
                    <Route path="invoice/:userId" element={<InvoiceT />}/>
                    <Route path="detail/:userId" element={<DetailT />}/>
                </Route>
            </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
