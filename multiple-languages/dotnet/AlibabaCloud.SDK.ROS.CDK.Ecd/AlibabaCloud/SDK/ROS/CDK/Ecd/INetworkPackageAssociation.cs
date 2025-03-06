using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecd
{
    /// <summary>Represents a `NetworkPackageAssociation`.</summary>
    [JsiiInterface(nativeType: typeof(INetworkPackageAssociation), fullyQualifiedName: "@alicloud/ros-cdk-ecd.INetworkPackageAssociation")]
    public interface INetworkPackageAssociation : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute NetworkPackageId: The ID of the Internet access package.</summary>
        [JsiiProperty(name: "attrNetworkPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkPackageId
        {
            get;
        }

        /// <summary>Attribute OfficeSiteId: The ID of the workspace.</summary>
        [JsiiProperty(name: "attrOfficeSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOfficeSiteId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecd.NetworkPackageAssociationProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecd.INetworkPackageAssociationProps Props
        {
            get;
        }

        /// <summary>Represents a `NetworkPackageAssociation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INetworkPackageAssociation), fullyQualifiedName: "@alicloud/ros-cdk-ecd.INetworkPackageAssociation")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecd.INetworkPackageAssociation
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute NetworkPackageId: The ID of the Internet access package.</summary>
            [JsiiProperty(name: "attrNetworkPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkPackageId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OfficeSiteId: The ID of the workspace.</summary>
            [JsiiProperty(name: "attrOfficeSiteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOfficeSiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecd.NetworkPackageAssociationProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecd.INetworkPackageAssociationProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecd.INetworkPackageAssociationProps>()!;
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
