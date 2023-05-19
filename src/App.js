import { useEffect, useState } from 'react';
import api from './api';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
    .get("/GetAllCompanyAssets")
    .then((Response) => setData(Response.data))
    .catch((err) => {
      console.error("Opa! algo não saiu como esperado: " + err)
    })
  }, []);

  return (
    <div>
      <h1>Company Assets</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Equipment ID</th>
            <th>User ID</th>
            <th>Delivery Date</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.equipmentId}</td>
              <td>{item.userId}</td>
              <td>{item.deliveryDate}</td>
              <td>{item.returnDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
