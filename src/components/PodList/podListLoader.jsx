import fetchJsonp from "fetch-jsonp";


export default async function podListLoader({params}) {

  let myPromise = await new Promise(function(myResolve, myReject) {

    const storedData = JSON.parse(localStorage.getItem("listData"));

    if (storedData) {
      console.log("Theres stored data!")
      console.log(storedData[1])
      //Check if not expired
      const d1 = new Date(storedData[1]);
      const d2 = new Date();

      if (d1.getDate() == d2.getDate() && Math.abs(d1.getTime() - d2.getTime())<24*60*60*1000) {
        myResolve(storedData);
        return;
      }
    }

    //console.log("GETTING REQUEST!")
    var newListData = fetch(`https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`, {mode: "cors"})
    .then(function(response) {
      if (response.ok) return response.json()
      throw new Error('Could not load list')
    }).then(function(json) {
      console.log('parsed json', json)

      newListData = [json.feed.entry]

      const newDate = new Date();
      newListData.push(newDate.toLocaleDateString("en-GB"));

      localStorage.setItem("listData", JSON.stringify(newListData))

      myResolve(newListData); // when successful

    }).catch(function(ex) {
      //console.log('parsing failed', ex)
      myReject(ex);  // when error
    })

  });

  return myPromise;

}
