using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>A ROS resource type:  `ALIYUN::CS::ServerlessKubernetesCluster`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cs.ServerlessKubernetesCluster), fullyQualifiedName: "@alicloud/ros-cdk-cs.ServerlessKubernetesCluster", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cs.ServerlessKubernetesClusterProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class ServerlessKubernetesCluster : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::CS::ServerlessKubernetesCluster`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public ServerlessKubernetesCluster(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cs.IServerlessKubernetesClusterProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ServerlessKubernetesCluster(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ServerlessKubernetesCluster(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute ClusterId: Cluster instance ID.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TaskId: Task ID.</summary>
        /// <remarks>
        /// Automatically assigned by the system, the user queries the task status.
        /// </remarks>
        [JsiiProperty(name: "attrTaskId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrTaskId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute WorkerRamRoleName: Worker ram role name.</summary>
        [JsiiProperty(name: "attrWorkerRamRoleName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrWorkerRamRoleName
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
