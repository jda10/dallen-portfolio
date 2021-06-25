import React from 'react';
import { Document, pdfjs} from 'react-pdf';
import pdf from '../resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



const ResumePage = () => {
    return(
        <div id="resume">

            <Document
            file={pdf}
            >
            </Document>

        </div>
    );
}


export default ResumePage;