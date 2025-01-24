using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas.Datasource
{
    /// <summary>Represents a `FileSystems`.</summary>
    [JsiiInterface(nativeType: typeof(IFileSystems), fullyQualifiedName: "@alicloud/ros-cdk-nas.datasource.IFileSystems")]
    public interface IFileSystems : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute FileSystemIds: The list of file system IDs.</summary>
        [JsiiProperty(name: "attrFileSystemIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFileSystemIds
        {
            get;
        }

        /// <summary>Attribute FileSystems: The list of file systems.</summary>
        [JsiiProperty(name: "attrFileSystems", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFileSystems
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-nas.datasource.FileSystemsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Nas.Datasource.IFileSystemsProps Props
        {
            get;
        }

        /// <summary>Represents a `FileSystems`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFileSystems), fullyQualifiedName: "@alicloud/ros-cdk-nas.datasource.IFileSystems")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.Datasource.IFileSystems
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute FileSystemIds: The list of file system IDs.</summary>
            [JsiiProperty(name: "attrFileSystemIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFileSystemIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FileSystems: The list of file systems.</summary>
            [JsiiProperty(name: "attrFileSystems", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFileSystems
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-nas.datasource.FileSystemsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Nas.Datasource.IFileSystemsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Nas.Datasource.IFileSystemsProps>()!;
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
