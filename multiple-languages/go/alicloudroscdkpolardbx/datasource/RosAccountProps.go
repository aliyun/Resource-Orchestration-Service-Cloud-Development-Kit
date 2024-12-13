package datasource


// Properties for defining a `RosAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-account
type RosAccountProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	PolarDbxAccountName interface{} `field:"required" json:"polarDbxAccountName" yaml:"polarDbxAccountName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

