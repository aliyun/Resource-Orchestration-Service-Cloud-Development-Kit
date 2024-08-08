package datasource


// Properties for defining a `RosParameterGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-parametergroups
type RosParameterGroupsProps struct {
	DbType interface{} `field:"optional" json:"dbType" yaml:"dbType"`
	DbVersion interface{} `field:"optional" json:"dbVersion" yaml:"dbVersion"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

