/*资源*/{
    //战舰类型资源
    var OBJECT_PLAYER = 1,
        OBJECT_PLAYER_PROJECTILE = 2,
        OBJECT_ENEMY = 4,
        OBJECT_ENEMY_PROJECTTILE = 8,
        OBJECT_POWERUP = 16;
    //画布初始化器
    var sprites = {
        BigCat: { sx: 1012, sy: 276, w: 110, h: 178, frame: 1 },
        SmallCat1: { sx: 363, sy: 351, w: 68, h: 62, frame: 1 },
        SmallCat2: { sx: 484, sy: 343, w: 68, h: 90, frame: 1 },
        SmallCat3: { sx: 615, sy: 311, w: 61, h: 121, frame: 1 },
        Boom: { sx: 772, sy: 326, w: 51, h: 81, frame: 1 },
        Money1: { sx: 891, sy: 307, w: 78, h: 53, frame: 1 },
        Money2: { sx: 894, sy: 403, w: 77, h: 54, frame: 1 },
        Unicom: { sx: 1004, sy: 491, w: 106, h: 58, frame: 1 },
        LiaoningUnicom: { sx: 3, sy: 90, w: 162, h: 90, frame: 1 },
        Bullet: { sx: 876, sy: 491, w: 22, h: 46, frame: 1 },
        LiaoningUnicomDouble11: { sx: 854, sy: 54, w: 254, h: 194, frame: 1 },
        CatHead: { sx: 259, sy: 253, w: 147, h: 72, frame: 1 },
        Double11: { sx: 234, sy: 1142, w: 202, h: 73, frame: 1 },
        HowToPlay: { sx: 226, sy: 30, w: 129, h: 44, frame: 1 },
        StartGame: { sx: 228, sy: 79, w: 129, h: 44, frame: 1 },
        Flow: { sx: 0, sy: 263, w: 197, h: 48, frame: 1 },
        Wow: { sx: 534, sy: 200, w: 189, h: 107, frame: 1 },
        WithWow: { sx: 507, sy: 34, w: 299, h: 144, frame: 1 },
        explosion: { sx: 7, sy: 457, w: 64, h: 64, frame: 12 },
        ship: { sx: 773, sy: 213, w: 69, h: 78, frames: 1 },
        missile: { sx: 30, sy: 437, w: 7, h: 11, frames: 1 },
        Enmissile: { sx: 30, sy: 437, w: 7, h: 11, frames: 1 }
    };
    //敌方单位种类
    var enemies = {
        //straight: {
        //    x: 180, y: -50, sprite: 'enemy_ship', health: 30,
        //    E: 50
        //},
        //straight2: {
        //    x: 180, y: -50, sprite: 'enemy_ship2', health: 30,
        //    E: 50
        //},
        //ltr: {
        //    x: 0, y: -100, sprite: 'Money', health: 30,
        //    B: 75, C: 1, E: 150
        //},
        //circle: {
        //    x: 250, y: -50, sprite: 'enemy_circle', health: 30,
        //    A: 0, B: -100, C: 1, E: 20, F: 100, G: 1, H: Math.PI / 2
        //},
        //wiggle: {
        //    x: 100, y: -50, sprite: 'enemy_bee', health: 20,
        //    B: 50, C: 4, E: 100
        //},
        //sin窄的
        BigCatStep1: {
            x: 0, y: -200, sprite: 'BigCat', health: 30,
            B: 100, C: 1.2, E: 75, HitYou: true, CanSendMissle: true, EarnPoints: 500, BombtoKill: false
        },
        //二次快的
        BigCatStep2: {
            x: 0, y: -200, sprite: 'BigCat', health: 30,
            P: 3, M: 3.1, N: 5, O: 3, J: 0, K: 2, HitYou: true, EarnPoints: 500, BombtoKill: false
        },
        BigCatStep5: {
            x: 250, y: -200, sprite: 'SmallCat1', health: 30,
            P: 3, M: 3.2, N: 5, O: -4.6, J: 0, K: 2, HitYou: true, EarnPoints: 100, BombtoKill: false
        },
        //sin宽的
        BigCatStep3: {
            x: 250, y: -200, sprite: 'BigCat', health: 30,
            B: -200, C: 1.2, E: 75, HitYou: true, CanSendMissle: true, EarnPoints: 500, BombtoKill: false
        },
        BigCatStep4: {
            x: 250, y: -200, sprite: 'BigCat', health: 30,
            B: -100, C: 1.2, E: 75, HitYou: true, CanSendMissle: true, EarnPoints: 500, BombtoKill: false
        },
        //圈
        SmallCat1Step1: {
            x: 0, y: -100, sprite: "SmallCat1", health: 10,
            A: 20, B: 100, C: 1.2, E: 40, F: 100, G: 1.3, HitYou: true, CanSendMissle: false, EarnPoints: 100, BombtoKill: false
        },
        //三次慢的
        SmallCat1Step2: {
            x: 0, y: -100, sprite: "SmallCat1", health: 10,
            P: 3, M: 4.85, N: 3, O: 4, J: 0, K: 2, HitYou: true, CanSendMissle: false, EarnPoints: 100, BombtoKill: false
        },
        //自杀1
        SmallCat1Step3: {
            x: 0, y: -100, sprite: "SmallCat1", health: 10,
            P: 3, M: 4.2, N: 3, B: 200, C: 1.2, E: 75, HitYou: true, CanSendMissle: false, EarnPoints: 100, BombtoKill: false
        },
        //自杀2
        SmallCat2Step1: {
            x: 280, y: -100, sprite: "SmallCat2", health: 10,
            P: 3, M: 4, N: 3, B: -200, C: 1.2, E: 75, HitYou: true, CanSendMissle: false, EarnPoints: 100, BombtoKill: false
        },
        //先慢后快
        SmallCat2Step2: {
            x: 0, y: -100, sprite: "SmallCat2", health: 10,
            A: 10, B: 100, C: 1.2, E: 10, F: 5, G: 1.3, P: 3, M: 3, N: 4, HitYou: true, CanSendMissle: false, EarnPoints: 100, BombtoKill: false
        },
        //只适合最难关卡 俯冲
        SmallCat2Step3: {
            x: Math.random() * 250, y: -100, sprite: "SmallCat2", health: 10,
            E: 450, HitYou: true, CanSendMissle: false, EarnPoints: 100, BombtoKill: false

        },
        //只适合最难关卡 8字形
        SmallCat3Step1: {
            x: Math.random() * 40 + 80, y: -100, sprite: "SmallCat3", health: 10,
            B: 400, C: 5, F: 400, G: 3, HitYou: true, CanSendMissle: false, EarnPoints: 100, BombtoKill: false
        },
        //sin
        SmallCat3Step2: {
            x: 0, y: -100, sprite: "SmallCat3", health: 10,
            A: 30, F: 300, G: 1.3, HitYou: true, CanSendMissle: false, EarnPoints: 100, BombtoKill: false
        },
        //只适合最难关卡  指数
        SmallCat3Step3: {
            x: Math.random() * 250, y: -100, sprite: "SmallCat3", health: 10,
            L: 4, HitYou: true, CanSendMissle: false, EarnPoints: 100, BombtoKill: false
        },
        BoomStep: {
            x: Math.random() * 300, y: -70, sprite: "Boom", health: 70,
            E: 100, HitYou: true, CanSendMissle: false, EarnPoints: 0, BombtoKill: true
        },
        Money1Step: {
            x: Math.random() * 300, y: -70, sprite: "Money1", health: 100,
            E: 100, HitYou: false, CanSendMissle: false, EarnPoints: 1000, BombtoKill: false
        },
        Money2Step: {
            x: Math.random() * 300, y: -70, sprite: "Money2", health: 100,
            E: 100, HitYou: false, CanSendMissle: false, EarnPoints: 1000, BombtoKill: false
        }
    };
}

/*引擎*/{
    //渲染引擎
    var Game = new function () {
        var boards = [];
        this.initialize = function (canvasElementId, sprite_data, callback) {
            //传入画布初始化
            this.canvas = document.getElementById(canvasElementId)
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.Direction = 0;
            this.SpeedValue = 1;
            this.GameStarted = false;
            this.dt = 25000;
            this.stay = true;
            this.touch = false;
            this.playerOffset = 10;
            this.GameFinished = false;
            this.Air = null;
            //尝试获取画布上下文
            this.ctx = this.canvas.getContext && this.canvas.getContext("2d");
            if (!this.ctx) {
                return alert("你必须升级你的浏览器. 建议使用最新版Chrome!");
            }
            //设置输入流监听
            this.setupInput();
            document.getElementById("Pkf").volume = 0.4;
            //设置游戏循环渲染流
            this.loop();
            this.setupMobile();
            //加载资源图片
            SpriteSheet.load(sprite_data, callback);
        };
        //控制输入流监听
        var KEY_CODES = { 37: "left", 39: "right", 32: "fire", 38: "up", 40: "down" };
        this.keys = {};
        this.setupInput = function () {
            //添加按下按键监听器
            window.addEventListener('keydown', function (e) {
                if (KEY_CODES[e.keyCode]) {
                    Game.keys[KEY_CODES[e.keyCode]] = true;
                    e.preventDefault();
                }
            }, false);
            //添加松开按键监听器
            window.addEventListener('keyup', function (e) {
                if (KEY_CODES[e.keyCode]) {
                    Game.keys[KEY_CODES[e.keyCode]] = false;
                    e.preventDefault();
                }
            }, false);
        }

        //游戏刷新循环控制器
        this.loop = function () {
            //Game.dt = 20 * Math.sqrt(Game.dt / 10000 + 1);
            Game.dt += 10;
            for (var i = 0, len = boards.length; i < len; i++) {
                if (boards[i]) {
                    boards[i].step(Game.dt / 1000000);
                    boards[i].draw(Game.ctx);
                }
            }
            setTimeout(Game.loop, 30);
        };

        //修改游戏刷新函数组
        this.setBoard = function (num, board) {
            boards[num] = board;
        };

        //移动设备兼容
        this.setupMobile = function () {
            var container = document.getElementById("container");
            var w = window.innerWidth, h = window.innerHeight;
            //向下滚动以消除地址栏
            container.style.height = h * 8 + "px";
            window.scrollTo(0, 8);
            h = window.innerHeight + 2;
            //适应大小
            container.style.height = h + "px";
            container.style.width = w + "px";
            container.style.padding = 0;
            container.style.height = this.height + "px";
            container.style.width = this.width + "px";
            //拉扯画布
            this.canvas.style.alignContent = "center";
            this.canvas.style.top = "0px";
        }
    };

    //战舰图片资源引擎
    var SpriteSheet = new function () {

        this.map = {};
        //加载资源图片
        this.load = function (spriteData, callback) {
            this.map = spriteData;
            this.image = new Image();
            this.image.onload = callback;
            this.image.src = "images/spritesALL.png";
        };

        //加载单位
        this.draw = function (ctx, sprite, x, y, frame) {
            var s = this.map[sprite];
            if (!frame) frame = 0;
            ctx.drawImage(this.image,
                             s.sx + frame * s.w,
                             s.sy,
                             s.w, s.h,
                             x, y,
                             s.w, s.h);
        };
    }
}

/*对象逻辑*/{

    //游戏面板控制
    var GameBoard = function () {
        var board = this;
        //当前对象列表
        this.objects = [];
        //当前显示在屏幕上的对象列表
        this.cnt = {};
        //将对象压入列表中
        this.add = function (obj) {
            obj.board = this;
            this.objects.push(obj);
            this.cnt[obj.type] = (this.cnt[obj.type] || 0) + 1;
            return obj;
        };
        //标记要删除的对象
        this.remove = function (obj) {
            this.removed.push(obj);
        };
        //重置要删除的对象列表
        this.resetRemoved = function () {
            this.removed = [];
        };
        //删除列表中标记要删除的对象
        this.finalizeRemoved = function () {
            for (var i = 0, len = this.removed.length; i < len; i++) {
                var idx = this.objects.indexOf(this.removed[i]);
                if (idx != -1) {
                    this.cnt[this.removed[i].type]--;
                    this.objects.splice(idx, 1);
                }
            }
        };
        //当前所有对象均应调用此同样的方法
        this.iterate = function (funcName) {
            var args = Array.prototype.slice.call(arguments, 1);
            for (var i = 0, len = this.objects.length; i < len; i++) {
                var obj = this.objects[i];
                obj[funcName].apply(obj, args)
            }
        };
        //找到第一个func返回为真的对象
        this.detect = function (func) {
            for (var i = 0, val = null, len = this.objects.length; i < len; i++) {
                if (func.call(this.objects[i])) return this.objects[i];
            }
            return false;
        };
        //在所有对象时调用
        this.step = function (dt) {
            this.resetRemoved();
            this.iterate("step", dt);
            this.finalizeRemoved();
        };
        //绘制所有对象
        this.draw = function (ctx) {
            this.iterate('draw', ctx);
        };
        //判断两个对象是不是撞上了
        this.overlap = function (o1, o2) {
            return !((o1.y + o1.h - 1 < o2.y) || (o1.y > o2.y + o2.h - 1) ||
                (o1.x + o1.w - 1 < o2.x) || (o1.x > o2.x + o2.w - 1));
        };
        //判断它和其他所有对象是不是装上了
        this.collide = function (obj, type) {
            return this.detect(function () {
                if (obj != this) {
                    var col = (!type || this.type & type) && board.overlap(obj, this)
                    return col ? this : false;
                }
            });
        };
    };

    //星空画布绘制
    var Starfield = function (speed, opacity, numStars, clear, blue) {

        var BackGround = new Image();
        BackGround.src = "images/BackGround.png";
        //设置离屏画布
        var stars = document.createElement("canvas");
        stars.width = Game.width;
        stars.height = Game.height*2;
        var starCtx = stars.getContext("2d");
        var offset = 0;
        //如果clear置位 让离屏画布黑屏而不是透明
        if (clear) {
            starCtx.fillStyle = "#000";
            starCtx.fillRect(0, 0, stars.width, stars.height);
        }
        //绘制随机白色点到矩形离屏画布上面
        if (blue) {
            starCtx.fillStyle = "#99F";
        }
        else {
            starCtx.fillStyle = "#FFF";
        }
        starCtx.globalAlpha = opacity;
        for (var i = 0; i < numStars; i++) {
            starCtx.fillRect(Math.floor(Math.random() * stars.width),
                             Math.floor(Math.random() * stars.height),
                2, 2);
        }

        //这个方法每帧都要调用 用于把离屏画布画上去
        this.draw = function (ctx) {
            var intOffset = Math.floor(offset);
            var remaining = stars.height - intOffset;
            //ctx.drawImage("images/BackGround.png",
            //    0, remaining,
            //    340, intOffset,
            //    0, 0,
            //    340, 500);

            //绘制上半部分
            if (intOffset > 0) {
                ctx.drawImage(BackGround,
                          0, remaining,
                          stars.width, intOffset,
                          0, 0,
                          stars.width, intOffset);
            }

            //绘制下半部分
            if (remaining > 0) {
                ctx.drawImage(BackGround,
                        0, 0,
                        stars.width, remaining,
                        0, intOffset,
                        stars.width, remaining);
            }
        }

        //这个方法是用来更新星图的
        this.step = function (dt) {
            offset += dt * speed;
            offset = offset % stars.height;
        }
    }

    //游戏胜利
    var winGame = function () {
        // Game.keys["fire"] = false;
        // Game.setBoard(4, new TitleScreen("胜利", "按攻击键再次开始游戏", playGame));
    }

    //游戏失败
    var loseGame = function () {
        Game.keys["fire"] = false;
        Game.GameStarted = false;
        Game.GameFinished = true;
        Game.setBoard(4, new GameEnd());
    }

    //等级控制
    var Level = function (callback) {
        this.levelData = [];
        var ShouldShowMoney = false;
        this.levelData.push(Object.create([2000, 3000, 1000, "Money1Step", { x: 50 }]));
        for (var i = 2000; i < 2000000; i += 5000) {
            var Cat = this.Truan(parseInt((Math.random() * 14 + 1)));
            //var Cat = this.Truan(parseInt(11));
            this.levelData.push(Object.create([i, i + Math.random() * 1700 + 300, Math.random() * 800 + 400 - i / 1000, Cat, { CanSendMissle: i > 10000 }]));
            var Cat = this.Truan(parseInt((Math.random() * 13 + 1)));
            this.levelData.push(Object.create([i + 2000, i + Math.random() * 1700 + 300 + 2000, Math.random() * 800 + 400 - i / 1000, Cat, { CanSendMissle: i > 30000 }]));
            var Cat = this.Truan(parseInt((Math.random() * 13 + 1)));
            this.levelData.push(Object.create([i + 4000, i + Math.random() * 1700 + 300 + 4000, Math.random() * 800 + 400 - i / 1000, Cat, { CanSendMissle: i > 50000 }]));
            if (ShouldShowMoney) {
                var MondyPostion = Math.random() * 300;
                this.levelData.push(Object.create([i + 4500, i + 4600, 100, "Money1Step", { x: MondyPostion }]));
            }
            else {
                var MondyPostion = Math.random() * 300;
                this.levelData.push(Object.create([i + 4500, i + 4600, 100, "BoomStep", { x: MondyPostion }]));
            }
            ShouldShowMoney = !ShouldShowMoney;
        }
        this.t = 0;
        this.callback = callback;
    }
    Level.prototype.Truan = function (typeid) {
        var returnVaule = "";
        switch (typeid) {
            case 1:
                returnVaule = "BigCatStep1";
                break;
            case 2:
                returnVaule = "BigCatStep2";
                break;
            case 3:
                returnVaule = "BigCatStep3";
                break;
            case 4:
                returnVaule = "BigCatStep4";
                break;
            case 5:
                returnVaule = "SmallCat1Step1";
                break;
            case 6:
                returnVaule = "SmallCat1Step2";
                break;
            case 7:
                returnVaule = "SmallCat1Step3";
                break;
            case 8:
                returnVaule = "SmallCat2Step1";
                break;
            case 9:
                returnVaule = "SmallCat2Step2";
                break;
            case 10:
                returnVaule = "SmallCat2Step3";
                break;
            case 11:
                returnVaule = "SmallCat3Step1";
                break;
            case 12:
                returnVaule = "SmallCat3Step2";
                break;
            case 13:
                returnVaule = "SmallCat3Step3";
                break;
            case 14:
                returnVaule = "BigCatStep5";
                break;
            default:
                returnVaule = "BigCatStep1";
                break;
        }
        return returnVaule;
    }
    Level.prototype.step = function (dt) {
        var idx = 0, remove = [], curShip = null;

        //更新时钟周期
        this.t += dt * 1000;
        //应用关卡数据
        while ((curShip = this.levelData[idx]) && (curShip[0] < this.t + 2000)) {
            if (this.t > curShip[1]) {
                remove.push(curShip);
            } else if (curShip[0] < this.t) {
                //读取其类型
                var enemy = enemies[curShip[3]];
                var override = curShip[4];
                this.board.add(new Enemy(enemy, override));
                curShip[0] += curShip[2];
            }
            idx++;
        }

        for (var i = 0, len = remove.length; i < len; i++) {
            var remIdx = this.levelData.indexOf(remove[i]);
            if (remIdx != -1) this.levelData.splice(remIdx, 1);
        }

        if (this.levelData.length === 0 && this.board.cnt[OBJECT_ENEMY] === 0) {
            if (this.callback) setTimeout(this.callback, 3000);
        }
    };
    Level.prototype.draw = function (ctx) { };
}

/*控制器*/{

    //通用的单位控制
    var Sprite = function () {

    }
    Sprite.prototype.setup = function (sprite, props) {
        this.sprite = sprite;
        this.merge(props);
        this.frame = this.frame || 0;
        this.w = SpriteSheet.map[sprite].w;
        this.h = SpriteSheet.map[sprite].h;
    }
    Sprite.prototype.merge = function (props) {
        if (props) {
            for (var prop in props) {
                this[prop] = props[prop];
            }
        }
    }
    Sprite.prototype.draw = function (ctx) {
        SpriteSheet.draw(ctx, this.sprite, this.x, this.y, this.frame);
    }
    Sprite.prototype.hit = function (damage) {
        this.board.remove(this);
    }

    //玩家战舰控制
    var PlayerShip = function () {
        this.setup("ship", { vx: 0, vy: 0, frame: 0, reloadTime: 0.15, maxVel: 250, maxHel: 250, health: 60 });
        this.x = Game.width / 2 - this.w / 2;
        this.y = Game.height - 10 - this.h;
        this.reload = this.reloadTime;
        this.step = function (dt) {
            //反应水平按键
            Game.stay = true;
            if (Game.keys["left"]) {
                Game.stay = false;
                Game.Direction = 0;
            }
            else if (Game.keys["right"]) {
                Game.stay = false;
                Game.Direction = Math.PI;
            }
                //反应竖直按键
            else if (Game.keys["up"]) {
                Game.stay = false;
                Game.Direction = Math.PI / 2;
            }
            else if (Game.keys["down"]) {
                Game.stay = false;
                Game.Direction = Math.PI * 3 / 2;
            }

            if (Game.stay == false || Game.touch == true) {
                this.vx = -this.maxHel * Game.SpeedValue * Math.cos(Game.Direction);
                this.vy = -this.maxVel * Game.SpeedValue * Math.sin(Game.Direction);
            }
            else {
                this.vx = 0;
                this.vy = 0;
            }

            //移动
            this.x += this.vx * dt;
            this.y += this.vy * dt;
            //防止出界
            if (this.x < 0) {
                this.x = 0;
            }
            else if (this.x > Game.width - this.w) {
                this.x = Game.width - this.w;
            }
            //防止竖直出界
            if (this.y < 0) {
                this.y = 0;
            }
            else if (this.y > Game.height - this.h) {
                this.y = Game.height - this.h;
            }
            //控制导弹装填
            this.reload -= dt;
            if (Game.keys["fire"] && this.reload < 0) {
                //Game.keys["fire"] = 0;
                this.reload = this.reloadTime;
                this.board.add(new PlayerMissile(this.x + this.w / 2, this.y, -400));
            }
        }
    }
    PlayerShip.prototype = new Sprite();
    PlayerShip.prototype.type = OBJECT_PLAYER;
    PlayerShip.prototype.hit = function (damage) {
        this.board.add(new Explosion(this.x + this.w / 2, this.y + this.h / 2));
        this.health -= damage;
        if (!(damage >= 0)) {
            this.board.remove(this);
            setTimeout(loseGame, 3000);
        }
        else if (this.health <= 0) {
            this.board.remove(this);
            setTimeout(loseGame, 3000);
        }
    }

    //敌方战舰控制
    var Enemy = function (blueprint, override) {
        this.reload = Math.random() * (2 - 0.8 + 1) + 0.4;
        this.merge(this.baseParameters);
        this.setup(blueprint.sprite, blueprint);
        this.merge(override);
    }
    Enemy.prototype = new Sprite();
    Enemy.prototype.type = OBJECT_ENEMY;
    Enemy.prototype.baseParameters = {
        A: 0, B: 0, C: 0, D: 0,
        E: 0, F: 0, G: 0, H: 0, t: 0,
        I: 0, J: 0, K: 0, L: 0, M: 0, N: 0, O: 0, P: 0
    }
    Enemy.prototype.step = function (dt) {
        //时间进步
        this.t += dt;
        //速度进步
        //var temp = Math.pow(i,j);
        //此函数并不规范具体待定
        this.vx = this.A + this.B * Math.sin(this.C * this.t + this.D) + Math.pow(this.I, this.t) + this.O * Math.pow(this.J - this.t, this.K);
        this.vy = this.E + this.F * Math.sin(this.G * this.t + this.H) + Math.pow(this.L, this.t) + this.P * Math.pow(this.M - this.t, this.N);
        //位移进步
        this.x += this.vx * dt;
        this.y += this.vy * dt;
        if (this.HitYou) {
            var collision = this.board.collide(this, OBJECT_PLAYER);
            if (collision) {
                collision.hit(this.damage);
                this.board.remove(this);
            }
        }
        //出界即死
        if (this.y > Game.height ||
           this.x < -this.w ||
           this.x > Game.width) {
            this.board.remove(this);
        }
        if (this.CanSendMissle) {
            this.reload -= dt;
            if (this.reload < 0) {
                this.reload = 2;
                this.board.add(new EnMissile(this.x + this.w / 2, this.y + this.h / 2, 170));
                //        this.board.add(new EnMissile(this.x + this.w, this.y + this.h / 2,170));
            }
        }
    }
    Enemy.prototype.hit = function (damage) {
        this.health -= damage;

        if (this.health <= 0) {
            Game.points += this.EarnPoints;
            this.board.add(new Explosion(this.x + this.w / 2, this.y + this.h / 2));
            this.board.remove(this);
            if (this.BombtoKill) {
                setTimeout(loseGame, 300);
            }
        }
    }

    //我方导弹控制
    var PlayerMissile = function (x, y, speed) {
        this.setup("missile", { vy: speed, damage: 10 });
        this.x = x - this.w / 2;
        this.y = y - this.h;
    };
    PlayerMissile.prototype = new Sprite();
    PlayerMissile.prototype.type = OBJECT_PLAYER_PROJECTILE;
    PlayerMissile.prototype.step = function (dt) {
        this.y += this.vy * dt;
        var collision = this.board.collide(this, OBJECT_ENEMY);
        if (collision) {
            collision.hit(this.damage);
            this.board.remove(this);
        } else if (this.y < -this.h) {
            this.board.remove(this);
        }
    };

    //敌方导弹控制
    var EnMissile = function (x, y, speed) {
        this.setup("Enmissile", { vy: speed, vx: Math.random() * (200) - 100, damage: 10 });
        this.x = x - this.w / 2;
        this.y = y - this.h;
    };
    EnMissile.prototype = new Sprite();
    EnMissile.prototype.type = OBJECT_PLAYER_PROJECTILE;
    EnMissile.prototype.step = function (dt) {
        this.y += this.vy * dt;
        this.x += this.vx * dt;
        var collision = this.board.collide(this, OBJECT_PLAYER);
        if (collision) {
            collision.hit(this.damage);
            this.board.remove(this);
        } else if (this.y < -this.h) {
            this.board.remove(this);
        }
    };

    //爆炸控制
    var Explosion = function (centerX, centerY) {
        this.setup('explosion', { frame: 0 });
        document.all.bgs.src = "images/4737.mp3";
        this.x = centerX - this.w / 2;
        this.y = centerY - this.h / 2;
        this.subFrame = 0;
    }
    Explosion.prototype = new Sprite();
    Explosion.prototype.step = function (dt) {
        this.frame = Math.floor(this.subFrame++ / 3);
        if (this.subFrame >= 36) {
            this.board.remove(this);
        }
    }

    //游戏菜单控制
    var TitleScreen = function TitleScreen(title, subtitle, callback) {

        //游戏菜单刷新控制器
        this.step = function (dt) {
            if (Game.keys["fire"] && callback) {
                Game.GameStarted = true;
                callback();
            }
        }

        //游戏菜单绘制器
        this.draw = function (ctx) {
            //LiaoningUnicomDouble11
            this.frame = this.frame || 0;
            this.w = SpriteSheet.map["LiaoningUnicomDouble11"].w;
            this.h = SpriteSheet.map["LiaoningUnicomDouble11"].h;
            SpriteSheet.draw(ctx, "LiaoningUnicomDouble11", 50, 80, this.frame);

            this.w = SpriteSheet.map["HowToPlay"].w;
            this.h = SpriteSheet.map["HowToPlay"].h;
            SpriteSheet.draw(ctx, "HowToPlay", 190, 450, this.frame);

            this.w = SpriteSheet.map["StartGame"].w;
            this.h = SpriteSheet.map["StartGame"].h;
            SpriteSheet.draw(ctx, "StartGame", 20, 450, this.frame);

            this.w = SpriteSheet.map["Unicom"].w;
            this.h = SpriteSheet.map["Unicom"].h;
            SpriteSheet.draw(ctx, "Unicom", 10, 10, this.frame);

            this.w = SpriteSheet.map["WithWow"].w;
            this.h = SpriteSheet.map["WithWow"].h;
            SpriteSheet.draw(ctx, "WithWow", 30, 280, this.frame);


            //ctx.fillStyle = "#FFFFFF";
            //ctx.textAlign = "center";
            //ctx.font = "bold 40px Microsoft YaHei UI";
            //ctx.fillText(title, Game.width / 2, Game.height / 2);
            //ctx.font = "bold 20px Microsoft YaHei UI";
            //ctx.fillText(subtitle, Game.width / 2, Game.height / 2 + 40);
        }
    }

    //触摸兼容控制
    var TouchControls = function () {
        var gutterWidth = 10;
        var unitWidth = Game.width / 5;
        var blockWidth = unitWidth - gutterWidth;
        var YEdge = (Game.height / 2);
        var XPosition = 80, YPosition = 420;
        var ShouldDraw = false;
        this.drawSquare = function (ctx, x, y, txt, on) {
            ctx.globalAlpha = on ? 0.9 : 0.2;
            ctx.fillStyle = "#CCC";
            ctx.fillRect(x, y, blockWidth, blockWidth - 20);

            ctx.fillStyle = "#FFF";
            ctx.textAlign = "center";
            ctx.globalAlpha = 1.0;
            ctx.font = "Bold " + (3 * unitWidth / 4) + "px arial";

            ctx.fillText(txt, x + blockWidth / 2, y + blockWidth / 4 + 5);
        };
        this.draw = function (ctx) {
            ctx.save();
            var yLoc = Game.height - unitWidth;
            //this.drawSquare(ctx, 4 * unitWidth, yLoc, "A", Game.keys["fire"]);
            ctx.restore();
            if (TouchControls.ShouldDraw) {
                var ShareImage = new Image();
                ShareImage.src = "images/Share.png";
                Game.ctx.drawImage(ShareImage,
                  0, 0,
                  357, 609,
                  0, 0,
                  357, 609);
            }
        };
        this.step = function (dt) {
        };
        this.trackTouch = function (e) {
            var touch, x, y;
            e.preventDefault();
            Game.touch = false;
            for (var i = 0; i < e.targetTouches.length; i++) {
                touch = e.targetTouches[i];
                x = touch.pageX - Game.canvas.offsetLeft;
                y = touch.pageY - Game.canvas.offsetTop;
                //if (e.type == "touchstart") {
                XPosition = Game.Air.x + Game.Air.w / 2;
                YPosition = Game.Air.y + Game.Air.h / 2;
                //XPosition = 150;
                //YPosition = 400;
                //}
                if (TouchControls.ShouldDraw) {
                    if (e.type == "touchstart") {
                        TouchControls.ShouldDraw = false;
                        return;
                    }
                }
                    //开始前调用
                else if (Game.GameFinished == true && Game.GameStarted == false) {
                    //alert(y);
                    if (y >= 150 && y <= 210) {
                        playGame();
                    }
                    else if (y >= 210 && y <= 250) {
                        if (e.type == "touchstart") {
                            TouchControls.ShouldDraw = true;
                        }
                    }
                    else if (y >= 260 && y <= 310) {
                        location.href = ("http://m.10010.com/subjectpage/69100000191764.html?WT.mc_id=liaoning_weixin_yureH5_1028_01&utm_source=weixin&utm_medium=cpc&utm_term=&utm_content=H5&utm_campaign=liaoning_weixin_yureH5_1028_01");
                    }
                }
                else if (Game.GameStarted == false) {
                    //开始游戏事件
                    //按下如何游戏时间
                    if (y > 450 && x < Game.width / 2) {
                        if (e.type == "touchstart") {
                            Game.keys["fire"] = true;
                            return;
                        }
                    }
                    else if (y > 450 && x > Game.width / 2) {
                        Game.setBoard(4, new HowTolPlay());
                    }
                }
                else {
                    //游戏中调用
                    if (x < XPosition) {
                        if ((XPosition - x) != 0) {
                            Game.Direction = Math.atan((YPosition - y) / (XPosition - x));
                        }
                    }
                    else if (x > XPosition) {
                        if ((XPosition - x) != 0) {
                            Game.Direction = Math.atan((YPosition - y) / (x - XPosition));
                            Game.Direction = Math.PI - Game.Direction;
                        }
                    }
                    else {
                        if (y < YPosition) {
                            Game.Direction = Math.PI / 2;
                        }
                        else {
                            Game.Direction = Math.PI * 2 / 3;
                        }
                    }
                    Game.SpeedValue = Math.sqrt((YPosition - y) * (YPosition - y) + (x - XPosition) * (x - XPosition)) / 30;
                   // if (Game.SpeedValue > 1.9)
                      //  Game.SpeedValue = 1.9;
                    Game.touch = true;
                }
            }
        };

        Game.canvas.addEventListener("touchstart", this.trackTouch, true);
        Game.canvas.addEventListener("touchmove", this.trackTouch, true);
        Game.canvas.addEventListener("touchend", this.trackTouch, true);
        Game.playerOffset = unitWidth + 20;
    }

    //得分控制
    var GamePoiots = function () {
        Game.points = 0;
        var pointsLength = 8;
        this.draw = function (ctx) {
            ctx.save();
            ctx.font = "bold 18px arial";
            ctx.fillStyle = "#FFFFFF";
            var txt = "" + Game.points;
            var i = pointsLength - txt.length, zeros = "";
            while (i-- > 0) { zeros += "0" }
            ctx.fillText(zeros + txt, 10, 20);
            ctx.restore();
        }
        this.step = function (dt) { }
    }

    //帮助页面
    var HowTolPlay = function () {
        this.draw = function (ctx) {
            var HowImage = new Image();
            HowImage.src = "images/HowToPlay.png"
            ctx.drawImage(HowImage,
                           0, 0,
                           255, 350,
                           30, 30,
                           255, 350);

            this.frame = this.frame || 0;

            this.w = SpriteSheet.map["StartGame"].w;
            this.h = SpriteSheet.map["StartGame"].h;
            SpriteSheet.draw(ctx, "StartGame", 20, 450, this.frame);


        }
        this.step = function (ctx) {
            if (Game.keys["fire"]) {
                Game.GameStarted = true;
                playGame();
            }
        }
    }

    //游戏结束页面
    var GameEnd = function () {
        this.draw = function (ctx) {
            var HowImage = new Image();
            HowImage.src = "images/spritesALL.png"
            ctx.drawImage(HowImage,
                           0, 549,
                           275, 316,
                           30, 30,
                           275, 316);
            this.frame = this.frame || 0;

            ctx.save();
            ctx.font = "bold 30px arial";
            ctx.fillStyle = "#727171";
            var txt = "" + Game.points;
            ctx.fillText(txt, 120, 130);
            ctx.restore();
        }
        this.step = function (ctx) {
            Game.GameFinished = true;
            if (Game.keys["fire"]) {
                Game.GameStarted = true;
                playGame();
            }
        }
    }
}

//游戏加载后的函数
var startGame = function () {
    //绘制三层星图
    Game.Air = new PlayerShip();
    Game.setBoard(0, new Starfield(20, 0.6, 90, true, true))
    Game.setBoard(1, new Starfield(50, 0.8, 90, false, true))
    Game.setBoard(2, new Starfield(80, 0.9, 55, false, false));
    Game.setBoard(3, new Starfield(100, 1.0, 30, false, false));
    Game.setBoard(4, new TitleScreen("和沃一起打猫猫", "按攻击键开始游戏 拖拽屏幕控制", playGame));
    Game.setBoard(5, new TouchControls());

}

//玩家要求启动函数
var playGame = function () {
    Game.Air = new PlayerShip();
    Game.keys["fire"] = true;
    Game.GameFinished = false;
    Game.GameStarted = true;
    var board = new GameBoard();
    Game.dt = 25000;
    board.add(Game.Air);
    board.add(new Level(winGame));
    Game.setBoard(4, board);
    Game.setBoard(6, new GamePoiots(0));
}

//窗口加载完成后 执行游戏初始化
window.addEventListener("load", function () {
    Game.initialize("game", sprites, startGame);
});