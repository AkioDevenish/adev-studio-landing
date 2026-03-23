"use client";

import { useEffect, useRef, useState } from "react";

export default function HiddenUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showDropzone, setShowDropzone] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    let keyBuffer = "";
    
    // Listen for the secret password "contra"
    const handleKeyDown = (e: KeyboardEvent) => {
      // Also keep the old shortcut as a fallback
      if (e.shiftKey && e.altKey && e.code === "KeyU") {
        e.preventDefault();
        setShowDropzone(true);
        return;
      }

      if (e.key === "Escape") {
        setShowDropzone(false);
        return;
      }

      // Ignore modifier keys
      if (e.key.length === 1) {
        keyBuffer += e.key.toLowerCase();
        // Keep only the last 6 characters
        if (keyBuffer.length > 6) {
          keyBuffer = keyBuffer.slice(-6);
        }

        if (keyBuffer === "contra") {
          e.preventDefault();
          setShowDropzone(prev => !prev);
          keyBuffer = ""; // Reset after triggering
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      setIsUploading(true);
      console.log(`Starting upload for ${file.name}...`);
      
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Upload successful:", data.filepath);
        alert(`File "${file.name}" uploaded successfully to:\n${data.filepath}`);
        setShowDropzone(false); // Hide the dropzone on success
      } else {
        console.error("Upload failed.");
        alert("Failed to upload file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error occurred while uploading.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    await uploadFile(e.target.files[0]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      // Just take the first dropped file for simplicity
      const file = e.dataTransfer.files[0];
      await uploadFile(file);
    }
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        style={{ display: "none" }}
        accept="image/png, image/jpeg, image/jpg, audio/mpeg, audio/mp3, application/pdf, .doc, .docx" 
      />
      
      {showDropzone && (
        <div 
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center p-8 transition-colors backdrop-blur-md ${isDragging ? 'bg-primary/40' : 'bg-black/80'}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="absolute top-8 right-8 text-white/50 text-sm">
            Press Esc or type &apos;contra&apos; to close
          </div>
          <div className={`p-16 border-4 border-dashed rounded-2xl w-full max-w-4xl min-h-[50vh] flex flex-col items-center justify-center transition-all ${isDragging ? 'border-primary scale-105 bg-black/40' : 'border-white/30 hover:border-white/60 bg-black/20'}`}>
            <svg 
              className={`w-24 h-24 mb-6 transition-colors ${isDragging ? 'text-primary' : 'text-neutral-400'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16V4m0 0l-4 4m4-4l4 4m-4 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-3.582 8-8 8 3.582 8 8 8z" />
            </svg>
            <h2 className={`text-4xl font-bold mb-4 tracking-tight transition-colors ${isDragging ? 'text-white' : 'text-neutral-200'}`}>
              {isDragging ? 'Drop it here!' : 'Drag & Drop Files Here'}
            </h2>
            <p className="text-neutral-400 text-lg max-w-lg text-center">
              Drop any configuration, document, or media file right onto this window to upload it directly, bypassing local file restrictions.
            </p>
            {isUploading && (
              <div className="mt-8 flex items-center bg-primary/20 text-primary px-6 py-3 rounded-full font-mono text-sm animate-pulse">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing Upload...
              </div>
            )}
            {!isUploading && (
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="mt-8 text-sm text-neutral-500 hover:text-white transition-colors underline underline-offset-4"
              >
                Or click to open conventional file browser
              </button>
            )}
          </div>
        </div>
      )}

      {isUploading && !showDropzone && (
        <div className="fixed bottom-4 right-4 z-50 bg-black/80 border border-white/10 text-white px-4 py-2 rounded-md font-mono text-sm flex items-center shadow-xl">
          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Uploading...
        </div>
      )}
    </>
  );
}
