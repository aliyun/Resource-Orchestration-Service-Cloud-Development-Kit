package alicloudroscdkapigateway


// Properties for defining a `RosVpcAccessConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-vpcaccessconfig
type RosVpcAccessConfigProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Port interface{} `field:"required" json:"port" yaml:"port"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
}

