package alicloudroscdkgpdb


// Properties for defining a `RosJdbcDataSource`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-jdbcdatasource
type RosJdbcDataSourceProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	JdbcUserName interface{} `field:"required" json:"jdbcUserName" yaml:"jdbcUserName"`
	DataSourceDescription interface{} `field:"optional" json:"dataSourceDescription" yaml:"dataSourceDescription"`
	DataSourceName interface{} `field:"optional" json:"dataSourceName" yaml:"dataSourceName"`
	DataSourceType interface{} `field:"optional" json:"dataSourceType" yaml:"dataSourceType"`
	JdbcConnectionString interface{} `field:"optional" json:"jdbcConnectionString" yaml:"jdbcConnectionString"`
	JdbcPassword interface{} `field:"optional" json:"jdbcPassword" yaml:"jdbcPassword"`
}

