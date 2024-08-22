package alicloudroscdkess


// Properties for defining a `RosLifecycleHook`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-lifecyclehook
type RosLifecycleHookProps struct {
	LifecycleTransition interface{} `field:"required" json:"lifecycleTransition" yaml:"lifecycleTransition"`
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	DefaultResult interface{} `field:"optional" json:"defaultResult" yaml:"defaultResult"`
	HeartbeatTimeout interface{} `field:"optional" json:"heartbeatTimeout" yaml:"heartbeatTimeout"`
	LifecycleHookName interface{} `field:"optional" json:"lifecycleHookName" yaml:"lifecycleHookName"`
	NotificationArn interface{} `field:"optional" json:"notificationArn" yaml:"notificationArn"`
	NotificationMetadata interface{} `field:"optional" json:"notificationMetadata" yaml:"notificationMetadata"`
}

