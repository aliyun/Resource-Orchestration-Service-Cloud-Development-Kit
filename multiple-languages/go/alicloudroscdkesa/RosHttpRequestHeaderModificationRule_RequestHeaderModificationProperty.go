package alicloudroscdkesa


type RosHttpRequestHeaderModificationRule_RequestHeaderModificationProperty struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Operation interface{} `field:"required" json:"operation" yaml:"operation"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
	Value interface{} `field:"optional" json:"value" yaml:"value"`
}

