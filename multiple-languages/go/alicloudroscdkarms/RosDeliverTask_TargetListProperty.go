package alicloudroscdkarms


type RosDeliverTask_TargetListProperty struct {
	TargetType interface{} `field:"required" json:"targetType" yaml:"targetType"`
	FaultTolerantPolicy interface{} `field:"optional" json:"faultTolerantPolicy" yaml:"faultTolerantPolicy"`
	RetryPolicy interface{} `field:"optional" json:"retryPolicy" yaml:"retryPolicy"`
	TargetName interface{} `field:"optional" json:"targetName" yaml:"targetName"`
	TargetParam interface{} `field:"optional" json:"targetParam" yaml:"targetParam"`
}

