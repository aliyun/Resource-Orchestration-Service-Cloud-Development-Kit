package alicloudroscdkram


type RosRole_ConditionProperty struct {
	Bool interface{} `field:"optional" json:"bool" yaml:"bool"`
	DateEquals interface{} `field:"optional" json:"dateEquals" yaml:"dateEquals"`
	DateGreaterThan interface{} `field:"optional" json:"dateGreaterThan" yaml:"dateGreaterThan"`
	DateGreaterThanEquals interface{} `field:"optional" json:"dateGreaterThanEquals" yaml:"dateGreaterThanEquals"`
	DateLessThan interface{} `field:"optional" json:"dateLessThan" yaml:"dateLessThan"`
	DateLessThanEquals interface{} `field:"optional" json:"dateLessThanEquals" yaml:"dateLessThanEquals"`
	DateNotEquals interface{} `field:"optional" json:"dateNotEquals" yaml:"dateNotEquals"`
	IpAddress interface{} `field:"optional" json:"ipAddress" yaml:"ipAddress"`
	NotIpAddress interface{} `field:"optional" json:"notIpAddress" yaml:"notIpAddress"`
	NumericEquals interface{} `field:"optional" json:"numericEquals" yaml:"numericEquals"`
	NumericGreaterThan interface{} `field:"optional" json:"numericGreaterThan" yaml:"numericGreaterThan"`
	NumericGreaterThanEquals interface{} `field:"optional" json:"numericGreaterThanEquals" yaml:"numericGreaterThanEquals"`
	NumericLessThan interface{} `field:"optional" json:"numericLessThan" yaml:"numericLessThan"`
	NumericLessThanEquals interface{} `field:"optional" json:"numericLessThanEquals" yaml:"numericLessThanEquals"`
	NumericNotEquals interface{} `field:"optional" json:"numericNotEquals" yaml:"numericNotEquals"`
	StringEquals interface{} `field:"optional" json:"stringEquals" yaml:"stringEquals"`
	StringEqualsIgnoreCase interface{} `field:"optional" json:"stringEqualsIgnoreCase" yaml:"stringEqualsIgnoreCase"`
	StringLike interface{} `field:"optional" json:"stringLike" yaml:"stringLike"`
	StringNotEquals interface{} `field:"optional" json:"stringNotEquals" yaml:"stringNotEquals"`
	StringNotEqualsIgnoreCase interface{} `field:"optional" json:"stringNotEqualsIgnoreCase" yaml:"stringNotEqualsIgnoreCase"`
	StringNotLike interface{} `field:"optional" json:"stringNotLike" yaml:"stringNotLike"`
}

