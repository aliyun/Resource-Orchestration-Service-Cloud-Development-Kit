using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `BasicAccelerateIp`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBasicAccelerateIpProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.BasicAccelerateIpProps")]
    public interface IBasicAccelerateIpProps
    {
        /// <summary>Property acceleratorId: The ID of the basic GA instance.</summary>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AcceleratorId
        {
            get;
        }

        /// <summary>Property ipSetId: The ID of the acceleration region.</summary>
        [JsiiProperty(name: "ipSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IpSetId
        {
            get;
        }

        /// <summary>Properties for defining a `BasicAccelerateIp`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBasicAccelerateIpProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.BasicAccelerateIpProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IBasicAccelerateIpProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property acceleratorId: The ID of the basic GA instance.</summary>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ipSetId: The ID of the acceleration region.</summary>
            [JsiiProperty(name: "ipSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IpSetId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
