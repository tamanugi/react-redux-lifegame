function cells(state=[], action) {
  switch(action.type) {
  case 'NEXT_GENERATION':
    console.log(state)
    return updateCells(state)
  default:
    return state
  }
}

function updateCells(cells=[]){
  var cells_tmp = cells

  for(var y = 0; y < cells.length; y++){
    for(var x = 0; x < cells[y].length; x++){
      var cnt = countLiveCell(cells, x, y)
      if(cnt < 2 || cnt > 4){
        cells_tmp[y][x] = 0
      }else{
        cells_tmp[y][x] = 1        
      }
    }
  }

  return cells_tmp
}

function countLiveCell(cells, x, y){

  var cntLiveCell = 0
  for(var i = -1; i <= 1; i++){
    for(var j = -1; j <= 1; j++){

      if(i === 0 && j === 0 ){
        continue
      }

      var _y = checkRange(y + i, 0, cells.length - 1)
      var _x = checkRange(x + j, 0, cells[y].length - 1)

      if(cells[_y][_x] === 1){
        cntLiveCell++
      }

    }
  }

  return cntLiveCell

}

function checkRange(num, min=0, max=0){

  if(num < min){
    return min
  }

  if(num > max){
    return max
  }

  return num

}

export default cells
