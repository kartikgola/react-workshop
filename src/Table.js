import React from 'react';
import './Table.css';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export default class Table extends React.Component {
    render() {
        const { bodyData, removeData } = this.props;

        return (
            <table className="Table">
                {
                    bodyData.length > 0 && <TableHeader />
                }
                <TableBody bodyData={bodyData} removeData={removeData} />
            </table>
        )
    }
}
