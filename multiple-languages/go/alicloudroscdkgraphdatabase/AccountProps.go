package alicloudroscdkgraphdatabase


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-account
type AccountProps struct {
	// Property accountName: Account name.
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	// Property accountPassword: Account password.
	AccountPassword interface{} `field:"required" json:"accountPassword" yaml:"accountPassword"`
	// Property dbInstanceId: Instance Id.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property accountDescription: Account description.
	AccountDescription interface{} `field:"optional" json:"accountDescription" yaml:"accountDescription"`
}

