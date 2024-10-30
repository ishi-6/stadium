import RoomScene from '../RoomScene'
import Main from '@scenes/interface/game/main/Main'
import { Animation, Button, SimpleButton } from '@components/components'
import {DateTime} from 'luxon'


/* START OF COMPILED CODE */

export default class Stadium_Halloween extends RoomScene {

    constructor() {
        super("Stadium_Halloween");

        /** @type {Phaser.GameObjects.Sprite} */
        this.door2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.door3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.door1;
        /** @type {Phaser.GameObjects.Text} */
        this.commonCandyCountdown;
        /** @type {Phaser.GameObjects.Text} */
        this.rareCandyCountdown;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.uncommonDoorBell;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.commonDoorBell;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.rareDoorBell;
        /** @type {Phaser.GameObjects.Text} */
        this.uncommonCandyCountdown;
        /** @type {Array<Phaser.GameObjects.Container|Phaser.GameObjects.Image|Phaser.GameObjects.Ellipse>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 560, 380),

            'shack': () => this.triggerRoom(807, 612, 748),
        }

        this.music = "Halloween1";

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("clouds_halloween-pack", "assets/media/rooms/clouds_halloween/clouds_halloween-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "stadium_halloween", "bg");
        bg.setOrigin(0, 0);

        // foodStand
        this.add.image(1052, 578, "stadium_halloween", "foodStand");

        // fenceL_2
        this.add.image(544, 706, "stadium_halloween", "fenceL_2");

        // fenceR_1
        this.add.image(1077, 718, "stadium_halloween", "fenceR_1");

        // houseR
        const houseR = this.add.image(1329, 574, "stadium_halloween", "houseR");
        houseR.flipX = true;

        // door2
        const door2 = this.add.sprite(1255, 662, "stadium_halloween", "door2open0015");
        door2.flipX = true;

        // fenceR_2
        const fenceR_2 = this.add.image(1362, 904, "stadium_halloween", "fenceR_2");

        // fog
        this.add.image(712, 871, "stadium_halloween", "fog");

        // houseU
        this.add.image(817, 236, "stadium_halloween", "houseU");

        // door3
        const door3 = this.add.sprite(870, 294, "stadium_halloween", "door3open0010");
        door3.flipX = true;

        // net
        this.add.image(475, 398, "stadium_halloween", "net");

        // treeHouseR
        this.add.image(1482, 829, "stadium_halloween", "treeHouseR");

        // fogR
        this.add.image(1189, 278, "stadium_halloween", "fogR");

        // fogL
        this.add.image(251, 356, "stadium_halloween", "fogL");

        // houseL
        const houseL = this.add.image(212, 619, "stadium_halloween", "houseL");
        houseL.flipX = true;

        // door1
        const door1 = this.add.sprite(281, 695, "stadium_halloween", "door1open0010");
        door1.flipX = true;

        // fenceL_1
        const fenceL_1 = this.add.image(102, 876, "stadium_halloween", "fenceL_1");

        // vignette
        const vignette = this.add.image(4, -3, "stadium_halloween", "vignette");
        vignette.setOrigin(0, 0);

        // container_2
        const container_2 = this.add.container(-1241, 713);

        // commonCandyCountdown
        const commonCandyCountdown = this.add.text(1622, 215, "", {});
        commonCandyCountdown.angle = -8;
        commonCandyCountdown.setOrigin(0.5, 10);
        commonCandyCountdown.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "cplcd", "fontSize": "40px", "fontStyle": "bold" });
        commonCandyCountdown.setPadding({"left":10,"right":10});
        container_2.add(commonCandyCountdown);

        // container_3
        const container_3 = this.add.container(31, 249);

        // rareCandyCountdown
        const rareCandyCountdown = this.add.text(929, 287, "", {});
        rareCandyCountdown.angle = -8.999999999999998;
        rareCandyCountdown.setOrigin(0.5, 10);
        rareCandyCountdown.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "cplcd", "fontSize": "40px", "fontStyle": "bold" });
        rareCandyCountdown.setPadding({"left":10,"right":10});
        container_3.add(rareCandyCountdown);

        // container_4
        const container_4 = this.add.container(-537, 1069);

        // uncommonDoorBell
        const uncommonDoorBell = this.add.ellipse(1793, -354, 128, 128);
        uncommonDoorBell.scaleX = 1.2512969071892455;
        uncommonDoorBell.scaleY = 1.2512969071892455;
        uncommonDoorBell.setOrigin(0.44471525706137616, 0.9422779435089872);
        uncommonDoorBell.visible = false;
        uncommonDoorBell.fillColor = 7062123;
        container_4.add(uncommonDoorBell);

        // commonDoorBell
        const commonDoorBell = this.add.ellipse(859, -338, 128, 128);
        commonDoorBell.scaleX = 1.2512969071892455;
        commonDoorBell.scaleY = 1.2512969071892455;
        commonDoorBell.setOrigin(0.49078587617689595, 0.9607061911551957);
        commonDoorBell.visible = false;
        commonDoorBell.fillColor = 7062123;
        container_4.add(commonDoorBell);

        // rareDoorBell
        const rareDoorBell = this.add.ellipse(1430, -753, 128, 128);
        rareDoorBell.scaleX = 1.2512969071892455;
        rareDoorBell.scaleY = 1.2512969071892455;
        rareDoorBell.setOrigin(0.48157175235379235, 0.8132802099855327);
        rareDoorBell.visible = false;
        rareDoorBell.fillColor = 7062123;
        container_4.add(rareDoorBell);

        // container_1
        const container_1 = this.add.container(31, 617);

        // uncommonCandyCountdown
        const uncommonCandyCountdown = this.add.text(1146, 274, "", {});
        uncommonCandyCountdown.scaleX = 1.0069619778109853;
        uncommonCandyCountdown.scaleY = 1.0207847568906478;
        uncommonCandyCountdown.angle = 12.000000000000002;
        uncommonCandyCountdown.setOrigin(0.5, 10);
        uncommonCandyCountdown.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "cplcd", "fontSize": "40px", "fontStyle": "bold" });
        uncommonCandyCountdown.setPadding({"left":10,"right":10});
        container_1.add(uncommonCandyCountdown);

        // commonCandyTrigger
        this.add.image(316, 522, "stadium_halloween", "commonCandyTrigger");

        // rareCandyTrigger
        this.add.image(904, 128, "stadium_halloween", "rareCandyTrigger");

        // uncommonCandyTrigger
        this.add.image(1274, 483, "stadium_halloween", "uncommonCandyTrigger");

        // lists
        const sort = [container_1, container_2, container_3, container_4, fenceL_1, fenceR_2, commonDoorBell, rareDoorBell, uncommonDoorBell];

        // uncommonDoorBell (components)
        const uncommonDoorBellSimpleButton = new SimpleButton(uncommonDoorBell);
        uncommonDoorBellSimpleButton.callback = () => this.trickOrTreat("uncommon");;

        // commonDoorBell (components)
        const commonDoorBellSimpleButton = new SimpleButton(commonDoorBell);
        commonDoorBellSimpleButton.callback = () => this.trickOrTreat("common");;

        // rareDoorBell (components)
        const rareDoorBellSimpleButton = new SimpleButton(rareDoorBell);
        rareDoorBellSimpleButton.callback = () => this.trickOrTreat("rare");;

        this.door2 = door2;
        this.door3 = door3;
        this.door1 = door1;
        this.commonCandyCountdown = commonCandyCountdown;
        this.rareCandyCountdown = rareCandyCountdown;
        this.uncommonDoorBell = uncommonDoorBell;
        this.commonDoorBell = commonDoorBell;
        this.rareDoorBell = rareDoorBell;
        this.uncommonCandyCountdown = uncommonCandyCountdown;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.world.MusicController.addSfx("thunder2", true)

       // this.bounds = this.hitbox.getBounds()

     //   this.tower.on('animationcomplete', () => this.onTowerAnimComplete())



        this.commonCandyInterval = setInterval(() => this.updateCountdownTexts("common"), 1000)
        this.uncommonCandyInterval = setInterval(() => this.updateCountdownTexts("uncommon"), 1000)
        this.rareCandyInterval = setInterval(() => this.updateCountdownTexts("rare"), 1000)
        this.doorbellInterval = setInterval(() => this.setDoorbellVisibility(), 1000)

        this.commonCandyZone = this.addCandyBody('houseL')
        this.uncommonCandyZone = this.addCandyBody('houseR')
        this.rareCandyZone = this.addCandyBody('houseU')


         //  this.setClockTime()


        if (localStorage.getItem("trickTutorial")) {
            null
        } else {
            this.interface.loadExternal("TrickTutorial")
            return;
        }


    }


    stop() {
        super.stop();
        clearInterval(this.commonCandyInterval);
        clearInterval(this.uncommonCandyInterval);
        clearInterval(this.rareCandyInterval);
        clearInterval(this.doorbellInterval);
        clearTimeout(this.clockTimeout);
    }


/*
    setClockTime() {
        var now = new Date(Date.now() - 1000 * 60 * 60 * 8)
        var timeInHours = now.getUTCHours()
        if (timeInHours == 12) {
            this.am_pm.text = 'PM'
        }
        else if (timeInHours > 12) {
            timeInHours = timeInHours - 12
            this.am_pm.text = 'PM'
        }
        var timeInMinutes = now.getUTCMinutes()
        if (timeInMinutes < 10) {
            this.clockTime.text = timeInHours + ':0' + timeInMinutes
        } else {
            this.clockTime.text = timeInHours + ':' + timeInMinutes
        }
        var day = now.getUTCDay()

        if (day == 1) {
            this.day.text = 'MONDAY'
        } else if (day == 2) {
            this.day.text = 'TUESDAY'
        } else if (day == 3) {
            this.day.text = 'WEDNESDAY'
        } else if (day == 4) {
            this.day.text = 'THURSDAY'
        } else if (day == 5) {
            this.day.text = 'FRIDAY'
        } else if (day == 6) {
            this.day.text = 'SATURDAY'
        } else {
            this.day.text = 'SUNDAY'
        }

        let timeout = 60 - now.getUTCSeconds()
        this.clockTimeout = setTimeout(() => this.setClockTime(), timeout * 1000)
    }


    onSnowballComplete(id, x, y) {
        if (!this.bounds) return
        if (this.bounds.contains(x, y)) {
            if (id == this.world.client.id) {
                this.stampCompletion += 1
            }
            if (this.stampCompletion >= 10) {
                if (!this.world.client.stamps.includes(13)) {
                    this.network.send("stamp_earned", {id: 13})
                    this.world.client.stampEarned(13)
                }
            }
            this.tower.__Animation.play()
        }
    }
*/

    trickOrTreat(candyType) {
        this.common_interval = 26000
        this.uncommon_interval = 56000
        this.rare_interval = 296000

        if (this[`${candyType}_lastExecuted`] == null) {
            this[`${candyType}_lastExecuted`] = Date.now() - 296001
        }
        if (this[`${candyType}_lastExecuted`] && (Date.now() - this[`${candyType}_lastExecuted`]) < this[`${candyType}_interval`]) return
        this[`${candyType}_lastExecuted`] = Date.now()
        if (candyType == 'common' && this.commonCandyZone.contains(this.world.client.penguin.x, this.world.client.penguin.y)) {
                this.addCandy(candyType)
                this.commonDoorBell.visible = false
                this.world.MusicController.playSfx("door", false)
                this.door1.setFrame("door1open0080")
                this.interface.main.toggleCommonCandy()
                return
            } else if (candyType == 'uncommon' && this.uncommonCandyZone.contains(this.world.client.penguin.x, this.world.client.penguin.y)) {
                this.addCandy(candyType)
                this.uncommonDoorBell.visible = false   
                this.world.MusicController.playSfx("door", false)
                this.door2.setFrame("door2open0075");
                this.interface.main.toggleRareCandy()
                return
            } else if (candyType == 'rare' && this.rareCandyZone.contains(this.world.client.penguin.x, this.world.client.penguin.y)) {
                this.addCandy(candyType)
                this.rareDoorBell.visible = false
                this.world.MusicController.playSfx("door", false)
                this.door3.setFrame("door3open0065");
                this.interface.main.toggleEpicCandy()
                return
        } else {
            return
        }
    }

    addCandy(candyType) {
        if (candyType == 'common') {
            //this.world.client.commoncandy += 10
            this.network.send("add_currency", {currency: 1, amount: 10});
        } else if (candyType == 'uncommon') {
            //this.world.client.uncommoncandy += 5
            this.network.send("add_currency", {currency: 2, amount: 5});
        } else if (candyType == 'rare') {
            //this.world.client.rarecandy += 3
            this.network.send("add_currency", {currency: 3, amount: 3});
        }
    }


    setDoorbellVisibility() {
        var candytime = DateTime.now().setZone('America/Los_Angeles')
        if ((candytime.second <= 34 && candytime.second >=30) || candytime.second <= 4) {
            this.door1.setFrame("door1open0050");
            this.commonDoorBell.visible = true
            this.world.MusicController.playSfx("commonbell", false)
        } else {
            this.door1.setFrame("door1open0001");
            this.commonDoorBell.visible = false
        }
        if (candytime.minute % 2 == 0 && candytime.second <= 4) {
            this.uncommonDoorBell.visible = true
            this.door2.setFrame("door2open0052");
            this.world.MusicController.playSfx("rarebell", false)
        } else {
            this.door2.setFrame("door2open0001");
            this.uncommonDoorBell.visible = false
        }
        if (candytime.minute % 5 == 0 && candytime.second <= 4) {
            this.world.MusicController.playSfx("epicbell", false)
            this.door3.setFrame("door3open0045");
            this.rareDoorBell.visible = true
        } else {
            this.door3.setFrame("door3open0001");
            this.rareDoorBell.visible = false
        }
    }

    updateCountdownTexts(candyType) {
        if (candyType == 'common') {
            this.commonCandyCountdown.text = this.world.getTimeUntilCandyGeneration(DateTime.now().setZone('America/Los_Angeles'),'common')
        } else if (candyType == 'uncommon') {
            this.uncommonCandyCountdown.text = this.world.getTimeUntilCandyGeneration(DateTime.now().setZone('America/Los_Angeles'), 'uncommon')
        } else {
            this.rareCandyCountdown.text = this.world.getTimeUntilCandyGeneration(DateTime.now().setZone('America/Los_Angeles'), 'rare')
        }
    }


    /*
    onTowerAnimComplete() {
        this.tower.setFrame('tower_0001')
    }

    onTimezoneClick() {
        this.interface.main.toggleTimezone()
    }
    */


    addCandyBody(key) {
        let body = this.matter.add.fromPhysicsEditor(0, 0, this.roomPhysics[key])
        this.matter.body.setPosition(body, body.centerOffset) 

        body.contains = (x, y) => {
            return this.matter.containsPoint(body, x, y)
        }

        return body
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
