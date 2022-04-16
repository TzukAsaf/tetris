function getBaseShape()
{
    return [{row: 0, col: 9}, {row: 1, col: 9}, {row: 2, col: 9}, {row:2, col: 10}]
}




function getShape(rowAdder, colAdder)
{
    baseShape = getBaseShape()
    return baseShape.map(square => {
        return {row: square.row + rowAdder, col: square.col + colAdder}
    })

}

function addOffsetToShape(shapeArr, rowAdder, colAdder)
{
    return shapeArr.map(square => {
        return {row: square.row + rowAdder, col: square.col + colAdder}
    })

}

function isShapeInBounds(squareArray)
{
    for(let square of squareArray)
    {
        if(square.col < 0 || square.col >= BoardSize.cols || square.row >= BoardSize.rows)
        {
            return false
        }
    }


    return true        


}