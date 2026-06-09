package alicloudroscdkeventbridge


type RosConnection_AuthParametersProperty struct {
	ApiKeyAuthParameters interface{} `field:"optional" json:"apiKeyAuthParameters" yaml:"apiKeyAuthParameters"`
	AuthorizationType interface{} `field:"optional" json:"authorizationType" yaml:"authorizationType"`
	BasicAuthParameters interface{} `field:"optional" json:"basicAuthParameters" yaml:"basicAuthParameters"`
	OauthParameters interface{} `field:"optional" json:"oauthParameters" yaml:"oauthParameters"`
}

