var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var loading;
(function (loading) {
    var LoadingMediator = (function (_super) {
        __extends(LoadingMediator, _super);
        function LoadingMediator(viewComponent) {
            if (viewComponent === void 0) { viewComponent = null; }
            return _super.call(this, LoadingMediator.NAME, viewComponent) || this;
        }
        LoadingMediator.prototype.listNotificationInterests = function () {
            return [];
        };
        LoadingMediator.prototype.handleNotification = function (notification) {
            var bodyData = notification.getBody();
            switch (notification.getName()) {
            }
        };
        LoadingMediator.NAME = "LoadingMediator";
        return LoadingMediator;
    }(BaseMediator));
    loading.LoadingMediator = LoadingMediator;
    __reflect(LoadingMediator.prototype, "loading.LoadingMediator");
})(loading || (loading = {}));
//# sourceMappingURL=LoadingMediator.js.map