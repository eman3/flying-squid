<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [API](#api)
  - [Classes](#classes)
    - [Entity](#entity)
  - [MCServer](#mcserver)
    - [Flying-squid.createMCServer(options)](#flying-squidcreatemcserveroptions)
    - [Properties](#properties)
      - [serv.entityMaxId](#serventitymaxid)
      - [serv.players](#servplayers)
      - [serv.uuidToPlayer](#servuuidtoplayer)
      - [serv.world](#servworld)
      - [serv.entities](#serventities)
    - [Events](#events)
      - ["error" (error)](#error-error)
      - ["listening" (port)](#listening-port)
      - ["newPlayer" (player)](#newplayer-player)
    - [Methods](#methods)
      - [serv.createLog()](#servcreatelog)
      - [serv.log(message)](#servlogmessage)
      - [serv.broadcast(message[,color])](#servbroadcastmessagecolor)
  - [Player](#player)
    - [Properties](#properties-1)
      - [player.entity](#playerentity)
      - [player.username](#playerusername)
    - [Events](#events-1)
      - ["connected"](#connected)
      - ["spawned"](#spawned)
      - ["disconnected"](#disconnected)
      - ["error" (error)](#error-error-1)
      - ["chat" (message)](#chat-message)
    - [Methods](#methods-1)
      - [player.login()](#playerlogin)
      - [player.others()](#playerothers)
      - [player.chat(message)](#playerchatmessage)
      - [player.changeBlock(position,blockType)](#playerchangeblockpositionblocktype)
      - [player.sendInitialPosition()](#playersendinitialposition)
      - [player.spawn()](#playerspawn)
      - [player.setGameMode(gameMode)](#playersetgamemodegamemode)
      - [player.handleCommand(command)](#playerhandlecommandcommand)
      - [player.updateHealth(health)](#playerupdatehealthhealth)
    - [Low level properties](#low-level-properties)
      - [player._client](#player_client)
    - [Low level methods](#low-level-methods)
      - [player._writeOthers(packetName, packetFields)](#player_writeotherspacketname-packetfields)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# API

## Classes

### Entity
See [prismarine-entity](https://github.com/PrismarineJS/prismarine-entity)

## MCServer

### Flying-squid.createMCServer(options)

Create and return an instance of the class MCServer.

options is an object containing the settings

### Properties

#### serv.entityMaxId

Current maximum entity id

#### serv.players

Array of connected players

#### serv.uuidToPlayer

Object uuid to players

#### serv.world

The map

#### serv.entities

All of the entities

### Events

#### "error" (error)

Fires when there is an error.

#### "listening" (port)

Fires when the server is listening.

#### "newPlayer" (player)

Fires when `player` login, allow external player plugins.

### Methods

#### serv.createLog()

creates the log file

#### serv.log(message)

logs a `message`

#### serv.broadcast(message[,color])

broadcasts `message` to all the players with the optional `color`.

## Player

### Properties

#### player.entity

The entity of the player, of type `Flying-squid.Entity`

#### player.username

The username of the player

### Events

#### "connected" 

Fires when the player is connected

#### "spawned"

Fires when the player is spawned

#### "disconnected"

Fires when the player disconnected

#### "error" (error)

Fires when there is an error.

#### "chat" (message)

Fires when the player says `message`.

### Methods

#### player.login()

login

#### player.others()

return the other players than `player`

#### player.chat(message)

sends `message` to the player

#### player.changeBlock(position,blockType)

change the block at position `position` to `blockType`

#### player.sendInitialPosition()

send its initial position to the player

#### player.spawn()

tell everybody else that the player spawned

#### player.setGameMode(gameMode)

set player gameMode to `gameMode`

#### player.handleCommand(command)

handle `command`

#### player.updateHealth(health)

update the player health.

### Low level properties

#### player._client

The internal implementation to communicate with a client

### Low level methods

#### player._writeOthers(packetName, packetFields)

write to other players than `player` the packet `packetName` with fields `packetFields`
