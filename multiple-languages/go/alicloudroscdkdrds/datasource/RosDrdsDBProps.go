package datasource


// Properties for defining a `RosDrdsDB`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdb
type RosDrdsDBProps struct {
	DrdsDatabaseName interface{} `field:"required" json:"drdsDatabaseName" yaml:"drdsDatabaseName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

