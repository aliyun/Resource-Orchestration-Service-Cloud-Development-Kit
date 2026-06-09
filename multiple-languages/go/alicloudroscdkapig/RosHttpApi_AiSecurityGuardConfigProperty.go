package alicloudroscdkapig


type RosHttpApi_AiSecurityGuardConfigProperty struct {
	BufferLimit interface{} `field:"optional" json:"bufferLimit" yaml:"bufferLimit"`
	CheckRequest interface{} `field:"optional" json:"checkRequest" yaml:"checkRequest"`
	CheckRequestImage interface{} `field:"optional" json:"checkRequestImage" yaml:"checkRequestImage"`
	CheckResponse interface{} `field:"optional" json:"checkResponse" yaml:"checkResponse"`
	CheckResponseImage interface{} `field:"optional" json:"checkResponseImage" yaml:"checkResponseImage"`
	ConsumerRequestCheckService interface{} `field:"optional" json:"consumerRequestCheckService" yaml:"consumerRequestCheckService"`
	ConsumerResponseCheckService interface{} `field:"optional" json:"consumerResponseCheckService" yaml:"consumerResponseCheckService"`
	ConsumerRiskLevel interface{} `field:"optional" json:"consumerRiskLevel" yaml:"consumerRiskLevel"`
	PluginStatus interface{} `field:"optional" json:"pluginStatus" yaml:"pluginStatus"`
	RequestCheckService interface{} `field:"optional" json:"requestCheckService" yaml:"requestCheckService"`
	RequestImageCheckService interface{} `field:"optional" json:"requestImageCheckService" yaml:"requestImageCheckService"`
	ResponseCheckService interface{} `field:"optional" json:"responseCheckService" yaml:"responseCheckService"`
	ResponseImageCheckService interface{} `field:"optional" json:"responseImageCheckService" yaml:"responseImageCheckService"`
	RiskAlertLevel interface{} `field:"optional" json:"riskAlertLevel" yaml:"riskAlertLevel"`
	RiskConfig interface{} `field:"optional" json:"riskConfig" yaml:"riskConfig"`
	ServiceAddress interface{} `field:"optional" json:"serviceAddress" yaml:"serviceAddress"`
}

