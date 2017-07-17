webpackJsonp([0],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.apiKey = 'RGAPI-0759c2ef-8796-4dcf-b939-9518ec0355a6';
    }
    ApiService.prototype.getUserId = function (nickname) {
        var _this = this;
        // let headers = new Headers({'X-Riot-Token' : this.apiKey});
        // let options = new RequestOptions({headers});
        return this.http.get("api/summoner/v3/summoners/by-name/" + nickname + "?api_key=" + this.apiKey)
            .map(function (res) {
            _this.summonerId = res.json().accountId;
            return res.json();
        });
    };
    ApiService.prototype.getMatchList = function () {
        return this.http.get("api/match/v3/matchlists/by-account/" + this.summonerId + "/recent?api_key=" + this.apiKey)
            .map(function (res) {
            return res.json();
        });
    };
    ApiService.prototype.getChampById = function (id) {
        return this.http.get("/api/static-data/v3/champions/" + id + "?locale=ru_RU&tags=image&api_key=" + this.apiKey)
            .map(function (res) {
            return res.json();
        });
    };
    ApiService.prototype.getItemInfo = function (id) {
        return this.http.get("api/static-data/v3/items/" + id + "?locale=ru_RU&api_key=" + this.apiKey)
            .map(function (res) {
            return res.json();
        });
    };
    ApiService.prototype.getMatchInfo = function (id) {
        return this.http.get("api/match/v3/matches/" + id + "?api_key=" + this.apiKey)
            .map(function (res) {
            return res.json();
        });
    };
    ApiService.prototype.getFullMatchInfo = function (id) {
        return this.http.get("api/match/v3/matches/" + id + "?api_key=" + this.apiKey)
            .map(function (res) {
            return res.json();
        });
    };
    ApiService.prototype.getMatchTimeline = function (id) {
        return this.http.get("api/match/v3/timelines/by-match/" + id + "?api_key=" + this.apiKey)
            .map(function (res) {
            return res.json();
        });
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ApiService);

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 223;

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__match_match_details__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, api, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.version = '0.0.1';
    }
    HomePage.prototype.searchSummoner = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Загрузка данных...'
        });
        loading.present();
        console.log(this.nickname, this.region);
        this.api.getUserId(this.nickname).subscribe(function (res) {
            console.log(res);
            _this.api.getMatchList().subscribe(function (res) {
                console.log(res);
                _this.matches = res.matches;
                var self = _this;
                _this.matches.forEach(function (item) {
                    // item.itemImages = [
                    //   {
                    //     link: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${item.stats.item0}.png ` || '',
                    //     key: item.stats.item0 || null
                    //   },
                    //   {
                    //     link: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${item.stats.item1}.png ` || '',
                    //     key: item.stats.item1 || null
                    //   },
                    //   {
                    //     link: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${item.stats.item2}.png ` || '',
                    //     key: item.stats.item2 || null
                    //   },
                    //   {
                    //     link: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${item.stats.item3}.png ` || '',
                    //     key: item.stats.item3 || null
                    //   },
                    //   {
                    //     link: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${item.stats.item4}.png ` || '',
                    //     key: item.stats.item4 || null
                    //   },
                    //   {
                    //     link: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${item.stats.item5}.png ` || '',
                    //     key: item.stats.item5 || null
                    //   },
                    //   {
                    //     link: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${item.stats.item6}.png ` || '',
                    //     key: item.stats.item6 || null
                    //   },
                    // ];
                    self.api.getChampById(item.champion).subscribe(function (res) {
                        item.champName = res.name;
                        item.champTitle = res.title;
                        item.champImg = "assets/champion/" + res.key + ".png";
                        item.champKey = res.key;
                    });
                });
                console.log(_this.matches);
                loading.dismiss();
            });
        });
    };
    HomePage.prototype.itemDetails = function (key) {
    };
    HomePage.prototype.matchDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__match_match_details__["a" /* MatchDetails */], {
            details: id
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\proj\ionic\leagueApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      leagueApp {{ version }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-input [(ngModel)]="nickname" type="text" placeholder="Nickname"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-item>\n    <ion-label>Region</ion-label>\n    <ion-select [(ngModel)]="region">\n      <ion-option value="ru">Russia</ion-option>\n      <ion-option value="euw">EU West</ion-option>\n      <ion-option value="eun">EU Nordic & East</ion-option>\n      <ion-option value="na">North America</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <div *ngIf="matches && matches.length > 0">\n    <ion-card *ngFor="let game of matches" (click)="matchDetails(game)">\n\n      <ion-item>\n        <ion-avatar item-start>\n          <img [src]="game.champImg">\n        </ion-avatar>\n        <h2>{{ game.champName }}</h2>\n        <p>{{ game.champTitle }}</p>\n      </ion-item>\n\n      <ion-card-content>\n        <div class="items">\n          <img *ngFor="let img of game.itemImages" [src]="img.link" [class.hidden]="img.link.indexOf(\'undefined\') > -1" (click)="itemDetails(img.key)">\n        </div>\n      </ion-card-content>\n\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-left clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <div>12 Likes</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-left clear small>\n            <ion-icon name="text"></ion-icon>\n            <div>4 Comments</div>\n          </button>\n        </ion-col>\n        <ion-col center text-center>\n          <ion-note>\n            11h ago\n          </ion-note>\n        </ion-col>\n      </ion-row>\n\n    </ion-card>\n  </div>\n\n  <button ion-button (click)="searchSummoner()">Search</button>\n</ion-content>\n'/*ion-inline-end:"E:\proj\ionic\leagueApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchDetails = (function () {
    function MatchDetails(navParams, viewController, api, loadingCtrl) {
        var _this = this;
        this.navParams = navParams;
        this.viewController = viewController;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.matchEvents = [];
        var loading = this.loadingCtrl.create({
            content: 'Загрузка данных...'
        });
        loading.present();
        this.teamId = 100;
        this.matchData = navParams.get('details');
        this.bgChampImg = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + this.matchData.champKey + "_0.jpg";
        this.api.getMatchInfo(this.matchData.gameId).subscribe(function (res) {
            _this.matchData.timePlayedString = Math.ceil(res.gameDuration / 60) + " \u043C\u0438\u043D. " + res.gameDuration % 60 + " \u0441\u0435\u043A.";
            var self = _this;
            res.participants.forEach(function (item) {
                if (item.championId === self.matchData.champion) {
                    self.matchData.stats = item.stats;
                    self.matchData.participantId = item.participantId;
                }
            });
            console.log(_this.matchData);
            _this.fullMatchInfo = res;
            _this.fullMatchInfo.participantIdentities.forEach(function (item, index) {
                self.fullMatchInfo.participants[index].summonerName = item.player ? item.player.summonerName : null;
            });
            _this.fullMatchInfo.participants.forEach(function (item, index) {
                self.api.getChampById(item.championId).subscribe(function (res) {
                    item.champKey = res.key;
                });
            });
            _this.api.getMatchTimeline(_this.matchData.gameId).subscribe(function (res) {
                console.log(res);
                res.frames.forEach(function (item) {
                    if (item.events.length > 0) {
                        item.events.forEach(function (event) {
                            if (event.participantId === self.matchData.participantId || event.killerId === self.matchData.participantId || event.victimId === self.matchData.participantId) {
                                var action = {
                                    type: event.type,
                                    item: event.itemId || null,
                                    victim: event.victimId || null,
                                    killer: event.killerId || null,
                                    timestampString: Math.ceil((event.timestamp / 1000) / 60) + " \u043C\u0438\u043D. " + ((event.timestamp / 1000) % 60).toFixed(0) + " \u0441\u0435\u043A.",
                                };
                                self.matchEvents.push(action);
                                self.getChampInfoByParticipantId();
                            }
                        });
                    }
                });
                console.log(_this.matchEvents);
            });
            loading.dismiss();
        });
    }
    MatchDetails.prototype.closeDetails = function () {
        this.viewController.dismiss();
    };
    MatchDetails.prototype.getChampInfoByParticipantId = function () {
        var self = this;
        var imgs = [];
        this.matchEvents.forEach(function (event) {
            if (event.type === 'CHAMPION_KILL') {
                self.fullMatchInfo.participants.forEach(function (item) {
                    if (item.participantId === event.killer && item.participantId !== self.matchData.participantId) {
                        event.actionInfo = {
                            key: item.champKey,
                            type: 'Смерть'
                        };
                    }
                    else if (item.participantId === event.victim && item.participantId !== self.matchData.participantId) {
                        event.actionInfo = {
                            key: item.champKey,
                            type: 'Убийство'
                        };
                    }
                });
            }
        });
    };
    return MatchDetails;
}());
MatchDetails = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'match.details',template:/*ion-inline-start:"E:\proj\ionic\leagueApp\src\pages\match\match.details.html"*/'<ion-content>\n  <div class="background-champ">\n    <img [src]="bgChampImg">\n  </div>\n  <ion-item class="title">\n    <ion-avatar item-start>\n      <img [src]="matchData.champImg">\n    </ion-avatar>\n    <h2>{{ matchData.champName }}</h2>\n    <p>{{ matchData.champTitle }}</p>\n    <!--<p class="game-result" [class.win]="matchData.stats.win" [class.lose]="!matchData.stats.win">{{ matchData.stats.win ? \'Победа\' : \'Поражение\' }}</p>-->\n    <ion-icon item-end class="icon icon-md ion-md-arrow-forward" (click)="closeDetails()"></ion-icon>\n  </ion-item>\n\n  <ion-item class="stats" *ngIf="matchData.stats">\n    <ion-item item-left>\n      <div class="block">\n        <img src="http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/score.png" alt="">\n        <p>{{ matchData.stats.kills }} / {{ matchData.stats.deaths }} / {{ matchData.stats.assists }}\n          ( {{((matchData.stats.kills + matchData.stats.assists) / matchData.stats.deaths ).toFixed(2)}})</p>\n      </div>\n     <div class="block">\n       <img src="http://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/minion.png" alt="">\n       <p>{{ matchData.stats.minionsKilled }}</p>\n     </div>\n      <div class="block">\n        <img src="http://www.rospt.ru/img/ico/clock_16.png" alt="">\n        <p>{{ matchData.timePlayedString }}</p>\n      </div>\n    </ion-item>\n  </ion-item>\n\n  <ion-item class="players">\n    <ion-segment [(ngModel)]="teamId" color="light">\n      <ion-segment-button [value]="100">\n        <p class="lightblue">Blue team</p>\n      </ion-segment-button>\n      <ion-segment-button [value]="200">\n        <p class="lightred">Red team</p>\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-list *ngIf="fullMatchInfo && fullMatchInfo.participants">\n      <ion-item-sliding #item1 *ngFor="let item of fullMatchInfo.participants" [class.hidden]="item.teamId !== teamId">\n        <ion-item>\n          <ion-avatar item-start>\n            <img [src]="\'assets/champion/\' + item.champKey + \'.png\'" alt="">\n          </ion-avatar>\n          <div class="item-inner player-stats">\n            <p *ngIf="item.summonerName">{{ item.summonerName }}</p>\n            <p>{{ item.stats.kills }} / {{ item.stats.deaths }} / {{ item.stats.assists }}\n              ( {{((item.stats.kills + item.stats.assists) / item.stats.deaths ).toFixed(2)}})</p>\n          </div>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button (click)="favorite(item)">Favorite</button>\n          <button ion-button color="danger" (click)="share(item)">Share</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-item>\n\n  <ion-item *ngFor="let event of matchEvents" [class.hidden]="event.type !== \'CHAMPION_KILL\'" class="action-item">\n    <ion-avatar item-start>\n      <img [src]="matchData.champImg">\n    </ion-avatar>\n    <p class="type" *ngIf="event">{{ event.timestampString }}</p>\n    <p class="type" *ngIf="event.actionInfo">{{ event.actionInfo.type }}</p>\n    <ion-avatar item-end *ngIf="event.actionInfo">\n      <img [src]="\'assets/champion/\' + event.actionInfo.key + \'.png\'" alt="">\n    </ion-avatar>\n\n    <div *ngIf="event.type === \'CHAMPION_KILL\'">\n\n    </div>\n\n    <ion-card-content>\n\n    </ion-card-content>\n\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"E:\proj\ionic\leagueApp\src\pages\match\match.details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
], MatchDetails);

//# sourceMappingURL=match.details.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(485);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_api_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_match_match_details__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var cloudSettings = {
    'core': {
        'app_id': '7149379c'
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_match_match_details__["a" /* MatchDetails */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__["a" /* CloudModule */].forRoot(cloudSettings),
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_match_match_details__["a" /* MatchDetails */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__services_api_service__["a" /* ApiService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(478);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, deploy) {
        this.deploy = deploy;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\proj\ionic\leagueApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\proj\ionic\leagueApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__["b" /* Deploy */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[480]);
//# sourceMappingURL=main.js.map