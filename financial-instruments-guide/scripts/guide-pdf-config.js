const path = require('node:path');

const stylesheet = path.join(__dirname, 'guide-pdf.css');
const root = path.resolve(__dirname, '..');

module.exports = {
  basedir: root,
  stylesheet: [stylesheet],
  page_media_type: 'print',
  document_title: 'Financial Instruments — Complete Guide',
  pdf_options: {
    format: 'Letter',
    printBackground: true,
    displayHeaderFooter: true,
    margin: {
      top: '14mm',
      right: '12mm',
      bottom: '14mm',
      left: '12mm',
    },
    headerTemplate: `
      <style>
        html, body { margin: 0; padding: 0; width: 100%; }
        .header {
          box-sizing: border-box;
          width: 100%;
          padding: 0 5mm 4mm;
          font-size: 8px;
          font-family: "Inter", -apple-system, sans-serif;
          color: #6b7280;
          border-bottom: 1px solid #e5e7eb;
        }
      </style>
      <div class="header">Financial Instruments — Complete Guide</div>
    `,
    footerTemplate: `
      <style>
        html, body { margin: 0; padding: 0; width: 100%; }
        .footer {
          box-sizing: border-box;
          width: 100%;
          padding: 4mm 5mm 0;
          font-size: 8px;
          font-family: "Inter", -apple-system, sans-serif;
          color: #9ca3af;
          display: flex;
          justify-content: space-between;
        }
      </style>
      <div class="footer">
        <span>Financial Instruments — Complete Guide</span>
        <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
      </div>
    `,
  },
};
