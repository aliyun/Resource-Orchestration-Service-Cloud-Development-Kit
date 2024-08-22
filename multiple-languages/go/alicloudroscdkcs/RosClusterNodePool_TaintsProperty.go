package alicloudroscdkcs


type RosClusterNodePool_TaintsProperty struct {
	Key interface{} `field:"required" json:"key" yaml:"key"`
	Value interface{} `field:"required" json:"value" yaml:"value"`
	Effect interface{} `field:"optional" json:"effect" yaml:"effect"`
}

