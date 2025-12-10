package alicloudroscdkesa


// Properties for defining a `Kv`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kv
type KvProps struct {
	// Property key: The key name.
	//
	// The name can be up to 512 characters in length and cannot contain spaces or backslashes (\).
	Key interface{} `field:"required" json:"key" yaml:"key"`
	// Property namespace: The name specified when calling [CreatevNamespace] https:\/\/help.aliyun.com\/document_detail\/2850317.html.
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	// Property value: The content of the key.
	//
	// If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
	Value interface{} `field:"required" json:"value" yaml:"value"`
	// Property expiration: The content of the key, which can be up to 2 MB (2 × 1000 × 1000).
	//
	// If the content is larger than 2 MB, call [PutKvWithHighCapacity] https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850486.html.
	Expiration interface{} `field:"optional" json:"expiration" yaml:"expiration"`
	// Property expirationTtl: The time when the key-value pair expires, which cannot be earlier than the current time.
	//
	// The value is a timestamp in seconds. If you specify both Expiration and ExpirationTtl, only ExpirationTtl takes effect.
	ExpirationTtl interface{} `field:"optional" json:"expirationTtl" yaml:"expirationTtl"`
}

