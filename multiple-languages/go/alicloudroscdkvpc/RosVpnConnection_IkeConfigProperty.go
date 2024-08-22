package alicloudroscdkvpc


type RosVpnConnection_IkeConfigProperty struct {
	IkeAuthAlg interface{} `field:"optional" json:"ikeAuthAlg" yaml:"ikeAuthAlg"`
	IkeEncAlg interface{} `field:"optional" json:"ikeEncAlg" yaml:"ikeEncAlg"`
	IkeLifetime interface{} `field:"optional" json:"ikeLifetime" yaml:"ikeLifetime"`
	IkeMode interface{} `field:"optional" json:"ikeMode" yaml:"ikeMode"`
	IkePfs interface{} `field:"optional" json:"ikePfs" yaml:"ikePfs"`
	IkeVersion interface{} `field:"optional" json:"ikeVersion" yaml:"ikeVersion"`
	LocalId interface{} `field:"optional" json:"localId" yaml:"localId"`
	Psk interface{} `field:"optional" json:"psk" yaml:"psk"`
	RemoteId interface{} `field:"optional" json:"remoteId" yaml:"remoteId"`
}

