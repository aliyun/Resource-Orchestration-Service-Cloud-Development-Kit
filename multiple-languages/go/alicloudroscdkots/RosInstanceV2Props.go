package alicloudroscdkots


// Properties for defining a `RosInstanceV2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instancev2
type RosInstanceV2Props struct {
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	InstanceDescription interface{} `field:"optional" json:"instanceDescription" yaml:"instanceDescription"`
	NetworkSourceAcl interface{} `field:"optional" json:"networkSourceAcl" yaml:"networkSourceAcl"`
	NetworkTypeAcl interface{} `field:"optional" json:"networkTypeAcl" yaml:"networkTypeAcl"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosInstanceV2_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

