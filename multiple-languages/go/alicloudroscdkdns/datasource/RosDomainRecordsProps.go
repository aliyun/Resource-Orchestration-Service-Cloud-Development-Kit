package datasource


// Properties for defining a `RosDomainRecords`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domainrecords
type RosDomainRecordsProps struct {
	DomainName interface{} `field:"required" json:"domainName" yaml:"domainName"`
	Direction interface{} `field:"optional" json:"direction" yaml:"direction"`
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	KeyWord interface{} `field:"optional" json:"keyWord" yaml:"keyWord"`
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	Line interface{} `field:"optional" json:"line" yaml:"line"`
	OrderBy interface{} `field:"optional" json:"orderBy" yaml:"orderBy"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	RrKeyWord interface{} `field:"optional" json:"rrKeyWord" yaml:"rrKeyWord"`
	SearchMode interface{} `field:"optional" json:"searchMode" yaml:"searchMode"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
	TypeKeyWord interface{} `field:"optional" json:"typeKeyWord" yaml:"typeKeyWord"`
	ValueKeyWord interface{} `field:"optional" json:"valueKeyWord" yaml:"valueKeyWord"`
}

