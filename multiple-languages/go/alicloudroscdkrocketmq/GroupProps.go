package alicloudroscdkrocketmq


// Properties for defining a `Group`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-group
type GroupProps struct {
	// Property groupId: The group ID of the consumption cluster.
	//
	// When creating a group ID, pay attention to the following aspects:
	// A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
	// A group ID ranges from 7 to 64 bytes.
	// Once a group ID is created, it cannot be edited anymore.
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	// Property instanceId: The ID of the instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property groupType: Group ID specify the creation of applicable agreements.
	//
	// Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
	// tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
	// http: represents the Group ID was created only for the HTTP protocol messaging.
	GroupType interface{} `field:"optional" json:"groupType" yaml:"groupType"`
	// Property remark: The remarks on the request.
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

