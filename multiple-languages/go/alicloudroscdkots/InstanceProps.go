package alicloudroscdkots


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instance
type InstanceProps struct {
	// Property instanceName: The name of the instance.
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property clusterType: Cluster type, the default is SSD.
	//
	// This parameter specifies the specification of the ots instance.
	//   When the value is SSD, the ots instance is a high-performance instance.
	// When the value is Hybid, the ots instance is a capacity instance.
	ClusterType interface{} `field:"optional" json:"clusterType" yaml:"clusterType"`
	// Property description: Instance description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property network: Instance network type, default is NORMAL.
	Network interface{} `field:"optional" json:"network" yaml:"network"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 5 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

