package alicloudroscdkresourcemanager


// Properties for defining a `Account`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-account
type AccountProps struct {
	// Property displayName: Member name.
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	// Property deleteAccount: Whether delete the account.
	//
	// Default value is false.
	DeleteAccount interface{} `field:"optional" json:"deleteAccount" yaml:"deleteAccount"`
	// Property folderId: The ID of the parent folder.
	FolderId interface{} `field:"optional" json:"folderId" yaml:"folderId"`
	// Property payerAccountId:.
	PayerAccountId interface{} `field:"optional" json:"payerAccountId" yaml:"payerAccountId"`
}

