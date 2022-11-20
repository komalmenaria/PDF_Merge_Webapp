const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePDFs = async (p1,p2) => {
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2); // merge only page 2

  // await merger.add('TestPDF/1.pdf');  //merge all pages. parameter is the path to file and filename.
  // await merger.add('TestPDF/2.pdf'); // merge only page 2
  let d = new Date().getTime()
  await merger.save(`public/${d}merged.pdf`); 
  return d
}

module.exports = {mergePDFs}