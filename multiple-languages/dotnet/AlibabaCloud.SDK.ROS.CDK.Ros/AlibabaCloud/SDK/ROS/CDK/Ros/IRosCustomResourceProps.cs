using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Properties for defining a `RosCustomResource`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-customresource
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCustomResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosCustomResourceProps")]
    public interface IRosCustomResourceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: serviceToken: The service token that was given to the template developer by the service provider to access the service.
        /// Allowed values:
        /// - Function Compute: acs:fc:<region_id>:<account_id>:services\/<service_name>\/functions\/<function_name>
        /// - Function Compute 3: acs:fc:<region_id>:<account_id>:functions\/<function_name>
        /// - MNS Queue: acs:mns:<region_id>:<account_id>:queues\/<queue_name> or acs:mns:<region_id>:<account_id>:\/queues\/<queue_name>
        /// - MNS Topic: acs:mns:<region_id>:<account_id>:topics\/<topic_name> or acs:mns:<region_id>:<account_id>:\/topics\/<topic_name>
        /// - HTTP&HTTPS: web[options]:<url>
        /// Two options are supported:
        /// - sync: sync HTTP&HTTPS request.
        /// - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
        /// Examples:
        /// - acs:fc:cn-hangzhou:123456789:services\/test-service\/functions\/test-function
        /// - acs:fc:cn-hangzhou:123456789:functions\/test-function
        /// - acs:mns:cn-hangzhou:123456789:queues\/test-queue
        /// - acs:mns:cn-hangzhou:123456789:\/queues\/test-queue
        /// - acs:mns:cn-hangzhou:123456789:topics\/test-topic
        /// - acs:mns:cn-hangzhou:123456789:\/topics\/test-topic
        /// - web:https:\/\/abc.com
        /// - web[sync]:http:\/\/abc.com
        /// - web[sync,idempotent]:https:\/\/abc.com
        /// </remarks>
        [JsiiProperty(name: "serviceToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceToken
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: timeout: Timeout seconds before service provider responses.
        /// It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
        /// Timeout seconds are always 10 for sync HTTP&HTTPS request.
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Timeout
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: httpConfig: Config for HTTP&HTTPS service provider.
        /// </remarks>
        [JsiiProperty(name: "httpConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosCustomResource.HttpConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HttpConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: parameters: Parameters to be passed to service provider.
        /// </remarks>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Parameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosCustomResource`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-customresource
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCustomResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosCustomResourceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.IRosCustomResourceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceToken: The service token that was given to the template developer by the service provider to access the service.
            /// Allowed values:
            /// - Function Compute: acs:fc:<region_id>:<account_id>:services\/<service_name>\/functions\/<function_name>
            /// - Function Compute 3: acs:fc:<region_id>:<account_id>:functions\/<function_name>
            /// - MNS Queue: acs:mns:<region_id>:<account_id>:queues\/<queue_name> or acs:mns:<region_id>:<account_id>:\/queues\/<queue_name>
            /// - MNS Topic: acs:mns:<region_id>:<account_id>:topics\/<topic_name> or acs:mns:<region_id>:<account_id>:\/topics\/<topic_name>
            /// - HTTP&HTTPS: web[options]:<url>
            /// Two options are supported:
            /// - sync: sync HTTP&HTTPS request.
            /// - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
            /// Examples:
            /// - acs:fc:cn-hangzhou:123456789:services\/test-service\/functions\/test-function
            /// - acs:fc:cn-hangzhou:123456789:functions\/test-function
            /// - acs:mns:cn-hangzhou:123456789:queues\/test-queue
            /// - acs:mns:cn-hangzhou:123456789:\/queues\/test-queue
            /// - acs:mns:cn-hangzhou:123456789:topics\/test-topic
            /// - acs:mns:cn-hangzhou:123456789:\/topics\/test-topic
            /// - web:https:\/\/abc.com
            /// - web[sync]:http:\/\/abc.com
            /// - web[sync,idempotent]:https:\/\/abc.com
            /// </remarks>
            [JsiiProperty(name: "serviceToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceToken
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: timeout: Timeout seconds before service provider responses.
            /// It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
            /// Timeout seconds are always 10 for sync HTTP&HTTPS request.
            /// </remarks>
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Timeout
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: httpConfig: Config for HTTP&HTTPS service provider.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosCustomResource.HttpConfigProperty\"}]}}", isOptional: true)]
            public object? HttpConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: parameters: Parameters to be passed to service provider.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Parameters
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
