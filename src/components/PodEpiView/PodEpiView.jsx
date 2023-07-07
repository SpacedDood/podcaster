import { useLoaderData, Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export default function PodEpiView () {

  const data = useLoaderData();

  return (
    <div className="podEpiView flexRow">
      <div className="podItemDetails boxShadow">
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

      <div className="podEpiDetailsView">
        <div className="podEpiDetails boxShadow">
          <div className="podEpiBody">
            <div className="podEpiTitle">{data[1].trackName}</div>
            <ReactMarkdown className="podEpiDescription" rehypePlugins={[rehypeRaw]}>
              {data[1].description}
            </ReactMarkdown>
            <audio controls className="podEpiAudio">
              <source src={data[1].episodeUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

        </div>
      </div>
    </div>
  );

}
