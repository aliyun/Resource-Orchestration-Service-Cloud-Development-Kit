using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosVpcPeerConnection`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcpeerconnection
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVpcPeerConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpcPeerConnectionProps")]
    public interface IRosVpcPeerConnectionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: acceptingVpcId: The ID of the acceptor VPC.
        /// </remarks>
        [JsiiProperty(name: "acceptingVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AcceptingVpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the requester VPC.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: acceptingAliUid: The ID of the Alibaba Cloud account to which the acceptor VPC belongs.
        /// To create a VPC peering connection within your Alibaba Cloud account, enter the ID
        /// of your Alibaba Cloud account.
        /// To create a VPC peering connection between your Alibaba Cloud account and another
        /// Alibaba Cloud account, enter the ID of the peer Alibaba Cloud account.
        /// Note If the acceptor VPC belongs to a Resource Access Management (RAM) user, you must set
        /// the value of AcceptingAliUid to the ID of the corresponding Alibaba Cloud account.
        /// Default current account ID.
        /// </remarks>
        [JsiiProperty(name: "acceptingAliUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AcceptingAliUid
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: acceptingRegionId: The region ID of the acceptor VPC of the VPC peering connection that you want to create.
        /// To create an intra-region VPC peering connection, enter a region ID that is the same
        /// as that of the requester VPC.
        /// To create an inter-region VPC peering connection, enter a region ID that is different
        /// from that of the requester VPC.
        /// Default current region.
        /// </remarks>
        [JsiiProperty(name: "acceptingRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AcceptingRegionId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deletionForce: Specifies whether to forcefully delete the VPC peering connection. Valid values:false (default): notrue: yes If you forcefully delete the VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
        /// </remarks>
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionForce
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the VPC peering connection.
        /// The description must be 2 to 256 characters in length. It must start with a letter
        /// but cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the VPC peering connection.
        /// The name must be 2 to 128 characters in length and can contain digits, underscores
        /// (_), and hyphens (-). It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosVpcPeerConnection`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcpeerconnection
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVpcPeerConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosVpcPeerConnectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosVpcPeerConnectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: acceptingVpcId: The ID of the acceptor VPC.
            /// </remarks>
            [JsiiProperty(name: "acceptingVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AcceptingVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the requester VPC.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: acceptingAliUid: The ID of the Alibaba Cloud account to which the acceptor VPC belongs.
            /// To create a VPC peering connection within your Alibaba Cloud account, enter the ID
            /// of your Alibaba Cloud account.
            /// To create a VPC peering connection between your Alibaba Cloud account and another
            /// Alibaba Cloud account, enter the ID of the peer Alibaba Cloud account.
            /// Note If the acceptor VPC belongs to a Resource Access Management (RAM) user, you must set
            /// the value of AcceptingAliUid to the ID of the corresponding Alibaba Cloud account.
            /// Default current account ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "acceptingAliUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AcceptingAliUid
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: acceptingRegionId: The region ID of the acceptor VPC of the VPC peering connection that you want to create.
            /// To create an intra-region VPC peering connection, enter a region ID that is the same
            /// as that of the requester VPC.
            /// To create an inter-region VPC peering connection, enter a region ID that is different
            /// from that of the requester VPC.
            /// Default current region.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "acceptingRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AcceptingRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deletionForce: Specifies whether to forcefully delete the VPC peering connection. Valid values:false (default): notrue: yes If you forcefully delete the VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionForce
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the VPC peering connection.
            /// The description must be 2 to 256 characters in length. It must start with a letter
            /// but cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the VPC peering connection.
            /// The name must be 2 to 128 characters in length and can contain digits, underscores
            /// (_), and hyphens (-). It must start with a letter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
