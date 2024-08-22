package alicloudroscdkslb


type RosListener_PersistenceProperty struct {
	Cookie interface{} `field:"optional" json:"cookie" yaml:"cookie"`
	CookieTimeout interface{} `field:"optional" json:"cookieTimeout" yaml:"cookieTimeout"`
	PersistenceTimeout interface{} `field:"optional" json:"persistenceTimeout" yaml:"persistenceTimeout"`
	StickySession interface{} `field:"optional" json:"stickySession" yaml:"stickySession"`
	StickySessionType interface{} `field:"optional" json:"stickySessionType" yaml:"stickySessionType"`
	XForwardedFor interface{} `field:"optional" json:"xForwardedFor" yaml:"xForwardedFor"`
	XForwardedForClientSrcPort interface{} `field:"optional" json:"xForwardedForClientSrcPort" yaml:"xForwardedForClientSrcPort"`
	XForwardedForProto interface{} `field:"optional" json:"xForwardedForProto" yaml:"xForwardedForProto"`
	XForwardedForSlbid interface{} `field:"optional" json:"xForwardedForSlbid" yaml:"xForwardedForSlbid"`
	XForwardedForSlbip interface{} `field:"optional" json:"xForwardedForSlbip" yaml:"xForwardedForSlbip"`
	XForwardedForSlbport interface{} `field:"optional" json:"xForwardedForSlbport" yaml:"xForwardedForSlbport"`
}

