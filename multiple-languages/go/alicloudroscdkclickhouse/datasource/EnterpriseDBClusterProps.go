package datasource


// Properties for defining a `EnterpriseDBCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-enterprisedbcluster
type EnterpriseDBClusterProps struct {
	// Property dbInstanceId: The cluster ID.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

