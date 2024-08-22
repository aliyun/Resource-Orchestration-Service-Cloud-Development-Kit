package alicloudroscdkots


// Properties for defining a `Table`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-table
type TableProps struct {
	// Property instanceName: The name of the OTS instance in which table will locate.
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property primaryKey: It describes the attribute value of primary key.
	//
	// The number of primary_key should not be less than one and not be more than four.
	PrimaryKey interface{} `field:"required" json:"primaryKey" yaml:"primaryKey"`
	// Property tableName: The table name of the OTS instance.
	TableName interface{} `field:"required" json:"tableName" yaml:"tableName"`
	// Property columns: Attribute column for table store.
	Columns interface{} `field:"optional" json:"columns" yaml:"columns"`
	// Property deviationCellVersionInSec: Maximum version deviation.
	//
	// The purpose is mainly to prohibit writing and expected large data, such as setting the deviation_cell_version_in_sec to 1000, and if the current timestamp is 10000, the timestamp range allowed to be written is [10000 - 1000, 10000 + 1000]. The valid value is 1-9223372036854775807. Defaults to 86400.
	DeviationCellVersionInSec interface{} `field:"optional" json:"deviationCellVersionInSec" yaml:"deviationCellVersionInSec"`
	// Property maxVersions: The maximum number of versions stored in this table.
	//
	// The valid value is 1-2147483647. Default to 1.
	MaxVersions interface{} `field:"optional" json:"maxVersions" yaml:"maxVersions"`
	// Property reservedThroughput: The initial reserved read\/write throughput setting of the table to be created, the reserved read throughput and reserved write throughput of any table cannot exceed 5000.
	ReservedThroughput interface{} `field:"optional" json:"reservedThroughput" yaml:"reservedThroughput"`
	// Property secondaryIndices: The secondary indices of the table.
	SecondaryIndices interface{} `field:"optional" json:"secondaryIndices" yaml:"secondaryIndices"`
	// Property timeToLive: The retention time of data stored in this table (unit: second).
	//
	// The value maximum is 2147483647 and -1 means never expired. Default to -1.
	TimeToLive interface{} `field:"optional" json:"timeToLive" yaml:"timeToLive"`
}

