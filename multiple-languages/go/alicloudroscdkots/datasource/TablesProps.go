package datasource


// Properties for defining a `Tables`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ots-tables
type TablesProps struct {
	// Property instanceName: The name of the instance to which the table belongs.
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property tableName: The name of table.
	TableName interface{} `field:"optional" json:"tableName" yaml:"tableName"`
}

