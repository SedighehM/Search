function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    var pivot = arr[start]
    var swapIdx = start
    for (var i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }

    }
    swap(arr, start, swapIdx)
    return swapIdx
}
//O(nlgn) - If it is already sorted O(n*n)
function quickSort(arr, left = 0, right = length - 1) {
    if (left < right) {
        let pivotndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotndex - 1)
        //right
        quickSort(arr, pivotndex + 1, right)
    }
    return arr
}