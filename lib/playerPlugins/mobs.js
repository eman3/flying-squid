module.exports=inject;

function inject(serv, player) {
  player._client.on("chat", function(packet) {
    if(packet.message == "/squid") {
      serv.entityMaxId++;
      var squidY = player.entity.position.y + 10;
      player._client.write("spawn_entity_living", {
        entityId: serv.entityMaxId,
        type: 94,
        x: player.entity.position.x,
        y: squidY,
        z: player.entity.position.z,
        yaw: 0,
        pitch: 0,
        headPitch: 0,
        velocityX: 0,
        velocityY: 0,
        velocityZ: 0,
        metadata: []
      });
    }
  });
}