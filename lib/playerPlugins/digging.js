var Block=require("prismarine-block")(require("../version"));

module.exports=inject;

function inject(serv,player)
{
  player._client.on("block_dig",function(packet){
    var b=serv.world.getBlock(packet.location.x,packet.location.y,packet.location.z);
    currentlyDugBlock=new Block(b.id, b.biome, b.data);
    if(currentlyDugBlock.type==0) return;
    if(packet.status==0 && player.gameMode!=1)
      startDigging(packet.location);
    else if(packet.status==2)
      completeDigging(packet.location);
    else if(packet.status==1)
      cancelDigging(packet.location);
    else if(packet.status==0 && player.gameMode==1)
      creativeDigging(packet.location);
  });

  function diggingTime(location)
  {
    // assume holding nothing and usual conditions
    return currentlyDugBlock.digTime();
  }

  var currentlyDugBlock;
  var startDiggingTime;
  var animationInterval;
  var expectedDiggingTime;
  var lastDestroyState;
  var currentAnimationId;
  function startDigging(location)
  {
    serv.entityMaxId++;
    currentAnimationId=serv.entityMaxId;
    expectedDiggingTime=diggingTime(location);
    lastDestroyState=0;
    startDiggingTime=new Date();
    updateAnimation();
    animationInterval=setInterval(updateAnimation,100);
    function updateAnimation()
    {
      var currentDiggingTime=new Date()-startDiggingTime;
      var newDestroyState=Math.floor(9*currentDiggingTime/expectedDiggingTime);
      newDestroyState=newDestroyState>9 ? 9 : newDestroyState;
      if(newDestroyState!=lastDestroyState)
      {
        lastDestroyState=newDestroyState;
        player._writeOthers("block_break_animation",{
          "entityId":currentAnimationId,
          "location":location,
          "destroyStage":newDestroyState
        });
      }
    }
  }

  function cancelDigging(location)
  {
    clearInterval(animationInterval);
    player._writeOthers("block_break_animation",{
      "entityId":currentAnimationId,
      "location":location,
      "destroyStage":-1
    });
  }

  function completeDigging(location)
  {
    clearInterval(animationInterval);
    var diggingTime=new Date()-startDiggingTime;
    if(expectedDiggingTime-diggingTime<100)
      player.changeBlock(location,0);
    else
    {
      player._client.write("block_change",{
        location:location,
        type:currentlyDugBlock.type<<4
      });
    }
  }


  function creativeDigging(location)
  {
    player.changeBlock(location,0);
  }

}