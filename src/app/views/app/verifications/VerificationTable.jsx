import React from 'react';
import { Table } from 'react-bootstrap';
import flatObject from './flat_object';

export default function VerificationTable({ data = {}, column = [] }) {
  const flatData = flatObject(data);
  console.log(flatData, 'flat');
  return (
    <div style={{ height: '40vh', overflow: 'auto' }}>
      <Table>
        <thead>
          <tr style={{ color: '#B5B5C3' }}>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {column.map((v, i) => (
            <tr key={i}>
              <td>{v.Header ?? ''}</td>
              <td style={{ maxWidth: '60%', minWidth: '20rem', width: '50vw' }}>
                {String(flatData[v.accessor ?? ''] ?? 'NA')}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
