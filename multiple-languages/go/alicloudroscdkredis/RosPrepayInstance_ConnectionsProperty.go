package alicloudroscdkredis


type RosPrepayInstance_ConnectionsProperty struct {
	ClassicInnerConnection interface{} `field:"optional" json:"classicInnerConnection" yaml:"classicInnerConnection"`
	DirectConnection interface{} `field:"optional" json:"directConnection" yaml:"directConnection"`
	PublicConnection interface{} `field:"optional" json:"publicConnection" yaml:"publicConnection"`
	VpcPrivateConnection interface{} `field:"optional" json:"vpcPrivateConnection" yaml:"vpcPrivateConnection"`
}

