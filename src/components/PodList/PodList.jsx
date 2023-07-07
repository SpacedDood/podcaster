import { useState, useEffect } from 'react';
import { useLoaderData, Link } from "react-router-dom";
import ListResults from "./ListResults";

function PodList() {

  const data = useLoaderData();
  const [listData, setListData] = useState(data[0]);

  const filterList = (event) => {
    const search = event.target.value.toLowerCase();
    var result = data[0].filter(function(v) {
      return (v["title"].label.toLowerCase().includes(search) || v["im:artist"].label.toLowerCase().includes(search))
    })
    setListData(result);
  }


  return (
    <div className="podList">
        <div>

          <div className="filterArea">
            <div className="resultNumber">{listData.length}</div>
            <div className="searchArea">
              <input
                placeholder="Filter Podcasts..."
                onChange={filterList}
              />
            </div>
          </div>

          <ListResults resultData={listData}/>
        </div>
    </div>
  )
}

export default PodList;
