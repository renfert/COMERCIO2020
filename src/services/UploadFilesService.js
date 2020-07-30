import axios from 'axios'

class UploadFilesService {
  upload(id, file, onUploadProgress) {
    let formData = new FormData();
    formData.append("file", file);

    return axios.patch(`v1/plate/image/${id}`, formData)
    /*, {
      headers: {
        "Content-Type": "multipart/form-data"
      } ,
      onUploadProgress
    });*/
  }

  getFiles(id) {
    return axios.get(`v1/plate/image/${id}`);
  }
}

export default new UploadFilesService();