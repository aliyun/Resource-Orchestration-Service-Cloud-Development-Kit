package alicloudroscdkcddc


// Properties for defining a `DedicatedHostAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostaccount
type DedicatedHostAccountProps struct {
	// Property accountName: The name of the account.
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	// Property accountPassword: The password of the account.
	AccountPassword interface{} `field:"required" json:"accountPassword" yaml:"accountPassword"`
	// Property dedicatedHostId: The ID of the dedicated host.
	DedicatedHostId interface{} `field:"required" json:"dedicatedHostId" yaml:"dedicatedHostId"`
	// Property accountType: The type of the account.
	AccountType interface{} `field:"optional" json:"accountType" yaml:"accountType"`
	// Property bastionInstanceId: The ID of the bastion instance.
	BastionInstanceId interface{} `field:"optional" json:"bastionInstanceId" yaml:"bastionInstanceId"`
}

