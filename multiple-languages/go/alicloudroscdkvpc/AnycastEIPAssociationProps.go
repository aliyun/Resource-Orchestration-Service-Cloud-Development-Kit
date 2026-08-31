package alicloudroscdkvpc


// Properties for defining a `AnycastEIPAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteipassociation
type AnycastEIPAssociationProps struct {
	// Property anycastId: Anycast EIP instance ID.
	AnycastId interface{} `field:"required" json:"anycastId" yaml:"anycastId"`
	// Property bindInstanceId: The ID of the cloud resource instance to be bound.
	BindInstanceId interface{} `field:"required" json:"bindInstanceId" yaml:"bindInstanceId"`
	// Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound.
	BindInstanceRegionId interface{} `field:"required" json:"bindInstanceRegionId" yaml:"bindInstanceRegionId"`
	// Property bindInstanceType: The type of the cloud resource with which you want to associate the Anycast EIP.
	//
	// Valid values:
	// - SlbInstance: CLB instance in a virtual private cloud (VPC).
	// - NetworkInterface: ENI.
	BindInstanceType interface{} `field:"required" json:"bindInstanceType" yaml:"bindInstanceType"`
	// Property associationMode: The association mode.
	//
	// Valid values:
	// - Default: the default mode. In this mode, the associated cloud resource is the
	// default origin server.
	// - Normal: the normal mode. In this mode, the associated cloud resource is a
	// normal origin server.
	// > An Anycast EIP can be associated with cloud resources in multiple regions.
	// However, you can specify only one default origin server and multiple normal
	// origin servers. When you do not specify an access point or add a new access
	// point, requests are forwarded to the default origin server by default.
	// >
	// > - If this is your first time to associate a cloud resource with the Anycast
	// EIP, the association mode is Default by default.
	// >
	// > - If this is not your first time to associate a cloud resource with the Anycast
	// EIP, you can set the association mode to Default. This makes the new cloud
	// resource the default origin server, and the original default origin server
	// becomes a normal origin server.
	AssociationMode interface{} `field:"optional" json:"associationMode" yaml:"associationMode"`
	// Property popLocations: The pop locations.
	PopLocations interface{} `field:"optional" json:"popLocations" yaml:"popLocations"`
	// Property privateIpAddress: The secondary private IP address of the ENI.
	//
	// This parameter is required when BindInstanceType is set to NetworkInterface. If
	// you do not specify this parameter, the primary private IP address of the ENI is
	// used.
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
}

