package alicloudroscdkots


// Properties for defining a `RosTable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-table
type RosTableProps struct {
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	PrimaryKey interface{} `field:"required" json:"primaryKey" yaml:"primaryKey"`
	TableName interface{} `field:"required" json:"tableName" yaml:"tableName"`
	Columns interface{} `field:"optional" json:"columns" yaml:"columns"`
	DeviationCellVersionInSec interface{} `field:"optional" json:"deviationCellVersionInSec" yaml:"deviationCellVersionInSec"`
	MaxVersions interface{} `field:"optional" json:"maxVersions" yaml:"maxVersions"`
	ReservedThroughput interface{} `field:"optional" json:"reservedThroughput" yaml:"reservedThroughput"`
	SecondaryIndices interface{} `field:"optional" json:"secondaryIndices" yaml:"secondaryIndices"`
	TimeToLive interface{} `field:"optional" json:"timeToLive" yaml:"timeToLive"`
}

