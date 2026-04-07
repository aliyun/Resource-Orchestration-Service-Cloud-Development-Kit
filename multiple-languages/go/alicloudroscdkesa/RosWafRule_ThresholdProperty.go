package alicloudroscdkesa


type RosWafRule_ThresholdProperty struct {
	DistinctManagedRules interface{} `field:"optional" json:"distinctManagedRules" yaml:"distinctManagedRules"`
	ManagedRulesBlocked interface{} `field:"optional" json:"managedRulesBlocked" yaml:"managedRulesBlocked"`
	Request interface{} `field:"optional" json:"request" yaml:"request"`
	ResponseStatus interface{} `field:"optional" json:"responseStatus" yaml:"responseStatus"`
	Traffic interface{} `field:"optional" json:"traffic" yaml:"traffic"`
}

