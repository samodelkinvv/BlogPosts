class WorkflowNotification{
	static ShowAndHideWorkflowNotification() {
		var notificationData = new SPStatusNotificationData("111",
			STSHtmlEncode("222"),
			"_layouts/15/images/gears_anv4.gif",
			null);
		var notification = new SP.UI.Notify.Notification(SPNotifications.ContainerID.Status,
			STSHtmlEncode("Workflow is running1"),
			true,
			null,
			null,
			notificationData);
			
		notification.Show(false);
}