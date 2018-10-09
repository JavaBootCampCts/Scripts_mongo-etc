function myfunction(asset) {return(asset.uid+","+asset.rawAssetValue)};

db = db.getSiblingDB('person');


/*print("UID -> "+uid+" :") */
/*printjson(db.Asset.findOne({"uid" : uid},{"_id":0,"uid":1,"rawAssetValue":1}));*/

var asset=db.Asset.findOne({"uid" : uid},{"_id":0,"uid":1,"rawAssetValue":1});
//printjson(asset);

//function myfunction(asset) {print(asset.uid+","+asset.rawAssetValue)};
if(asset!==null){print(myfunction(asset))};

/*db.identityV3.update({"uid" : uid},{$set:{"msisdnVerified":"true"}}); */
/*print("\n");*/
quit();
