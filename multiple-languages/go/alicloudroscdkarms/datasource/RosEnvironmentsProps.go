package datasource


// Properties for defining a `RosEnvironments`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-environments
type RosEnvironmentsProps struct {
	BindResourceId interface{} `field:"optional" json:"bindResourceId" yaml:"bindResourceId"`
	EnvironmentType interface{} `field:"optional" json:"environmentType" yaml:"environmentType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

