using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Represents a `ManagedKubernetesCluster`.</summary>
    [JsiiInterface(nativeType: typeof(IManagedKubernetesCluster), fullyQualifiedName: "@alicloud/ros-cdk-cs.IManagedKubernetesCluster")]
    public interface IManagedKubernetesCluster : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute APIServerSLBId: The id of API server SLB.</summary>
        [JsiiProperty(name: "attrApiServerSlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrApiServerSlbId
        {
            get;
        }

        /// <summary>Attribute ClusterId: Cluster instance ID.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterId
        {
            get;
        }

        /// <summary>Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.</summary>
        [JsiiProperty(name: "attrDefaultUserKubeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDefaultUserKubeConfig
        {
            get;
        }

        /// <summary>Attribute IngressSLBId: The id of ingress SLB.</summary>
        [JsiiProperty(name: "attrIngressSlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIngressSlbId
        {
            get;
        }

        /// <summary>Attribute Nodes: The list of cluster nodes.</summary>
        [JsiiProperty(name: "attrNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNodes
        {
            get;
        }

        /// <summary>Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.</summary>
        [JsiiProperty(name: "attrPrivateUserKubConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrivateUserKubConfig
        {
            get;
        }

        /// <summary>Attribute ScalingConfigurationId: Scaling configuration id.</summary>
        [JsiiProperty(name: "attrScalingConfigurationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScalingConfigurationId
        {
            get;
        }

        /// <summary>Attribute ScalingGroupId: Scaling group id.</summary>
        [JsiiProperty(name: "attrScalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScalingGroupId
        {
            get;
        }

        /// <summary>Attribute ScalingRuleId: Scaling rule id.</summary>
        [JsiiProperty(name: "attrScalingRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScalingRuleId
        {
            get;
        }

        /// <summary>Attribute TaskId: Task ID.</summary>
        /// <remarks>
        /// Automatically assigned by the system, the user queries the task status.
        /// </remarks>
        [JsiiProperty(name: "attrTaskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTaskId
        {
            get;
        }

        /// <summary>Attribute WorkerRamRoleName: Worker ram role name.</summary>
        [JsiiProperty(name: "attrWorkerRamRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWorkerRamRoleName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cs.ManagedKubernetesClusterProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cs.IManagedKubernetesClusterProps Props
        {
            get;
        }

        /// <summary>Represents a `ManagedKubernetesCluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IManagedKubernetesCluster), fullyQualifiedName: "@alicloud/ros-cdk-cs.IManagedKubernetesCluster")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.IManagedKubernetesCluster
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute APIServerSLBId: The id of API server SLB.</summary>
            [JsiiProperty(name: "attrApiServerSlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrApiServerSlbId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ClusterId: Cluster instance ID.</summary>
            [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.</summary>
            [JsiiProperty(name: "attrDefaultUserKubeConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDefaultUserKubeConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IngressSLBId: The id of ingress SLB.</summary>
            [JsiiProperty(name: "attrIngressSlbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIngressSlbId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Nodes: The list of cluster nodes.</summary>
            [JsiiProperty(name: "attrNodes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNodes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.</summary>
            [JsiiProperty(name: "attrPrivateUserKubConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrivateUserKubConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScalingConfigurationId: Scaling configuration id.</summary>
            [JsiiProperty(name: "attrScalingConfigurationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScalingConfigurationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScalingGroupId: Scaling group id.</summary>
            [JsiiProperty(name: "attrScalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScalingGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScalingRuleId: Scaling rule id.</summary>
            [JsiiProperty(name: "attrScalingRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScalingRuleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TaskId: Task ID.</summary>
            /// <remarks>
            /// Automatically assigned by the system, the user queries the task status.
            /// </remarks>
            [JsiiProperty(name: "attrTaskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTaskId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WorkerRamRoleName: Worker ram role name.</summary>
            [JsiiProperty(name: "attrWorkerRamRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWorkerRamRoleName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cs.ManagedKubernetesClusterProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cs.IManagedKubernetesClusterProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cs.IManagedKubernetesClusterProps>()!;
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
