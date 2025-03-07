package com.aliyun.ros.cdk.cs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CS::ManagedKubernetesCluster</code>, which is used to create a Container Service for Kubernetes (ACK) managed cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.449Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.ManagedKubernetesCluster")
public class ManagedKubernetesCluster extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cs.IManagedKubernetesCluster {

    protected ManagedKubernetesCluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ManagedKubernetesCluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ManagedKubernetesCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ManagedKubernetesClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ManagedKubernetesCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ManagedKubernetesClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute APIServerSLBId: The id of API server SLB.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrApiServerSlbId() {
        return software.amazon.jsii.Kernel.get(this, "attrApiServerSlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClusterId: Cluster instance ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultUserKubeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrDefaultUserKubeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IngressSLBId: The id of ingress SLB.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIngressSlbId() {
        return software.amazon.jsii.Kernel.get(this, "attrIngressSlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Nodes: The list of cluster nodes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodes() {
        return software.amazon.jsii.Kernel.get(this, "attrNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateUserKubConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateUserKubConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScalingConfigurationId: Scaling configuration id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingConfigurationId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingConfigurationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScalingGroupId: Scaling group id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScalingRuleId: Scaling rule id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TaskId: Task ID.
     * <p>
     * Automatically assigned by the system, the user queries the task status.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WorkerRamRoleName: Worker ram role name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkerRamRoleName() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkerRamRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ManagedKubernetesClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.ManagedKubernetesClusterProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cs.ManagedKubernetesCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cs.ManagedKubernetesCluster> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cs.ManagedKubernetesClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cs.ManagedKubernetesClusterProps.Builder();
        }

        /**
         * Property name: The name of the cluster.
         * <p>
         * The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the cluster. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the cluster.
         * <p>
         * The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the cluster. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property vpcId: VPC ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: VPC ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property addons: A combination of addon plugins for Kubernetes clusters.
         * <p>
         * Network plug-in: including Flannel and Terway network plug-ins
         * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
         * Ingress: The installation of the Ingress component is enabled by default.
         * <p>
         * @return {@code this}
         * @param addons Property addons: A combination of addon plugins for Kubernetes clusters. This parameter is required.
         */
        public Builder addons(final com.aliyun.ros.cdk.core.IResolvable addons) {
            this.props.addons(addons);
            return this;
        }
        /**
         * Property addons: A combination of addon plugins for Kubernetes clusters.
         * <p>
         * Network plug-in: including Flannel and Terway network plug-ins
         * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
         * Ingress: The installation of the Ingress component is enabled by default.
         * <p>
         * @return {@code this}
         * @param addons Property addons: A combination of addon plugins for Kubernetes clusters. This parameter is required.
         */
        public Builder addons(final java.util.List<? extends java.lang.Object> addons) {
            this.props.addons(addons);
            return this;
        }

        /**
         * Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
         * <p>
         * @return {@code this}
         * @param cloudMonitorFlags Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false. This parameter is required.
         */
        public Builder cloudMonitorFlags(final java.lang.Boolean cloudMonitorFlags) {
            this.props.cloudMonitorFlags(cloudMonitorFlags);
            return this;
        }
        /**
         * Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
         * <p>
         * @return {@code this}
         * @param cloudMonitorFlags Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false. This parameter is required.
         */
        public Builder cloudMonitorFlags(final com.aliyun.ros.cdk.core.IResolvable cloudMonitorFlags) {
            this.props.cloudMonitorFlags(cloudMonitorFlags);
            return this;
        }

        /**
         * Property clusterSpec: The managed cluster spec.
         * <p>
         * Value:
         * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
         * ack.standard: Standard hosting cluster.
         * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
         * <p>
         * @return {@code this}
         * @param clusterSpec Property clusterSpec: The managed cluster spec. This parameter is required.
         */
        public Builder clusterSpec(final java.lang.String clusterSpec) {
            this.props.clusterSpec(clusterSpec);
            return this;
        }
        /**
         * Property clusterSpec: The managed cluster spec.
         * <p>
         * Value:
         * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
         * ack.standard: Standard hosting cluster.
         * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
         * <p>
         * @return {@code this}
         * @param clusterSpec Property clusterSpec: The managed cluster spec. This parameter is required.
         */
        public Builder clusterSpec(final com.aliyun.ros.cdk.core.IResolvable clusterSpec) {
            this.props.clusterSpec(clusterSpec);
            return this;
        }

        /**
         * Property containerCidr: The container network segment cannot conflict with the VPC network segment.
         * <p>
         * When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
         * <p>
         * @return {@code this}
         * @param containerCidr Property containerCidr: The container network segment cannot conflict with the VPC network segment. This parameter is required.
         */
        public Builder containerCidr(final java.lang.String containerCidr) {
            this.props.containerCidr(containerCidr);
            return this;
        }
        /**
         * Property containerCidr: The container network segment cannot conflict with the VPC network segment.
         * <p>
         * When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
         * <p>
         * @return {@code this}
         * @param containerCidr Property containerCidr: The container network segment cannot conflict with the VPC network segment. This parameter is required.
         */
        public Builder containerCidr(final com.aliyun.ros.cdk.core.IResolvable containerCidr) {
            this.props.containerCidr(containerCidr);
            return this;
        }

        /**
         * Property controlPlaneLogComponents: List of target components for which logs need to be collected.
         * <p>
         * Supports apiserver, kcm, scheduler, ccm and controlplane-events.
         * <p>
         * @return {@code this}
         * @param controlPlaneLogComponents Property controlPlaneLogComponents: List of target components for which logs need to be collected. This parameter is required.
         */
        public Builder controlPlaneLogComponents(final com.aliyun.ros.cdk.core.IResolvable controlPlaneLogComponents) {
            this.props.controlPlaneLogComponents(controlPlaneLogComponents);
            return this;
        }
        /**
         * Property controlPlaneLogComponents: List of target components for which logs need to be collected.
         * <p>
         * Supports apiserver, kcm, scheduler, ccm and controlplane-events.
         * <p>
         * @return {@code this}
         * @param controlPlaneLogComponents Property controlPlaneLogComponents: List of target components for which logs need to be collected. This parameter is required.
         */
        public Builder controlPlaneLogComponents(final java.util.List<? extends java.lang.Object> controlPlaneLogComponents) {
            this.props.controlPlaneLogComponents(controlPlaneLogComponents);
            return this;
        }

        /**
         * Property controlPlaneLogProject: Control plane log project.
         * <p>
         * If this field is not set, a log service project named k8s-log-{ClusterID} will be automatically created.
         * <p>
         * @return {@code this}
         * @param controlPlaneLogProject Property controlPlaneLogProject: Control plane log project. This parameter is required.
         */
        public Builder controlPlaneLogProject(final java.lang.String controlPlaneLogProject) {
            this.props.controlPlaneLogProject(controlPlaneLogProject);
            return this;
        }
        /**
         * Property controlPlaneLogProject: Control plane log project.
         * <p>
         * If this field is not set, a log service project named k8s-log-{ClusterID} will be automatically created.
         * <p>
         * @return {@code this}
         * @param controlPlaneLogProject Property controlPlaneLogProject: Control plane log project. This parameter is required.
         */
        public Builder controlPlaneLogProject(final com.aliyun.ros.cdk.core.IResolvable controlPlaneLogProject) {
            this.props.controlPlaneLogProject(controlPlaneLogProject);
            return this;
        }

        /**
         * Property controlPlaneLogTtl: Control plane log retention duration (unit: day).
         * <p>
         * Default 30.
         * <p>
         * @return {@code this}
         * @param controlPlaneLogTtl Property controlPlaneLogTtl: Control plane log retention duration (unit: day). This parameter is required.
         */
        public Builder controlPlaneLogTtl(final java.lang.Number controlPlaneLogTtl) {
            this.props.controlPlaneLogTtl(controlPlaneLogTtl);
            return this;
        }
        /**
         * Property controlPlaneLogTtl: Control plane log retention duration (unit: day).
         * <p>
         * Default 30.
         * <p>
         * @return {@code this}
         * @param controlPlaneLogTtl Property controlPlaneLogTtl: Control plane log retention duration (unit: day). This parameter is required.
         */
        public Builder controlPlaneLogTtl(final com.aliyun.ros.cdk.core.IResolvable controlPlaneLogTtl) {
            this.props.controlPlaneLogTtl(controlPlaneLogTtl);
            return this;
        }

        /**
         * Property deleteOptions: Delete options, only work for deleting resource.
         * <p>
         * @return {@code this}
         * @param deleteOptions Property deleteOptions: Delete options, only work for deleting resource. This parameter is required.
         */
        public Builder deleteOptions(final com.aliyun.ros.cdk.core.IResolvable deleteOptions) {
            this.props.deleteOptions(deleteOptions);
            return this;
        }
        /**
         * Property deleteOptions: Delete options, only work for deleting resource.
         * <p>
         * @return {@code this}
         * @param deleteOptions Property deleteOptions: Delete options, only work for deleting resource. This parameter is required.
         */
        public Builder deleteOptions(final java.util.List<? extends java.lang.Object> deleteOptions) {
            this.props.deleteOptions(deleteOptions);
            return this;
        }

        /**
         * Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
         * <p>
         * After deletion protection is enabled, the cluster cannot be deleted
         * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
         * false: disables deletion protection for the cluster.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable deletion protection for the cluster. This parameter is required.
         */
        public Builder deletionProtection(final java.lang.Boolean deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }
        /**
         * Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
         * <p>
         * After deletion protection is enabled, the cluster cannot be deleted
         * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
         * false: disables deletion protection for the cluster.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable deletion protection for the cluster. This parameter is required.
         */
        public Builder deletionProtection(final com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }

        /**
         * Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS).
         * <p>
         * This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
         * <p>
         * @return {@code this}
         * @param encryptionProviderKey Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This parameter is required.
         */
        public Builder encryptionProviderKey(final java.lang.String encryptionProviderKey) {
            this.props.encryptionProviderKey(encryptionProviderKey);
            return this;
        }
        /**
         * Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS).
         * <p>
         * This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
         * <p>
         * @return {@code this}
         * @param encryptionProviderKey Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS). This parameter is required.
         */
        public Builder encryptionProviderKey(final com.aliyun.ros.cdk.core.IResolvable encryptionProviderKey) {
            this.props.encryptionProviderKey(encryptionProviderKey);
            return this;
        }

        /**
         * Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
         * <p>
         * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
         * <p>
         * @return {@code this}
         * @param endpointPublicAccess Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open. This parameter is required.
         */
        public Builder endpointPublicAccess(final java.lang.Boolean endpointPublicAccess) {
            this.props.endpointPublicAccess(endpointPublicAccess);
            return this;
        }
        /**
         * Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
         * <p>
         * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
         * <p>
         * @return {@code this}
         * @param endpointPublicAccess Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open. This parameter is required.
         */
        public Builder endpointPublicAccess(final com.aliyun.ros.cdk.core.IResolvable endpointPublicAccess) {
            this.props.endpointPublicAccess(endpointPublicAccess);
            return this;
        }

        /**
         * Property formatDisk: Specifies whether to mount a data disk to nodes that are created  on existing Elastic Compute Service (ECS) instances.
         * <p>
         * Valid values:
         * true: stores the data of containers and images on a data disk.
         * The original data on the disk will be overwritten.
         * Back up data before you mount the disk.
         * false: does not store the data of containers and images on a data disk.
         * Default value: false.
         * How to mount a data disk:
         * If the ECS instances have data disks mounted and the file system of the last
         * data disk is not initialized, the system automatically formats the data disk to ext4.
         * Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
         * The system does not create or mount a new data disk if no data disk has been
         * mounted to the ECS instances.
         * <p>
         * @return {@code this}
         * @param formatDisk Property formatDisk: Specifies whether to mount a data disk to nodes that are created  on existing Elastic Compute Service (ECS) instances. This parameter is required.
         */
        public Builder formatDisk(final java.lang.Boolean formatDisk) {
            this.props.formatDisk(formatDisk);
            return this;
        }
        /**
         * Property formatDisk: Specifies whether to mount a data disk to nodes that are created  on existing Elastic Compute Service (ECS) instances.
         * <p>
         * Valid values:
         * true: stores the data of containers and images on a data disk.
         * The original data on the disk will be overwritten.
         * Back up data before you mount the disk.
         * false: does not store the data of containers and images on a data disk.
         * Default value: false.
         * How to mount a data disk:
         * If the ECS instances have data disks mounted and the file system of the last
         * data disk is not initialized, the system automatically formats the data disk to ext4.
         * Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
         * The system does not create or mount a new data disk if no data disk has been
         * mounted to the ECS instances.
         * <p>
         * @return {@code this}
         * @param formatDisk Property formatDisk: Specifies whether to mount a data disk to nodes that are created  on existing Elastic Compute Service (ECS) instances. This parameter is required.
         */
        public Builder formatDisk(final com.aliyun.ros.cdk.core.IResolvable formatDisk) {
            this.props.formatDisk(formatDisk);
            return this;
        }

        /**
         * Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
         * <p>
         * This parameter takes effect only if security_group_id is left empty.
         * Note You must specify an advanced security group for a cluster that has Terway installed.
         * true: creates an advanced security group.
         * false: does not create an advanced security group.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param isEnterpriseSecurityGroup Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group. This parameter is required.
         */
        public Builder isEnterpriseSecurityGroup(final java.lang.Boolean isEnterpriseSecurityGroup) {
            this.props.isEnterpriseSecurityGroup(isEnterpriseSecurityGroup);
            return this;
        }
        /**
         * Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
         * <p>
         * This parameter takes effect only if security_group_id is left empty.
         * Note You must specify an advanced security group for a cluster that has Terway installed.
         * true: creates an advanced security group.
         * false: does not create an advanced security group.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param isEnterpriseSecurityGroup Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group. This parameter is required.
         */
        public Builder isEnterpriseSecurityGroup(final com.aliyun.ros.cdk.core.IResolvable isEnterpriseSecurityGroup) {
            this.props.isEnterpriseSecurityGroup(isEnterpriseSecurityGroup);
            return this;
        }

        /**
         * Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
         * <p>
         * true: retains the names.
         * false: does not retain the names. The new names are assigned by the system.
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param keepInstanceName Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster. This parameter is required.
         */
        public Builder keepInstanceName(final java.lang.Boolean keepInstanceName) {
            this.props.keepInstanceName(keepInstanceName);
            return this;
        }
        /**
         * Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
         * <p>
         * true: retains the names.
         * false: does not retain the names. The new names are assigned by the system.
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param keepInstanceName Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster. This parameter is required.
         */
        public Builder keepInstanceName(final com.aliyun.ros.cdk.core.IResolvable keepInstanceName) {
            this.props.keepInstanceName(keepInstanceName);
            return this;
        }

        /**
         * Property keyPair: Key pair name.
         * <p>
         * Specify one of KeyPair or LoginPassword.
         * <p>
         * @return {@code this}
         * @param keyPair Property keyPair: Key pair name. This parameter is required.
         */
        public Builder keyPair(final java.lang.String keyPair) {
            this.props.keyPair(keyPair);
            return this;
        }
        /**
         * Property keyPair: Key pair name.
         * <p>
         * Specify one of KeyPair or LoginPassword.
         * <p>
         * @return {@code this}
         * @param keyPair Property keyPair: Key pair name. This parameter is required.
         */
        public Builder keyPair(final com.aliyun.ros.cdk.core.IResolvable keyPair) {
            this.props.keyPair(keyPair);
            return this;
        }

        /**
         * Property kubernetesVersion: The version of the Kubernetes cluster.
         * <p>
         * @return {@code this}
         * @param kubernetesVersion Property kubernetesVersion: The version of the Kubernetes cluster. This parameter is required.
         */
        public Builder kubernetesVersion(final java.lang.String kubernetesVersion) {
            this.props.kubernetesVersion(kubernetesVersion);
            return this;
        }
        /**
         * Property kubernetesVersion: The version of the Kubernetes cluster.
         * <p>
         * @return {@code this}
         * @param kubernetesVersion Property kubernetesVersion: The version of the Kubernetes cluster. This parameter is required.
         */
        public Builder kubernetesVersion(final com.aliyun.ros.cdk.core.IResolvable kubernetesVersion) {
            this.props.kubernetesVersion(kubernetesVersion);
            return this;
        }

        /**
         * Property loadBalancerSpec: The specification of the Server Load Balancer instance.
         * <p>
         * Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
         * <p>
         * @return {@code this}
         * @param loadBalancerSpec Property loadBalancerSpec: The specification of the Server Load Balancer instance. This parameter is required.
         */
        public Builder loadBalancerSpec(final java.lang.String loadBalancerSpec) {
            this.props.loadBalancerSpec(loadBalancerSpec);
            return this;
        }
        /**
         * Property loadBalancerSpec: The specification of the Server Load Balancer instance.
         * <p>
         * Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
         * <p>
         * @return {@code this}
         * @param loadBalancerSpec Property loadBalancerSpec: The specification of the Server Load Balancer instance. This parameter is required.
         */
        public Builder loadBalancerSpec(final com.aliyun.ros.cdk.core.IResolvable loadBalancerSpec) {
            this.props.loadBalancerSpec(loadBalancerSpec);
            return this;
        }

        /**
         * Property loginPassword: SSH login password.
         * <p>
         * Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
         * <p>
         * @return {@code this}
         * @param loginPassword Property loginPassword: SSH login password. This parameter is required.
         */
        public Builder loginPassword(final java.lang.String loginPassword) {
            this.props.loginPassword(loginPassword);
            return this;
        }
        /**
         * Property loginPassword: SSH login password.
         * <p>
         * Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
         * <p>
         * @return {@code this}
         * @param loginPassword Property loginPassword: SSH login password. This parameter is required.
         */
        public Builder loginPassword(final com.aliyun.ros.cdk.core.IResolvable loginPassword) {
            this.props.loginPassword(loginPassword);
            return this;
        }

        /**
         * Property maintenanceWindow: Cluster maintenance window.
         * <p>
         * @return {@code this}
         * @param maintenanceWindow Property maintenanceWindow: Cluster maintenance window. This parameter is required.
         */
        public Builder maintenanceWindow(final com.aliyun.ros.cdk.core.IResolvable maintenanceWindow) {
            this.props.maintenanceWindow(maintenanceWindow);
            return this;
        }
        /**
         * Property maintenanceWindow: Cluster maintenance window.
         * <p>
         * @return {@code this}
         * @param maintenanceWindow Property maintenanceWindow: Cluster maintenance window. This parameter is required.
         */
        public Builder maintenanceWindow(final com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.MaintenanceWindowProperty maintenanceWindow) {
            this.props.maintenanceWindow(maintenanceWindow);
            return this;
        }

        /**
         * Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
         * <p>
         * This number is determined by the specified pod CIDR block.
         * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
         * <p>
         * @return {@code this}
         * @param nodeCidrMask Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes. This parameter is required.
         */
        public Builder nodeCidrMask(final java.lang.String nodeCidrMask) {
            this.props.nodeCidrMask(nodeCidrMask);
            return this;
        }
        /**
         * Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
         * <p>
         * This number is determined by the specified pod CIDR block.
         * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
         * <p>
         * @return {@code this}
         * @param nodeCidrMask Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes. This parameter is required.
         */
        public Builder nodeCidrMask(final com.aliyun.ros.cdk.core.IResolvable nodeCidrMask) {
            this.props.nodeCidrMask(nodeCidrMask);
            return this;
        }

        /**
         * Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix.
         * <p>
         * The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
         * <p>
         * <ul>
         * <li>The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.</li>
         * <li>The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param nodeNameMode Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. This parameter is required.
         */
        public Builder nodeNameMode(final java.lang.String nodeNameMode) {
            this.props.nodeNameMode(nodeNameMode);
            return this;
        }
        /**
         * Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix.
         * <p>
         * The format iscustomized,{prefix},{ip_substring},{suffix}, for example: customized,aliyun.com,5,test.
         * <p>
         * <ul>
         * <li>The prefix and suffix can contain one or more parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or digit.</li>
         * <li>The IP substring length specifies the number of digits to be truncated from the end of the node IP address. Valid values: 5 to 12. For example, if the node IP address is 192.168.0.55, the prefix is aliyun.com, the IP substring length is 5, and the suffix is test, the node name will be aliyun.com00055test.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param nodeNameMode Property nodeNameMode: A custom node name consists of a prefix, an IP substring, and a suffix. This parameter is required.
         */
        public Builder nodeNameMode(final com.aliyun.ros.cdk.core.IResolvable nodeNameMode) {
            this.props.nodeNameMode(nodeNameMode);
            return this;
        }

        /**
         * Property nodePools: The configurations of Node pools.
         * <p>
         * @return {@code this}
         * @param nodePools Property nodePools: The configurations of Node pools. This parameter is required.
         */
        public Builder nodePools(final com.aliyun.ros.cdk.core.IResolvable nodePools) {
            this.props.nodePools(nodePools);
            return this;
        }
        /**
         * Property nodePools: The configurations of Node pools.
         * <p>
         * @return {@code this}
         * @param nodePools Property nodePools: The configurations of Node pools. This parameter is required.
         */
        public Builder nodePools(final java.util.List<? extends java.lang.Object> nodePools) {
            this.props.nodePools(nodePools);
            return this;
        }

        /**
         * Property osType: The type of operating system.
         * <p>
         * Valid values:
         * Windows
         * Linux
         * Default value: Linux.
         * <p>
         * @return {@code this}
         * @param osType Property osType: The type of operating system. This parameter is required.
         */
        public Builder osType(final java.lang.String osType) {
            this.props.osType(osType);
            return this;
        }
        /**
         * Property osType: The type of operating system.
         * <p>
         * Valid values:
         * Windows
         * Linux
         * Default value: Linux.
         * <p>
         * @return {@code this}
         * @param osType Property osType: The type of operating system. This parameter is required.
         */
        public Builder osType(final com.aliyun.ros.cdk.core.IResolvable osType) {
            this.props.osType(osType);
            return this;
        }

        /**
         * Property platform: The release version of the operating system.
         * <p>
         * Valid values:
         * CentOS
         * AliyunLinux
         * QbootAliyunLinux
         * Qboot
         * Windows
         * WindowsCore
         * Default value: CentOS.
         * <p>
         * @return {@code this}
         * @param platform Property platform: The release version of the operating system. This parameter is required.
         */
        public Builder platform(final java.lang.String platform) {
            this.props.platform(platform);
            return this;
        }
        /**
         * Property platform: The release version of the operating system.
         * <p>
         * Valid values:
         * CentOS
         * AliyunLinux
         * QbootAliyunLinux
         * Qboot
         * Windows
         * WindowsCore
         * Default value: CentOS.
         * <p>
         * @return {@code this}
         * @param platform Property platform: The release version of the operating system. This parameter is required.
         */
        public Builder platform(final com.aliyun.ros.cdk.core.IResolvable platform) {
            this.props.platform(platform);
            return this;
        }

        /**
         * Property podVswitchIds: The list of pod vSwitches.
         * <p>
         * For each vSwitch that is allocated to nodes,
         * you must specify at least one pod vSwitch in the same zone.
         * The pod vSwitches cannot be the same as the node vSwitches.
         * We recommend that you set the mask length of the CIDR block to a value no
         * greater than 19 for the pod vSwitches.
         * The pod_vswitch_ids parameter is required when the Terway network
         * plug-in is selected for the cluster.
         * <p>
         * @return {@code this}
         * @param podVswitchIds Property podVswitchIds: The list of pod vSwitches. This parameter is required.
         */
        public Builder podVswitchIds(final com.aliyun.ros.cdk.core.IResolvable podVswitchIds) {
            this.props.podVswitchIds(podVswitchIds);
            return this;
        }
        /**
         * Property podVswitchIds: The list of pod vSwitches.
         * <p>
         * For each vSwitch that is allocated to nodes,
         * you must specify at least one pod vSwitch in the same zone.
         * The pod vSwitches cannot be the same as the node vSwitches.
         * We recommend that you set the mask length of the CIDR block to a value no
         * greater than 19 for the pod vSwitches.
         * The pod_vswitch_ids parameter is required when the Terway network
         * plug-in is selected for the cluster.
         * <p>
         * @return {@code this}
         * @param podVswitchIds Property podVswitchIds: The list of pod vSwitches. This parameter is required.
         */
        public Builder podVswitchIds(final java.util.List<? extends java.lang.Object> podVswitchIds) {
            this.props.podVswitchIds(podVswitchIds);
            return this;
        }

        /**
         * Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.
         * <p>
         * The default is iptables.
         * <p>
         * @return {@code this}
         * @param proxyMode Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. This parameter is required.
         */
        public Builder proxyMode(final java.lang.String proxyMode) {
            this.props.proxyMode(proxyMode);
            return this;
        }
        /**
         * Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.
         * <p>
         * The default is iptables.
         * <p>
         * @return {@code this}
         * @param proxyMode Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes. This parameter is required.
         */
        public Builder proxyMode(final com.aliyun.ros.cdk.core.IResolvable proxyMode) {
            this.props.proxyMode(proxyMode);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property runtime: The container runtime of the cluster.
         * <p>
         * The default runtime is Docker.
         * <p>
         * @return {@code this}
         * @param runtime Property runtime: The container runtime of the cluster. This parameter is required.
         */
        public Builder runtime(final com.aliyun.ros.cdk.core.IResolvable runtime) {
            this.props.runtime(runtime);
            return this;
        }
        /**
         * Property runtime: The container runtime of the cluster.
         * <p>
         * The default runtime is Docker.
         * <p>
         * @return {@code this}
         * @param runtime Property runtime: The container runtime of the cluster. This parameter is required.
         */
        public Builder runtime(final com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.RuntimeProperty runtime) {
            this.props.runtime(runtime);
            return this;
        }

        /**
         * Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property securityHardeningOs: Alibaba Cloud OS security hardening.
         * <p>
         * Value:
         * true: enables security hardening OS.
         * false: disables security hardening OS.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param securityHardeningOs Property securityHardeningOs: Alibaba Cloud OS security hardening. This parameter is required.
         */
        public Builder securityHardeningOs(final java.lang.Boolean securityHardeningOs) {
            this.props.securityHardeningOs(securityHardeningOs);
            return this;
        }
        /**
         * Property securityHardeningOs: Alibaba Cloud OS security hardening.
         * <p>
         * Value:
         * true: enables security hardening OS.
         * false: disables security hardening OS.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param securityHardeningOs Property securityHardeningOs: Alibaba Cloud OS security hardening. This parameter is required.
         */
        public Builder securityHardeningOs(final com.aliyun.ros.cdk.core.IResolvable securityHardeningOs) {
            this.props.securityHardeningOs(securityHardeningOs);
            return this;
        }

        /**
         * Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
         * <p>
         * When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
         * <p>
         * @return {@code this}
         * @param serviceCidr Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. This parameter is required.
         */
        public Builder serviceCidr(final java.lang.String serviceCidr) {
            this.props.serviceCidr(serviceCidr);
            return this;
        }
        /**
         * Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
         * <p>
         * When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
         * <p>
         * @return {@code this}
         * @param serviceCidr Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. This parameter is required.
         */
        public Builder serviceCidr(final com.aliyun.ros.cdk.core.IResolvable serviceCidr) {
            this.props.serviceCidr(serviceCidr);
            return this;
        }

        /**
         * Property snatEntry: Whether to configure SNAT for the network.
         * <p>
         * When a VPC can access the public network environment, set it to false.
         * When an existing VPC cannot access the public network environment:
         * When set to True, SNAT is configured and the public network environment can be accessed at this time.
         * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
         * Default to true.
         * <p>
         * @return {@code this}
         * @param snatEntry Property snatEntry: Whether to configure SNAT for the network. This parameter is required.
         */
        public Builder snatEntry(final java.lang.Boolean snatEntry) {
            this.props.snatEntry(snatEntry);
            return this;
        }
        /**
         * Property snatEntry: Whether to configure SNAT for the network.
         * <p>
         * When a VPC can access the public network environment, set it to false.
         * When an existing VPC cannot access the public network environment:
         * When set to True, SNAT is configured and the public network environment can be accessed at this time.
         * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
         * Default to true.
         * <p>
         * @return {@code this}
         * @param snatEntry Property snatEntry: Whether to configure SNAT for the network. This parameter is required.
         */
        public Builder snatEntry(final com.aliyun.ros.cdk.core.IResolvable snatEntry) {
            this.props.snatEntry(snatEntry);
            return this;
        }

        /**
         * Property socEnabled: Valid values: true: enables reinforcement based on classified protection.
         * <p>
         * false: disables reinforcement based on classified protection.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param socEnabled Property socEnabled: Valid values: true: enables reinforcement based on classified protection. This parameter is required.
         */
        public Builder socEnabled(final java.lang.Boolean socEnabled) {
            this.props.socEnabled(socEnabled);
            return this;
        }
        /**
         * Property socEnabled: Valid values: true: enables reinforcement based on classified protection.
         * <p>
         * false: disables reinforcement based on classified protection.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param socEnabled Property socEnabled: Valid values: true: enables reinforcement based on classified protection. This parameter is required.
         */
        public Builder socEnabled(final com.aliyun.ros.cdk.core.IResolvable socEnabled) {
            this.props.socEnabled(socEnabled);
            return this;
        }

        /**
         * Property tags: Tag the cluster.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tag the cluster. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property taint: It is used to mark nodes with taints.
         * <p>
         * It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
         * <p>
         * @return {@code this}
         * @param taint Property taint: It is used to mark nodes with taints. This parameter is required.
         */
        public Builder taint(final com.aliyun.ros.cdk.core.IResolvable taint) {
            this.props.taint(taint);
            return this;
        }
        /**
         * Property taint: It is used to mark nodes with taints.
         * <p>
         * It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
         * <p>
         * @return {@code this}
         * @param taint Property taint: It is used to mark nodes with taints. This parameter is required.
         */
        public Builder taint(final java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> taint) {
            this.props.taint(taint);
            return this;
        }

        /**
         * Property timeoutMins: Cluster resource stack creation timeout, in minutes.
         * <p>
         * The default value is 60.
         * <p>
         * @return {@code this}
         * @param timeoutMins Property timeoutMins: Cluster resource stack creation timeout, in minutes. This parameter is required.
         */
        public Builder timeoutMins(final java.lang.Number timeoutMins) {
            this.props.timeoutMins(timeoutMins);
            return this;
        }
        /**
         * Property timeoutMins: Cluster resource stack creation timeout, in minutes.
         * <p>
         * The default value is 60.
         * <p>
         * @return {@code this}
         * @param timeoutMins Property timeoutMins: Cluster resource stack creation timeout, in minutes. This parameter is required.
         */
        public Builder timeoutMins(final com.aliyun.ros.cdk.core.IResolvable timeoutMins) {
            this.props.timeoutMins(timeoutMins);
            return this;
        }

        /**
         * Property userData: The user-defined data.
         * <p>
         * [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
         * <p>
         * @return {@code this}
         * @param userData Property userData: The user-defined data. This parameter is required.
         */
        public Builder userData(final java.lang.String userData) {
            this.props.userData(userData);
            return this;
        }
        /**
         * Property userData: The user-defined data.
         * <p>
         * [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
         * <p>
         * @return {@code this}
         * @param userData Property userData: The user-defined data. This parameter is required.
         */
        public Builder userData(final com.aliyun.ros.cdk.core.IResolvable userData) {
            this.props.userData(userData);
            return this;
        }

        /**
         * Property zoneIds: Zone ids of worker node virtual switches belongs to.
         * <p>
         * @return {@code this}
         * @param zoneIds Property zoneIds: Zone ids of worker node virtual switches belongs to. This parameter is required.
         */
        public Builder zoneIds(final com.aliyun.ros.cdk.core.IResolvable zoneIds) {
            this.props.zoneIds(zoneIds);
            return this;
        }
        /**
         * Property zoneIds: Zone ids of worker node virtual switches belongs to.
         * <p>
         * @return {@code this}
         * @param zoneIds Property zoneIds: Zone ids of worker node virtual switches belongs to. This parameter is required.
         */
        public Builder zoneIds(final java.util.List<? extends java.lang.Object> zoneIds) {
            this.props.zoneIds(zoneIds);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cs.ManagedKubernetesCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.cs.ManagedKubernetesCluster build() {
            return new com.aliyun.ros.cdk.cs.ManagedKubernetesCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
