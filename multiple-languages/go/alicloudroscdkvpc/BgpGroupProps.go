package alicloudroscdkvpc


// Properties for defining a `BgpGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpgroup
type BgpGroupProps struct {
	// Property peerAsn: The AS number of the BGP peer.
	PeerAsn interface{} `field:"required" json:"peerAsn" yaml:"peerAsn"`
	// Property routerId: The ID of the VBR.
	RouterId interface{} `field:"required" json:"routerId" yaml:"routerId"`
	// Property authKey: The authentication key of the BGP group.
	AuthKey interface{} `field:"optional" json:"authKey" yaml:"authKey"`
	// Property description: The description of the BGP group.
	//
	// The description must be 2 to 256 characters in length.
	// It must start with a letter but cannot start with http:\/\/ or https:\/\/.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property ipVersion: The IP version of the BGP group.
	//
	// Valid values: IPv4 and IPv6.
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	// Property isFakeAsn: A router that runs BGP typically belongs to only one AS.
	//
	// In some cases, for example,
	// the AS needs to be migrated or is merged with another AS, a new AS number replaces
	// the original one.
	IsFakeAsn interface{} `field:"optional" json:"isFakeAsn" yaml:"isFakeAsn"`
	// Property localAsn: The AS number on the Alibaba Cloud side.
	LocalAsn interface{} `field:"optional" json:"localAsn" yaml:"localAsn"`
	// Property name: The name of the BGP group.
	//
	// The name must be 2 to 128 characters in length and can
	// contain digits, periods (.), underscores (_), and hyphens (-). The name must start
	// with a letter but cannot start with http:\/\/ or https:\/\/.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property routeQuota: The upper limit of the BGP neighbor's route entries.
	//
	// Unit: entries, default value: 110.
	RouteQuota interface{} `field:"optional" json:"routeQuota" yaml:"routeQuota"`
}

