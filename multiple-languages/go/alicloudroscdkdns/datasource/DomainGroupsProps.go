package datasource


// Properties for defining a `DomainGroups`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domaingroups
type DomainGroupsProps struct {
	// Property keyWord: The keyword for searches in "%KeyWord%" mode.
	//
	// The value is not case-sensitive.
	KeyWord interface{} `field:"optional" json:"keyWord" yaml:"keyWord"`
	// Property lang: The language type.
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

