package alicloudroscdkprivatelink


// Properties for defining a `RosVpcEndpointService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointservice
type RosVpcEndpointServiceProps struct {
	AutoAcceptEnabled interface{} `field:"optional" json:"autoAcceptEnabled" yaml:"autoAcceptEnabled"`
	ConnectBandwidth interface{} `field:"optional" json:"connectBandwidth" yaml:"connectBandwidth"`
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	Payer interface{} `field:"optional" json:"payer" yaml:"payer"`
	Resource interface{} `field:"optional" json:"resource" yaml:"resource"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ServiceDescription interface{} `field:"optional" json:"serviceDescription" yaml:"serviceDescription"`
	ServiceResourceType interface{} `field:"optional" json:"serviceResourceType" yaml:"serviceResourceType"`
	Tags *[]*RosVpcEndpointService_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	User interface{} `field:"optional" json:"user" yaml:"user"`
	ZoneAffinityEnabled interface{} `field:"optional" json:"zoneAffinityEnabled" yaml:"zoneAffinityEnabled"`
}

