package alicloudroscdkalb


type RosServerGroup_StickySessionConfigProperty struct {
	Cookie interface{} `field:"optional" json:"cookie" yaml:"cookie"`
	CookieTimeout interface{} `field:"optional" json:"cookieTimeout" yaml:"cookieTimeout"`
	StickySessionEnabled interface{} `field:"optional" json:"stickySessionEnabled" yaml:"stickySessionEnabled"`
	StickySessionType interface{} `field:"optional" json:"stickySessionType" yaml:"stickySessionType"`
}

