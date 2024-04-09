using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga.Datasource
{
    /// <summary>Properties for defining a `RosBandwidthPackage`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackage
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.datasource.RosBandwidthPackageProps")]
    public interface IRosBandwidthPackageProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bandwidthPackageId: The Resource ID of the bandwidth.
        /// </remarks>
        [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BandwidthPackageId
        {
            get;
        }

        /// <summary>Properties for defining a `RosBandwidthPackage`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackage
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.datasource.RosBandwidthPackageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.Datasource.IRosBandwidthPackageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidthPackageId: The Resource ID of the bandwidth.
            /// </remarks>
            [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BandwidthPackageId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
