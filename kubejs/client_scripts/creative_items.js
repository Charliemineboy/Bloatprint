ItemEvents.modifyTooltips(event => {
    global.creative_items.forEach(pattern => {
        event.add(pattern, 'Only available in Creative Mode.')
    })
})