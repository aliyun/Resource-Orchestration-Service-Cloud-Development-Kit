using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecd
{
    /// <summary>Properties for defining a `RosNetworkPackageAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackageassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNetworkPackageAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.RosNetworkPackageAssociationProps")]
    public interface IRosNetworkPackageAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: networkPackageId: The ID of the Internet access package.
        /// </remarks>
        [JsiiProperty(name: "networkPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkPackageId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: officeSiteId: The ID of the workspace.
        /// </remarks>
        [JsiiProperty(name: "officeSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OfficeSiteId
        {
            get;
        }

        /// <summary>Properties for defining a `RosNetworkPackageAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackageassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNetworkPackageAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.RosNetworkPackageAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecd.IRosNetworkPackageAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: networkPackageId: The ID of the Internet access package.
            /// </remarks>
            [JsiiProperty(name: "networkPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkPackageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: officeSiteId: The ID of the workspace.
            /// </remarks>
            [JsiiProperty(name: "officeSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OfficeSiteId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
