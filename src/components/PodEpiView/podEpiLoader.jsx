import fetchJsonp from "fetch-jsonp";


export default async function podEpiLoader({params}) {

  /*console.log("EPISODE!")
  console.log(params.podcastId);
  console.log(params.episodeId);*/

  let myPromise = await new Promise(function(myResolve, myReject) {

    const storedData = JSON.parse(localStorage.getItem("pc_" + params.podcastId));

    if (storedData) {
      //console.log("Theres stored data!")
      //console.log(storedData[2])
      //Check if not expired
      const d1 = new Date(storedData[2]);
      const d2 = new Date();

      if (d1.getDate() == d2.getDate() && Math.abs(d1.getTime() - d2.getTime())<24*60*60*1000) {
        myResolve(storedData);
        return;
      }
    }

    //console.log("GETTING REQUEST!")
    var newData = fetchJsonp(`https://itunes.apple.com/lookup?id=${params.podcastId}&media=podcast&entity=podcastEpisode`)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      //console.log('parsed json', json)

      var formattedData = [];
      formattedData.push(json.results[0]);
      json.results.shift()
      formattedData.push(json.results);


      const newDate = new Date();
      formattedData.push(newDate.toLocaleDateString("en-GB"));

      localStorage.setItem("pc_" + params.podcastId, JSON.stringify(formattedData))

      myResolve(formattedData); // when successful

    }).catch(function(ex) {
      console.log('parsing failed', ex)
      myReject(ex);  // when error
    })

  });

  var episodeFound = false;
  myPromise[1].forEach((item, i) => {
    if (item.trackId == params.episodeId) {
      myPromise[1] = item;
      episodeFound = true;
    }
  });

  if (!episodeFound) {
    throw new Error("Episode couldnt be found! :(")
  }

  return myPromise;

}
