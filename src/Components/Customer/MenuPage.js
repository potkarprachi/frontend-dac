import React, { useEffect, useState } from "react";
import { getApprovedList } from "../../Service/ListApiService";
import "../Customer/MenuPage.css"

export function MenuPage() {
  let [listOfCrops, setListOfCrops] = useState([]);

  async function getList() {
    var response = await getApprovedList();
    setListOfCrops(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    getList();
  }, []);
  return (
    <>
      <div class="bg-for-menupage">
        <div class="container my-5 bg-for-menupage">
          <div class="row">
            {listOfCrops.map((item) => {
              return (
                <div class="col-3 my-3">
                  <div class="card text-center">
                    <div class="card-header">Farmer Name : {item.farmerId}</div>
                    <div class="card-body">
                      <h5 class="card-title">Crop Name : {item.cropName}</h5>
                      <p class="card-text text-start">Weight : {item.weight}</p>
                      <p class="card-text text-start">Price : {item.price}</p>
                      <p class="card-text text-start">City : {item.city}</p>
                      <a href="#" class="btn btn-success">
                        Buy
                      </a>
                    </div>
                    <div class="card-footer text-muted">
                      Total Price : {item.weight * item.price}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

// "cropID": 1,
//         "farmerId": 1,
//         "cropName": "Rice",
//         "cropCategoryID": 25,
//         "weight": 1000.0,
//         "status": "Accepted",
//         "price": 300.0,
//         "customerid": 20
