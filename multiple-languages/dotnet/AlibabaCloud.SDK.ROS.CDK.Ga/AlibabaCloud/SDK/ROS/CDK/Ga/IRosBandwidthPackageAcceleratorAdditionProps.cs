using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.</summary>
    [JsiiInterface(nativeType: typeof(IRosBandwidthPackageAcceleratorAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosBandwidthPackageAcceleratorAdditionProps")]
    public interface IRosBandwidthPackageAcceleratorAdditionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
        /// plan.
        /// </remarks>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"primitive\":\"string\"}")]
        string AcceleratorId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidthPackageId: The ID of the bandwidth package to associate.
        /// </remarks>
        [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"primitive\":\"string\"}")]
        string BandwidthPackageId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosBandwidthPackageAcceleratorAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosBandwidthPackageAcceleratorAdditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IRosBandwidthPackageAcceleratorAdditionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
            /// plan.
            /// </remarks>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"primitive\":\"string\"}")]
            public string AcceleratorId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidthPackageId: The ID of the bandwidth package to associate.
            /// </remarks>
            [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"primitive\":\"string\"}")]
            public string BandwidthPackageId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
