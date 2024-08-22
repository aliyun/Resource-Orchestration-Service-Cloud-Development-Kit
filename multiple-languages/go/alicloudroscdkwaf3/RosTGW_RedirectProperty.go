package alicloudroscdkwaf3


type RosTGW_RedirectProperty struct {
	Keepalive interface{} `field:"optional" json:"keepalive" yaml:"keepalive"`
	KeepaliveRequests interface{} `field:"optional" json:"keepaliveRequests" yaml:"keepaliveRequests"`
	KeepaliveTimeout interface{} `field:"optional" json:"keepaliveTimeout" yaml:"keepaliveTimeout"`
	ReadTimeout interface{} `field:"optional" json:"readTimeout" yaml:"readTimeout"`
	RequestHeaders interface{} `field:"optional" json:"requestHeaders" yaml:"requestHeaders"`
	WriteTimeout interface{} `field:"optional" json:"writeTimeout" yaml:"writeTimeout"`
	XffHeaderMode interface{} `field:"optional" json:"xffHeaderMode" yaml:"xffHeaderMode"`
	XffHeaders interface{} `field:"optional" json:"xffHeaders" yaml:"xffHeaders"`
	XffProto interface{} `field:"optional" json:"xffProto" yaml:"xffProto"`
}

