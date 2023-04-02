import "../Covid19/style.css"
import { useState, useEffect } from "react"
import axios from "axios";
import moment from "moment/moment";

function Covid19() {

    const [dataCovid, setDataCovid] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        async function fetchData() {
            try {
                let res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z')
                let data = res && res.data ? res.data : [];
                if (data && data.length > 0) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');
                        return item;
                    })
                }
                setDataCovid(data);
                setLoading(false);
                setIsError(false);
            }
            catch (e) {
                setLoading(false);
                setIsError(true);
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <h2>This is Covid-19 number of data in Vietnam</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {isError === false && loading === false && dataCovid && dataCovid.length > 0 && dataCovid.map(item => {
                        return (
                            <tr key={item.ID}>
                                <td>{item.Date}</td>
                                <td>{item.Confirmed}</td>
                                <td>{item.Active}</td>
                                <td>{item.Deaths}</td>
                                <td>{item.Recovered}</td>
                            </tr>
                        )
                    })}

                    {loading === true && <tr>
                        <td colSpan={5} style={{ 'textAlign': 'center' }}>loading.......</td>
                    </tr>}

                    {isError === true && <tr>
                        <td colSpan={5} style={{ 'textAlign': 'center' }}>Something wrong...</td>
                    </tr>}
                </tbody>
            </table>
        </>
    )
}

export default Covid19