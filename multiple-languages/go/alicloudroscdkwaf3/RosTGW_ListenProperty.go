package alicloudroscdkwaf3


type RosTGW_ListenProperty struct {
	Port interface{} `field:"required" json:"port" yaml:"port"`
	Protocol interface{} `field:"required" json:"protocol" yaml:"protocol"`
	ResourceInstanceId interface{} `field:"required" json:"resourceInstanceId" yaml:"resourceInstanceId"`
	ResourceProduct interface{} `field:"required" json:"resourceProduct" yaml:"resourceProduct"`
	Certificates interface{} `field:"optional" json:"certificates" yaml:"certificates"`
	CipherSuite interface{} `field:"optional" json:"cipherSuite" yaml:"cipherSuite"`
	CustomCiphers interface{} `field:"optional" json:"customCiphers" yaml:"customCiphers"`
	EnableTlSv3 interface{} `field:"optional" json:"enableTlSv3" yaml:"enableTlSv3"`
	Http2Enabled interface{} `field:"optional" json:"http2Enabled" yaml:"http2Enabled"`
	TlsVersion interface{} `field:"optional" json:"tlsVersion" yaml:"tlsVersion"`
}

