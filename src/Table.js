import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export default class Table extends React.Component {
    render() {
        const { bodyData, removeData } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody bodyData={bodyData} removeData={removeData} />
            </table>
        )
    }
}
