package alicloudroscdkelasticsearchserverless


type RosApp_QuotaInfoProperty struct {
	AppType interface{} `field:"required" json:"appType" yaml:"appType"`
	Elastic interface{} `field:"optional" json:"elastic" yaml:"elastic"`
	MaxCu interface{} `field:"optional" json:"maxCu" yaml:"maxCu"`
	MinCu interface{} `field:"optional" json:"minCu" yaml:"minCu"`
	ReadCu interface{} `field:"optional" json:"readCu" yaml:"readCu"`
	WriteCu interface{} `field:"optional" json:"writeCu" yaml:"writeCu"`
}

