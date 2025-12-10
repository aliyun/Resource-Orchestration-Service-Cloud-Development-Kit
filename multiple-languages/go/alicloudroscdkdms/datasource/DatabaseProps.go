package datasource


// Properties for defining a `Database`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dms-database
type DatabaseProps struct {
	// Property host: Database connection address.
	Host interface{} `field:"required" json:"host" yaml:"host"`
	// Property port: Database connection port.
	Port interface{} `field:"required" json:"port" yaml:"port"`
	// Property schemaName: Database schema name.
	SchemaName interface{} `field:"required" json:"schemaName" yaml:"schemaName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property sid: Database SID.
	Sid interface{} `field:"optional" json:"sid" yaml:"sid"`
	// Property tid: The tenant ID.
	Tid interface{} `field:"optional" json:"tid" yaml:"tid"`
}

