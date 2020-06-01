sharedModule.filter('limition',function(){
    return function(input,length){
        if(length){
            if(input.length >length){
                var trimmedString= input.substr(0,length) 
                return  trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))+'...'
             }else if (input.length == length|| input.length < length ){
                 return input;
             }
        }

    }
})