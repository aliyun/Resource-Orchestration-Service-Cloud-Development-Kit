package com.aliyun.ros.cdk.cs.datasource;

/**
 * Represents a <code>KubernetesCluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.271Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.datasource.IKubernetesCluster")
@software.amazon.jsii.Jsii.Proxy(IKubernetesCluster.Jsii$Proxy.class)
public interface IKubernetesCluster extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ClusterId: Cluster instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId();

    /**
     * Attribute ClusterSpec: The type of the managed Kubernetes cluster.
     * <p>
     * This parameter is returned for a managed Kubernetes cluster. Valid values:
     * <p>
     * <ul>
     * <li>ack.pro.small: professional managed Kubernetes cluster.</li>
     * <li>ack.standard: standard managed Kubernetes cluster.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterSpec();

    /**
     * Attribute ClusterType: The type of the cluster.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Kubernetes: dedicated Kubernetes cluster</li>
     * <li>ManagedKubernetes: managed Kubernetes cluster</li>
     * <li>Ask: ASK cluster</li>
     * <li>ExternalKubernetes: registered external Kubernetes cluster</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType();

    /**
     * Attribute Created: The time when the cluster was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreated();

    /**
     * Attribute CurrentVersion: The current Kubernetes version of the cluster.
     * <p>
     * For more information about the Kubernetes versions supported by ACK, see Release notes for Kubernetes versions.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentVersion();

    /**
     * Attribute DeletionProtection: Indicates whether deletion protection is enabled.
     * <p>
     * If deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling the API. Valid values:
     * <p>
     * <ul>
     * <li>true: Deletion protection is enabled. You cannot delete the cluster in the ACK console or by calling the API.</li>
     * <li>false: Deletion protection is not enabled. You can delete the cluster in the ACK console or by calling the API.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection();

    /**
     * Attribute DockerVersion: The Docker version that is used by the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDockerVersion();

    /**
     * Attribute ExternalLoadbalancerId: The ID of the Server Load Balancer (SLB) instance that is used for the Ingress of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExternalLoadbalancerId();

    /**
     * Attribute InitVersion: The Kubernetes version that is initially used by the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInitVersion();

    /**
     * Attribute MaintenanceWindow: The maintenance window of the cluster.
     * <p>
     * This feature is available in only professional managed Kubernetes clusters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintenanceWindow();

    /**
     * Attribute MasterUrl: The address of the cluster.
     * <p>
     * It includes an internal endpoint and a public endpoint.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterUrl();

    /**
     * Attribute MetaData: The metadata of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetaData();

    /**
     * Attribute Name: The name of the cluster.
     * <p>
     * The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrName();

    /**
     * Attribute NetworkMode: The network mode of the cluster.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>classic: the classic network</li>
     * <li>vpc: virtual private cloud (VPC)</li>
     * <li>overlay: overlay network</li>
     * <li>calico: network powered by Calico
     * Default value: vpc.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkMode();

    /**
     * Attribute NextVersion: The Kubernetes version to which the cluster can be upgraded.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNextVersion();

    /**
     * Attribute Parameters: A collection of cluster ROS parameters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters();

    /**
     * Attribute PrivateZone: Indicates whether Alibaba Cloud DNS PrivateZone is enabled.
     * <p>
     * <ul>
     * <li>true: indicates that Alibaba Cloud DNS PrivateZone is enabled.- false: indicates that Alibaba Cloud DNS PrivateZone is not enabled.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateZone();

    /**
     * Attribute Profile: Indicates the scenario in which the cluster is used.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Default: indicates that the cluster is used in non-edge computing scenarios.</li>
     * <li>Edge: indicates that the ACK cluster is used in edge computing scenarios.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProfile();

    /**
     * Attribute RegionId: The ID of the region where the cluster is deployed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId();

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the cluster belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SecurityGroupId: The ID of the security group to which the instances of the cluster belong.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId();

    /**
     * Attribute ServiceCidr: The cluster service cidr.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceCidr();

    /**
     * Attribute Size: The number of nodes in the cluster.
     * <p>
     * Master nodes and worker nodes are included.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSize();

    /**
     * Attribute State: The state of the cluster.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>initial: The cluster is being created.</li>
     * <li>failed: The cluster failed to be created.</li>
     * <li>running: The cluster is running.</li>
     * <li>updating: The cluster is being upgraded.</li>
     * <li>updating_failed: The cluster failed to be upgraded.</li>
     * <li>scaling: The cluster is being scaled.</li>
     * <li>waiting: The registered cluster is waiting for connecting.</li>
     * <li>disconnected: The registeredcluster is disconnected.</li>
     * <li>stopped: The cluster is stopped.</li>
     * <li>deleting: The cluster is being deleted.</li>
     * <li>deleted: The cluster is deleted.</li>
     * <li>delete_failed: The cluster failed to be deleted.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrState();

    /**
     * Attribute SubnetCidr: The pod CIDR block.
     * <p>
     * It must be a valid and private CIDR block, and must be one of the following CIDR blocks or their subnets:
     * <p>
     * <ul>
     * <li>10.0.0.0/8</li>
     * <li>172.16-31.0.0/12-16</li>
     * <li>192.168.0.0/16
     * The pod CIDR block cannot overlap with that of the VPC or those of the ACK clusters that are deployed in the VPC. For more information about the network segmentation of ACK clusters, see Plan CIDR blocks for ACK clusters in a VPC.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubnetCidr();

    /**
     * Attribute Tags: The labels of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute Updated: The time when the cluster was updated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdated();

    /**
     * Attribute VpcId: The ID of the VPC where the cluster is deployed.
     * <p>
     * This parameter is required when you create an ACK cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VSwitchId: The IDs of the vSwitches.
     * <p>
     * You can select one to three vSwitches when you create an ACK cluster. vSwitches in different zones are recommended to ensure high availability.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    /**
     * Attribute VSwitchIds: The list of cluster control plane VSwitch ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchIds();

    /**
     * Attribute WorkerRamRoleName: The name of the worker RAM role.
     * <p>
     * The RAM role is assigned to the worker nodes of the cluster and allows the worker nodes to manage Elastic Compute Service (ECS) instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkerRamRoleName();

    /**
     * Attribute ZoneId: The ID of the zone where the cluster is deployed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.datasource.KubernetesClusterProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cs.datasource.IKubernetesCluster.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute ClusterId: Cluster instance ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterSpec: The type of the managed Kubernetes cluster.
         * <p>
         * This parameter is returned for a managed Kubernetes cluster. Valid values:
         * <p>
         * <ul>
         * <li>ack.pro.small: professional managed Kubernetes cluster.</li>
         * <li>ack.standard: standard managed Kubernetes cluster.</li>
         * </ul>
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterType: The type of the cluster.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Kubernetes: dedicated Kubernetes cluster</li>
         * <li>ManagedKubernetes: managed Kubernetes cluster</li>
         * <li>Ask: ASK cluster</li>
         * <li>ExternalKubernetes: registered external Kubernetes cluster</li>
         * </ul>
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Created: The time when the cluster was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreated() {
            return software.amazon.jsii.Kernel.get(this, "attrCreated", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CurrentVersion: The current Kubernetes version of the cluster.
         * <p>
         * For more information about the Kubernetes versions supported by ACK, see Release notes for Kubernetes versions.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrCurrentVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeletionProtection: Indicates whether deletion protection is enabled.
         * <p>
         * If deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling the API. Valid values:
         * <p>
         * <ul>
         * <li>true: Deletion protection is enabled. You cannot delete the cluster in the ACK console or by calling the API.</li>
         * <li>false: Deletion protection is not enabled. You can delete the cluster in the ACK console or by calling the API.</li>
         * </ul>
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DockerVersion: The Docker version that is used by the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDockerVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrDockerVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExternalLoadbalancerId: The ID of the Server Load Balancer (SLB) instance that is used for the Ingress of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExternalLoadbalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrExternalLoadbalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InitVersion: The Kubernetes version that is initially used by the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInitVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrInitVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintenanceWindow: The maintenance window of the cluster.
         * <p>
         * This feature is available in only professional managed Kubernetes clusters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintenanceWindow() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintenanceWindow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterUrl: The address of the cluster.
         * <p>
         * It includes an internal endpoint and a public endpoint.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MetaData: The metadata of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetaData() {
            return software.amazon.jsii.Kernel.get(this, "attrMetaData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Name: The name of the cluster.
         * <p>
         * The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkMode: The network mode of the cluster.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>classic: the classic network</li>
         * <li>vpc: virtual private cloud (VPC)</li>
         * <li>overlay: overlay network</li>
         * <li>calico: network powered by Calico
         * Default value: vpc.</li>
         * </ul>
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkMode() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NextVersion: The Kubernetes version to which the cluster can be upgraded.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNextVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrNextVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Parameters: A collection of cluster ROS parameters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateZone: Indicates whether Alibaba Cloud DNS PrivateZone is enabled.
         * <p>
         * <ul>
         * <li>true: indicates that Alibaba Cloud DNS PrivateZone is enabled.- false: indicates that Alibaba Cloud DNS PrivateZone is not enabled.</li>
         * </ul>
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateZone() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Profile: Indicates the scenario in which the cluster is used.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Default: indicates that the cluster is used in non-edge computing scenarios.</li>
         * <li>Edge: indicates that the ACK cluster is used in edge computing scenarios.</li>
         * </ul>
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProfile() {
            return software.amazon.jsii.Kernel.get(this, "attrProfile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionId: The ID of the region where the cluster is deployed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the cluster belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupId: The ID of the security group to which the instances of the cluster belong.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceCidr: The cluster service cidr.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Size: The number of nodes in the cluster.
         * <p>
         * Master nodes and worker nodes are included.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSize() {
            return software.amazon.jsii.Kernel.get(this, "attrSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute State: The state of the cluster.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>initial: The cluster is being created.</li>
         * <li>failed: The cluster failed to be created.</li>
         * <li>running: The cluster is running.</li>
         * <li>updating: The cluster is being upgraded.</li>
         * <li>updating_failed: The cluster failed to be upgraded.</li>
         * <li>scaling: The cluster is being scaled.</li>
         * <li>waiting: The registered cluster is waiting for connecting.</li>
         * <li>disconnected: The registeredcluster is disconnected.</li>
         * <li>stopped: The cluster is stopped.</li>
         * <li>deleting: The cluster is being deleted.</li>
         * <li>deleted: The cluster is deleted.</li>
         * <li>delete_failed: The cluster failed to be deleted.</li>
         * </ul>
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrState() {
            return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SubnetCidr: The pod CIDR block.
         * <p>
         * It must be a valid and private CIDR block, and must be one of the following CIDR blocks or their subnets:
         * <p>
         * <ul>
         * <li>10.0.0.0/8</li>
         * <li>172.16-31.0.0/12-16</li>
         * <li>192.168.0.0/16
         * The pod CIDR block cannot overlap with that of the VPC or those of the ACK clusters that are deployed in the VPC. For more information about the network segmentation of ACK clusters, see Plan CIDR blocks for ACK clusters in a VPC.</li>
         * </ul>
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubnetCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrSubnetCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The labels of the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Updated: The time when the cluster was updated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdated() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdated", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the VPC where the cluster is deployed.
         * <p>
         * This parameter is required when you create an ACK cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The IDs of the vSwitches.
         * <p>
         * You can select one to three vSwitches when you create an ACK cluster. vSwitches in different zones are recommended to ensure high availability.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchIds: The list of cluster control plane VSwitch ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchIds() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkerRamRoleName: The name of the worker RAM role.
         * <p>
         * The RAM role is assigned to the worker nodes of the cluster and allows the worker nodes to manage Elastic Compute Service (ECS) instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkerRamRoleName() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkerRamRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The ID of the zone where the cluster is deployed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.datasource.KubernetesClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.datasource.KubernetesClusterProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IKubernetesCluster}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IKubernetesCluster, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute ClusterId: Cluster instance ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterSpec: The type of the managed Kubernetes cluster.
         * <p>
         * This parameter is returned for a managed Kubernetes cluster. Valid values:
         * <p>
         * <ul>
         * <li>ack.pro.small: professional managed Kubernetes cluster.</li>
         * <li>ack.standard: standard managed Kubernetes cluster.</li>
         * </ul>
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClusterType: The type of the cluster.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Kubernetes: dedicated Kubernetes cluster</li>
         * <li>ManagedKubernetes: managed Kubernetes cluster</li>
         * <li>Ask: ASK cluster</li>
         * <li>ExternalKubernetes: registered external Kubernetes cluster</li>
         * </ul>
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType() {
            return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Created: The time when the cluster was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreated() {
            return software.amazon.jsii.Kernel.get(this, "attrCreated", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CurrentVersion: The current Kubernetes version of the cluster.
         * <p>
         * For more information about the Kubernetes versions supported by ACK, see Release notes for Kubernetes versions.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrCurrentVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeletionProtection: Indicates whether deletion protection is enabled.
         * <p>
         * If deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling the API. Valid values:
         * <p>
         * <ul>
         * <li>true: Deletion protection is enabled. You cannot delete the cluster in the ACK console or by calling the API.</li>
         * <li>false: Deletion protection is not enabled. You can delete the cluster in the ACK console or by calling the API.</li>
         * </ul>
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DockerVersion: The Docker version that is used by the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDockerVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrDockerVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExternalLoadbalancerId: The ID of the Server Load Balancer (SLB) instance that is used for the Ingress of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExternalLoadbalancerId() {
            return software.amazon.jsii.Kernel.get(this, "attrExternalLoadbalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InitVersion: The Kubernetes version that is initially used by the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInitVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrInitVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintenanceWindow: The maintenance window of the cluster.
         * <p>
         * This feature is available in only professional managed Kubernetes clusters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintenanceWindow() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintenanceWindow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterUrl: The address of the cluster.
         * <p>
         * It includes an internal endpoint and a public endpoint.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MetaData: The metadata of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetaData() {
            return software.amazon.jsii.Kernel.get(this, "attrMetaData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Name: The name of the cluster.
         * <p>
         * The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkMode: The network mode of the cluster.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>classic: the classic network</li>
         * <li>vpc: virtual private cloud (VPC)</li>
         * <li>overlay: overlay network</li>
         * <li>calico: network powered by Calico
         * Default value: vpc.</li>
         * </ul>
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkMode() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NextVersion: The Kubernetes version to which the cluster can be upgraded.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNextVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrNextVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Parameters: A collection of cluster ROS parameters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateZone: Indicates whether Alibaba Cloud DNS PrivateZone is enabled.
         * <p>
         * <ul>
         * <li>true: indicates that Alibaba Cloud DNS PrivateZone is enabled.- false: indicates that Alibaba Cloud DNS PrivateZone is not enabled.</li>
         * </ul>
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateZone() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Profile: Indicates the scenario in which the cluster is used.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Default: indicates that the cluster is used in non-edge computing scenarios.</li>
         * <li>Edge: indicates that the ACK cluster is used in edge computing scenarios.</li>
         * </ul>
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProfile() {
            return software.amazon.jsii.Kernel.get(this, "attrProfile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegionId: The ID of the region where the cluster is deployed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegionId() {
            return software.amazon.jsii.Kernel.get(this, "attrRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the cluster belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupId: The ID of the security group to which the instances of the cluster belong.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceCidr: The cluster service cidr.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Size: The number of nodes in the cluster.
         * <p>
         * Master nodes and worker nodes are included.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSize() {
            return software.amazon.jsii.Kernel.get(this, "attrSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute State: The state of the cluster.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>initial: The cluster is being created.</li>
         * <li>failed: The cluster failed to be created.</li>
         * <li>running: The cluster is running.</li>
         * <li>updating: The cluster is being upgraded.</li>
         * <li>updating_failed: The cluster failed to be upgraded.</li>
         * <li>scaling: The cluster is being scaled.</li>
         * <li>waiting: The registered cluster is waiting for connecting.</li>
         * <li>disconnected: The registeredcluster is disconnected.</li>
         * <li>stopped: The cluster is stopped.</li>
         * <li>deleting: The cluster is being deleted.</li>
         * <li>deleted: The cluster is deleted.</li>
         * <li>delete_failed: The cluster failed to be deleted.</li>
         * </ul>
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrState() {
            return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SubnetCidr: The pod CIDR block.
         * <p>
         * It must be a valid and private CIDR block, and must be one of the following CIDR blocks or their subnets:
         * <p>
         * <ul>
         * <li>10.0.0.0/8</li>
         * <li>172.16-31.0.0/12-16</li>
         * <li>192.168.0.0/16
         * The pod CIDR block cannot overlap with that of the VPC or those of the ACK clusters that are deployed in the VPC. For more information about the network segmentation of ACK clusters, see Plan CIDR blocks for ACK clusters in a VPC.</li>
         * </ul>
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubnetCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrSubnetCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The labels of the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Updated: The time when the cluster was updated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdated() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdated", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the VPC where the cluster is deployed.
         * <p>
         * This parameter is required when you create an ACK cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The IDs of the vSwitches.
         * <p>
         * You can select one to three vSwitches when you create an ACK cluster. vSwitches in different zones are recommended to ensure high availability.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchIds: The list of cluster control plane VSwitch ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchIds() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkerRamRoleName: The name of the worker RAM role.
         * <p>
         * The RAM role is assigned to the worker nodes of the cluster and allows the worker nodes to manage Elastic Compute Service (ECS) instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkerRamRoleName() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkerRamRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The ID of the zone where the cluster is deployed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.datasource.KubernetesClusterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.datasource.KubernetesClusterProps.class));
        }
    }
}
