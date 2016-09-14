module.exports = exports = EntityManager;

function EntityManager(width, height, cellSize) {
  this.width = width;//width
  this.height = height;//height
  this.cellSize = cellSize;
  this.widthInCells = Math.ceil(width / cellSize);
  this.numberOfCells =   this.widthInCells * Math.ceil(height / cellSize);
  this.cells =[];
  for (var i = 0; i < this.numberOfCells; i++) {
    this.cells[i] = [];
  }

EntityManager.prototype.addEntity = function (entity) {
    var left = Math.floor(entity.x/this.cellSize);
    var right = Math.ceil((entity.x+entit.width)/this.cellSize);
    var top = Math.ceil(entity.y/this.cellSize);
    var bottom = Math.ceil((entity.y+entit.height)/this.cellSize);
    for (var i = left; i <= right; i++) {
      for (var y = top; y <= bottom; y++) {
        this.cells[y*widthInCells +x].push(entity);
      }
    }
};
