using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `RosCenBandwidthPackageAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackageassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCenBandwidthPackageAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosCenBandwidthPackageAssociationProps")]
    public interface IRosCenBandwidthPackageAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenBandwidthPackageId: The ID of the bandwidth package.
        /// </remarks>
        [JsiiProperty(name: "cenBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenBandwidthPackageId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the CEN instance.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <summary>Properties for defining a `RosCenBandwidthPackageAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackageassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCenBandwidthPackageAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosCenBandwidthPackageAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosCenBandwidthPackageAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cenBandwidthPackageId: The ID of the bandwidth package.
            /// </remarks>
            [JsiiProperty(name: "cenBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenBandwidthPackageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cenId: The ID of the CEN instance.
            /// </remarks>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
