using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosNetworkAclAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkaclassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNetworkAclAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosNetworkAclAssociationProps")]
    public interface IRosNetworkAclAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: networkAclId: The ID of the network ACL.
        /// </remarks>
        [JsiiProperty(name: "networkAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkAclId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: resources: The list of resources that need to be associated with network ACL.
        /// </remarks>
        [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNetworkAclAssociation.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Resources
        {
            get;
        }

        /// <summary>Properties for defining a `RosNetworkAclAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-networkaclassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNetworkAclAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosNetworkAclAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosNetworkAclAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: networkAclId: The ID of the network ACL.
            /// </remarks>
            [JsiiProperty(name: "networkAclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkAclId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: resources: The list of resources that need to be associated with network ACL.
            /// </remarks>
            [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNetworkAclAssociation.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Resources
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
