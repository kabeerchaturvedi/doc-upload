import { Button } from "../ui/Button";

// eslint-disable-next-line react/prop-types
const FileUpload = ({ onFileSelect }) => {
  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
        onFileSelect(files[0]);
    }
  };
  return (
    <div>
      <input type="file" className="hidden" id="file-upload" onChange={handleFileInput} accept=".doc,.docx,.pdf,.txt" />
      <label htmlFor="file-upload">
        <Button className="mt-4">Submit</Button>
      </label>
    </div>
  );
};

export default FileUpload;
