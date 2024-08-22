package datasource


// Properties for defining a `RosTables`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ots-tables
type RosTablesProps struct {
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	TableName interface{} `field:"optional" json:"tableName" yaml:"tableName"`
}

