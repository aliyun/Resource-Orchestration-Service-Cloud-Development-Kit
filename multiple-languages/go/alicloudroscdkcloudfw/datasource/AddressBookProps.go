package datasource


// Properties for defining a `AddressBook`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbook
type AddressBookProps struct {
	// Property groupUuid: The UUID of the address book.
	GroupUuid interface{} `field:"required" json:"groupUuid" yaml:"groupUuid"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

