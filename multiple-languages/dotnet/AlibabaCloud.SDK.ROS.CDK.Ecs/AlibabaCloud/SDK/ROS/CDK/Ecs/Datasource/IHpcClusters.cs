using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Represents a `HpcClusters`.</summary>
    [JsiiInterface(nativeType: typeof(IHpcClusters), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IHpcClusters")]
    public interface IHpcClusters : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute HpcClusterIds: the list of hpc cluster ids.</summary>
        [JsiiProperty(name: "attrHpcClusterIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHpcClusterIds
        {
            get;
        }

        /// <summary>Attribute HpcClusters: The list of hpc clusters.</summary>
        [JsiiProperty(name: "attrHpcClusters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHpcClusters
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.HpcClustersProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IHpcClustersProps Props
        {
            get;
        }

        /// <summary>Represents a `HpcClusters`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHpcClusters), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IHpcClusters")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IHpcClusters
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute HpcClusterIds: the list of hpc cluster ids.</summary>
            [JsiiProperty(name: "attrHpcClusterIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHpcClusterIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HpcClusters: The list of hpc clusters.</summary>
            [JsiiProperty(name: "attrHpcClusters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHpcClusters
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.HpcClustersProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IHpcClustersProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IHpcClustersProps>()!;
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
