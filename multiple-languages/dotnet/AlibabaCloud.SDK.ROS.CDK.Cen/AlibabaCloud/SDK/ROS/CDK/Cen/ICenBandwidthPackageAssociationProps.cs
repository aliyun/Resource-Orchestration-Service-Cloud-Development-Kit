using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::CenBandwidthPackageAssociation`.</summary>
    [JsiiInterface(nativeType: typeof(ICenBandwidthPackageAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.CenBandwidthPackageAssociationProps")]
    public interface ICenBandwidthPackageAssociationProps
    {
        /// <summary>Property cenBandwidthPackageId: The ID of the bandwidth package.</summary>
        [JsiiProperty(name: "cenBandwidthPackageId", typeJson: "{\"primitive\":\"string\"}")]
        string CenBandwidthPackageId
        {
            get;
        }

        /// <summary>Property cenId: The ID of the CEN instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
        string CenId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CEN::CenBandwidthPackageAssociation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICenBandwidthPackageAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.CenBandwidthPackageAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ICenBandwidthPackageAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cenBandwidthPackageId: The ID of the bandwidth package.</summary>
            [JsiiProperty(name: "cenBandwidthPackageId", typeJson: "{\"primitive\":\"string\"}")]
            public string CenBandwidthPackageId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property cenId: The ID of the CEN instance.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
            public string CenId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
