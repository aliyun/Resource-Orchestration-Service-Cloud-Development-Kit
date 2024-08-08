package datasource


// Properties for defining a `Domains`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domains
type DomainsProps struct {
	// Property groupId: The ID of the domain name group.
	//
	// If you do not specify this parameter, all domain names are queried by default.
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
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
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property searchMode: The search mode.
	SearchMode interface{} `field:"optional" json:"searchMode" yaml:"searchMode"`
	// Property starmark: Specifies whether to query the starmark of the domain name.
	Starmark interface{} `field:"optional" json:"starmark" yaml:"starmark"`
}

