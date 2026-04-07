package alicloudroscdkcddc


// Properties for defining a `RosDedicatedHostAccount`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostaccount
type RosDedicatedHostAccountProps struct {
	AccountName interface{} `field:"required" json:"accountName" yaml:"accountName"`
	AccountPassword interface{} `field:"required" json:"accountPassword" yaml:"accountPassword"`
	DedicatedHostId interface{} `field:"required" json:"dedicatedHostId" yaml:"dedicatedHostId"`
	AccountType interface{} `field:"optional" json:"accountType" yaml:"accountType"`
	BastionInstanceId interface{} `field:"optional" json:"bastionInstanceId" yaml:"bastionInstanceId"`
}

