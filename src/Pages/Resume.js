import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { pdfjs } from "react-pdf";
import { Button } from "flowbite-react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(2);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(pdf) {
    setNumPages(pdf?.numPages);
  }
  return (
    <div className="resume-wrapper">
      <div className="button-wrapper">
        <Button
          outline
          onClick={() => {
            if (pageNumber > 1) {
              setPageNumber(pageNumber - 1);
            }
          }}
          disabled={pageNumber <= 1}
        >
          <HiOutlineArrowLeft className="h-6 w-6" />
        </Button>

        <Button
          outline
          onClick={() => {
            if (pageNumber < numPages) {
              setPageNumber(pageNumber + 1);
            }
          }}
          disabled={pageNumber >= numPages}
        >
          <HiOutlineArrowRight className="h-6 w-6" />
        </Button>
      </div>
      <Document
        className="resume-pdf"
        file="Resume_Kirk_Hietpas.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PDFViewer;
