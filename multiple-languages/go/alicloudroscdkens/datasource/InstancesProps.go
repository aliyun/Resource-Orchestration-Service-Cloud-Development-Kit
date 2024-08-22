package datasource


// Properties for defining a `Instances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instances
type InstancesProps struct {
	// Property ensRegionIds: The list of ENS region IDs.
	EnsRegionIds interface{} `field:"optional" json:"ensRegionIds" yaml:"ensRegionIds"`
	// Property ensServiceId: The ID of ENS service.
	EnsServiceId interface{} `field:"optional" json:"ensServiceId" yaml:"ensServiceId"`
	// Property imageId: The image ID of instance.
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	// Property instanceIds: The list of instance IDs.
	InstanceIds interface{} `field:"optional" json:"instanceIds" yaml:"instanceIds"`
	// Property instanceName: The name of instance.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property instanceResourceType: The resource type of instance.
	//
	// Valid values:
	// EnsPostPaidInstance: PostPaid instance.
	// EnsService: Edge service instance.
	// BuildMachine: Image building machine.
	InstanceResourceType interface{} `field:"optional" json:"instanceResourceType" yaml:"instanceResourceType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property status: The status of instance.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

