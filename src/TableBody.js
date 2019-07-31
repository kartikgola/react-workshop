import React from 'react';
import './TableBody.css';

export default function TableBody(props) {

    const rows = props.bodyData.map((row, i) => {
        return (
            <tr key={i}>
                <td>{row.priority}</td>
                <td>{row.item}</td>
                <td>
                    <button onClick={() => props.removeData(i)}>Delete</button>
                </td>
            </tr>
        );
    });

    return <tbody className="TableBody">{rows}</tbody>
}
