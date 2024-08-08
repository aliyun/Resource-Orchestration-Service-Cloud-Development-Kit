package alicloudroscdkapigateway


type RosTrafficControl_SpecialProperty struct {
	SpecialKey interface{} `field:"required" json:"specialKey" yaml:"specialKey"`
	SpecialType interface{} `field:"required" json:"specialType" yaml:"specialType"`
	TrafficValue interface{} `field:"required" json:"trafficValue" yaml:"trafficValue"`
}

