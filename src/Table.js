import "./App.css";

function Table() {
    
  const visitation = [
    {
      visit: "800K",
      month: "Jan",
    },
    {
      visit: "720K",
      month: "Feb",
    },
    {
      visit: "600K",
      month: "Mar",
    },
    {
      visit: "410K",
      month: "Apr",
    },
    {
      visit: "590K",
      month: "May",
    },
    {
      visit: "390K",
      month: "Jun",
    },
    {
      visit: "220K",
      month: "Jul",
    },
  ];

  return (
    <div className="table">
      <table className="style-table">
        <thead className="table-thead">
          <tr>
            <th>Visits</th>
            <th>Month</th>
          </tr>
        </thead>
        {visitation.map((visits) => (
          <tbody className="table-tbody">
            <tr>
              <td>{visits.visit}</td>
              <td>{visits.month}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Table;
