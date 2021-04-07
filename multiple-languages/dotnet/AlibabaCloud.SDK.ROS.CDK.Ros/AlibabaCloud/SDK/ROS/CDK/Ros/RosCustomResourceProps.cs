using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ROS::CustomResource`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ros.RosCustomResourceProps")]
    public class RosCustomResourceProps : AlibabaCloud.SDK.ROS.CDK.Ros.IRosCustomResourceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: serviceToken: The service token that was given to the template developer by the service provider to access the service.
        /// Allowed values:
        /// - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>
        /// - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name>
        /// - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name>
        /// - HTTP&HTTPS: web[options]:<url>
        /// Two options are supported:
        /// - sync: sync HTTP&HTTPS request.
        /// - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
        /// Examples:
        /// - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
        /// - acs:mns:cn-hangzhou:123456789:queues/test-queue
        /// - acs:mns:cn-hangzhou:123456789:/queues/test-queue
        /// - acs:mns:cn-hangzhou:123456789:topics/test-topic
        /// - acs:mns:cn-hangzhou:123456789:/topics/test-topic
        /// - web:https://abc.com
        /// - web[sync]:http://abc.com
        /// - web[sync,idempotent]:https://abc.com
        /// </remarks>
        [JsiiProperty(name: "serviceToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ServiceToken
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: timeout: Timeout seconds before service provider responses.
        /// It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
        /// Timeout seconds are always 10 for sync HTTP&HTTPS request.
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Timeout
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: httpConfig: Config for HTTP&HTTPS service provider.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "httpConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosCustomResource.HttpConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? HttpConfig
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: parameters: Parameters to be passed to service provider.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true, isOverride: true)]
        public object? Parameters
        {
            get;
            set;
        }
    }
}
