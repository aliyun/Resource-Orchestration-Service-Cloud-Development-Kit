package alicloudroscdkmobi


type RosApp_TemplateProperty struct {
	ConnectionsContent interface{} `field:"required" json:"connectionsContent" yaml:"connectionsContent"`
	TemplateId interface{} `field:"required" json:"templateId" yaml:"templateId"`
	ActualParameters interface{} `field:"optional" json:"actualParameters" yaml:"actualParameters"`
}

