package datasource


// Properties for defining a `RosDedicatedHosts`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhosts
type RosDedicatedHostsProps struct {
	DedicatedHostClusterId interface{} `field:"optional" json:"dedicatedHostClusterId" yaml:"dedicatedHostClusterId"`
	DedicatedHostIds interface{} `field:"optional" json:"dedicatedHostIds" yaml:"dedicatedHostIds"`
	DedicatedHostName interface{} `field:"optional" json:"dedicatedHostName" yaml:"dedicatedHostName"`
	DedicatedHostType interface{} `field:"optional" json:"dedicatedHostType" yaml:"dedicatedHostType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	Tags *[]*RosDedicatedHosts_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

