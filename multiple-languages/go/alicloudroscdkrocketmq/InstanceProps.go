package alicloudroscdkrocketmq


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-instance
type InstanceProps struct {
	// Property instanceName: The name of the instance, which contains 3 to 64 characters in Chinese or English.
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property deletionForce: Whether delete all topics and groups of the instance and then delete instance.
	//
	// Default is false.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property remark: The remark of instance.
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

