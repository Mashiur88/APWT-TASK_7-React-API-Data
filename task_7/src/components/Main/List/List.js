import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const List = () => {
    const[loan, setLoan] = useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/loan/list")
        .then(response=>{
            setLoan(response.data);
        }).catch(error=>{
            console.log(error);
        });
    }, []);

    return(
        <div>
        <h2>Loan Request:</h2>
        <table className="table table-responsive" style={{ marginLeft: "auto", marginRight: "auto"}}>
            <tr style={{ fontSize: "25px" }}>
                <th>loanid</th>
                <th>loantype</th>
                <th>loanamount</th>
                <th>loanapprovedate</th>
                <th>loandocument</th>
                <th></th>
            </tr>
            {loan.map(i=>(
        <tr>
            
            <td><h3>{i.id}</h3></td>
            <td><h3>{i.loantype}</h3></td>
            <td><h3>{i.loanamount}</h3></td>
            <td><h3>{i.loanapprovedate}</h3></td>
            <td className="column text-center">
                <img src={i.loandocument} height="250px" />
            </td>
            <td><Link to={["/details/", i.id].join("")}><button className="btn btn-outline-info">Details</button></Link></td>
        </tr>
           ))}
        </table>
        </div>
    );
}
export default List;