"use client";

import { useEffect, useRef, useState } from "react";

export default function HiddenUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    // Listen for a secret keyboard combination: Shift + Alt/Option + U
    const handleKeyDown = (e: KeyboardEvent) => {
      // Use e.code instead of e.key, because Option+U on Mac produces a special character (¨)
      if (e.shiftKey && e.altKey && e.code === "KeyU") {
        e.preventDefault();
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      setIsUploading(true);
      // Optional: Add some user feedback (like a small toast)
      console.log(`Starting upload for ${file.name}...`);
      
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Upload successful:", data.filepath);
        // You can add a toast notification here if you have a toast system
        alert(`File uploaded successfully to: ${data.filepath}`);
      } else {
        console.error("Upload failed.");
        alert("Failed to upload file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error occurred while uploading.");
    } finally {
      setIsUploading(false);
      // Reset input so the same file could be uploaded again if needed
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
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
      {isUploading && (
        <div className="fixed bottom-4 right-4 z-50 bg-black/80 text-white px-4 py-2 rounded-md font-mono text-sm">
          Uploading...
        </div>
      )}
    </>
  );
}
