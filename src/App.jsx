// import pfdviewer from '../src/assets/AbhimanyuCV01.pdf' 


function App() {
  return (
    <>
      <iframe
        src="/AbhimanyuCV01.pdf"
        width="100%"
        height="100dvh"
        title="Resume Viewer"
        style={{
          border: '1px solid #ccc',
          marginTop: '0px',
          height:"100dvh",
        }}
      />

      {/* Download Button */}
      <div style={{ marginTop: '10px', marginBottom:"20px" }}>
        <a
          href="/AbhimanyuCV01.pdf"
          download="AbhimanyuCV01.pdf"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          Download PDF
        </a>
      </div>
    </>
  );
}

export default App;
