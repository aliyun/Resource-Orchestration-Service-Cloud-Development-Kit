package alicloudroscdkcr


// Properties for defining a `RosInstanceEndpointAclPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instanceendpointaclpolicy
type RosInstanceEndpointAclPolicyProps struct {
	Entry interface{} `field:"required" json:"entry" yaml:"entry"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Comment interface{} `field:"optional" json:"comment" yaml:"comment"`
	EndpointType interface{} `field:"optional" json:"endpointType" yaml:"endpointType"`
	ModuleName interface{} `field:"optional" json:"moduleName" yaml:"moduleName"`
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
}

