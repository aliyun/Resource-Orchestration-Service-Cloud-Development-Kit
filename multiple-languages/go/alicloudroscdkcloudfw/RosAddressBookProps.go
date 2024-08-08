package alicloudroscdkcloudfw


// Properties for defining a `RosAddressBook`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-addressbook
type RosAddressBookProps struct {
	Description interface{} `field:"required" json:"description" yaml:"description"`
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	GroupType interface{} `field:"required" json:"groupType" yaml:"groupType"`
	AddressList interface{} `field:"optional" json:"addressList" yaml:"addressList"`
	AutoAddTagEcs interface{} `field:"optional" json:"autoAddTagEcs" yaml:"autoAddTagEcs"`
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
	TagList interface{} `field:"optional" json:"tagList" yaml:"tagList"`
	TagRelation interface{} `field:"optional" json:"tagRelation" yaml:"tagRelation"`
}

