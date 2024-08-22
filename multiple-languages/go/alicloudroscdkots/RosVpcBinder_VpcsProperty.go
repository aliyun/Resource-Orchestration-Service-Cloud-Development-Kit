package alicloudroscdkots


type RosVpcBinder_VpcsProperty struct {
	InstanceVpcName interface{} `field:"required" json:"instanceVpcName" yaml:"instanceVpcName"`
	Network interface{} `field:"required" json:"network" yaml:"network"`
	VirtualSwitchId interface{} `field:"required" json:"virtualSwitchId" yaml:"virtualSwitchId"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
}

