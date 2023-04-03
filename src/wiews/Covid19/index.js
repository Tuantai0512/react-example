import "../Covid19/style.css"

import useFetch from "../../services/fetchData";

function Covid19() {

    const { data: dataCovid, isError, loading} = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z');

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