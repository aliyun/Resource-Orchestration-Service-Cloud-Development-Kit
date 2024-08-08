package datasource


// Properties for defining a `DBNodeClasses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbnodeclasses
type DBNodeClassesProps struct {
	// Property payType: The billing method.
	//
	// Valid values:
	// Postpaid: the pay-as-you-go billing method
	// Prepaid: the subscription billing method.
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	// Property dbNodeClass: The node type.
	//
	// For more information, see Specifications of compute nodes.
	DbNodeClass interface{} `field:"optional" json:"dbNodeClass" yaml:"dbNodeClass"`
	// Property dbType: The database engine.
	//
	// Valid values:
	// MySQL
	// PostgreSQL
	// Oracle.
	DbType interface{} `field:"optional" json:"dbType" yaml:"dbType"`
	// Property dbVersion: The version number of the database engine Valid values for the MySQL database engine: 5.6 5.7 8 Valid value for the PostgreSQL database engine: 11 Valid value for the Oracle database engine: 11 Note If you specify the DBType parameter, you must specify this parameter.
	DbVersion interface{} `field:"optional" json:"dbVersion" yaml:"dbVersion"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
	//
	// Note You can call the DescribeRegions operation to query information about zones.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

