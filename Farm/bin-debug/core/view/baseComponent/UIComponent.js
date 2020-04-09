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
var UIComponent = (function (_super) {
    __extends(UIComponent, _super);
    function UIComponent() {
        var _this = _super.call(this) || this;
        _this.btnList = [];
        return _this;
    }
    /**
     * 根据类型获取子物体
     */
    UIComponent.prototype.contains = function (com) {
        var index = this.getChildIndex(com);
        if (index >= 0) {
            return this.getChildAt(index);
        }
        else {
            return null;
        }
    };
    UIComponent.prototype.onConstruct = function () {
        _super.prototype.onConstruct.call(this);
        this.initView();
    };
    UIComponent.prototype.initView = function () {
        var len = this.numChildren;
        for (var i = 0; i < len; i++) {
            var com = this.getChildAt(i);
            if (com instanceof fairygui.GButton) {
                com.addClickListener(this.onClick, this);
                this.btnList.push(com);
            }
        }
    };
    UIComponent.prototype.onClick = function (e) {
        var btn = e.currentTarget;
        this.onButtonClick(btn.name);
    };
    UIComponent.prototype.onButtonClick = function (btnName) {
    };
    UIComponent.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
    };
    return UIComponent;
}(fgui.GComponent));
__reflect(UIComponent.prototype, "UIComponent");
//# sourceMappingURL=UIComponent.js.map