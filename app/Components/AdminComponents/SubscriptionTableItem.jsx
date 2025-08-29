import React from "react";

function SubscriptionTableItem({ email, mongoId, date, deleteEmail }) {
  //for timestamp
  const emailDate = new Date(date);

  return (
    <tr className="bg-white border-b text-left">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {email ? email : "no email"}
      </th>
      <td className="px-5 py-4 hidden sm:block">{emailDate.toDateString()}</td>
      <td className="px-5 py-4 cursor-pointer" onChange={()=> deleteEmail(mongoId)}>x</td>
    </tr>
  );
}

export default SubscriptionTableItem;
