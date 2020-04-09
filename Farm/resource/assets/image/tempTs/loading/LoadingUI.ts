/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module loading {

	export class LoadingUI extends UIComponent {

		public loadBar:fairygui.GProgressBar;

		public static URL:string = "ui://kj1tvru2jf551";

		public static createInstance():LoadingUI {
			return <LoadingUI><any>(fairygui.UIPackage.createObject("loading","LoadingUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.loadBar = <fairygui.GProgressBar><any>(this.getChild("loadBar"));
		}
	}
}