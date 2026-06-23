import api from "../services/api";

function UploadImage() {
  const uploadImage = async (e) => {
    const formData = new FormData();

    formData.append(
      "image",
      e.target.files[0]
    );

    const res = await api.post(
      "/upload",
      formData
    );

    console.log(res.data.imageUrl);
  };

  return (
    <input
      type="file"
      onChange={uploadImage}
    />
  );
}

export default UploadImage;