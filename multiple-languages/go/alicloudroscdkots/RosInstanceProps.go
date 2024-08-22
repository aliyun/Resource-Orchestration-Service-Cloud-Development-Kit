package alicloudroscdkots


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instance
type RosInstanceProps struct {
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	ClusterType interface{} `field:"optional" json:"clusterType" yaml:"clusterType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Network interface{} `field:"optional" json:"network" yaml:"network"`
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

