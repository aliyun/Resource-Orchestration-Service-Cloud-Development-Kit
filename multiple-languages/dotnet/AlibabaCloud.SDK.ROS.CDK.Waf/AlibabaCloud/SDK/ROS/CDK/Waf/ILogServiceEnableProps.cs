using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    /// <summary>Properties for defining a `LogServiceEnable`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-logserviceenable
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ILogServiceEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.LogServiceEnableProps")]
    public interface ILogServiceEnableProps
    {
        /// <summary>Property domain: The domain name that is added to WAF.</summary>
        [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Domain
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the WAF instance.</summary>
        /// <remarks>
        /// You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `LogServiceEnable`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-logserviceenable
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ILogServiceEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.LogServiceEnableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Waf.ILogServiceEnableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domain: The domain name that is added to WAF.</summary>
            [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Domain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The ID of the WAF instance.</summary>
            /// <remarks>
            /// You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
