package alicloudroscdkvpc


// Properties for defining a `RosBgpGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpgroup
type RosBgpGroupProps struct {
	PeerAsn interface{} `field:"required" json:"peerAsn" yaml:"peerAsn"`
	RouterId interface{} `field:"required" json:"routerId" yaml:"routerId"`
	AuthKey interface{} `field:"optional" json:"authKey" yaml:"authKey"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	IsFakeAsn interface{} `field:"optional" json:"isFakeAsn" yaml:"isFakeAsn"`
	LocalAsn interface{} `field:"optional" json:"localAsn" yaml:"localAsn"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	RouteQuota interface{} `field:"optional" json:"routeQuota" yaml:"routeQuota"`
}

