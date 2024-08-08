package alicloudroscdkresourcemanager


// Properties for defining a `RosAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-account
type RosAccountProps struct {
	DisplayName interface{} `field:"required" json:"displayName" yaml:"displayName"`
	DeleteAccount interface{} `field:"optional" json:"deleteAccount" yaml:"deleteAccount"`
	FolderId interface{} `field:"optional" json:"folderId" yaml:"folderId"`
	PayerAccountId interface{} `field:"optional" json:"payerAccountId" yaml:"payerAccountId"`
}

