using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Represents a `Repository`.</summary>
    [JsiiInterface(nativeType: typeof(IRepository), fullyQualifiedName: "@alicloud/ros-cdk-cr.IRepository")]
    public interface IRepository : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceId
        {
            get;
        }

        /// <summary>Attribute RepoId: The repository ID.</summary>
        [JsiiProperty(name: "attrRepoId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRepoId
        {
            get;
        }

        /// <summary>Attribute RepoName: The name of the repository.</summary>
        [JsiiProperty(name: "attrRepoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRepoName
        {
            get;
        }

        /// <summary>Attribute RepoNamespace: The name of the namespace to which the repository belongs.</summary>
        [JsiiProperty(name: "attrRepoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRepoNamespace
        {
            get;
        }

        /// <summary>Attribute RepoType: The type of the repository.</summary>
        [JsiiProperty(name: "attrRepoType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRepoType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cr.RepositoryProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cr.IRepositoryProps Props
        {
            get;
        }

        /// <summary>Represents a `Repository`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRepository), fullyQualifiedName: "@alicloud/ros-cdk-cr.IRepository")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IRepository
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.</summary>
            [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RepoId: The repository ID.</summary>
            [JsiiProperty(name: "attrRepoId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRepoId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RepoName: The name of the repository.</summary>
            [JsiiProperty(name: "attrRepoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRepoName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RepoNamespace: The name of the namespace to which the repository belongs.</summary>
            [JsiiProperty(name: "attrRepoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRepoNamespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RepoType: The type of the repository.</summary>
            [JsiiProperty(name: "attrRepoType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRepoType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cr.RepositoryProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cr.IRepositoryProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cr.IRepositoryProps>()!;
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
