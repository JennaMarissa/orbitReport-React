// import sat from "./satData";

const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sat.map((data, id) => {
          return (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{data.operational ? "Valid" : "Invalid"}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};
// console.log({sat});
export default Table;