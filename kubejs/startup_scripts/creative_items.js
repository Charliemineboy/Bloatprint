global.creative_items = [
    "/computercraft:turtle_/",
    "/touys:/",
]

ItemEvents.modification(event => {
    global.creative_items.forEach(pattern => {
        event.modify(pattern, item => {
            item.rarity = 'EPIC'
        })
    })
})