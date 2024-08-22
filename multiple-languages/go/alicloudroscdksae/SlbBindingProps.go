package alicloudroscdksae


// Properties for defining a `SlbBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-slbbinding
type SlbBindingProps struct {
	// Property appId: Successful application deployment target ID.
	AppId interface{} `field:"required" json:"appId" yaml:"appId"`
	// Property internet: Binding public SLB.
	//
	// For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
	Internet interface{} `field:"optional" json:"internet" yaml:"internet"`
	// Property internetSlbId: Use SLB purchased specified, currently only supports non-shared examples.
	InternetSlbId interface{} `field:"optional" json:"internetSlbId" yaml:"internetSlbId"`
	// Property intranet: Bind private SLB.
	//
	// For example: [{ "port": 80, "targetPort": 8080, "protocol": "TCP"}], shows a container port 8080 through port 80 slb exposed service, the protocol is TCP, the blank is ignored.
	Intranet interface{} `field:"optional" json:"intranet" yaml:"intranet"`
	// Property intranetSlbId: Use SLB purchased specified, currently only supports non-shared examples.
	IntranetSlbId interface{} `field:"optional" json:"intranetSlbId" yaml:"intranetSlbId"`
}

