package datasource


// Properties for defining a `RosInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-lindorm-instances
type RosInstancesProps struct {
	InstanceIds interface{} `field:"optional" json:"instanceIds" yaml:"instanceIds"`
	QueryStr interface{} `field:"optional" json:"queryStr" yaml:"queryStr"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ServiceType interface{} `field:"optional" json:"serviceType" yaml:"serviceType"`
	SupportEngine interface{} `field:"optional" json:"supportEngine" yaml:"supportEngine"`
	Tags *[]*RosInstances_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

