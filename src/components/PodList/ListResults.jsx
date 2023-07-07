import { Link } from "react-router-dom";

function ListResults (props) {

  console.log(props.resultData)

  return (
    <div className="listResults">
      {props.resultData ?
        props.resultData.map((item, i) => {
          return <ListItem itemData={item} key={i}/>
        })
        :
        <div className="text">No Results found</div>
      }
    </div>
  )
}

function ListItem (props) {
  /*console.log(props.itemData);*/
  return (
    <Link to={`podcast/${props.itemData.id.attributes["im:id"]}`} className="listItem">
      <img src={props.itemData["im:image"][2].label} />
      <div className="listItemDetails boxShadow">
        <p className="listItemTitle">{props.itemData["im:name"].label}</p>
        <p className="listItemAuthor">Author: {props.itemData["im:artist"].label}</p>
      </div>
    </Link>
  )
}

export default ListResults;
