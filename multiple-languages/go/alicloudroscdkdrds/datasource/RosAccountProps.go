package datasource


// Properties for defining a `RosAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-account
type RosAccountProps struct {
	DrdsAccountName interface{} `field:"required" json:"drdsAccountName" yaml:"drdsAccountName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

