/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module loading
{

	export class LoadingUI extends UIComponent implements RES.PromiseTaskReporter 
	{

		public loadBar: fairygui.GProgressBar;

		public static URL: string = "ui://kj1tvru2jf551";

		public static createInstance(): LoadingUI
		{
			return <LoadingUI><any>(fairygui.UIPackage.createObject("loading", "LoadingUI"));
		}

		public constructor()
		{
			super();
		}

		protected constructFromXML(xml: any): void
		{
			super.constructFromXML(xml);

			this.loadBar = <fairygui.GProgressBar><any>(this.getChild("loadBar"));
		}

		private _isChang: boolean;
		protected initView(): void
		{
			super.initView();
			this._isChang = true;
		}
		
		public onProgress(current: number, total: number): void
		{
			if (!this._isChang)
			{
				return;
			}
			this.loadBar.max = total;
			this.loadBar.value = current;
			console.log(current,"/",total)
		}
	}
}