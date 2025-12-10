package alicloudroscdkdms


// Properties for defining a `ScriptExecution`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-scriptexecution
type ScriptExecutionProps struct {
	// Property dbId: The database ID.
	//
	// > This parameter corresponds to the DatabaseId parameter in interfaces like SearchDatabase, ListDatabases, GetDatabase, etc. You can call these interfaces to obtain the value.
	DbId interface{} `field:"required" json:"dbId" yaml:"dbId"`
	// Property logic: Whether it is a logical database.
	Logic interface{} `field:"required" json:"logic" yaml:"logic"`
	// Property script: The specific SQL script to execute.
	//
	// Includes DQL, DDL, and DML. Whether DDL and DML are allowed depends on the security configuration of the instance.
	Script interface{} `field:"required" json:"script" yaml:"script"`
	// Property tid: The tenant ID.
	//
	// > Obtain this from the tenant ID information displayed when hovering over the top-right corner avatar.
	Tid interface{} `field:"optional" json:"tid" yaml:"tid"`
}

