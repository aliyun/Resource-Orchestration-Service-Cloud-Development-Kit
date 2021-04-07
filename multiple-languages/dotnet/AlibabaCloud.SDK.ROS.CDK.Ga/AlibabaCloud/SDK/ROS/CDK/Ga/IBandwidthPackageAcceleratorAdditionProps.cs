using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.</summary>
    [JsiiInterface(nativeType: typeof(IBandwidthPackageAcceleratorAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.BandwidthPackageAcceleratorAdditionProps")]
    public interface IBandwidthPackageAcceleratorAdditionProps
    {
        /// <summary>Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth plan.</summary>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AcceleratorId
        {
            get;
        }

        /// <summary>Property bandwidthPackageId: The ID of the bandwidth package to associate.</summary>
        [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BandwidthPackageId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBandwidthPackageAcceleratorAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.BandwidthPackageAcceleratorAdditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IBandwidthPackageAcceleratorAdditionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth plan.</summary>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bandwidthPackageId: The ID of the bandwidth package to associate.</summary>
            [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BandwidthPackageId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
