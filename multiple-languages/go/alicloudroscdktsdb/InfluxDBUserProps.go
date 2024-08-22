package alicloudroscdktsdb


// Properties for defining a `InfluxDBUser`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbuser
type InfluxDBUserProps struct {
	// Property instanceId: The ID of TSDB for InfluxDB.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!@#$%^&*()_+-=.
	Password interface{} `field:"required" json:"password" yaml:"password"`
	// Property userName: The name of user.
	//
	// The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
	UserName interface{} `field:"required" json:"userName" yaml:"userName"`
	// Property userType: The type of user.
	//
	// Valid values:
	// normal: normal user
	// admin: administrator user.
	UserType interface{} `field:"required" json:"userType" yaml:"userType"`
	// Property databasePermissions: The list of databases that the user can access.
	//
	// If the user type is admin, do not specify this parameter.
	DatabasePermissions interface{} `field:"optional" json:"databasePermissions" yaml:"databasePermissions"`
}

