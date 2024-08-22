package datasource


// Properties for defining a `DomainRecords`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domainrecords
type DomainRecordsProps struct {
	// Property domainName: The domain name for which you want to query DNS records.
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	// Property direction: The order in which the returned DNS records are sorted.
	Direction interface{} `field:"optional" json:"direction" yaml:"direction"`
	// Property groupId: The ID of the domain name group.
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	// Property keyWord: The keyword for searches in "%KeyWord%" mode.
	//
	// The value is not case-sensitive.
	KeyWord interface{} `field:"optional" json:"keyWord" yaml:"keyWord"`
	// Property lang: The language type.
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	// Property line: The line based on which the system queries DNS records.
	Line interface{} `field:"optional" json:"line" yaml:"line"`
	// Property orderBy: The method that is used to sort the returned DNS records.
	OrderBy interface{} `field:"optional" json:"orderBy" yaml:"orderBy"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records.
	RrKeyWord interface{} `field:"optional" json:"rrKeyWord" yaml:"rrKeyWord"`
	// Property searchMode: The search mode.
	SearchMode interface{} `field:"optional" json:"searchMode" yaml:"searchMode"`
	// Property status: The status of the DNS records to query.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	// Property type: The type of the DNS records to query.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
	// Property typeKeyWord: The type keyword based on which the system queries DNS records.
	TypeKeyWord interface{} `field:"optional" json:"typeKeyWord" yaml:"typeKeyWord"`
	// Property valueKeyWord: The record value keyword based on which the system queries DNS records.
	ValueKeyWord interface{} `field:"optional" json:"valueKeyWord" yaml:"valueKeyWord"`
}

