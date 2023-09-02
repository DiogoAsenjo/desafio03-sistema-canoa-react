import './list.css'
import React, { useEffect } from 'react';
import { useTable } from 'react-table';

function DataList({ data }) {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Time Spent',
        accessor: 'timeSpent',
      },
      {
        Header: 'Distance',
        accessor: 'distance',
      },
      {
        Header: 'Max Speed',
        accessor: 'maxSpeed',
      },
      {
        Header: 'Average Speed',
        accessor: 'averageSpeed',
      },
      {
        Header: 'Actions',
        accessor: 'button'
      }
    ],
    []
  );

  //USAR ISSO QUANDO FOR DELETAR
 function onDeleteWorkout(id) {
  // TODO
  alert(`Treino ${id} deletado`)
 }

 useEffect(() => {
  // const response = async 
  alert(' ENTROU')
 }, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} className="data-list">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <>
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td> 
                );
              })}
              <button
                onClick={() => onDeleteWorkout('oooo')}
              >Delete</button>
            </tr> 
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default DataList;