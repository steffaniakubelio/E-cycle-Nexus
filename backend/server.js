// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [result, setResult] = useState(null);

//   const handleFileInputChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('imageData', selectedFile);
//       const response = await axios.post('http://localhost:3001/detect', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       setResult(response.data);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept="image/*" onChange={handleFileInputChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {result && (
//         <div>
//           <h2>Result</h2>
//           <pre>{JSON.stringify(result, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
