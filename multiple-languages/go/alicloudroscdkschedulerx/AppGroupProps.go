package alicloudroscdkschedulerx


// Properties for defining a `AppGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-appgroup
type AppGroupProps struct {
	// Property appName: The application name.
	AppName interface{} `field:"required" json:"appName" yaml:"appName"`
	// Property groupId: The group ID of the application group.
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	// Property namespace: The namespace of the application group.
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	// Property appKey: The application key.
	AppKey interface{} `field:"optional" json:"appKey" yaml:"appKey"`
	// Property appType: The type of the application.
	AppType interface{} `field:"optional" json:"appType" yaml:"appType"`
	// Property appVersion: The version of the application.
	AppVersion interface{} `field:"optional" json:"appVersion" yaml:"appVersion"`
	// Property description: The description of the application group.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property enableLog: Whether to enable log.
	EnableLog interface{} `field:"optional" json:"enableLog" yaml:"enableLog"`
	// Property maxJobs: The maximum number of jobs.
	MaxJobs interface{} `field:"optional" json:"maxJobs" yaml:"maxJobs"`
	// Property monitorConfig: The monitor configuration in JSON format.
	MonitorConfig interface{} `field:"optional" json:"monitorConfig" yaml:"monitorConfig"`
	// Property monitorContacts: The monitor contacts in JSON format.
	MonitorContacts interface{} `field:"optional" json:"monitorContacts" yaml:"monitorContacts"`
	// Property namespaceName: The name of the namespace.
	NamespaceName interface{} `field:"optional" json:"namespaceName" yaml:"namespaceName"`
	// Property namespaceSource: The namespace source of the job.
	NamespaceSource interface{} `field:"optional" json:"namespaceSource" yaml:"namespaceSource"`
	// Property notificationPolicyName: The notification policy name.
	NotificationPolicyName interface{} `field:"optional" json:"notificationPolicyName" yaml:"notificationPolicyName"`
	// Property scheduleBusyWorkers: Whether to schedule busy workers.
	ScheduleBusyWorkers interface{} `field:"optional" json:"scheduleBusyWorkers" yaml:"scheduleBusyWorkers"`
}

