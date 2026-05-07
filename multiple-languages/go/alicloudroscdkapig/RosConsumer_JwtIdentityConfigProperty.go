package alicloudroscdkapig


type RosConsumer_JwtIdentityConfigProperty struct {
	Jwks interface{} `field:"optional" json:"jwks" yaml:"jwks"`
	JwtPayloadConfig interface{} `field:"optional" json:"jwtPayloadConfig" yaml:"jwtPayloadConfig"`
	JwtTokenConfig interface{} `field:"optional" json:"jwtTokenConfig" yaml:"jwtTokenConfig"`
	SecretType interface{} `field:"optional" json:"secretType" yaml:"secretType"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

