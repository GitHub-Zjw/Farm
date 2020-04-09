module loading
{
	export class LoadingMediator extends BaseMediator
	{
		public static NAME: string = "LoadingMediator";

		public constructor(viewComponent: any = null)
		{
			super(LoadingMediator.NAME, viewComponent);
		}
		public listNotificationInterests(): Array<any>
		{
			return [
			];
		}

		public handleNotification(notification: puremvc.INotification): void
		{
			let bodyData = notification.getBody();

			switch (notification.getName())
			{
			}
		}
	}
}