package datasource


// Properties for defining a `RosClusterApplicationResources`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusterapplicationresources
type RosClusterApplicationResourcesProps struct {
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	Kind interface{} `field:"required" json:"kind" yaml:"kind"`
	FirstMatch interface{} `field:"optional" json:"firstMatch" yaml:"firstMatch"`
	JsonPath interface{} `field:"optional" json:"jsonPath" yaml:"jsonPath"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	Namespace interface{} `field:"optional" json:"namespace" yaml:"namespace"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

