using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse.Datasource
{
    /// <summary>Represents a `Clusters`.</summary>
    [JsiiInterface(nativeType: typeof(IClusters), fullyQualifiedName: "@alicloud/ros-cdk-mse.datasource.IClusters")]
    public interface IClusters : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ClusterIds: The list of cluster IDs.</summary>
        [JsiiProperty(name: "attrClusterIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterIds
        {
            get;
        }

        /// <summary>Attribute Clusters: The list of clusters.</summary>
        [JsiiProperty(name: "attrClusters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusters
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mse.datasource.ClustersProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mse.Datasource.IClustersProps Props
        {
            get;
        }

        /// <summary>Represents a `Clusters`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClusters), fullyQualifiedName: "@alicloud/ros-cdk-mse.datasource.IClusters")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.Datasource.IClusters
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ClusterIds: The list of cluster IDs.</summary>
            [JsiiProperty(name: "attrClusterIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Clusters: The list of clusters.</summary>
            [JsiiProperty(name: "attrClusters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusters
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mse.datasource.ClustersProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mse.Datasource.IClustersProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mse.Datasource.IClustersProps>()!;
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
