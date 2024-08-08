package datasource


// Properties for defining a `AddressBooks`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbooks
type AddressBooksProps struct {
	// Property groupType: Address Book, it can be set to include: - **ip**: an IP address book - **domain**: domain name address book - **port**: port Address Book - **tag**:ECS tag address book.
	GroupType interface{} `field:"optional" json:"groupType" yaml:"groupType"`
	// Property lang: The language type of the received message.
	//
	// - **zh** (default): Chinese.
	// - **en**: English.
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

