package datasource


// Properties for defining a `RosAddressBook`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbook
type RosAddressBookProps struct {
	GroupUuid interface{} `field:"required" json:"groupUuid" yaml:"groupUuid"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

