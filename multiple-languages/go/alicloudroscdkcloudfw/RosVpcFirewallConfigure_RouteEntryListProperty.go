package alicloudroscdkcloudfw


type RosVpcFirewallConfigure_RouteEntryListProperty struct {
	DestinationCidr interface{} `field:"required" json:"destinationCidr" yaml:"destinationCidr"`
	NextHopInstanceId interface{} `field:"optional" json:"nextHopInstanceId" yaml:"nextHopInstanceId"`
}

