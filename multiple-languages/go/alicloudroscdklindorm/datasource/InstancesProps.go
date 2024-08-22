package datasource


// Properties for defining a `Instances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-lindorm-instances
type InstancesProps struct {
	// Property instanceIds: The list of the instance id.
	InstanceIds interface{} `field:"optional" json:"instanceIds" yaml:"instanceIds"`
	// Property queryStr: Instance name keyword, which can be used for fuzzy search.
	QueryStr interface{} `field:"optional" json:"queryStr" yaml:"queryStr"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The resource group id of lindorm instance.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property serviceType: The type of lindorm instance.
	ServiceType interface{} `field:"optional" json:"serviceType" yaml:"serviceType"`
	// Property supportEngine: Database engine types supported by the queried instance.
	//
	// 1: Support search engines.
	// 2: Support timing engine.
	// 4: Support wide table engine.
	// 8: Support file engine.
	// Note For example: the value of SupportEngine is 15, 15=8+4+2+1, which means that the instance supports search engine, timing engine, wide table engine and file engine. The value of SupportEngine is 6, 6=4+2, indicating that the instance supports timing engine and wide table engine.
	SupportEngine interface{} `field:"optional" json:"supportEngine" yaml:"supportEngine"`
	// Property tags: Tags of lindorm instance.
	Tags *[]*RosInstances_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

