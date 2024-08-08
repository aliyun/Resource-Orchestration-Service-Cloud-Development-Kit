package alicloudroscdkvpc


// Properties for defining a `RosCustomerGateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-customergateway
type RosCustomerGatewayProps struct {
	IpAddress interface{} `field:"required" json:"ipAddress" yaml:"ipAddress"`
	Asn interface{} `field:"optional" json:"asn" yaml:"asn"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
}

