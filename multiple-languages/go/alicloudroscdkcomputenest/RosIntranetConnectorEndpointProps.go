package alicloudroscdkcomputenest


// Properties for defining a `RosIntranetConnectorEndpoint`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-computenest-intranetconnectorendpoint
type RosIntranetConnectorEndpointProps struct {
	EndpointRegionId interface{} `field:"required" json:"endpointRegionId" yaml:"endpointRegionId"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EnablePrivateZone interface{} `field:"optional" json:"enablePrivateZone" yaml:"enablePrivateZone"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	ResourceIds interface{} `field:"optional" json:"resourceIds" yaml:"resourceIds"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

