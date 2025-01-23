using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `VpnAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(IVpnAttachment), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IVpnAttachment")]
    public interface IVpnAttachment : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute InternetIp: The gateway IP address of the IPsec connection.</summary>
        [JsiiProperty(name: "attrInternetIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetIp
        {
            get;
        }

        /// <summary>Attribute PeerVpnAttachmentConfig: Peer vpc Attachment config.</summary>
        [JsiiProperty(name: "attrPeerVpnAttachmentConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPeerVpnAttachmentConfig
        {
            get;
        }

        /// <summary>Attribute VpnAttachmentId: ID of the IPsec attachment.</summary>
        [JsiiProperty(name: "attrVpnAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpnAttachmentId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.VpnAttachmentProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.IVpnAttachmentProps Props
        {
            get;
        }

        /// <summary>Represents a `VpnAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVpnAttachment), fullyQualifiedName: "@alicloud/ros-cdk-vpc.IVpnAttachment")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IVpnAttachment
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute InternetIp: The gateway IP address of the IPsec connection.</summary>
            [JsiiProperty(name: "attrInternetIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PeerVpnAttachmentConfig: Peer vpc Attachment config.</summary>
            [JsiiProperty(name: "attrPeerVpnAttachmentConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPeerVpnAttachmentConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpnAttachmentId: ID of the IPsec attachment.</summary>
            [JsiiProperty(name: "attrVpnAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpnAttachmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.VpnAttachmentProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.IVpnAttachmentProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.IVpnAttachmentProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
