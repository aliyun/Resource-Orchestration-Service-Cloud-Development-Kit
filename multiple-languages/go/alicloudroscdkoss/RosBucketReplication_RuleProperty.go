package alicloudroscdkoss


type RosBucketReplication_RuleProperty struct {
	Destination interface{} `field:"required" json:"destination" yaml:"destination"`
	Action interface{} `field:"optional" json:"action" yaml:"action"`
	EncryptionConfiguration interface{} `field:"optional" json:"encryptionConfiguration" yaml:"encryptionConfiguration"`
	HistoricalObjectReplication interface{} `field:"optional" json:"historicalObjectReplication" yaml:"historicalObjectReplication"`
	Identity interface{} `field:"optional" json:"identity" yaml:"identity"`
	PrefixSet interface{} `field:"optional" json:"prefixSet" yaml:"prefixSet"`
	Rtc interface{} `field:"optional" json:"rtc" yaml:"rtc"`
	SourceSelectionCriteria interface{} `field:"optional" json:"sourceSelectionCriteria" yaml:"sourceSelectionCriteria"`
	SyncRole interface{} `field:"optional" json:"syncRole" yaml:"syncRole"`
}

