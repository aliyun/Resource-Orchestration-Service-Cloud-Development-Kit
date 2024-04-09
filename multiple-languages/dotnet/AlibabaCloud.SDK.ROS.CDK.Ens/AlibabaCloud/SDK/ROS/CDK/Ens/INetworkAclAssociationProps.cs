using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    /// <summary>Properties for defining a `NetworkAclAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkaclassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INetworkAclAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.NetworkAclAssociationProps")]
    public interface INetworkAclAssociationProps
    {
        /// <summary>Property networkAclId: The ID of the network ACL.</summary>
        [JsiiProperty(name: "networkAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkAclId
        {
            get;
        }

        /// <summary>Property networkIds: The network id which you want to associate the network ACL.</summary>
        [JsiiProperty(name: "networkIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object NetworkIds
        {
            get;
        }

        /// <summary>Properties for defining a `NetworkAclAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkaclassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INetworkAclAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.NetworkAclAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ens.INetworkAclAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property networkAclId: The ID of the network ACL.</summary>
            [JsiiProperty(name: "networkAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkAclId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property networkIds: The network id which you want to associate the network ACL.</summary>
            [JsiiProperty(name: "networkIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object NetworkIds
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
