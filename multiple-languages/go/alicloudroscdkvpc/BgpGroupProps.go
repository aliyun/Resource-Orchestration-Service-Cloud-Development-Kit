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
	// Property ipVersion: The IP version.
	//
	// Valid values:
	// *   IPv4: This is the default value.
	// *   IPv6: IPv6 is supported only if the VBR for which you want to create the BGP
	// group has IPv6 enabled.
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	// Property isFakeAsn: Specifies whether to use a fake ASN.
	//
	// Valid values:
	// *   false (default)
	// *   true
	// >  A router that runs BGP typically belongs to only one AS. If you need to
	// replace an existing AS with a new AS and you cannot immediately modify BGP
	// configurations, you can use fake ASNs to ensure service continuity.
	IsFakeAsn interface{} `field:"optional" json:"isFakeAsn" yaml:"isFakeAsn"`
	// Property localAsn: The custom ASN on the cloud side.
	//
	// Valid values:
	// *   45104
	// *   64512~65534
	// *   4200000000~4294967294
	// >  65025 is reserved by the cloud platform. By default, the system uses 45104 as
	// LocalAsn. If you use custom LocalAsn in multi-line access scenarios, loops in BGP
	// may occur.
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

