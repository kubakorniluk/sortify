var sortify = {
    bubble: function(array) {
        if (Array.isArray(array)) {
            for(var i = 0; i < array.length; i++) {
                var arrValue = array[i]
                if(array[i] > array[i + 1]) {
                    array[i] = array[i + 1];
                    array[i + 1] = arrValue;
                    this.bubble(array);
                }
            }
            return array;
        }
        else {
            console.warn("Function argument must be an array.");
        }
    },
    selection: function(array) {
        if(Array.isArray(array)) {
            for(var i = 0; i < array.length; i++) {
                var min = i;
                for(var j = i + 1; j  < array.length; j++) {
                    if(array[min] > array[j]) {
                        min = j;
                    }
                }
                if(min !== i) {
                    var arrValue = array[i];
                    array[i] = array[min];
                    array[min] = arrValue;
                }
            }
            return array;
        }
        else {
            console.warn("Function argument must be an array.");
        }
    }
}
    // console.log(sortify.bubble([1, 2, 1, 5, 3]))
    console.log(sortify.selection([7, 4, 2, 9]))