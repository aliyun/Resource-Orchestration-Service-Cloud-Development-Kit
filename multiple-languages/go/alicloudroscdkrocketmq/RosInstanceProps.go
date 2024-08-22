package alicloudroscdkrocketmq


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-instance
type RosInstanceProps struct {
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

