package alicloudroscdkdns


type RosAddressPool_AddrProperty struct {
	Addr interface{} `field:"required" json:"addr" yaml:"addr"`
	AttributeInfo interface{} `field:"required" json:"attributeInfo" yaml:"attributeInfo"`
	Mode interface{} `field:"required" json:"mode" yaml:"mode"`
	LbaWeight interface{} `field:"optional" json:"lbaWeight" yaml:"lbaWeight"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

