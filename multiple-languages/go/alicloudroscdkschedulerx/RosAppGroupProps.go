package alicloudroscdkschedulerx


// Properties for defining a `RosAppGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-appgroup
type RosAppGroupProps struct {
	AppName interface{} `field:"required" json:"appName" yaml:"appName"`
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	AppKey interface{} `field:"optional" json:"appKey" yaml:"appKey"`
	AppType interface{} `field:"optional" json:"appType" yaml:"appType"`
	AppVersion interface{} `field:"optional" json:"appVersion" yaml:"appVersion"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EnableLog interface{} `field:"optional" json:"enableLog" yaml:"enableLog"`
	MaxJobs interface{} `field:"optional" json:"maxJobs" yaml:"maxJobs"`
	MonitorConfig interface{} `field:"optional" json:"monitorConfig" yaml:"monitorConfig"`
	MonitorContacts interface{} `field:"optional" json:"monitorContacts" yaml:"monitorContacts"`
	NamespaceName interface{} `field:"optional" json:"namespaceName" yaml:"namespaceName"`
	NamespaceSource interface{} `field:"optional" json:"namespaceSource" yaml:"namespaceSource"`
	NotificationPolicyName interface{} `field:"optional" json:"notificationPolicyName" yaml:"notificationPolicyName"`
	ScheduleBusyWorkers interface{} `field:"optional" json:"scheduleBusyWorkers" yaml:"scheduleBusyWorkers"`
}

