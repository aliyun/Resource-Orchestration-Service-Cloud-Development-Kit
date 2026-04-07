package alicloudroscdkgpdb


// Properties for defining a `JdbcDataSource`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-jdbcdatasource
type JdbcDataSourceProps struct {
	// Property dbInstanceId: The instance ID.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property jdbcUserName: The name of the database account.
	JdbcUserName interface{} `field:"required" json:"jdbcUserName" yaml:"jdbcUserName"`
	// Property dataSourceDescription: Data Source Description.
	DataSourceDescription interface{} `field:"optional" json:"dataSourceDescription" yaml:"dataSourceDescription"`
	// Property dataSourceName: Data Source Name.
	DataSourceName interface{} `field:"optional" json:"dataSourceName" yaml:"dataSourceName"`
	// Property dataSourceType: Data Source Type.
	DataSourceType interface{} `field:"optional" json:"dataSourceType" yaml:"dataSourceType"`
	// Property jdbcConnectionString: The JDBC connection string.
	JdbcConnectionString interface{} `field:"optional" json:"jdbcConnectionString" yaml:"jdbcConnectionString"`
	// Property jdbcPassword: The password of the database account.
	JdbcPassword interface{} `field:"optional" json:"jdbcPassword" yaml:"jdbcPassword"`
}

