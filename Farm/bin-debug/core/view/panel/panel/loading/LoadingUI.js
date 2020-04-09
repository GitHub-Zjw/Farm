/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
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
    var LoadingUI = (function (_super) {
        __extends(LoadingUI, _super);
        function LoadingUI() {
            return _super.call(this) || this;
        }
        LoadingUI.createInstance = function () {
            return (fairygui.UIPackage.createObject("loading", "LoadingUI"));
        };
        LoadingUI.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.loadBar = (this.getChild("loadBar"));
        };
        LoadingUI.prototype.initView = function () {
            _super.prototype.initView.call(this);
            this._isChang = true;
        };
        LoadingUI.prototype.onProgress = function (current, total) {
            if (!this._isChang) {
                return;
            }
            this.loadBar.max = total;
            this.loadBar.value = current;
            console.log(current, "/", total);
        };
        LoadingUI.URL = "ui://kj1tvru2jf551";
        return LoadingUI;
    }(UIComponent));
    loading.LoadingUI = LoadingUI;
    __reflect(LoadingUI.prototype, "loading.LoadingUI", ["RES.PromiseTaskReporter"]);
})(loading || (loading = {}));
//# sourceMappingURL=LoadingUI.js.map