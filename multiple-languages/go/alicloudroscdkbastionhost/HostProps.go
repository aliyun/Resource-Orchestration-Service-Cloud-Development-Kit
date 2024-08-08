package alicloudroscdkbastionhost


// Properties for defining a `Host`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-host
type HostProps struct {
	// Property activeAddressType: The endpoint type of the host that you want to create.
	//
	// Valid values:
	// Public: a public endpoint
	// Private: an internal endpoint.
	ActiveAddressType interface{} `field:"required" json:"activeAddressType" yaml:"activeAddressType"`
	// Property hostName: The name of the host that you want to create.
	//
	// The name can be up to 128 characters in length.
	HostName interface{} `field:"required" json:"hostName" yaml:"hostName"`
	// Property instanceId: The ID of the Bastionhost instance where you want to create the host.
	//
	// Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property osType: The operating system of the host that you want to create.
	//
	// Valid values:
	// - Linux
	// - Windows.
	OsType interface{} `field:"required" json:"osType" yaml:"osType"`
	// Property source: The source of the host that you want to create.
	//
	// Valid values:
	// - Local: an on-premises host
	// - Ecs: an Elastic Compute Service (ECS) instance
	// - Rds: a host in a dedicated cluster.
	Source interface{} `field:"required" json:"source" yaml:"source"`
	// Property comment: The description of the host that you want to create.
	//
	// The value can be up to 500 characters.
	Comment interface{} `field:"optional" json:"comment" yaml:"comment"`
	// Property hostPrivateAddress: The internal endpoint of the host that you want to create.
	//
	// You can set this parameter to a domain name or an IP address.
	// Note: This parameter is required if the ActiveAddressType parameter is set to Private.
	HostPrivateAddress interface{} `field:"optional" json:"hostPrivateAddress" yaml:"hostPrivateAddress"`
	// Property hostPublicAddress: The public endpoint of the host that you want to create.
	//
	// You can set this parameter to a domain name or an IP address.
	// Note: This parameter is required if the ActiveAddressType parameter is set to Public.
	HostPublicAddress interface{} `field:"optional" json:"hostPublicAddress" yaml:"hostPublicAddress"`
	// Property instanceRegionId: The ID of the region where the ECS instance or dedicated cluster host that you want to create resides.
	//
	// Note: This parameter is required if the Source parameter is set to Ecs or Rds.
	InstanceRegionId interface{} `field:"optional" json:"instanceRegionId" yaml:"instanceRegionId"`
	// Property sourceInstanceId: The ID of the ECS instance or dedicated cluster host that you want to create.
	//
	// Note This parameter is required if the Source parameter is set to Ecs or Rds.
	SourceInstanceId interface{} `field:"optional" json:"sourceInstanceId" yaml:"sourceInstanceId"`
}

