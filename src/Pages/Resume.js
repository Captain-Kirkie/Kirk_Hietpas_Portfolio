import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { pdfjs } from "react-pdf";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function onDocumentLoadSuccess(pdf) {
        setNumPages(pdf?.numPages);
        setLoading(false);
    }

    function onDocumentLoadError(error) {
        setError(error.message);
        setLoading(false);
    }
    const url = `${process.env.PUBLIC_URL}/Resume_Kirk_Hietpas.pdf`;

    return (
        <div className="resume-wrapper" role="main" aria-label="Resume viewer">
            {loading && <p className="text-white text-lg">Loading resume...</p>}
            {error && (
                <p className="text-red-500 text-lg">
                    Error loading resume: {error}
                </p>
            )}
            <div className="button-wrapper">
                <button
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    onClick={() => {
                        if (pageNumber > 1) {
                            setPageNumber(pageNumber - 1);
                        }
                    }}
                    disabled={pageNumber <= 1 || loading}
                    aria-label="Previous page"
                >
                    <HiOutlineArrowLeft className="h-6 w-6" />
                </button>

                <button
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    onClick={() => {
                        if (pageNumber < numPages) {
                            setPageNumber(pageNumber + 1);
                        }
                    }}
                    disabled={pageNumber >= numPages || loading}
                    aria-label="Next page"
                >
                    <HiOutlineArrowRight className="h-6 w-6" />
                </button>
            </div>
            <Document
                className="resume-pdf"
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={<div className="text-white">Loading PDF...</div>}
            >
                <Page
                    pageNumber={pageNumber}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                    width={Math.min(window.innerWidth * 0.9, 800)}
                />
            </Document>
            {numPages && (
                <p className="text-white mt-4" role="status" aria-live="polite">
                    Page {pageNumber} of {numPages}
                </p>
            )}
        </div>
    );
};

export default PDFViewer;
