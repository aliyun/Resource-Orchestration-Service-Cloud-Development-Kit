package datasource


// Properties for defining a `RosPrometheis`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheis
type RosPrometheisProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

