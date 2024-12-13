package alicloudroscdkvpc


// Properties for defining a `IpamScope`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipamscope
type IpamScopeProps struct {
	// Property ipamId: The id of the Ipam instance.
	IpamId interface{} `field:"required" json:"ipamId" yaml:"ipamId"`
	// Property ipamScopeDescription: The description of the IPAM's scope of action.
	//
	// It must be 2 to 256 characters in length and must start with a lowercase letter, but cannot start with 'http:\/\/ 'or 'https. If it is not filled in, it is empty. The default value is empty.
	IpamScopeDescription interface{} `field:"optional" json:"ipamScopeDescription" yaml:"ipamScopeDescription"`
	// Property ipamScopeName: The name of the IPAM scope.
	IpamScopeName interface{} `field:"optional" json:"ipamScopeName" yaml:"ipamScopeName"`
	// Property ipamScopeType: IPAM scope of action type: **private**.
	//
	// > Currently, only the role scope of the private network is supported.
	IpamScopeType interface{} `field:"optional" json:"ipamScopeType" yaml:"ipamScopeType"`
	// Property tags: Tags of ipam scope.
	Tags *[]*RosIpamScope_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

