package alicloudroscdkthreatdetection


// Properties for defining a `HoneyPot`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot
type HoneyPotProps struct {
	// Property honeypotImageId: The ID of the honeypot image.
	//
	// > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the IDs of images from the **HoneypotImageId** response parameter.
	HoneypotImageId interface{} `field:"required" json:"honeypotImageId" yaml:"honeypotImageId"`
	// Property honeypotImageName: The name of the honeypot image.
	//
	// > You can call the [ListAvailableHoneypot](~~ListAvailableHoneypot~~) operation to query the names of images from the **HoneypotImageName** response parameter.
	HoneypotImageName interface{} `field:"required" json:"honeypotImageName" yaml:"honeypotImageName"`
	// Property honeypotName: The custom name of the honeypot.
	HoneypotName interface{} `field:"required" json:"honeypotName" yaml:"honeypotName"`
	// Property nodeId: The ID of the management node.
	//
	// > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
	NodeId interface{} `field:"required" json:"nodeId" yaml:"nodeId"`
	// Property meta: Honeypot custom configuration.
	//
	// JSON format. Contains the following fields:
	// - **trojan_git**:Git counterplan. Value:
	// - **zip**:Git source package
	// - **web**:.git directory leak
	// - **close**: close
	// - **trojan_git\_addr**:Git anti-control connection address
	// - **Trojan_git.zip**:Git anti-Trojan package
	// - **burp**:Burp counter. Value:
	// - **open**: On
	// - **close**: close
	// - **portrait_option**: traceability configuration. Value:
	// - **false**: Disabled
	// - **true**: Enable.
	Meta interface{} `field:"optional" json:"meta" yaml:"meta"`
}

