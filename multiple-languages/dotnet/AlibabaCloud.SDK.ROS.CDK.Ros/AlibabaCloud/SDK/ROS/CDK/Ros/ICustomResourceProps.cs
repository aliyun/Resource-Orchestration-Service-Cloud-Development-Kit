using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Properties for defining a `ALIYUN::ROS::CustomResource`.</summary>
    [JsiiInterface(nativeType: typeof(ICustomResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.CustomResourceProps")]
    public interface ICustomResourceProps
    {
        /// <summary>Property serviceToken: The service token that was given to the template developer by the service provider to access the service.</summary>
        /// <remarks>
        /// Allowed values:
        /// 
        /// <list type="bullet">
        /// <description>Function Compute: acs:fc:&lt;region_id&gt;:&lt;account_id&gt;:services/&lt;service_name&gt;/functions/&lt;function_name&gt;</description>
        /// <description>MNS Queue: acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:queues/&lt;queue_name&gt; or acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:/queues/&lt;queue_name&gt;</description>
        /// <description>MNS Topic: acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:topics/&lt;topic_name&gt; or acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:/topics/&lt;topic_name&gt;</description>
        /// <description>HTTP&amp;HTTPS: web[options]:<url xmlns="http://www.w3.org/1999/xhtml"></url>
        /// Two options are supported:
        /// 
        /// <list type="bullet">
        /// <description>sync: sync HTTP&amp;HTTPS request.</description>
        /// <description>idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
        /// Examples:</description>
        /// <description>acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function</description>
        /// <description>acs:mns:cn-hangzhou:123456789:queues/test-queue</description>
        /// <description>acs:mns:cn-hangzhou:123456789:/queues/test-queue</description>
        /// <description>acs:mns:cn-hangzhou:123456789:topics/test-topic</description>
        /// <description>acs:mns:cn-hangzhou:123456789:/topics/test-topic</description>
        /// <description>web:https://abc.com</description>
        /// <description>web[sync]:http://abc.com</description>
        /// <description>web[sync,idempotent]:https://abc.com</description>
        /// </list></description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "serviceToken", typeJson: "{\"primitive\":\"string\"}")]
        string ServiceToken
        {
            get;
        }

        /// <summary>Property timeout: Timeout seconds before service provider responses.</summary>
        /// <remarks>
        /// It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&amp;HTTPS request.
        /// Timeout seconds are always 10 for sync HTTP&amp;HTTPS request.
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}")]
        double Timeout
        {
            get;
        }

        /// <summary>Property parameters: Parameters to be passed to service provider.</summary>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Parameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ROS::CustomResource`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICustomResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.CustomResourceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.ICustomResourceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property serviceToken: The service token that was given to the template developer by the service provider to access the service.</summary>
            /// <remarks>
            /// Allowed values:
            /// 
            /// <list type="bullet">
            /// <description>Function Compute: acs:fc:&lt;region_id&gt;:&lt;account_id&gt;:services/&lt;service_name&gt;/functions/&lt;function_name&gt;</description>
            /// <description>MNS Queue: acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:queues/&lt;queue_name&gt; or acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:/queues/&lt;queue_name&gt;</description>
            /// <description>MNS Topic: acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:topics/&lt;topic_name&gt; or acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:/topics/&lt;topic_name&gt;</description>
            /// <description>HTTP&amp;HTTPS: web[options]:<url xmlns="http://www.w3.org/1999/xhtml"></url>
            /// Two options are supported:
            /// 
            /// <list type="bullet">
            /// <description>sync: sync HTTP&amp;HTTPS request.</description>
            /// <description>idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
            /// Examples:</description>
            /// <description>acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function</description>
            /// <description>acs:mns:cn-hangzhou:123456789:queues/test-queue</description>
            /// <description>acs:mns:cn-hangzhou:123456789:/queues/test-queue</description>
            /// <description>acs:mns:cn-hangzhou:123456789:topics/test-topic</description>
            /// <description>acs:mns:cn-hangzhou:123456789:/topics/test-topic</description>
            /// <description>web:https://abc.com</description>
            /// <description>web[sync]:http://abc.com</description>
            /// <description>web[sync,idempotent]:https://abc.com</description>
            /// </list></description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "serviceToken", typeJson: "{\"primitive\":\"string\"}")]
            public string ServiceToken
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property timeout: Timeout seconds before service provider responses.</summary>
            /// <remarks>
            /// It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&amp;HTTPS request.
            /// Timeout seconds are always 10 for sync HTTP&amp;HTTPS request.
            /// </remarks>
            [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}")]
            public double Timeout
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property parameters: Parameters to be passed to service provider.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Parameters
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
