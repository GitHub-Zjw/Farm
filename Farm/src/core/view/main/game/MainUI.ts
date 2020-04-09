/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class MainUI extends UIComponent {

		public bg:fairygui.GImage;

		public static URL:string = "ui://ktul9s7rg6ff2";

		public static createInstance():MainUI {
			return <MainUI><any>(fairygui.UIPackage.createObject("game","MainUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage><any>(this.getChild("bg"));
		}

		protected initView(): void
		{
			super.initView();
		}
	}
}