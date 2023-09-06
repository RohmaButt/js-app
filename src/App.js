import { data1 } from './data';
import { useState } from 'react';
import React from 'react';
import './Table.css';
import * as d3 from 'd3';

function App() {
  const [data, setData] = useState(data1);
  const yearSum = {};
  data.forEach((country, countryIndex) => {
    country.subCategory.forEach((yearData, yearIndex) => {
      const year = yearData.name;
      const isMarkedAsZeroCountries = [
        'Asia-Pacific',
        'Revenue',
        'Gross Profit',
        'Income before taxes',
        'Net income',
      ];
      const isMarkedAsZero = isMarkedAsZeroCountries.includes(country.name)
        ? true
        : false;
      // const isMarkedAsZero = country.name === 'Asia-Pacific' ? true : false; //country.isMarkedAsZero;

      if (!yearSum[year]) {
        yearSum[year] = 0;
      }

      if (isMarkedAsZero) {
        console.log('00', country.name);
        // yearSum[year] = yearData.val;
      } else {
        yearSum[year] += yearData.val;
        console.log('ss', yearSum[year]);
      }

      yearData.val2 = yearSum[year];
    });
  });

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Year Val1 CalculatedValue</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr
                key={item.name}
                style={{
                  backgroundColor: item?.isMarkedAsZero === true && 'yellow',
                }}
              >
                <td>{item.name}</td>
                {item?.subCategory?.length > 0 &&
                  item?.subCategory?.map((subItem) => {
                    return (
                      <div>
                        <td>{subItem.name}</td>
                        <td>{subItem.val}</td>
                        <td> {subItem.val2}</td>
                      </div>
                    );
                  })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
