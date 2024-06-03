using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `RosBasicAccelerateIp`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBasicAccelerateIpProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosBasicAccelerateIpProps")]
    public interface IRosBasicAccelerateIpProps
    {
        /// <remarks>
        /// <strong>Property</strong>: acceleratorId: The ID of the basic GA instance.
        /// </remarks>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AcceleratorId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipSetId: The ID of the acceleration region.
        /// </remarks>
        [JsiiProperty(name: "ipSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IpSetId
        {
            get;
        }

        /// <summary>Properties for defining a `RosBasicAccelerateIp`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBasicAccelerateIpProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosBasicAccelerateIpProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IRosBasicAccelerateIpProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: acceleratorId: The ID of the basic GA instance.
            /// </remarks>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipSetId: The ID of the acceleration region.
            /// </remarks>
            [JsiiProperty(name: "ipSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IpSetId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
