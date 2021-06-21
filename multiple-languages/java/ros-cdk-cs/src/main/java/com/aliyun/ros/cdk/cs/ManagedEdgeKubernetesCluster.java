package com.aliyun.ros.cdk.cs;

/**
 * A ROS resource type:  `ALIYUN::CS::ManagedEdgeKubernetesCluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:42.669Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.ManagedEdgeKubernetesCluster")
public class ManagedEdgeKubernetesCluster extends com.aliyun.ros.cdk.core.Resource {

    protected ManagedEdgeKubernetesCluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ManagedEdgeKubernetesCluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CS::ManagedEdgeKubernetesCluster`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ManagedEdgeKubernetesCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ManagedEdgeKubernetesClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CS::ManagedEdgeKubernetesCluster`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ManagedEdgeKubernetesCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ManagedEdgeKubernetesClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterId: Cluster instance ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TaskId: Task ID.
     * <p>
     * Automatically assigned by the system, the user queries the task status.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute WorkerRamRoleName: Worker ram role name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWorkerRamRoleName() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkerRamRoleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cs.ManagedEdgeKubernetesCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cs.ManagedEdgeKubernetesCluster> {
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
        private final com.aliyun.ros.cdk.cs.ManagedEdgeKubernetesClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cs.ManagedEdgeKubernetesClusterProps.Builder();
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
         * Property numOfNodes: Number of worker nodes.
         * <p>
         * The range is [0,300]
         * <p>
         * @return {@code this}
         * @param numOfNodes Property numOfNodes: Number of worker nodes. This parameter is required.
         */
        public Builder numOfNodes(final java.lang.Number numOfNodes) {
            this.props.numOfNodes(numOfNodes);
            return this;
        }
        /**
         * Property numOfNodes: Number of worker nodes.
         * <p>
         * The range is [0,300]
         * <p>
         * @return {@code this}
         * @param numOfNodes Property numOfNodes: Number of worker nodes. This parameter is required.
         */
        public Builder numOfNodes(final com.aliyun.ros.cdk.core.IResolvable numOfNodes) {
            this.props.numOfNodes(numOfNodes);
            return this;
        }

        /**
         * Property addons: The add-ons to be installed for the cluster.
         * <p>
         * @return {@code this}
         * @param addons Property addons: The add-ons to be installed for the cluster. This parameter is required.
         */
        public Builder addons(final com.aliyun.ros.cdk.core.IResolvable addons) {
            this.props.addons(addons);
            return this;
        }
        /**
         * Property addons: The add-ons to be installed for the cluster.
         * <p>
         * @return {@code this}
         * @param addons Property addons: The add-ons to be installed for the cluster. This parameter is required.
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
         * Property clusterSpec: The edge managed cluster spec.
         * <p>
         * Value:
         * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
         * ack.standard: Standard hosting cluster.
         * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
         * <p>
         * @return {@code this}
         * @param clusterSpec Property clusterSpec: The edge managed cluster spec. This parameter is required.
         */
        public Builder clusterSpec(final java.lang.String clusterSpec) {
            this.props.clusterSpec(clusterSpec);
            return this;
        }
        /**
         * Property clusterSpec: The edge managed cluster spec.
         * <p>
         * Value:
         * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
         * ack.standard: Standard hosting cluster.
         * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
         * <p>
         * @return {@code this}
         * @param clusterSpec Property clusterSpec: The edge managed cluster spec. This parameter is required.
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
         * Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.
         * <p>
         * If rollback fails, resources produced during the creation process will be released. False is not recommended.
         * <p>
         * @return {@code this}
         * @param disableRollback Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true. This parameter is required.
         */
        public Builder disableRollback(final java.lang.Boolean disableRollback) {
            this.props.disableRollback(disableRollback);
            return this;
        }
        /**
         * Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.
         * <p>
         * If rollback fails, resources produced during the creation process will be released. False is not recommended.
         * <p>
         * @return {@code this}
         * @param disableRollback Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true. This parameter is required.
         */
        public Builder disableRollback(final com.aliyun.ros.cdk.core.IResolvable disableRollback) {
            this.props.disableRollback(disableRollback);
            return this;
        }

        /**
         * Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
         * <p>
         * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
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
         * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
         * <p>
         * @return {@code this}
         * @param endpointPublicAccess Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open. This parameter is required.
         */
        public Builder endpointPublicAccess(final com.aliyun.ros.cdk.core.IResolvable endpointPublicAccess) {
            this.props.endpointPublicAccess(endpointPublicAccess);
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
         * Property profile: Edge cluster ID.
         * <p>
         * The default value is Edge.
         * <p>
         * @return {@code this}
         * @param profile Property profile: Edge cluster ID. This parameter is required.
         */
        public Builder profile(final java.lang.String profile) {
            this.props.profile(profile);
            return this;
        }
        /**
         * Property profile: Edge cluster ID.
         * <p>
         * The default value is Edge.
         * <p>
         * @return {@code this}
         * @param profile Property profile: Edge cluster ID. This parameter is required.
         */
        public Builder profile(final com.aliyun.ros.cdk.core.IResolvable profile) {
            this.props.profile(profile);
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
         * Property tags: Tag the cluster.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tag the cluster. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty> tags) {
            this.props.tags(tags);
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
         * Property vpcId: VPC ID.
         * <p>
         * If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
         * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
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
         * If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
         * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchIds: The virtual switch ID of the worker node.
         * <p>
         * @return {@code this}
         * @param vSwitchIds Property vSwitchIds: The virtual switch ID of the worker node. This parameter is required.
         */
        public Builder vSwitchIds(final java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }
        /**
         * Property vSwitchIds: The virtual switch ID of the worker node.
         * <p>
         * @return {@code this}
         * @param vSwitchIds Property vSwitchIds: The virtual switch ID of the worker node. This parameter is required.
         */
        public Builder vSwitchIds(final com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }

        /**
         * Property workerDataDisk: Whether to mount the data disk.
         * <p>
         * The options are as follows:
         * true: indicates that the worker node mounts data disks.
         * false: indicates that the worker node does not mount data disks.
         * Default to false.
         * <p>
         * @return {@code this}
         * @param workerDataDisk Property workerDataDisk: Whether to mount the data disk. This parameter is required.
         */
        public Builder workerDataDisk(final java.lang.Boolean workerDataDisk) {
            this.props.workerDataDisk(workerDataDisk);
            return this;
        }
        /**
         * Property workerDataDisk: Whether to mount the data disk.
         * <p>
         * The options are as follows:
         * true: indicates that the worker node mounts data disks.
         * false: indicates that the worker node does not mount data disks.
         * Default to false.
         * <p>
         * @return {@code this}
         * @param workerDataDisk Property workerDataDisk: Whether to mount the data disk. This parameter is required.
         */
        public Builder workerDataDisk(final com.aliyun.ros.cdk.core.IResolvable workerDataDisk) {
            this.props.workerDataDisk(workerDataDisk);
            return this;
        }

        /**
         * Property workerDataDiskCategory: Data disk type.
         * <p>
         * @return {@code this}
         * @param workerDataDiskCategory Property workerDataDiskCategory: Data disk type. This parameter is required.
         */
        public Builder workerDataDiskCategory(final java.lang.String workerDataDiskCategory) {
            this.props.workerDataDiskCategory(workerDataDiskCategory);
            return this;
        }
        /**
         * Property workerDataDiskCategory: Data disk type.
         * <p>
         * @return {@code this}
         * @param workerDataDiskCategory Property workerDataDiskCategory: Data disk type. This parameter is required.
         */
        public Builder workerDataDiskCategory(final com.aliyun.ros.cdk.core.IResolvable workerDataDiskCategory) {
            this.props.workerDataDiskCategory(workerDataDiskCategory);
            return this;
        }

        /**
         * Property workerDataDiskSize: Data disk size in GiB.
         * <p>
         * @return {@code this}
         * @param workerDataDiskSize Property workerDataDiskSize: Data disk size in GiB. This parameter is required.
         */
        public Builder workerDataDiskSize(final java.lang.Number workerDataDiskSize) {
            this.props.workerDataDiskSize(workerDataDiskSize);
            return this;
        }
        /**
         * Property workerDataDiskSize: Data disk size in GiB.
         * <p>
         * @return {@code this}
         * @param workerDataDiskSize Property workerDataDiskSize: Data disk size in GiB. This parameter is required.
         */
        public Builder workerDataDiskSize(final com.aliyun.ros.cdk.core.IResolvable workerDataDiskSize) {
            this.props.workerDataDiskSize(workerDataDiskSize);
            return this;
        }

        /**
         * Property workerInstanceTypes: Worker node ECS specification type code.
         * <p>
         * For more details, see Instance Specification Family.
         * <p>
         * @return {@code this}
         * @param workerInstanceTypes Property workerInstanceTypes: Worker node ECS specification type code. This parameter is required.
         */
        public Builder workerInstanceTypes(final com.aliyun.ros.cdk.core.IResolvable workerInstanceTypes) {
            this.props.workerInstanceTypes(workerInstanceTypes);
            return this;
        }
        /**
         * Property workerInstanceTypes: Worker node ECS specification type code.
         * <p>
         * For more details, see Instance Specification Family.
         * <p>
         * @return {@code this}
         * @param workerInstanceTypes Property workerInstanceTypes: Worker node ECS specification type code. This parameter is required.
         */
        public Builder workerInstanceTypes(final java.util.List<? extends java.lang.Object> workerInstanceTypes) {
            this.props.workerInstanceTypes(workerInstanceTypes);
            return this;
        }

        /**
         * Property workerSystemDiskCategory: Worker node system disk type.
         * <p>
         * Default to cloud_efficiency.
         * <p>
         * @return {@code this}
         * @param workerSystemDiskCategory Property workerSystemDiskCategory: Worker node system disk type. This parameter is required.
         */
        public Builder workerSystemDiskCategory(final java.lang.String workerSystemDiskCategory) {
            this.props.workerSystemDiskCategory(workerSystemDiskCategory);
            return this;
        }
        /**
         * Property workerSystemDiskCategory: Worker node system disk type.
         * <p>
         * Default to cloud_efficiency.
         * <p>
         * @return {@code this}
         * @param workerSystemDiskCategory Property workerSystemDiskCategory: Worker node system disk type. This parameter is required.
         */
        public Builder workerSystemDiskCategory(final com.aliyun.ros.cdk.core.IResolvable workerSystemDiskCategory) {
            this.props.workerSystemDiskCategory(workerSystemDiskCategory);
            return this;
        }

        /**
         * Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
         * <p>
         * Default to 120.
         * <p>
         * @return {@code this}
         * @param workerSystemDiskSize Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB. This parameter is required.
         */
        public Builder workerSystemDiskSize(final java.lang.Number workerSystemDiskSize) {
            this.props.workerSystemDiskSize(workerSystemDiskSize);
            return this;
        }
        /**
         * Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
         * <p>
         * Default to 120.
         * <p>
         * @return {@code this}
         * @param workerSystemDiskSize Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB. This parameter is required.
         */
        public Builder workerSystemDiskSize(final com.aliyun.ros.cdk.core.IResolvable workerSystemDiskSize) {
            this.props.workerSystemDiskSize(workerSystemDiskSize);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cs.ManagedEdgeKubernetesCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.cs.ManagedEdgeKubernetesCluster build() {
            return new com.aliyun.ros.cdk.cs.ManagedEdgeKubernetesCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
