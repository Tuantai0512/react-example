import { useState, useEffect } from "react"
import axios from "axios";
import moment from "moment/moment";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        const ourRequest = axios.CancelToken.source();
        async function fetchData() {
            try {
                let res = await axios.get(url, { cancelToken: ourRequest.token })
                let data = res && res.data ? res.data : [];
                if (data && data.length > 0) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');
                        return item;
                    })
                }
                setData(data);
                setLoading(false);
                setIsError(false);
            }
            catch (e) {
                if(axios.isCancel(e)){
                    console.log('Request error: ', e.message)
                }else{
                    setLoading(false);
                    setIsError(true);
                }
            }
        }

        setTimeout(() => {
            fetchData();
        }, 3000)


        return () => {
            ourRequest.cancel('Operation canceled by the user.')
        }
    }, [url])

    return {
        data, isError, loading
    }
}

export default useFetch