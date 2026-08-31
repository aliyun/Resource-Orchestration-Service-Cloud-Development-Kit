using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::CS::KubernetesCluster`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosKubernetesCluster`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetescluster
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.KubernetesCluster), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.KubernetesCluster", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-cs.datasource.KubernetesClusterProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class KubernetesCluster : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IKubernetesCluster
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public KubernetesCluster(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IKubernetesClusterProps? props = null, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IKubernetesClusterProps? props = null, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected KubernetesCluster(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected KubernetesCluster(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute ClusterId: Cluster instance ID.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterSpec: The type of the managed Kubernetes cluster.</summary>
        /// <remarks>
        /// This parameter is returned for a managed Kubernetes cluster. Valid values:
        ///
        /// <list type="bullet">
        /// <description>ack.pro.small: professional managed Kubernetes cluster.</description>
        /// <description>ack.standard: standard managed Kubernetes cluster.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrClusterSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClusterSpec
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ClusterType: The type of the cluster.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Kubernetes: dedicated Kubernetes cluster</description>
        /// <description>ManagedKubernetes: managed Kubernetes cluster</description>
        /// <description>Ask: ASK cluster</description>
        /// <description>ExternalKubernetes: registered external Kubernetes cluster</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrClusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrClusterType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Created: The time when the cluster was created.</summary>
        [JsiiProperty(name: "attrCreated", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreated
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CurrentVersion: The current Kubernetes version of the cluster.</summary>
        /// <remarks>
        /// For more information about the Kubernetes versions supported by ACK, see Release notes for Kubernetes versions.
        /// </remarks>
        [JsiiProperty(name: "attrCurrentVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCurrentVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DeletionProtection: Indicates whether deletion protection is enabled.</summary>
        /// <remarks>
        /// If deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling the API. Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: Deletion protection is enabled. You cannot delete the cluster in the ACK console or by calling the API.</description>
        /// <description>false: Deletion protection is not enabled. You can delete the cluster in the ACK console or by calling the API.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDeletionProtection
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DockerVersion: The Docker version that is used by the cluster.</summary>
        [JsiiProperty(name: "attrDockerVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDockerVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExternalLoadbalancerId: The ID of the Server Load Balancer (SLB) instance that is used for the Ingress of the cluster.</summary>
        [JsiiProperty(name: "attrExternalLoadbalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExternalLoadbalancerId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InitVersion: The Kubernetes version that is initially used by the cluster.</summary>
        [JsiiProperty(name: "attrInitVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInitVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaintenanceWindow: The maintenance window of the cluster.</summary>
        /// <remarks>
        /// This feature is available in only professional managed Kubernetes clusters.
        /// </remarks>
        [JsiiProperty(name: "attrMaintenanceWindow", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMaintenanceWindow
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MasterUrl: The address of the cluster.</summary>
        /// <remarks>
        /// It includes an internal endpoint and a public endpoint.
        /// </remarks>
        [JsiiProperty(name: "attrMasterUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMasterUrl
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MetaData: The metadata of the cluster.</summary>
        [JsiiProperty(name: "attrMetaData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMetaData
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Name: The name of the cluster.</summary>
        /// <remarks>
        /// The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
        /// </remarks>
        [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NetworkMode: The network mode of the cluster.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>classic: the classic network</description>
        /// <description>vpc: virtual private cloud (VPC)</description>
        /// <description>overlay: overlay network</description>
        /// <description>calico: network powered by Calico
        /// Default value: vpc.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrNetworkMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNetworkMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NextVersion: The Kubernetes version to which the cluster can be upgraded.</summary>
        [JsiiProperty(name: "attrNextVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNextVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Parameters: A collection of cluster ROS parameters.</summary>
        [JsiiProperty(name: "attrParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrParameters
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrivateZone: Indicates whether Alibaba Cloud DNS PrivateZone is enabled.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>true: indicates that Alibaba Cloud DNS PrivateZone is enabled.- false: indicates that Alibaba Cloud DNS PrivateZone is not enabled.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrPrivateZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPrivateZone
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Profile: Indicates the scenario in which the cluster is used.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Default: indicates that the cluster is used in non-edge computing scenarios.</description>
        /// <description>Edge: indicates that the ACK cluster is used in edge computing scenarios.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrProfile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrProfile
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RegionId: The ID of the region where the cluster is deployed.</summary>
        [JsiiProperty(name: "attrRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRegionId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the cluster belongs.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecurityGroupId: The ID of the security group to which the instances of the cluster belong.</summary>
        [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSecurityGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServiceCidr: The cluster service cidr.</summary>
        [JsiiProperty(name: "attrServiceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrServiceCidr
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Size: The number of nodes in the cluster.</summary>
        /// <remarks>
        /// Master nodes and worker nodes are included.
        /// </remarks>
        [JsiiProperty(name: "attrSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSize
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute State: The state of the cluster.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>initial: The cluster is being created.</description>
        /// <description>failed: The cluster failed to be created.</description>
        /// <description>running: The cluster is running.</description>
        /// <description>updating: The cluster is being upgraded.</description>
        /// <description>updating_failed: The cluster failed to be upgraded.</description>
        /// <description>scaling: The cluster is being scaled.</description>
        /// <description>waiting: The registered cluster is waiting for connecting.</description>
        /// <description>disconnected: The registeredcluster is disconnected.</description>
        /// <description>stopped: The cluster is stopped.</description>
        /// <description>deleting: The cluster is being deleted.</description>
        /// <description>deleted: The cluster is deleted.</description>
        /// <description>delete_failed: The cluster failed to be deleted.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrState
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SubnetCidr: The pod CIDR block.</summary>
        /// <remarks>
        /// It must be a valid and private CIDR block, and must be one of the following CIDR blocks or their subnets:
        ///
        /// <list type="bullet">
        /// <description>10.0.0.0/8</description>
        /// <description>172.16-31.0.0/12-16</description>
        /// <description>192.168.0.0/16
        /// The pod CIDR block cannot overlap with that of the VPC or those of the ACK clusters that are deployed in the VPC. For more information about the network segmentation of ACK clusters, see Plan CIDR blocks for ACK clusters in a VPC.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrSubnetCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSubnetCidr
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Tags: The labels of the cluster.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTags
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Updated: The time when the cluster was updated.</summary>
        [JsiiProperty(name: "attrUpdated", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUpdated
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcId: The ID of the VPC where the cluster is deployed.</summary>
        /// <remarks>
        /// This parameter is required when you create an ACK cluster.
        /// </remarks>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VSwitchId: The IDs of the vSwitches.</summary>
        /// <remarks>
        /// You can select one to three vSwitches when you create an ACK cluster. vSwitches in different zones are recommended to ensure high availability.
        /// </remarks>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVSwitchId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VSwitchIds: The list of cluster control plane VSwitch ID.</summary>
        [JsiiProperty(name: "attrVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVSwitchIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute WorkerRamRoleName: The name of the worker RAM role.</summary>
        /// <remarks>
        /// The RAM role is assigned to the worker nodes of the cluster and allows the worker nodes to manage Elastic Compute Service (ECS) instances.
        /// </remarks>
        [JsiiProperty(name: "attrWorkerRamRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrWorkerRamRoleName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ZoneId: The ID of the zone where the cluster is deployed.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cs.datasource.KubernetesClusterProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IKubernetesClusterProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IKubernetesClusterProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
