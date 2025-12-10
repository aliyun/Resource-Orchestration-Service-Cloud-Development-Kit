package alicloudroscdkesa


// Properties for defining a `RosKv`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kv
type RosKvProps struct {
	Key interface{} `field:"required" json:"key" yaml:"key"`
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	Value interface{} `field:"required" json:"value" yaml:"value"`
	Expiration interface{} `field:"optional" json:"expiration" yaml:"expiration"`
	ExpirationTtl interface{} `field:"optional" json:"expirationTtl" yaml:"expirationTtl"`
}

