package alicloudroscdkmongodb


type RosInstance_SSLOptionsProperty struct {
	SslAction interface{} `field:"required" json:"sslAction" yaml:"sslAction"`
	ForceEncryption interface{} `field:"optional" json:"forceEncryption" yaml:"forceEncryption"`
	SwitchMode interface{} `field:"optional" json:"switchMode" yaml:"switchMode"`
}

