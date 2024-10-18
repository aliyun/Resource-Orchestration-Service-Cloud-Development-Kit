package alicloudroscdkpvtz


// Properties for defining a `Zone`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zone
type ZoneProps struct {
	// Property zoneName: Zone name.
	ZoneName interface{} `field:"required" json:"zoneName" yaml:"zoneName"`
	// Property dnsGroup: Built-in authority location area.
	//
	// Valid values:
	// - NORMAL_ZONE: Default. normal zone (The parsing response result will be cached, and only back to the built-in authority normal zone if the cache is missed, the effect of parsing changes is affected by TTL time; Cannot use custom line analysis, weight analysis function.
	// - FAST_ZONE: Fast zone (Recommended: directly reply to the parsing request, the parsing delay is the lowest, and the record changes take effect in real time; Support custom line analysis, weight analysis.
	DnsGroup interface{} `field:"optional" json:"dnsGroup" yaml:"dnsGroup"`
	// Property ignoredStackTagKeys: Stack tag keys to ignore.
	IgnoredStackTagKeys interface{} `field:"optional" json:"ignoredStackTagKeys" yaml:"ignoredStackTagKeys"`
	// Property proxyPattern: ZONE: completely hijack the entire zone.
	//
	// RECORD: Incomplete hijacking, recursive resolution agent.
	// Default to ZONE.
	ProxyPattern interface{} `field:"optional" json:"proxyPattern" yaml:"proxyPattern"`
	// Property remark: 50 characters at most.
	//
	// It can only contain numbers, Chinese, English and special characters: "_-,.，。".
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosZone_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

