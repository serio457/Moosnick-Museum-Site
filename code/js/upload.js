function insert() {
  var name=document.getElementById("name").value;
  var dateOfManufacture=document.getElementById("dateOfManufacture").value;
  var description=document.getElementById("description").value;
  var imageLink=document.getElementById("imageLink").value;
  var keywords=document.getElementById("keywords").value;
  var location=document.getElementById("location").value;
  var manufacturer=document.getElementById("manufacturer").value;

  //prebuilt to upload to firebase

  // path where data will be stored
  firebase.database().ref('item/'+name).set({
    itemName: name,
    itemDateOfManufacture: dateOfManufacture,
    itemDescription: description,
    itemImageLink: imageLink,
    itemKeywords: keywords,
    itemLocation: location,
    itemManufacturer: manufacturer
  });
}