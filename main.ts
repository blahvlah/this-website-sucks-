scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.setScore(1)
    info.startCountdown(20)
})
tiles.setTilemap(tilemap`level`)
let player = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 6 6 . . . . 
    . . . . . 6 6 9 9 6 6 6 6 . . . 
    . . . . . c 9 6 6 6 6 6 c . . . 
    . . . . 6 c 9 6 6 6 6 6 c 6 . . 
    . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
    . . . f 6 c 9 6 6 6 6 6 c 6 f . 
    . . . f 8 c 6 6 6 6 6 6 c 8 f . 
    . . . f 6 c 6 b b b b 6 c 6 f . 
    . . . 8 6 6 b c c c c b 6 6 8 . 
    . . . 8 8 b c c c c c c b 8 8 . 
    . . . f 8 9 9 9 9 9 9 9 9 8 f . 
    . . . f 8 d 6 6 6 6 6 6 d 8 f . 
    . . . . 6 d d 6 6 6 6 d d 6 f . 
    . . . . f 6 d 6 6 6 6 d 6 f . . 
    . . . . . 8 6 6 6 6 6 6 8 . . . 
    `, SpriteKind.Player)
controller.moveSprite(player)
tiles.placeOnRandomTile(player, sprites.castle.tilePath5)
scene.cameraFollowSprite(player)
let food = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . . 
    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
    . . c 4 4 d 4 4 4 4 4 d d 5 d c 
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
    . . . . c c b 4 4 4 b b 4 5 4 4 
    . . . . . . c c c c c c b b 4 . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(food, sprites.builtin.oceanDepths9)
