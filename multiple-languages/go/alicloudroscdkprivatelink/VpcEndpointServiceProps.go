package alicloudroscdkprivatelink


// Properties for defining a `VpcEndpointService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointservice
type VpcEndpointServiceProps struct {
	// Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests.
	//
	// Valid values:
	// true: automatically accepts endpoint connection requests.
	// false: does not automatically accept endpoint connection requests.
	AutoAcceptEnabled interface{} `field:"optional" json:"autoAcceptEnabled" yaml:"autoAcceptEnabled"`
	// Property connectBandwidth: The default maximum bandwidth of the endpoint connection.
	//
	// Valid values: 100 to 1024. Unit: Mbit\/s.
	ConnectBandwidth interface{} `field:"optional" json:"connectBandwidth" yaml:"connectBandwidth"`
	// Property deletionForce: Specifies whether to delete the endpoint service even if it has endpoint connections.
	//
	// - True
	// - False (default).
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property payer: The payer of the endpoint service.
	//
	// Valid values:
	// Endpoint: the service consumer.
	// EndpointService: the service provider.
	Payer interface{} `field:"optional" json:"payer" yaml:"payer"`
	// Property resource:.
	Resource interface{} `field:"optional" json:"resource" yaml:"resource"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property serviceDescription: The description for the endpoint service.
	ServiceDescription interface{} `field:"optional" json:"serviceDescription" yaml:"serviceDescription"`
	// Property serviceResourceType: Service resource type.
	ServiceResourceType interface{} `field:"optional" json:"serviceResourceType" yaml:"serviceResourceType"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosVpcEndpointService_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property user: Account IDs to the whitelist of an endpoint service.
	User interface{} `field:"optional" json:"user" yaml:"user"`
	// Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.
	//
	// true: yes.
	// false (default): no.
	ZoneAffinityEnabled interface{} `field:"optional" json:"zoneAffinityEnabled" yaml:"zoneAffinityEnabled"`
}

