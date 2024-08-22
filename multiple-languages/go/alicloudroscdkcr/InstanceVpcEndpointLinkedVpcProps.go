package alicloudroscdkcr


// Properties for defining a `InstanceVpcEndpointLinkedVpc`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-instancevpcendpointlinkedvpc
type InstanceVpcEndpointLinkedVpcProps struct {
	// Property instanceId: The ID of the instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property vpcId: The ID of the vpc.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vswitchId: The ID of the vswitch.
	VswitchId interface{} `field:"required" json:"vswitchId" yaml:"vswitchId"`
	// Property enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records.
	//
	// If you enable automatic Privatezone record creation, Privatezone records will be automatically created when VPC instances are added.
	// Valid values:
	// - **true**: Automatically creates a Privatezone record.
	// - **false** (default): Do not automatically create Privatezone records.
	EnableCreateDnsRecordInPvzt interface{} `field:"optional" json:"enableCreateDnsRecordInPvzt" yaml:"enableCreateDnsRecordInPvzt"`
	// Property moduleName: The name of the module in the instance for which a whitelist is configured.
	//
	// Valid values:
	// - **Registry** (default): Access the image repository.
	// - **Chart**: Access Helm Chart.
	ModuleName interface{} `field:"optional" json:"moduleName" yaml:"moduleName"`
}

