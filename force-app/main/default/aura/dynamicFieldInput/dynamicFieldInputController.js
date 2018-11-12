({
	init : function(component, event, helper) {
		
        if('v.objectField'!=null){
            //get the field name
        	var field = component.get('v.objectField');
        
        	//set key for values lookup
        	var key = 'v.simpleRecord.'+field;
        
        	//use the key to lookup value returned in LDS
        	var value = component.get(key);
        
        	//set the value to and attribute to be used in your component
    		component.set('v.passThroughValue', value);
            
        }
        
	}
})