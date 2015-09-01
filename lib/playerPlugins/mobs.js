module.exports=inject;

function inject(serv, player) {
  player._client.on("chat", function(packet) {
    if(packet.message == "/squid") {
      var squidY = player.entity.position.y += 10;
      serv.entityMaxId++;
      player._client.write("spawn_entity_living", {
        entityId: serv.entityMaxId,
        type: 94,
        x: player.entity.position.x,
        y: squidY,
        z: player.entity.position.z,
        yaw: 0,
        pitch: 0,
        headPitch: 0,
        velocityX: 1,
        velocityY: 10,
        velocityZ: 1,
        metadata: []
      });
    }
  });
}