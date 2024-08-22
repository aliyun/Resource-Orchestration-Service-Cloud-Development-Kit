package alicloudroscdkapigateway


type RosApi_OpenIdConnectConfigProperty struct {
	OpenIdApiType interface{} `field:"required" json:"openIdApiType" yaml:"openIdApiType"`
	IdTokenParamName interface{} `field:"optional" json:"idTokenParamName" yaml:"idTokenParamName"`
	PublicKey interface{} `field:"optional" json:"publicKey" yaml:"publicKey"`
	PublicKeyId interface{} `field:"optional" json:"publicKeyId" yaml:"publicKeyId"`
}

