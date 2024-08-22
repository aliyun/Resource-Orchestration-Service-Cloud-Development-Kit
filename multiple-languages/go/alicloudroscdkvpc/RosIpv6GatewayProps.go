package alicloudroscdkvpc


// Properties for defining a `RosIpv6Gateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6gateway
type RosIpv6GatewayProps struct {
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
	Tags *[]*RosIpv6Gateway_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

