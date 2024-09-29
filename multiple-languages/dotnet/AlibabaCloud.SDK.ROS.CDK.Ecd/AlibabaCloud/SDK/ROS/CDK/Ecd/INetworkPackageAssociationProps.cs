using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecd
{
    /// <summary>Properties for defining a `NetworkPackageAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackageassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INetworkPackageAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.NetworkPackageAssociationProps")]
    public interface INetworkPackageAssociationProps
    {
        /// <summary>Property networkPackageId: The ID of the Internet access package.</summary>
        [JsiiProperty(name: "networkPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkPackageId
        {
            get;
        }

        /// <summary>Property officeSiteId: The ID of the workspace.</summary>
        [JsiiProperty(name: "officeSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OfficeSiteId
        {
            get;
        }

        /// <summary>Properties for defining a `NetworkPackageAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackageassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INetworkPackageAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.NetworkPackageAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecd.INetworkPackageAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property networkPackageId: The ID of the Internet access package.</summary>
            [JsiiProperty(name: "networkPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkPackageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property officeSiteId: The ID of the workspace.</summary>
            [JsiiProperty(name: "officeSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OfficeSiteId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
