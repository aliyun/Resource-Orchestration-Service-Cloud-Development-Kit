package alicloudroscdkros


// Properties for defining a `CustomResource`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-customresource
type CustomResourceProps struct {
	// Property serviceToken: The service token that was given to the template developer by the service provider to access the service.
	//
	// Allowed values:
	// - Function Compute: acs:fc:<region_id>:<account_id>:services\/<service_name>\/functions\/<function_name>
	// - MNS Queue: acs:mns:<region_id>:<account_id>:queues\/<queue_name> or acs:mns:<region_id>:<account_id>:\/queues\/<queue_name>
	// - MNS Topic: acs:mns:<region_id>:<account_id>:topics\/<topic_name> or acs:mns:<region_id>:<account_id>:\/topics\/<topic_name>
	// - HTTP&HTTPS: web[options]:<url>
	//    Two options are supported:
	//    - sync: sync HTTP&HTTPS request.
	//    - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
	// Examples:
	//    - acs:fc:cn-hangzhou:123456789:services\/test-service\/functions\/test-function
	//    - acs:mns:cn-hangzhou:123456789:queues\/test-queue
	//    - acs:mns:cn-hangzhou:123456789:\/queues\/test-queue
	//    - acs:mns:cn-hangzhou:123456789:topics\/test-topic
	//    - acs:mns:cn-hangzhou:123456789:\/topics\/test-topic
	//    - web:https:\/\/abc.com
	//    - web[sync]:http:\/\/abc.com
	//    - web[sync,idempotent]:https:\/\/abc.com
	ServiceToken interface{} `field:"required" json:"serviceToken" yaml:"serviceToken"`
	// Property timeout: Timeout seconds before service provider responses.
	//
	// It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
	// Timeout seconds are always 10 for sync HTTP&HTTPS request.
	Timeout interface{} `field:"required" json:"timeout" yaml:"timeout"`
	// Property httpConfig: Config for HTTP&HTTPS service provider.
	HttpConfig interface{} `field:"optional" json:"httpConfig" yaml:"httpConfig"`
	// Property parameters: Parameters to be passed to service provider.
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
}

