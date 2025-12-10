package alicloudroscdkesa


// Properties for defining a `Page`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-page
type PageProps struct {
	// Property contentType: The Content-Type field in the HTTP header.
	//
	// Valid values:
	// text\/html
	// application\/json.
	ContentType interface{} `field:"required" json:"contentType" yaml:"contentType"`
	// Property pageName: The name of the custom response page.
	PageName interface{} `field:"required" json:"pageName" yaml:"pageName"`
	// Property content: The Base64-encoded page content.
	//
	// Example: "PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=", which indicates "hello page".
	Content interface{} `field:"optional" json:"content" yaml:"content"`
	// Property description: The description of the page.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

