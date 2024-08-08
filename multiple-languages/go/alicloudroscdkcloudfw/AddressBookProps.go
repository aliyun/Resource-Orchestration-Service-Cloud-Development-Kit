package alicloudroscdkcloudfw


// Properties for defining a `AddressBook`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-addressbook
type AddressBookProps struct {
	// Property description: Address book description.
	Description interface{} `field:"required" json:"description" yaml:"description"`
	// Property groupName: Name Address book.
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	// Property groupType: Type the address book, the optional values ​​are: ip: IP Address Book domain: domain name address book port: Port Address Book tag: ECS label address book.
	GroupType interface{} `field:"required" json:"groupType" yaml:"groupType"`
	// Property addressList: Address list of the address book, between multiple addresses separated by commas.
	//
	// Note: When GroupType ip, it must be set to port or domain.
	// When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4\/32, 1.2.3.0\/24
	// When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100\/200
	// When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
	AddressList interface{} `field:"optional" json:"addressList" yaml:"addressList"`
	// Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book.
	//
	// Default to false.
	AutoAddTagEcs interface{} `field:"optional" json:"autoAddTagEcs" yaml:"autoAddTagEcs"`
	// Property regionId: Region ID.
	//
	// Default to cn-hangzhou.
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
	// Property tagList:.
	TagList interface{} `field:"optional" json:"tagList" yaml:"tagList"`
	// Property tagRelation: The relationship between the labels to be matched more ECS.
	//
	// and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
	// or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
	TagRelation interface{} `field:"optional" json:"tagRelation" yaml:"tagRelation"`
}

