using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `ALIYUN::GA::IpSets`.</summary>
    [JsiiInterface(nativeType: typeof(IIpSetsProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.IpSetsProps")]
    public interface IIpSetsProps
    {
        /// <summary>Property accelerateRegion:.</summary>
        [JsiiProperty(name: "accelerateRegion", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosIpSets.AccelerateRegionProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object AccelerateRegion
        {
            get;
        }

        /// <summary>Property acceleratorId: The ID of the GA instance.</summary>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AcceleratorId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::GA::IpSets`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IIpSetsProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.IpSetsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IIpSetsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accelerateRegion:.</summary>
            [JsiiProperty(name: "accelerateRegion", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ga.RosIpSets.AccelerateRegionProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object AccelerateRegion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property acceleratorId: The ID of the GA instance.</summary>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
