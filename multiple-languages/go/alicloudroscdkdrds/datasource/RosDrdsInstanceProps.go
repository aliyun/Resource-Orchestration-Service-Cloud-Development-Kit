package datasource


// Properties for defining a `RosDrdsInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstance
type RosDrdsInstanceProps struct {
	DrdsInstanceId interface{} `field:"required" json:"drdsInstanceId" yaml:"drdsInstanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

