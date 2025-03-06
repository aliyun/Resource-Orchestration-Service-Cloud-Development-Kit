using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Represents a `Folder`.</summary>
    [JsiiInterface(nativeType: typeof(IFolder), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IFolder")]
    public interface IFolder : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute FolderId: The ID of the folder.</summary>
        [JsiiProperty(name: "attrFolderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFolderId
        {
            get;
        }

        /// <summary>Attribute FolderName: The name of the folder.</summary>
        [JsiiProperty(name: "attrFolderName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFolderName
        {
            get;
        }

        /// <summary>Attribute ParentFolderId: The ID of the parent folder.</summary>
        /// <remarks>
        /// If not set, the system default value will be used
        /// </remarks>
        [JsiiProperty(name: "attrParentFolderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParentFolderId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.FolderProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IFolderProps Props
        {
            get;
        }

        /// <summary>Represents a `Folder`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFolder), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IFolder")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IFolder
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute FolderId: The ID of the folder.</summary>
            [JsiiProperty(name: "attrFolderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFolderId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FolderName: The name of the folder.</summary>
            [JsiiProperty(name: "attrFolderName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFolderName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ParentFolderId: The ID of the parent folder.</summary>
            /// <remarks>
            /// If not set, the system default value will be used
            /// </remarks>
            [JsiiProperty(name: "attrParentFolderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParentFolderId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.FolderProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IFolderProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IFolderProps>()!;
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
