
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
    const[detail, setDetail] = useState([]);
    const {id : did} = useParams();

    const makeURL = () =>
    {
        var url = ["http://127.0.0.1:8000/api/loan/details/", did].join('');
        console.log(url);
        return url;
    }

    useEffect(()=>{
        axios.get(makeURL())
        .then(response=>{
            console.log(response.data);
            setDetail(response.data);
        }).catch(error=>{
            console.log(error);
        });
    },[])

    return(
        <div>
            <h1>Loan Details:</h1>
            {detail.map(d=>(
                <table className="table table-responsive" style={{ marginTop: "50px", marginLeft: "auto", marginRight: "auto" }}>
                    <tr className="column text-center">
                        <td>
                            <img src={d.loandocument} height="500px"/>
                        </td>
                    </tr>
                    <tr className="column text-center">
                        <td>
                            <h2>ID: {d.id}</h2>
                        </td>
                    </tr>
                    <tr className="column text-center">
                        <td>
                            <h3>LoanType: {d.loantype}</h3>
                        </td>
                    </tr>
                    <tr className="column text-center">
                        <td>
                            <h4>Loan Amount: {d.loanamount}</h4>
                        </td>
                    </tr>
                    <tr className="column text-center">
                        <td>
                            <h4>Approve Date: {d.loanapprovedate}</h4>
                        </td>
                    </tr>
                </table>
            ))}
        </div>
    );
}
export default Details;