package alicloudroscdkvpc


// Properties for defining a `CustomerGateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-customergateway
type CustomerGatewayProps struct {
	// Property ipAddress: The IP address of the user gateway.
	IpAddress interface{} `field:"required" json:"ipAddress" yaml:"ipAddress"`
	// Property asn: The autonomous system number of the local data center gateway device.
	Asn interface{} `field:"optional" json:"asn" yaml:"asn"`
	// Property description: Description of the user gateway.
	//
	// The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property name: The name of the user gateway.
	//
	// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:\/\/ or https:\/\/.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
}

