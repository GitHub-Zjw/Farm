/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var gameBinder = (function () {
        function gameBinder() {
        }
        gameBinder.bindAll = function () {
            fairygui.UIObjectFactory.setPackageItemExtension(game.MainUI.URL, game.MainUI);
        };
        return gameBinder;
    }());
    game.gameBinder = gameBinder;
    __reflect(gameBinder.prototype, "game.gameBinder");
})(game || (game = {}));
//# sourceMappingURL=gameBinder.js.map