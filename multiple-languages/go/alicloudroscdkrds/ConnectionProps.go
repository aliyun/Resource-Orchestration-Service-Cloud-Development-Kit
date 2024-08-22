package alicloudroscdkrds


// Properties for defining a `Connection`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-connection
type ConnectionProps struct {
	// Property dbInstanceId: RDS instance ID.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property port: The port of the database service.
	Port interface{} `field:"required" json:"port" yaml:"port"`
	// Property babelfishPort: The Tabular Data Stream (TDS) port of the instance for which Babelfish is enabled.
	//
	// Note This parameter applies only to ApsaraDB RDS for PostgreSQL instances.
	// For more information about Babelfish for ApsaraDB RDS for PostgreSQL, see Introduction to Babelfish.
	BabelfishPort interface{} `field:"optional" json:"babelfishPort" yaml:"babelfishPort"`
	// Property connectionStringPrefix: The prefix of the endpoint.
	//
	// Only the prefix of the CurrentConnectionString parameter value can be modified.
	// The prefix must be 5 to 40 characters in length and can contain letters, digits, and hyphens (-).
	ConnectionStringPrefix interface{} `field:"optional" json:"connectionStringPrefix" yaml:"connectionStringPrefix"`
	// Property generalGroupName: The name of the dedicated cluster to which the instance belongs.
	//
	// This parameter takes effect only when the instance runs MySQL on RDS
	// Standard Edition and is created in a dedicated cluster.
	GeneralGroupName interface{} `field:"optional" json:"generalGroupName" yaml:"generalGroupName"`
}

