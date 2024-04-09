using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga.Datasource
{
    /// <summary>Properties for defining a `BandwidthPackage`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackage
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.datasource.BandwidthPackageProps")]
    public interface IBandwidthPackageProps
    {
        /// <summary>Property bandwidthPackageId: The Resource ID of the bandwidth.</summary>
        [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BandwidthPackageId
        {
            get;
        }

        /// <summary>Properties for defining a `BandwidthPackage`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackage
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBandwidthPackageProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.datasource.BandwidthPackageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.Datasource.IBandwidthPackageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bandwidthPackageId: The Resource ID of the bandwidth.</summary>
            [JsiiProperty(name: "bandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BandwidthPackageId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
