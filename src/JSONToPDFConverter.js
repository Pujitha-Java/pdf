
import React from 'react';
import jsPDF from 'jspdf';
import { jsonData } from './data';
import './JSONToPDFConverter.css';

class JSONToPDFConverter extends React.Component {
  convertToPDF = () => {
    const data = jsonData;
    const htmlContent = this.convertJSONToHTML(data);
    const pdf = new jsPDF();
    pdf.html(htmlContent, {
      callback: () => {
        pdf.save('output.pdf');
      }
    });
  };

  convertJSONToHTML = (jsonData) => {
    const tableRows = jsonData.map(item => {
      return `<tr><td>${item.name}</td><td>${item.age}</td><td>${item.city}</td></tr>`;
    }).join('');

    const htmlContent = `
      <html>
        <head>
          <title>table</title>
        </head>
        <body>
          <h1>Table</h1>
          <table border="1">
            <tr><th>Name</th><th>Age</th><th>City</th></tr>
            ${tableRows}
          </table>
        </body>
      </html>`;

    return htmlContent;
  };

  render() {
    return (
      <div>
        <button onClick={this.convertToPDF}>Click here to download</button>
      </div>
    );
  }
}

export default JSONToPDFConverter;
