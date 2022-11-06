import React, {useState} from 'react';
import ArtistsForm from '../components/table';
import jsonData from './data.json';

function TableData() {
  const [artistData, setArtistData] = useState(jsonData);
  
  const tableRows = artistData.map((info) => {
    return (
      <tr>
        <td>{info.name}</td>
        <td>{info.location}</td>
        <td>{info.social}</td>
      </tr>
    );
  });
  
  const addRows = (data) => {
    const totalArtists = artistData.length;
    const updatedArtistData = [...artistData];
    updatedArtistData.push(data);
    setArtistData(updatedArtistData);
  };
  
  return (
    <div>
      <table className = "table table-stripped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Social Media</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <ArtistsForm func = {addRows} />
    </div>
  );
}

export default TableData;


