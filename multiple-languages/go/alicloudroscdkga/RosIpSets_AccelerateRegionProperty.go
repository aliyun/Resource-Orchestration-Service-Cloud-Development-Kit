package alicloudroscdkga


type RosIpSets_AccelerateRegionProperty struct {
	AccelerateRegionId interface{} `field:"required" json:"accelerateRegionId" yaml:"accelerateRegionId"`
	Bandwidth interface{} `field:"required" json:"bandwidth" yaml:"bandwidth"`
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	IspType interface{} `field:"optional" json:"ispType" yaml:"ispType"`
}

