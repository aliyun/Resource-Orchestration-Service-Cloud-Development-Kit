package alicloudroscdkrocketmq


// Properties for defining a `RosGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-group
type RosGroupProps struct {
	GroupId interface{} `field:"required" json:"groupId" yaml:"groupId"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	GroupType interface{} `field:"optional" json:"groupType" yaml:"groupType"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

