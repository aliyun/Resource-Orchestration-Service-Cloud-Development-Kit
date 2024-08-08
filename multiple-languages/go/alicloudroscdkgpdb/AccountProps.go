package alicloudroscdkgpdb


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-account
type AccountProps struct {
	// Property accountName: The name of the privileged account.
	//
	// The name can contain lowercase letters, digits, and underscores (_).
	// The name must start with a lowercase letter and end with a lowercase letter or a digit.
	// The name cannot start with gp.
	// The name must be 2 to 16 characters in length.
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	// Property accountPassword: The password of the privileged account.
	//
	// The password must contain at least three of the following character types: uppercase
	// letters, lowercase letters, digits, and special characters.
	// Special characters include ! @ # $ % ^ & * ( ) _ + - =
	// The password must be 8 to 32 characters in length.
	AccountPassword interface{} `field:"required" json:"accountPassword" yaml:"accountPassword"`
	// Property dbInstanceId: The ID of the instance.
	//
	// Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
	// region, including instance IDs.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property accountDescription: The description of the privileged account.
	AccountDescription interface{} `field:"optional" json:"accountDescription" yaml:"accountDescription"`
}

