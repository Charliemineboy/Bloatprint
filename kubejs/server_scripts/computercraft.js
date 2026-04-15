ServerEvents.recipes((event) => {
    event.remove({output: '#computercraft:turtle'})

    event.remove({output: 'computercraft:cable'})
    event.shapeless(
        Item.of('computercraft:cable', 4),
        [
            'minecraft:redstone',
            'minecraft:dried_kelp'
        ]
    )

    event.remove({output: 'computercraft:speaker'})
    event.shapeless(
        'computercraft:speaker',
        [
            'minecraft:note_block',
            'create:andesite_casing'
        ]
    )

    event.remove({output: 'computercraft:monitor_advanced'})
    event.shapeless(
        'computercraft:monitor_advanced',
        [
            'computercraft:monitor_normal',
            '#c:gems/amethyst'
        ]
    )

    event.remove({output: 'computercraft:monitor_normal'})
    event.shaped(
        Item.of('computercraft:monitor_normal', 4),
        [
            ' I ',
            'IDG',
            ' I '
        ],
        {
            I: '#c:plates/iron',
            D: 'create:display_board',
            G: 'create:andesite_casing'
        }
    )

    event.remove({output: 'computercraft:disk_drive'})
    event.shaped(
        'computercraft:disk_drive',
        [
            ' I ',
            ' L ',
            ' A '
        ],
        {
            I: '#c:plates/iron',
            L: 'minecraft:lectern',
            A: '#c:glass_panes/colorless'
        }
    )

    event.remove({output: 'computercraft:printer'})
    event.shaped(
        'computercraft:printer',
        [
            ' I ',
            ' B ',
            ' A '
        ],
        {
            I: '#c:plates/iron',
            B: 'minecraft:writable_book',
            A: 'create:andesite_casing'
        }
    )

    event.remove({output: 'computercraft:computer_advanced'})
    event.custom({
        "type": "computercraft:transform_shaped",
        "category": "redstone",
        "function": [{"type": "computercraft:copy_components", "from": {"item": "computercraft:computer_normal"}}],
        "key": {"B": {"item": "create:brass_hand"}, "P": {"item": "create:propeller"}, "A": {"tag": "c:gems/amethyst"}, "R": {"tag": "c:storage_blocks/redstone"}, "C": {"item": "computercraft:computer_normal"}},
        "pattern": [" B ", "PCA", " R "],
        "result": {"count": 1, "id": "computercraft:computer_advanced"}
    })

    event.remove({output: 'computercraft:pocket_computer_advanced', not: {input: 'computercraft:pocket_computer_advanced'}})
    event.custom({
        "type": "computercraft:transform_shaped",
        "category": "redstone",
        "key": {"B": {"item": "create:brass_hand"}, "P": {"item": "create:propeller"}, "A": {"tag": "c:gems/amethyst"}, "R": {"tag": "c:storage_blocks/redstone"}, "C": {"item": "computercraft:pocket_computer_normal"}},
        "function": [{"type": "computercraft:copy_components", "from": {"item": "computercraft:pocket_computer_advanced"}}],
        "pattern": [" B ", "PCA", " R "],
        "result": {"count": 1, "id": "computercraft:pocket_computer_advanced"},
    })

    event.remove({output: 'computercraft:computer_normal'})
    event.recipes.createMechanicalCrafting(
        "computercraft:computer_normal",
        ["  I  ", " VEL ", "IPMBG", " TSS ", "  I  "],
        {
            I: "#c:plates/iron",
            V: "create:item_vault",
            E: "create:electron_tube",
            L: "create:display_link",
            P: "create:propeller",
            M: "create:precision_mechanism",
            B: "create:display_board",
            G: "#c:glass_panes/colorless",
            T: "#c:storage_blocks/redstone",
            S: "#c:plates/copper"
        }
    )

    event.remove({output: 'computercraft:pocket_computer_normal', not: {input: 'computercraft:pocket_computer_normal'}})
    event.recipes.createPressing(
        'computercraft:pocket_computer_normal',
        'computercraft:computer_normal'
    )

    event.recipes.createPressing(
        'computercraft:pocket_computer_advanced',
        'computercraft:computer_advanced'
    )

    event.remove({output: 'computercraft:wired_modem'})
    event.shapeless(
        'computercraft:wired_modem',
        [
            '#c:dusts/redstone',
            'computercraft:cable'
        ]
    )

    event.remove({output: 'computercraft:wireless_modem_advanced'})
    event.shapeless(
        'computercraft:wireless_modem_advanced',
        [
            'minecraft:ender_eye',
            'minecraft:echo_shard',
            'computercraft:wireless_modem_normal'
        ]
    )

    event.remove({output: 'computercraft:wireless_modem_normal'})
    event.shapeless(
        'computercraft:wireless_modem_normal',
        [
            'create:redstone_link',
            'computercraft:wired_modem'
        ]
    )

    event.remove({output: 'computercraft:wired_modem_full'})
    event.recipes.createItemApplication(
        "computercraft:wired_modem_full",
        [
            "computercraft:wired_modem",
            "create:andesite_casing",
        ],
    )

    event.shapeless(
        'computercraft:wired_modem_full',
        [
            'create:andesite_casing',
            'computercraft:wired_modem'
        ]
    )

    event.recipes.createMilling(
        [
            "computercraft:wired_modem",
            "create:andesite_casing"
        ],
        'computercraft:wired_modem_full'
    )

    event.remove({output: 'computercraft:redstone_relay'})
    event.recipes.createItemApplication(
        "computercraft:redstone_relay",
        [
            "computercraft:wired_modem",
            "create:brass_casing",
        ],
    )

    event.shapeless(
        'computercraft:redstone_relay',
        [
            'create:brass_casing',
            'computercraft:wired_modem'
        ]
    )

    event.recipes.createMilling(
        [
            "computercraft:wired_modem",
            "create:brass_casing"
        ],
        'computercraft:redstone_relay'
    )
})