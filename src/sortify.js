var sortify = {
    bubble: function(array) {
        if (Array.isArray(array)) {
            for(var i = 0; i < array.length; i++) {
                var arrValue = array[i]
                if(array[i] > array[i + 1]) {
                    array[i] = array[i+1];
                    array[i+1] = arrValue;
                    this.bubble(array);
                }
            }
            return array;
        }
        else {
            console.warn("Function argument must be an array")
        }
    }
}