using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen.Datasource
{
    /// <summary>Represents a `TransitRouterPeerAttachments`.</summary>
    [JsiiInterface(nativeType: typeof(ITransitRouterPeerAttachments), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.ITransitRouterPeerAttachments")]
    public interface ITransitRouterPeerAttachments : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute TransitRouterPeerAttachmentIds: The list of The TransitRouterPeerAttachment IDs.</summary>
        [JsiiProperty(name: "attrTransitRouterPeerAttachmentIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterPeerAttachmentIds
        {
            get;
        }

        /// <summary>Attribute TransitRouterPeerAttachments: The information about TransitRouterPeerAttachments.</summary>
        [JsiiProperty(name: "attrTransitRouterPeerAttachments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTransitRouterPeerAttachments
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.datasource.TransitRouterPeerAttachmentsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ITransitRouterPeerAttachmentsProps Props
        {
            get;
        }

        /// <summary>Represents a `TransitRouterPeerAttachments`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterPeerAttachments), fullyQualifiedName: "@alicloud/ros-cdk-cen.datasource.ITransitRouterPeerAttachments")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ITransitRouterPeerAttachments
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute TransitRouterPeerAttachmentIds: The list of The TransitRouterPeerAttachment IDs.</summary>
            [JsiiProperty(name: "attrTransitRouterPeerAttachmentIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterPeerAttachmentIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TransitRouterPeerAttachments: The information about TransitRouterPeerAttachments.</summary>
            [JsiiProperty(name: "attrTransitRouterPeerAttachments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTransitRouterPeerAttachments
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.datasource.TransitRouterPeerAttachmentsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ITransitRouterPeerAttachmentsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.Datasource.ITransitRouterPeerAttachmentsProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
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
