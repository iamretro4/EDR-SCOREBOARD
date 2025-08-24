function loadCSV(csvFile, tableId) {
    fetch(csvFile)
        .then(response => response.text())
        .then(text => {
            const rows = text.trim().split('\n').map(row => row.split(','));
            let html = '<table border="1">';
            rows.forEach((row, idx) => {
                html += '<tr>';
                row.forEach(cell => {
                    const tag = (idx === 0) ? 'th' : 'td';
                    html += `<${tag}>${cell}</${tag}>`;
                });
                html += '</tr>';
            });
            html += '</table>';
            document.getElementById(tableId).innerHTML = html;
        });
}

loadCSV('ev.csv', 'ev-table');
loadCSV('cv.csv', 'cv-table');
