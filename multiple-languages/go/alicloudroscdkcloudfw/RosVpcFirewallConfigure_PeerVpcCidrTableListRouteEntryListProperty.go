package alicloudroscdkcloudfw


type RosVpcFirewallConfigure_PeerVpcCidrTableListRouteEntryListProperty struct {
	DestinationCidr interface{} `field:"required" json:"destinationCidr" yaml:"destinationCidr"`
	NextHopInstanceId interface{} `field:"optional" json:"nextHopInstanceId" yaml:"nextHopInstanceId"`
}

