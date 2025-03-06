using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Represents a `Directory`.</summary>
    [JsiiInterface(nativeType: typeof(IDirectory), fullyQualifiedName: "@alicloud/ros-cdk-oss.IDirectory")]
    public interface IDirectory : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BucketName: The name of Bucket.</summary>
        [JsiiProperty(name: "attrBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBucketName
        {
            get;
        }

        /// <summary>Attribute DirectoryName: The name of Directory.</summary>
        [JsiiProperty(name: "attrDirectoryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDirectoryName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oss.DirectoryProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Oss.IDirectoryProps Props
        {
            get;
        }

        /// <summary>Represents a `Directory`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDirectory), fullyQualifiedName: "@alicloud/ros-cdk-oss.IDirectory")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IDirectory
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BucketName: The name of Bucket.</summary>
            [JsiiProperty(name: "attrBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBucketName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DirectoryName: The name of Directory.</summary>
            [JsiiProperty(name: "attrDirectoryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDirectoryName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oss.DirectoryProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Oss.IDirectoryProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Oss.IDirectoryProps>()!;
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
