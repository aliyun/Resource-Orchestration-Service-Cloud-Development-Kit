package datasource


// Properties for defining a `ParameterGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroups
type ParameterGroupsProps struct {
	// Property dbType: The type of the database engine.
	DbType interface{} `field:"optional" json:"dbType" yaml:"dbType"`
	// Property dbVersion: The version of the database engine.
	DbVersion interface{} `field:"optional" json:"dbVersion" yaml:"dbVersion"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

