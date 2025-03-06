using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Represents a `Account`.</summary>
    [JsiiInterface(nativeType: typeof(IAccount), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IAccount")]
    public interface IAccount : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AccountId: This ID of Resource Manager Account.</summary>
        [JsiiProperty(name: "attrAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccountId
        {
            get;
        }

        /// <summary>Attribute DisplayName: Member name.</summary>
        [JsiiProperty(name: "attrDisplayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDisplayName
        {
            get;
        }

        /// <summary>Attribute FolderId: The ID of the parent folder.</summary>
        [JsiiProperty(name: "attrFolderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFolderId
        {
            get;
        }

        /// <summary>Attribute JoinMethod: Ways for members to join the resource directory.</summary>
        /// <remarks>
        /// Valid values: invited, created
        /// </remarks>
        [JsiiProperty(name: "attrJoinMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrJoinMethod
        {
            get;
        }

        /// <summary>Attribute ResourceDirectoryId: Resource directory ID.</summary>
        [JsiiProperty(name: "attrResourceDirectoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceDirectoryId
        {
            get;
        }

        /// <summary>Attribute Type: Member type.</summary>
        /// <remarks>
        /// The value of ResourceAccount indicates the resource account
        /// </remarks>
        [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.AccountProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IAccountProps Props
        {
            get;
        }

        /// <summary>Represents a `Account`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccount), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IAccount")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IAccount
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AccountId: This ID of Resource Manager Account.</summary>
            [JsiiProperty(name: "attrAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccountId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DisplayName: Member name.</summary>
            [JsiiProperty(name: "attrDisplayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FolderId: The ID of the parent folder.</summary>
            [JsiiProperty(name: "attrFolderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFolderId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute JoinMethod: Ways for members to join the resource directory.</summary>
            /// <remarks>
            /// Valid values: invited, created
            /// </remarks>
            [JsiiProperty(name: "attrJoinMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrJoinMethod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceDirectoryId: Resource directory ID.</summary>
            [JsiiProperty(name: "attrResourceDirectoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceDirectoryId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Type: Member type.</summary>
            /// <remarks>
            /// The value of ResourceAccount indicates the resource account
            /// </remarks>
            [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.AccountProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IAccountProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IAccountProps>()!;
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
