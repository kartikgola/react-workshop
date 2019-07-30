import React from 'react';

export default function TableBody(props) {

    const rows = props.bodyData.map((row, i) => {
        return (
            <tr key={i}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>
}
