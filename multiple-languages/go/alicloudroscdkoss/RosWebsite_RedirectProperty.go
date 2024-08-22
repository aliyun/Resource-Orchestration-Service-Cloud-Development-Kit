package alicloudroscdkoss


type RosWebsite_RedirectProperty struct {
	RedirectType interface{} `field:"required" json:"redirectType" yaml:"redirectType"`
	EnableReplacePrefix interface{} `field:"optional" json:"enableReplacePrefix" yaml:"enableReplacePrefix"`
	HostName interface{} `field:"optional" json:"hostName" yaml:"hostName"`
	HttpRedirectCode interface{} `field:"optional" json:"httpRedirectCode" yaml:"httpRedirectCode"`
	MirrorCheckMd5 interface{} `field:"optional" json:"mirrorCheckMd5" yaml:"mirrorCheckMd5"`
	MirrorFollowRedirect interface{} `field:"optional" json:"mirrorFollowRedirect" yaml:"mirrorFollowRedirect"`
	MirrorHeaders interface{} `field:"optional" json:"mirrorHeaders" yaml:"mirrorHeaders"`
	MirrorPassQueryString interface{} `field:"optional" json:"mirrorPassQueryString" yaml:"mirrorPassQueryString"`
	MirrorUrl interface{} `field:"optional" json:"mirrorUrl" yaml:"mirrorUrl"`
	PassQueryString interface{} `field:"optional" json:"passQueryString" yaml:"passQueryString"`
	Protocol interface{} `field:"optional" json:"protocol" yaml:"protocol"`
	ReplaceKeyPrefixWith interface{} `field:"optional" json:"replaceKeyPrefixWith" yaml:"replaceKeyPrefixWith"`
	ReplaceKeyWith interface{} `field:"optional" json:"replaceKeyWith" yaml:"replaceKeyWith"`
}

