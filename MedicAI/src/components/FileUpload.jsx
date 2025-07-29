import React, { useRef } from 'react';
import { Upload, File, X, CheckCircle } from 'lucide-react';

const FileUpload = ({ onFileUpload, uploadedFile }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const allowedTypes = ['text/plain', 'application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
      if (allowedTypes.includes(file.type)) {
        onFileUpload(file);
      } else {
        alert('Please upload a valid file type (.txt, .pdf, .jpg, .jpeg, .png)');
      }
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Upload Medical Notes
      </label>
      
      {!uploadedFile ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-200 cursor-pointer group"
        >
          <Upload className="w-12 h-12 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
          <p className="text-lg font-medium text-gray-700 mb-2">
            Drop your files here or click to browse
          </p>
          <p className="text-sm text-gray-500">
            Supports .txt, .pdf, .jpg, .jpeg, .png files
          </p>
        </div>
      ) : (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <p className="font-medium text-green-800">{uploadedFile.name}</p>
              <p className="text-sm text-green-600">
                {(uploadedFile.size / 1024).toFixed(1)} KB
              </p>
            </div>
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileSelect}
        accept=".txt,.pdf,.jpg,.jpeg,.png"
        className="hidden"
      />
    </div>
  );
};
export default FileUpload;
