using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `CustomResource`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-customresource
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ros.CustomResourceProps")]
    public class CustomResourceProps : AlibabaCloud.SDK.ROS.CDK.Ros.ICustomResourceProps
    {
        private object _serviceToken;

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
        [JsiiProperty(name: "serviceToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ServiceToken
        {
            get => _serviceToken;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _serviceToken = value;
            }
        }

        private object _timeout;

        /// <summary>Property timeout: Timeout seconds before service provider responses.</summary>
        /// <remarks>
        /// It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&amp;HTTPS request.
        /// Timeout seconds are always 10 for sync HTTP&amp;HTTPS request.
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Timeout
        {
            get => _timeout;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _timeout = value;
            }
        }

        private object? _httpConfig;

        /// <summary>Property httpConfig: Config for HTTP&amp;HTTPS service provider.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "httpConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ros.RosCustomResource.HttpConfigProperty\"}]}}", isOptional: true)]
        public object? HttpConfig
        {
            get => _httpConfig;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Ros.RosCustomResource.IHttpConfigProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Ros.RosCustomResource.IHttpConfigProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _httpConfig = value;
            }
        }

        private object? _parameters;

        /// <summary>Property parameters: Parameters to be passed to service provider.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public object? Parameters
        {
            get => _parameters;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case System.Collections.Generic.IDictionary<string, object> cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, System.Collections.Generic.IDictionary<string, object>; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _parameters = value;
            }
        }
    }
}
