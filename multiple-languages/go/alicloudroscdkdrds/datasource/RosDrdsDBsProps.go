package datasource


// Properties for defining a `RosDrdsDBs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdbs
type RosDrdsDBsProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

