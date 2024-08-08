package alicloudroscdkvpc


type RosTrafficMirrorFilter_EgressRulesProperty struct {
	Action interface{} `field:"required" json:"action" yaml:"action"`
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	DestinationCidrBlock interface{} `field:"optional" json:"destinationCidrBlock" yaml:"destinationCidrBlock"`
	DestinationPortRange interface{} `field:"optional" json:"destinationPortRange" yaml:"destinationPortRange"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	SourceCidrBlock interface{} `field:"optional" json:"sourceCidrBlock" yaml:"sourceCidrBlock"`
	SourcePortRange interface{} `field:"optional" json:"sourcePortRange" yaml:"sourcePortRange"`
}

