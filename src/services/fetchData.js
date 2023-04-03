import { useState, useEffect } from "react"
import axios from "axios";
import moment from "moment/moment";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                let res = await axios.get(url)
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
                setLoading(false);
                setIsError(true);
            }
        }
        fetchData();
    }, [url])

    return{
        data, isError, loading
    }
}

export default useFetch