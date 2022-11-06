import React, {useState} from 'react';
import ArtistsForm from '../components/table';
import jsonData from './data.json';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';

const ydoc = new Y.Doc()
// clients connected to the same room-name share document updates
const provider = new WebrtcProvider('your-room-name', ydoc, { password: 'optional-room-password' })
const yarray = ydoc.getArray('array')

yarray.observeDeep(() => {
  console.log('yarray updated: ', yarray.toJSON())
})

function TableData() {
  const [artistData, setArtistData] = useState(jsonData);
  
  const tableRows = yarray.map((info) => {
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
    console.log(updatedArtistData);
    console.log(data);
    yarray.push([data]);
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


