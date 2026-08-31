using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    /// <summary>Represents a `SparkWorkspace`.</summary>
    [JsiiInterface(nativeType: typeof(ISparkWorkspace), fullyQualifiedName: "@alicloud/ros-cdk-emr.ISparkWorkspace")]
    public interface ISparkWorkspace : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Storage: The OSS storage path of the workspace.</summary>
        [JsiiProperty(name: "attrStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStorage
        {
            get;
        }

        /// <summary>Attribute WorkspaceId: The ID of the workspace.</summary>
        [JsiiProperty(name: "attrWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWorkspaceId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-emr.SparkWorkspaceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Emr.ISparkWorkspaceProps Props
        {
            get;
        }

        /// <summary>Represents a `SparkWorkspace`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISparkWorkspace), fullyQualifiedName: "@alicloud/ros-cdk-emr.ISparkWorkspace")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.ISparkWorkspace
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Storage: The OSS storage path of the workspace.</summary>
            [JsiiProperty(name: "attrStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStorage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WorkspaceId: The ID of the workspace.</summary>
            [JsiiProperty(name: "attrWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-emr.SparkWorkspaceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Emr.ISparkWorkspaceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Emr.ISparkWorkspaceProps>()!;
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
