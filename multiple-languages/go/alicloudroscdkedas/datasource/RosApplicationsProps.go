package datasource


// Properties for defining a `RosApplications`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-applications
type RosApplicationsProps struct {
	AppName interface{} `field:"optional" json:"appName" yaml:"appName"`
	ClusterId interface{} `field:"optional" json:"clusterId" yaml:"clusterId"`
	LogicalRegionId interface{} `field:"optional" json:"logicalRegionId" yaml:"logicalRegionId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

