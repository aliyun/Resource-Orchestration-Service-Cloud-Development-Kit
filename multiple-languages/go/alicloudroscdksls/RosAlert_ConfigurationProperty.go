package alicloudroscdksls


type RosAlert_ConfigurationProperty struct {
	Dashboard interface{} `field:"required" json:"dashboard" yaml:"dashboard"`
	QueryList interface{} `field:"required" json:"queryList" yaml:"queryList"`
	Annotations interface{} `field:"optional" json:"annotations" yaml:"annotations"`
	AutoAnnotation interface{} `field:"optional" json:"autoAnnotation" yaml:"autoAnnotation"`
	Condition interface{} `field:"optional" json:"condition" yaml:"condition"`
	GroupConfiguration interface{} `field:"optional" json:"groupConfiguration" yaml:"groupConfiguration"`
	JoinConfigurations interface{} `field:"optional" json:"joinConfigurations" yaml:"joinConfigurations"`
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	MuteUntil interface{} `field:"optional" json:"muteUntil" yaml:"muteUntil"`
	NoDataFire interface{} `field:"optional" json:"noDataFire" yaml:"noDataFire"`
	NoDataSeverity interface{} `field:"optional" json:"noDataSeverity" yaml:"noDataSeverity"`
	NotificationList interface{} `field:"optional" json:"notificationList" yaml:"notificationList"`
	NotifyThreshold interface{} `field:"optional" json:"notifyThreshold" yaml:"notifyThreshold"`
	PolicyConfiguration interface{} `field:"optional" json:"policyConfiguration" yaml:"policyConfiguration"`
	SendResolved interface{} `field:"optional" json:"sendResolved" yaml:"sendResolved"`
	SeverityConfigurations interface{} `field:"optional" json:"severityConfigurations" yaml:"severityConfigurations"`
	Threshold interface{} `field:"optional" json:"threshold" yaml:"threshold"`
	Throttling interface{} `field:"optional" json:"throttling" yaml:"throttling"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
	Version interface{} `field:"optional" json:"version" yaml:"version"`
}

