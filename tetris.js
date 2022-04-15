document.addEventListener('keydown', HandleKeyPress)
function generateNewShape()
{
    newShape = 
    {
        row: 0,
        col: BoardSize.cols / squareSize ^ 1 - 1
    }
    newShape.squareArr = getShape(newShape.row, newShape.col)
    return newShape
}
function drawShape()
{
    curShape.squareArr.forEach(square => {fillSquare(square)});
}
function drawFrame()
{
    clearBoard()
    drawBoard()
    drawGrid()
    drawShape()
}

function mainLoop()
{
    drawFrame()
  
}
function dropShape()
{
    if(curShape.row != BoardSize.rows - 3)
    {
        curShape.squareArr = getShape(curShape.row + 1, curShape.col)
        curShape.row++
    }
}

let DIRECTION = 
{
    IDLE: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3
}
let direction

function HandleKeyPress(key)
{
    if(key.keyCode === 65)
    {
        direction = DIRECTION.LEFT
        curShape.squareArr = getShape(curShape.row, curShape.col - 1)
        curShape.col--
    }
    else if(key.keyCode === 68)
    {
        direction = DIRECTION.RIGHT
        curShape.squareArr = getShape(curShape.row, curShape.col + 1)
        curShape.col++ 
    }
    else if(key.keyCode === 83)
    {
        direction = DIRECTION.DOWN
        curShape.squareArr = getShape(curShape.row + 1, curShape.col)
        curShape.row++ 
    }


}
const BoardSize = {rows: 30, cols: 20}
curShape = generateNewShape()
setInterval(mainLoop, 1)
setInterval(dropShape, 300)