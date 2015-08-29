var World = require('prismarine-chunk');
var blocks=require("minecraft-data")(require("../version")).blocks;

module.exports=inject;

function inject(serv) {

  serv.world=new World();

  var i=2;
  for (var x = 0; x < 16;x++) {
    for (var z = 0; z < 16; z++) {
      var y;
      for(y=47;y<=50;y++)
      {
        serv.world.setBlockType(x, y, z, i);
        i=(i+1)%Object.keys(blocks).length;
      }
      for (y = 0; y < 256; y++) {
        serv.world.setSkyLight(x, y, z, 15);
      }
    }
  }
}