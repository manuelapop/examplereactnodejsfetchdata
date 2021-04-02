import * as React from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

function FootballTab() {
  const [football, setData] = useState([])
  async function fetchUrl() {
    const response = await fetch('http://localhost:5000/api/football');
    const json = await response.json();
    setData(json);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return (
      <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Team</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
      {football.map((val: any, index) => (
        <Table.Row key={index}>
          <Table.Cell> 
            <Label ribbon>{val.name}</Label>
          </Table.Cell>
          <Table.Cell>{val.team}</Table.Cell>
          <Table.Cell>{val.category}</Table.Cell>
        </Table.Row>
      ))}
      </Table.Body>
  
    </Table>
  )
}

export default FootballTab 