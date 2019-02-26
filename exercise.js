var exercise = {};

exercise.countRecords = function(data){
    return data.length;
    return 'Error: countRecords not implemented'; 
};

exercise.countDistrictCrimes = function(data,district){
    counter = 0
    for (var i = 0; i<data.length; i++){
    if (data[i][19] == district) {
        counter += 1
    }
}
    return counter
    return 'Error: countDistrictCrimes not implemented'; 
};

exercise.countPrimaryType = function(data,primaryType){
    counter = 0
    for (var i = 0; i<data.length; i++){
    if (data[i][13] == primaryType) {
        counter += 1
    }
}
    return counter
    return 'Error: countPrimaryType not implemented';
};

exercise.countLocation = function(data,location){
    counter = 0
    for (var i = 0; i<data.length; i++){
    if (data[i][15] == location) {
        counter += 1
    }
}
    return counter
    return 'Error: countLocation not implemented';
};


exercise.buildLatLngPoint = function(crime){
    //-------------------------------------------
    // YOUR CODE
    // build the point for the given crime
    // 
    // For example:
    //
    // var point = {};    
    // point.latitude = crime[latitudeColumnNumber];
    // point.longitude = crime[longitudeColumnNumber];
    // return point;    
    //-------------------------------------------    
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;   


    return 'Error: buildLatLngPoint not implemented';
};




