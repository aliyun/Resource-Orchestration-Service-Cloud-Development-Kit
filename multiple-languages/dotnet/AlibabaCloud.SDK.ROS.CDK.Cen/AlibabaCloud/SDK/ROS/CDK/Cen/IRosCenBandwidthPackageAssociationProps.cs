using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::CenBandwidthPackageAssociation`.</summary>
    [JsiiInterface(nativeType: typeof(IRosCenBandwidthPackageAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosCenBandwidthPackageAssociationProps")]
    public interface IRosCenBandwidthPackageAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenBandwidthPackageId: The ID of the bandwidth package.
        /// </remarks>
        [JsiiProperty(name: "cenBandwidthPackageId", typeJson: "{\"primitive\":\"string\"}")]
        string CenBandwidthPackageId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the CEN instance.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
        string CenId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CEN::CenBandwidthPackageAssociation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosCenBandwidthPackageAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosCenBandwidthPackageAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosCenBandwidthPackageAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cenBandwidthPackageId: The ID of the bandwidth package.
            /// </remarks>
            [JsiiProperty(name: "cenBandwidthPackageId", typeJson: "{\"primitive\":\"string\"}")]
            public string CenBandwidthPackageId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cenId: The ID of the CEN instance.
            /// </remarks>
            [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
            public string CenId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
