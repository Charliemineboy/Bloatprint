ItemEvents.modification(event => {
    event.modify('/computercraft:turtle_/', item => {
        item.rarity = 'EPIC'
    })
})