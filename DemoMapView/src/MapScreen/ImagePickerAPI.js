var ImagePicker = require('react-native-image-picker');
// More info on all the options is below in the README...just some common use cases shown here
var options = {
    title: 'Chọn hình ảnh',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };
//Image picker
 let pickerImage = (cb) =>{
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        cb(source, response.data);
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };          
      }
    });
  }
  module.exports = pickerImage;