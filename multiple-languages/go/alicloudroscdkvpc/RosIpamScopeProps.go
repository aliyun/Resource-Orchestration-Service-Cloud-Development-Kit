package alicloudroscdkvpc


// Properties for defining a `RosIpamScope`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipamscope
type RosIpamScopeProps struct {
	IpamId interface{} `field:"required" json:"ipamId" yaml:"ipamId"`
	IpamScopeDescription interface{} `field:"optional" json:"ipamScopeDescription" yaml:"ipamScopeDescription"`
	IpamScopeName interface{} `field:"optional" json:"ipamScopeName" yaml:"ipamScopeName"`
	IpamScopeType interface{} `field:"optional" json:"ipamScopeType" yaml:"ipamScopeType"`
	Tags *[]*RosIpamScope_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

