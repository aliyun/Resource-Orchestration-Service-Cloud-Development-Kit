using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Represents a `ResourceDirectory`.</summary>
    [JsiiInterface(nativeType: typeof(IResourceDirectory), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IResourceDirectory")]
    public interface IResourceDirectory : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute MasterAccountId: The ID of the master account.</summary>
        [JsiiProperty(name: "attrMasterAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMasterAccountId
        {
            get;
        }

        /// <summary>Attribute MasterAccountName: The name of the master account.</summary>
        [JsiiProperty(name: "attrMasterAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMasterAccountName
        {
            get;
        }

        /// <summary>Attribute ResourceDirectoryId: The ID of the resource directory.</summary>
        [JsiiProperty(name: "attrResourceDirectoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceDirectoryId
        {
            get;
        }

        /// <summary>Attribute RootFolderId: The ID of the root folder.</summary>
        [JsiiProperty(name: "attrRootFolderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRootFolderId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.ResourceDirectoryProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IResourceDirectoryProps Props
        {
            get;
        }

        /// <summary>Represents a `ResourceDirectory`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IResourceDirectory), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.IResourceDirectory")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IResourceDirectory
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute MasterAccountId: The ID of the master account.</summary>
            [JsiiProperty(name: "attrMasterAccountId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMasterAccountId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MasterAccountName: The name of the master account.</summary>
            [JsiiProperty(name: "attrMasterAccountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMasterAccountName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceDirectoryId: The ID of the resource directory.</summary>
            [JsiiProperty(name: "attrResourceDirectoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceDirectoryId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RootFolderId: The ID of the root folder.</summary>
            [JsiiProperty(name: "attrRootFolderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRootFolderId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.ResourceDirectoryProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IResourceDirectoryProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IResourceDirectoryProps>()!;
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
