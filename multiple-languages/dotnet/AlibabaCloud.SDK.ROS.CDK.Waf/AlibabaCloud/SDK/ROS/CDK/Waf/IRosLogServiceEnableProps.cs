using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    /// <summary>Properties for defining a `RosLogServiceEnable`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-logserviceenable
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosLogServiceEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.RosLogServiceEnableProps")]
    public interface IRosLogServiceEnableProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domain: The domain name that is added to WAF.
        /// </remarks>
        [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Domain
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the WAF instance.
        /// You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `RosLogServiceEnable`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-logserviceenable
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosLogServiceEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-waf.RosLogServiceEnableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Waf.IRosLogServiceEnableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: domain: The domain name that is added to WAF.
            /// </remarks>
            [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Domain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the WAF instance.
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
