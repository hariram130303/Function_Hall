import jsPDF from "jspdf";

function Invoice() {
  const downloadInvoice = () => {
    const pdf = new jsPDF();

    pdf.text(
      "Function Hall Booking Invoice",
      20,
      20
    );

    pdf.save("invoice.pdf");
  };

  return (
    <button onClick={downloadInvoice}>
      Download Invoice
    </button>
  );
}

export default Invoice;