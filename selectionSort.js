//O(n*n) - but with less swap than bubble
function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        var min = i
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (i !== min) {
            //Swap
            var temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }

    }
    return arr
}