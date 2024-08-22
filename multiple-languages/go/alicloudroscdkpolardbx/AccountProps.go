package alicloudroscdkpolardbx


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-account
type AccountProps struct {
	// Property accountName: Account name.
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	// Property accountPassword: The password of the account.
	AccountPassword interface{} `field:"required" json:"accountPassword" yaml:"accountPassword"`
	// Property dbInstanceId: The ID of the instance.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property accountDescription: Account description information.
	AccountDescription interface{} `field:"optional" json:"accountDescription" yaml:"accountDescription"`
}

