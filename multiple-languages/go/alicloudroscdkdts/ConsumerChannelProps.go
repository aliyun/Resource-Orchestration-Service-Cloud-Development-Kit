package alicloudroscdkdts


// Properties for defining a `ConsumerChannel`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumerchannel
type ConsumerChannelProps struct {
	// Property consumerGroupName: Consumer group name, up to 128 characters.
	ConsumerGroupName interface{} `field:"required" json:"consumerGroupName" yaml:"consumerGroupName"`
	// Property consumerGroupPassword: Consumer group password, composed of uppercase letters, lowercase letters, numbers, and special characters (at least two types), 8-32 characters long.
	ConsumerGroupPassword interface{} `field:"required" json:"consumerGroupPassword" yaml:"consumerGroupPassword"`
	// Property consumerGroupUserName: Username, composed of uppercase letters, lowercase letters, numbers, and underscores, up to 16 characters.
	ConsumerGroupUserName interface{} `field:"required" json:"consumerGroupUserName" yaml:"consumerGroupUserName"`
	// Property dtsInstanceId: DTS subscription instance ID.
	//
	// Either DtsInstanceId or DtsJobId must be provided.
	DtsInstanceId interface{} `field:"optional" json:"dtsInstanceId" yaml:"dtsInstanceId"`
	// Property dtsJobId: DTS subscription job ID.
	//
	// Either DtsInstanceId or DtsJobId must be provided.
	DtsJobId interface{} `field:"optional" json:"dtsJobId" yaml:"dtsJobId"`
}

