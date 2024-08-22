package alicloudroscdkvpc


// Properties for defining a `GrantInstanceToCen`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-grantinstancetocen
type GrantInstanceToCenProps struct {
	// Property cenId: The ID of the CEN instance to be authorized.
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	// Property cenOwnerId: The UID of the account to which the target CEN instance belongs.
	CenOwnerId interface{} `field:"required" json:"cenOwnerId" yaml:"cenOwnerId"`
	// Property instanceId: The ID of the network instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property instanceType: The type of the network instance.
	//
	// Valid values:
	// VPC: Virtual Private Cloud (VPC).
	// VBR: Virtual Border Router (VBR).
	// CCN: Cloud Connect Network (CCN).
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
}

