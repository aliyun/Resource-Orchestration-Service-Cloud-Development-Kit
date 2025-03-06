using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs.Datasource
{
    /// <summary>Represents a `KubernetesCluster`.</summary>
    [JsiiInterface(nativeType: typeof(IKubernetesCluster), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.IKubernetesCluster")]
    public interface IKubernetesCluster : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ClusterId: Cluster instance ID.</summary>
        [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrClusterId
        {
            get;
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
        object AttrClusterSpec
        {
            get;
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
        object AttrClusterType
        {
            get;
        }

        /// <summary>Attribute Created: The time when the cluster was created.</summary>
        [JsiiProperty(name: "attrCreated", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreated
        {
            get;
        }

        /// <summary>Attribute CurrentVersion: The current Kubernetes version of the cluster.</summary>
        /// <remarks>
        /// For more information about the Kubernetes versions supported by ACK, see Release notes for Kubernetes versions.
        /// </remarks>
        [JsiiProperty(name: "attrCurrentVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCurrentVersion
        {
            get;
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
        object AttrDeletionProtection
        {
            get;
        }

        /// <summary>Attribute DockerVersion: The Docker version that is used by the cluster.</summary>
        [JsiiProperty(name: "attrDockerVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDockerVersion
        {
            get;
        }

        /// <summary>Attribute ExternalLoadbalancerId: The ID of the Server Load Balancer (SLB) instance that is used for the Ingress of the cluster.</summary>
        [JsiiProperty(name: "attrExternalLoadbalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExternalLoadbalancerId
        {
            get;
        }

        /// <summary>Attribute InitVersion: The Kubernetes version that is initially used by the cluster.</summary>
        [JsiiProperty(name: "attrInitVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInitVersion
        {
            get;
        }

        /// <summary>Attribute MaintenanceWindow: The maintenance window of the cluster.</summary>
        /// <remarks>
        /// This feature is available in only professional managed Kubernetes clusters.
        /// </remarks>
        [JsiiProperty(name: "attrMaintenanceWindow", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaintenanceWindow
        {
            get;
        }

        /// <summary>Attribute MasterUrl: The address of the cluster.</summary>
        /// <remarks>
        /// It includes an internal endpoint and a public endpoint.
        /// </remarks>
        [JsiiProperty(name: "attrMasterUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMasterUrl
        {
            get;
        }

        /// <summary>Attribute MetaData: The metadata of the cluster.</summary>
        [JsiiProperty(name: "attrMetaData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMetaData
        {
            get;
        }

        /// <summary>Attribute Name: The name of the cluster.</summary>
        /// <remarks>
        /// The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
        /// </remarks>
        [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrName
        {
            get;
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
        object AttrNetworkMode
        {
            get;
        }

        /// <summary>Attribute NextVersion: The Kubernetes version to which the cluster can be upgraded.</summary>
        [JsiiProperty(name: "attrNextVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNextVersion
        {
            get;
        }

        /// <summary>Attribute Parameters: A collection of cluster ROS parameters.</summary>
        [JsiiProperty(name: "attrParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParameters
        {
            get;
        }

        /// <summary>Attribute PrivateZone: Indicates whether Alibaba Cloud DNS PrivateZone is enabled.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>true: indicates that Alibaba Cloud DNS PrivateZone is enabled.- false: indicates that Alibaba Cloud DNS PrivateZone is not enabled.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrPrivateZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrivateZone
        {
            get;
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
        object AttrProfile
        {
            get;
        }

        /// <summary>Attribute RegionId: The ID of the region where the cluster is deployed.</summary>
        [JsiiProperty(name: "attrRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRegionId
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the cluster belongs.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute SecurityGroupId: The ID of the security group to which the instances of the cluster belong.</summary>
        [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityGroupId
        {
            get;
        }

        /// <summary>Attribute ServiceCidr: The cluster service cidr.</summary>
        [JsiiProperty(name: "attrServiceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrServiceCidr
        {
            get;
        }

        /// <summary>Attribute Size: The number of nodes in the cluster.</summary>
        /// <remarks>
        /// Master nodes and worker nodes are included.
        /// </remarks>
        [JsiiProperty(name: "attrSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSize
        {
            get;
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
        object AttrState
        {
            get;
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
        object AttrSubnetCidr
        {
            get;
        }

        /// <summary>Attribute Tags: The labels of the cluster.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute Updated: The time when the cluster was updated.</summary>
        [JsiiProperty(name: "attrUpdated", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdated
        {
            get;
        }

        /// <summary>Attribute VpcId: The ID of the VPC where the cluster is deployed.</summary>
        /// <remarks>
        /// This parameter is required when you create an ACK cluster.
        /// </remarks>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute VSwitchId: The IDs of the vSwitches.</summary>
        /// <remarks>
        /// You can select one to three vSwitches when you create an ACK cluster. vSwitches in different zones are recommended to ensure high availability.
        /// </remarks>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitchId
        {
            get;
        }

        /// <summary>Attribute VSwitchIds: The list of cluster control plane VSwitch ID.</summary>
        [JsiiProperty(name: "attrVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitchIds
        {
            get;
        }

        /// <summary>Attribute WorkerRamRoleName: The name of the worker RAM role.</summary>
        /// <remarks>
        /// The RAM role is assigned to the worker nodes of the cluster and allows the worker nodes to manage Elastic Compute Service (ECS) instances.
        /// </remarks>
        [JsiiProperty(name: "attrWorkerRamRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWorkerRamRoleName
        {
            get;
        }

        /// <summary>Attribute ZoneId: The ID of the zone where the cluster is deployed.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZoneId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cs.datasource.KubernetesClusterProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IKubernetesClusterProps Props
        {
            get;
        }

        /// <summary>Represents a `KubernetesCluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IKubernetesCluster), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.IKubernetesCluster")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IKubernetesCluster
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ClusterId: Cluster instance ID.</summary>
            [JsiiProperty(name: "attrClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrClusterId
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
            public object AttrClusterSpec
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
            public object AttrClusterType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Created: The time when the cluster was created.</summary>
            [JsiiProperty(name: "attrCreated", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreated
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CurrentVersion: The current Kubernetes version of the cluster.</summary>
            /// <remarks>
            /// For more information about the Kubernetes versions supported by ACK, see Release notes for Kubernetes versions.
            /// </remarks>
            [JsiiProperty(name: "attrCurrentVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCurrentVersion
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
            public object AttrDeletionProtection
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DockerVersion: The Docker version that is used by the cluster.</summary>
            [JsiiProperty(name: "attrDockerVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDockerVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExternalLoadbalancerId: The ID of the Server Load Balancer (SLB) instance that is used for the Ingress of the cluster.</summary>
            [JsiiProperty(name: "attrExternalLoadbalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExternalLoadbalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InitVersion: The Kubernetes version that is initially used by the cluster.</summary>
            [JsiiProperty(name: "attrInitVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInitVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaintenanceWindow: The maintenance window of the cluster.</summary>
            /// <remarks>
            /// This feature is available in only professional managed Kubernetes clusters.
            /// </remarks>
            [JsiiProperty(name: "attrMaintenanceWindow", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaintenanceWindow
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MasterUrl: The address of the cluster.</summary>
            /// <remarks>
            /// It includes an internal endpoint and a public endpoint.
            /// </remarks>
            [JsiiProperty(name: "attrMasterUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMasterUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MetaData: The metadata of the cluster.</summary>
            [JsiiProperty(name: "attrMetaData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMetaData
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Name: The name of the cluster.</summary>
            /// <remarks>
            /// The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
            /// </remarks>
            [JsiiProperty(name: "attrName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrName
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
            public object AttrNetworkMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NextVersion: The Kubernetes version to which the cluster can be upgraded.</summary>
            [JsiiProperty(name: "attrNextVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNextVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Parameters: A collection of cluster ROS parameters.</summary>
            [JsiiProperty(name: "attrParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParameters
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
            public object AttrPrivateZone
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
            public object AttrProfile
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RegionId: The ID of the region where the cluster is deployed.</summary>
            [JsiiProperty(name: "attrRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group to which the cluster belongs.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityGroupId: The ID of the security group to which the instances of the cluster belong.</summary>
            [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ServiceCidr: The cluster service cidr.</summary>
            [JsiiProperty(name: "attrServiceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrServiceCidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Size: The number of nodes in the cluster.</summary>
            /// <remarks>
            /// Master nodes and worker nodes are included.
            /// </remarks>
            [JsiiProperty(name: "attrSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSize
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
            public object AttrState
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
            public object AttrSubnetCidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The labels of the cluster.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Updated: The time when the cluster was updated.</summary>
            [JsiiProperty(name: "attrUpdated", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdated
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: The ID of the VPC where the cluster is deployed.</summary>
            /// <remarks>
            /// This parameter is required when you create an ACK cluster.
            /// </remarks>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitchId: The IDs of the vSwitches.</summary>
            /// <remarks>
            /// You can select one to three vSwitches when you create an ACK cluster. vSwitches in different zones are recommended to ensure high availability.
            /// </remarks>
            [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitchIds: The list of cluster control plane VSwitch ID.</summary>
            [JsiiProperty(name: "attrVSwitchIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitchIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WorkerRamRoleName: The name of the worker RAM role.</summary>
            /// <remarks>
            /// The RAM role is assigned to the worker nodes of the cluster and allows the worker nodes to manage Elastic Compute Service (ECS) instances.
            /// </remarks>
            [JsiiProperty(name: "attrWorkerRamRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWorkerRamRoleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ZoneId: The ID of the zone where the cluster is deployed.</summary>
            [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cs.datasource.KubernetesClusterProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IKubernetesClusterProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IKubernetesClusterProps>()!;
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
