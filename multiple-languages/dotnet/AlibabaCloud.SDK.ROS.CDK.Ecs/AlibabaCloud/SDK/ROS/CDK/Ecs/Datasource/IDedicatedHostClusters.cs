using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Represents a `DedicatedHostClusters`.</summary>
    [JsiiInterface(nativeType: typeof(IDedicatedHostClusters), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IDedicatedHostClusters")]
    public interface IDedicatedHostClusters : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DedicatedHostClusterIds: The list of dedicated host cluster IDs.</summary>
        [JsiiProperty(name: "attrDedicatedHostClusterIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDedicatedHostClusterIds
        {
            get;
        }

        /// <summary>Attribute DedicatedHostClusters: The list of dedicated host clusters.</summary>
        [JsiiProperty(name: "attrDedicatedHostClusters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDedicatedHostClusters
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.DedicatedHostClustersProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDedicatedHostClustersProps Props
        {
            get;
        }

        /// <summary>Represents a `DedicatedHostClusters`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDedicatedHostClusters), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IDedicatedHostClusters")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDedicatedHostClusters
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DedicatedHostClusterIds: The list of dedicated host cluster IDs.</summary>
            [JsiiProperty(name: "attrDedicatedHostClusterIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDedicatedHostClusterIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DedicatedHostClusters: The list of dedicated host clusters.</summary>
            [JsiiProperty(name: "attrDedicatedHostClusters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDedicatedHostClusters
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.DedicatedHostClustersProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDedicatedHostClustersProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDedicatedHostClustersProps>()!;
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
