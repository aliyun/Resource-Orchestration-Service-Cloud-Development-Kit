using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs.Datasource
{
    /// <summary>Represents a `ClusterNodePools`.</summary>
    [JsiiInterface(nativeType: typeof(IClusterNodePools), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.IClusterNodePools")]
    public interface IClusterNodePools : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute NodePoolIds: The list of node_pool IDs.</summary>
        [JsiiProperty(name: "attrNodePoolIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNodePoolIds
        {
            get;
        }

        /// <summary>Attribute NodePools: The list of node_pools.</summary>
        [JsiiProperty(name: "attrNodePools", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNodePools
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cs.datasource.ClusterNodePoolsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IClusterNodePoolsProps Props
        {
            get;
        }

        /// <summary>Represents a `ClusterNodePools`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClusterNodePools), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.IClusterNodePools")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IClusterNodePools
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute NodePoolIds: The list of node_pool IDs.</summary>
            [JsiiProperty(name: "attrNodePoolIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNodePoolIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NodePools: The list of node_pools.</summary>
            [JsiiProperty(name: "attrNodePools", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNodePools
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cs.datasource.ClusterNodePoolsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IClusterNodePoolsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IClusterNodePoolsProps>()!;
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
