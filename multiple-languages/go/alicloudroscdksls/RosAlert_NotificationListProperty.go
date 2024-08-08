package alicloudroscdksls


type RosAlert_NotificationListProperty struct {
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Content interface{} `field:"optional" json:"content" yaml:"content"`
	EmailList interface{} `field:"optional" json:"emailList" yaml:"emailList"`
	Headers interface{} `field:"optional" json:"headers" yaml:"headers"`
	Method interface{} `field:"optional" json:"method" yaml:"method"`
	MobileList interface{} `field:"optional" json:"mobileList" yaml:"mobileList"`
	ServiceUri interface{} `field:"optional" json:"serviceUri" yaml:"serviceUri"`
}

