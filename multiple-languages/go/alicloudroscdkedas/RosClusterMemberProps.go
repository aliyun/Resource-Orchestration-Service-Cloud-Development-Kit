package alicloudroscdkedas


// Properties for defining a `RosClusterMember`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-clustermember
type RosClusterMemberProps struct {
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	InstanceIds interface{} `field:"required" json:"instanceIds" yaml:"instanceIds"`
	Password interface{} `field:"required" json:"password" yaml:"password"`
}

