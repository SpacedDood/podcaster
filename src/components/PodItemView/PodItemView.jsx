import { useLoaderData, Link } from "react-router-dom";

export default function PodItemView () {

  const data = useLoaderData();

  return (
    <div className="podItemView">
      <div className="podItemDetails boxShadow">
        {/*console.log(data[0])*/}
        <div className="podItemImage">
          <img src={data[0].artworkUrl600} />
        </div>
        <div className="podItemName">
          <p><b>{data[0].trackCensoredName}</b></p>
          <p><i>by {data[0].artistName}</i></p>
        </div>

        <div className="podItemDesc">
          <p><b>Description:</b></p>
          <p><i>let you down
                <br/>run around and desert you
                <br/>make you cry
                <br/>say goodbye
                <br/>tell a lie and hurt you</i></p>
        </div>

      </div>

      <div className="podEpiListView">
        <div className="podEpisodeCount boxShadow">
          <b>Episodes: {data[1].length}</b>
        </div>
        <div className="podEpList boxShadow">
          <div className="podEpiListHeader flexRow">
            <div className="podEpiListName">Title</div>
            <div className="podEpiListDate">Date</div>
            <div className="podEpiListDuration">Duration</div>
          </div>

          <div className="podEpiListBody">

            {data[1].map((item) => {
              return (
                <div className="podEpiListItem flexRow" key={item.trackId}>
                  <Link className="podEpiListName" to={"episode/"+item.trackId}>{item.trackName}</Link>
                  <div className="podEpiListDate">{formatDate(item.releaseDate)}</div>
                  <div className="podEpiListDuration">{msToTime(item.trackTimeMillis)}</div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  );

}

function formatDate(date) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-GB");
}

function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}
