import "../SearchYoutube/style.scss";
import { useState } from "react";
import moment from "moment";
import axios from "axios";

function SearchYoutube() {
    const [query, setQuery] = useState("");
    const [videos, setVideos] = useState([]);
    const handleSearchYoutube = async () => {
        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '10',
                'key': 'AIzaSyALFQ5oDYxrhNfA_JmW_gx6KodzZWCKQLY',
                'q': query
            }
        })
        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            let result = [];
            if (raw && raw.length > 0) {
                raw.map(item => {
                    let obj = {};
                    obj.id = item.id.videoId;
                    obj.title = item.snippet.title;
                    obj.createdAt = item.snippet.publishedAt;
                    obj.author = item.snippet.channelTitle;
                    obj.description = item.snippet.description;

                    result.push(obj)
                })
            }
            setVideos(result);
        }
        console.log('Check data res yt: ', res);
    }
    return (
        <>
            <h2>Search Youtube example</h2>
            <div className="youtube-search-container">
                <div className="yt-search">
                    <input type="text" placeholder="Search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <button type="button" onClick={handleSearchYoutube}>Search</button>
                </div>

                {videos && videos.length > 0 &&
                    videos.map(item => {
                        return (
                            <div className="yt-result" key={item.id}>
                                <div className="left">
                                    <iframe
                                        className="ifram-yt"
                                        width="956" height="538" src={`https://www.youtube.com/embed/${item.id}`}
                                        title="#30 Full KHÔNG CHE &#39;Chức Năng Search Youtube&#39; Với React Hook và Google APIs Từ A đến Z"
                                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                                    </iframe>
                                </div>
                                <div className="right">
                                    <div className="title">
                                        {item.title}
                                    </div>
                                    <div className="created-at">
                                        Created At: {moment(item.createdAt).format('DD-MM-YYYY HH:mm:ss A')}
                                    </div>
                                    <div className="author">
                                        Author: {item.author}
                                    </div>
                                    <div className="description">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SearchYoutube