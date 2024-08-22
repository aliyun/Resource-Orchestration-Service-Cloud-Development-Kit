package alicloudroscdkgpdb


// Properties for defining a `RosAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-account
type RosAccountProps struct {
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	AccountPassword interface{} `field:"required" json:"accountPassword" yaml:"accountPassword"`
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	AccountDescription interface{} `field:"optional" json:"accountDescription" yaml:"accountDescription"`
}

