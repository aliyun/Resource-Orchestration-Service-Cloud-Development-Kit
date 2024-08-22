package datasource


// Properties for defining a `PrefixList`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-prefixlist
type PrefixListProps struct {
	// Property prefixListId: The ID of the query Prefix List.
	PrefixListId interface{} `field:"required" json:"prefixListId" yaml:"prefixListId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

