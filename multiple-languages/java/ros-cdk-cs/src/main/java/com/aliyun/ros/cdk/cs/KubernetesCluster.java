package com.aliyun.ros.cdk.cs;

/**
 * A ROS resource type:  `ALIYUN::CS::KubernetesCluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:41.976Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.KubernetesCluster")
public class KubernetesCluster extends com.aliyun.ros.cdk.core.Resource {

    protected KubernetesCluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected KubernetesCluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CS::KubernetesCluster`.
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
    public KubernetesCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.KubernetesClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CS::KubernetesCluster`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public KubernetesCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.KubernetesClusterProps props) {
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cs.KubernetesCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cs.KubernetesCluster> {
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
        private final com.aliyun.ros.cdk.cs.KubernetesClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cs.KubernetesClusterProps.Builder();
        }

        /**
         * Property masterInstanceTypes: Master node ECS specification type code.
         * <p>
         * For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
         * List size must be 3, Instance Type can be repeated.
         * <p>
         * @return {@code this}
         * @param masterInstanceTypes Property masterInstanceTypes: Master node ECS specification type code. This parameter is required.
         */
        public Builder masterInstanceTypes(final java.util.List<? extends java.lang.Object> masterInstanceTypes) {
            this.props.masterInstanceTypes(masterInstanceTypes);
            return this;
        }
        /**
         * Property masterInstanceTypes: Master node ECS specification type code.
         * <p>
         * For more details, see Instance Type Family. Each item correspond to MasterVSwitchIds.
         * List size must be 3, Instance Type can be repeated.
         * <p>
         * @return {@code this}
         * @param masterInstanceTypes Property masterInstanceTypes: Master node ECS specification type code. This parameter is required.
         */
        public Builder masterInstanceTypes(final com.aliyun.ros.cdk.core.IResolvable masterInstanceTypes) {
            this.props.masterInstanceTypes(masterInstanceTypes);
            return this;
        }

        /**
         * Property masterVSwitchIds: Master node switch ID.
         * <p>
         * To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
         * <p>
         * @return {@code this}
         * @param masterVSwitchIds Property masterVSwitchIds: Master node switch ID. This parameter is required.
         */
        public Builder masterVSwitchIds(final java.util.List<? extends java.lang.Object> masterVSwitchIds) {
            this.props.masterVSwitchIds(masterVSwitchIds);
            return this;
        }
        /**
         * Property masterVSwitchIds: Master node switch ID.
         * <p>
         * To ensure high availability of the cluster, it is recommended that you select 3 switches and distribute them in different Availability Zones.
         * <p>
         * @return {@code this}
         * @param masterVSwitchIds Property masterVSwitchIds: Master node switch ID. This parameter is required.
         */
        public Builder masterVSwitchIds(final com.aliyun.ros.cdk.core.IResolvable masterVSwitchIds) {
            this.props.masterVSwitchIds(masterVSwitchIds);
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
         * Property workerVSwitchIds: The virtual switch ID of the worker node.
         * <p>
         * @return {@code this}
         * @param workerVSwitchIds Property workerVSwitchIds: The virtual switch ID of the worker node. This parameter is required.
         */
        public Builder workerVSwitchIds(final java.util.List<? extends java.lang.Object> workerVSwitchIds) {
            this.props.workerVSwitchIds(workerVSwitchIds);
            return this;
        }
        /**
         * Property workerVSwitchIds: The virtual switch ID of the worker node.
         * <p>
         * @return {@code this}
         * @param workerVSwitchIds Property workerVSwitchIds: The virtual switch ID of the worker node. This parameter is required.
         */
        public Builder workerVSwitchIds(final com.aliyun.ros.cdk.core.IResolvable workerVSwitchIds) {
            this.props.workerVSwitchIds(workerVSwitchIds);
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
         * Property cpuPolicy: CPU policy.
         * <p>
         * The cluster version is 1.12.6 and above supports both static and none strategies.
         * <p>
         * @return {@code this}
         * @param cpuPolicy Property cpuPolicy: CPU policy. This parameter is required.
         */
        public Builder cpuPolicy(final java.lang.String cpuPolicy) {
            this.props.cpuPolicy(cpuPolicy);
            return this;
        }
        /**
         * Property cpuPolicy: CPU policy.
         * <p>
         * The cluster version is 1.12.6 and above supports both static and none strategies.
         * <p>
         * @return {@code this}
         * @param cpuPolicy Property cpuPolicy: CPU policy. This parameter is required.
         */
        public Builder cpuPolicy(final com.aliyun.ros.cdk.core.IResolvable cpuPolicy) {
            this.props.cpuPolicy(cpuPolicy);
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
         * Property masterAutoRenew: Whether the master node automatically renews.
         * <p>
         * It takes effect when the value of MasterInstanceChargeType is PrePaid. The optional values are:
         * true: automatic renewal
         * false: do not renew automatically
         * Default to true.
         * <p>
         * @return {@code this}
         * @param masterAutoRenew Property masterAutoRenew: Whether the master node automatically renews. This parameter is required.
         */
        public Builder masterAutoRenew(final java.lang.Boolean masterAutoRenew) {
            this.props.masterAutoRenew(masterAutoRenew);
            return this;
        }
        /**
         * Property masterAutoRenew: Whether the master node automatically renews.
         * <p>
         * It takes effect when the value of MasterInstanceChargeType is PrePaid. The optional values are:
         * true: automatic renewal
         * false: do not renew automatically
         * Default to true.
         * <p>
         * @return {@code this}
         * @param masterAutoRenew Property masterAutoRenew: Whether the master node automatically renews. This parameter is required.
         */
        public Builder masterAutoRenew(final com.aliyun.ros.cdk.core.IResolvable masterAutoRenew) {
            this.props.masterAutoRenew(masterAutoRenew);
            return this;
        }

        /**
         * Property masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
         * <p>
         * @return {@code this}
         * @param masterAutoRenewPeriod Property masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1. This parameter is required.
         */
        public Builder masterAutoRenewPeriod(final java.lang.Number masterAutoRenewPeriod) {
            this.props.masterAutoRenewPeriod(masterAutoRenewPeriod);
            return this;
        }
        /**
         * Property masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
         * <p>
         * @return {@code this}
         * @param masterAutoRenewPeriod Property masterAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1. This parameter is required.
         */
        public Builder masterAutoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable masterAutoRenewPeriod) {
            this.props.masterAutoRenewPeriod(masterAutoRenewPeriod);
            return this;
        }

        /**
         * Property masterCount: Number of master instances.
         * <p>
         * The value can be 3 or 5. The default value is 3.
         * <p>
         * @return {@code this}
         * @param masterCount Property masterCount: Number of master instances. This parameter is required.
         */
        public Builder masterCount(final java.lang.Number masterCount) {
            this.props.masterCount(masterCount);
            return this;
        }
        /**
         * Property masterCount: Number of master instances.
         * <p>
         * The value can be 3 or 5. The default value is 3.
         * <p>
         * @return {@code this}
         * @param masterCount Property masterCount: Number of master instances. This parameter is required.
         */
        public Builder masterCount(final com.aliyun.ros.cdk.core.IResolvable masterCount) {
            this.props.masterCount(masterCount);
            return this;
        }

        /**
         * Property masterDataDisk: Whether the master node mounts data disks can be selected as: true: mount the data disk false: no data disk is mounted, default is false.
         * <p>
         * @return {@code this}
         * @param masterDataDisk Property masterDataDisk: Whether the master node mounts data disks can be selected as: true: mount the data disk false: no data disk is mounted, default is false. This parameter is required.
         */
        public Builder masterDataDisk(final java.lang.Boolean masterDataDisk) {
            this.props.masterDataDisk(masterDataDisk);
            return this;
        }
        /**
         * Property masterDataDisk: Whether the master node mounts data disks can be selected as: true: mount the data disk false: no data disk is mounted, default is false.
         * <p>
         * @return {@code this}
         * @param masterDataDisk Property masterDataDisk: Whether the master node mounts data disks can be selected as: true: mount the data disk false: no data disk is mounted, default is false. This parameter is required.
         */
        public Builder masterDataDisk(final com.aliyun.ros.cdk.core.IResolvable masterDataDisk) {
            this.props.masterDataDisk(masterDataDisk);
            return this;
        }

        /**
         * Property masterDataDisks: Master data disk type, size and other configuration combinations.
         * <p>
         * This parameter is valid only when the master node data disk is mounted.
         * <p>
         * @return {@code this}
         * @param masterDataDisks Property masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is required.
         */
        public Builder masterDataDisks(final com.aliyun.ros.cdk.core.IResolvable masterDataDisks) {
            this.props.masterDataDisks(masterDataDisks);
            return this;
        }
        /**
         * Property masterDataDisks: Master data disk type, size and other configuration combinations.
         * <p>
         * This parameter is valid only when the master node data disk is mounted.
         * <p>
         * @return {@code this}
         * @param masterDataDisks Property masterDataDisks: Master data disk type, size and other configuration combinations. This parameter is required.
         */
        public Builder masterDataDisks(final java.util.List<? extends java.lang.Object> masterDataDisks) {
            this.props.masterDataDisks(masterDataDisks);
            return this;
        }

        /**
         * Property masterInstanceChargeType: Master node payment type.
         * <p>
         * The optional values are:
         * PrePaid: prepaid
         * PostPaid: Pay as you go
         * Default to PostPaid.
         * <p>
         * @return {@code this}
         * @param masterInstanceChargeType Property masterInstanceChargeType: Master node payment type. This parameter is required.
         */
        public Builder masterInstanceChargeType(final java.lang.String masterInstanceChargeType) {
            this.props.masterInstanceChargeType(masterInstanceChargeType);
            return this;
        }
        /**
         * Property masterInstanceChargeType: Master node payment type.
         * <p>
         * The optional values are:
         * PrePaid: prepaid
         * PostPaid: Pay as you go
         * Default to PostPaid.
         * <p>
         * @return {@code this}
         * @param masterInstanceChargeType Property masterInstanceChargeType: Master node payment type. This parameter is required.
         */
        public Builder masterInstanceChargeType(final com.aliyun.ros.cdk.core.IResolvable masterInstanceChargeType) {
            this.props.masterInstanceChargeType(masterInstanceChargeType);
            return this;
        }

        /**
         * Property masterPeriod: The duration of the annual subscription and monthly subscription.
         * <p>
         * It takes effect when the master_instance_charge_type value is PrePaid and is a required value. The value range is:
         * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
         * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
         * Default to 1.
         * <p>
         * @return {@code this}
         * @param masterPeriod Property masterPeriod: The duration of the annual subscription and monthly subscription. This parameter is required.
         */
        public Builder masterPeriod(final java.lang.Number masterPeriod) {
            this.props.masterPeriod(masterPeriod);
            return this;
        }
        /**
         * Property masterPeriod: The duration of the annual subscription and monthly subscription.
         * <p>
         * It takes effect when the master_instance_charge_type value is PrePaid and is a required value. The value range is:
         * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
         * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
         * Default to 1.
         * <p>
         * @return {@code this}
         * @param masterPeriod Property masterPeriod: The duration of the annual subscription and monthly subscription. This parameter is required.
         */
        public Builder masterPeriod(final com.aliyun.ros.cdk.core.IResolvable masterPeriod) {
            this.props.masterPeriod(masterPeriod);
            return this;
        }

        /**
         * Property masterPeriodUnit: When you specify PrePaid, you need to specify the period.
         * <p>
         * The options are:
         * Week: Time is measured in weeks
         * Month: time in months
         * Default to Month
         * <p>
         * @return {@code this}
         * @param masterPeriodUnit Property masterPeriodUnit: When you specify PrePaid, you need to specify the period. This parameter is required.
         */
        public Builder masterPeriodUnit(final java.lang.String masterPeriodUnit) {
            this.props.masterPeriodUnit(masterPeriodUnit);
            return this;
        }
        /**
         * Property masterPeriodUnit: When you specify PrePaid, you need to specify the period.
         * <p>
         * The options are:
         * Week: Time is measured in weeks
         * Month: time in months
         * Default to Month
         * <p>
         * @return {@code this}
         * @param masterPeriodUnit Property masterPeriodUnit: When you specify PrePaid, you need to specify the period. This parameter is required.
         */
        public Builder masterPeriodUnit(final com.aliyun.ros.cdk.core.IResolvable masterPeriodUnit) {
            this.props.masterPeriodUnit(masterPeriodUnit);
            return this;
        }

        /**
         * Property masterSystemDiskCategory: Master disk system disk type.
         * <p>
         * The value includes:
         * cloud_efficiency: efficient cloud disk
         * cloud_ssd: SSD cloud disk
         * cloud_essd: ESSD cloud diskDefault to cloud_ssd.
         * <p>
         * @return {@code this}
         * @param masterSystemDiskCategory Property masterSystemDiskCategory: Master disk system disk type. This parameter is required.
         */
        public Builder masterSystemDiskCategory(final java.lang.String masterSystemDiskCategory) {
            this.props.masterSystemDiskCategory(masterSystemDiskCategory);
            return this;
        }
        /**
         * Property masterSystemDiskCategory: Master disk system disk type.
         * <p>
         * The value includes:
         * cloud_efficiency: efficient cloud disk
         * cloud_ssd: SSD cloud disk
         * cloud_essd: ESSD cloud diskDefault to cloud_ssd.
         * <p>
         * @return {@code this}
         * @param masterSystemDiskCategory Property masterSystemDiskCategory: Master disk system disk type. This parameter is required.
         */
        public Builder masterSystemDiskCategory(final com.aliyun.ros.cdk.core.IResolvable masterSystemDiskCategory) {
            this.props.masterSystemDiskCategory(masterSystemDiskCategory);
            return this;
        }

        /**
         * Property masterSystemDiskSize: Master disk system disk size in GiB.
         * <p>
         * Default to 120.
         * <p>
         * @return {@code this}
         * @param masterSystemDiskSize Property masterSystemDiskSize: Master disk system disk size in GiB. This parameter is required.
         */
        public Builder masterSystemDiskSize(final java.lang.Number masterSystemDiskSize) {
            this.props.masterSystemDiskSize(masterSystemDiskSize);
            return this;
        }
        /**
         * Property masterSystemDiskSize: Master disk system disk size in GiB.
         * <p>
         * Default to 120.
         * <p>
         * @return {@code this}
         * @param masterSystemDiskSize Property masterSystemDiskSize: Master disk system disk size in GiB. This parameter is required.
         */
        public Builder masterSystemDiskSize(final com.aliyun.ros.cdk.core.IResolvable masterSystemDiskSize) {
            this.props.masterSystemDiskSize(masterSystemDiskSize);
            return this;
        }

        /**
         * Property nodePortRange: Node service port.
         * <p>
         * The value range is [30000, 65535].
         * Default to 30000-65535.
         * <p>
         * @return {@code this}
         * @param nodePortRange Property nodePortRange: Node service port. This parameter is required.
         */
        public Builder nodePortRange(final java.lang.String nodePortRange) {
            this.props.nodePortRange(nodePortRange);
            return this;
        }
        /**
         * Property nodePortRange: Node service port.
         * <p>
         * The value range is [30000, 65535].
         * Default to 30000-65535.
         * <p>
         * @return {@code this}
         * @param nodePortRange Property nodePortRange: Node service port. This parameter is required.
         */
        public Builder nodePortRange(final com.aliyun.ros.cdk.core.IResolvable nodePortRange) {
            this.props.nodePortRange(nodePortRange);
            return this;
        }

        /**
         * Property numOfNodes: Number of worker nodes.
         * <p>
         * The range is [0,300].
         * Default to 3.
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
         * The range is [0,300].
         * Default to 3.
         * <p>
         * @return {@code this}
         * @param numOfNodes Property numOfNodes: Number of worker nodes. This parameter is required.
         */
        public Builder numOfNodes(final com.aliyun.ros.cdk.core.IResolvable numOfNodes) {
            this.props.numOfNodes(numOfNodes);
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
         * Property sshFlags: Whether to enable public network SSH login: true: open false: not open.
         * <p>
         * @return {@code this}
         * @param sshFlags Property sshFlags: Whether to enable public network SSH login: true: open false: not open. This parameter is required.
         */
        public Builder sshFlags(final java.lang.Boolean sshFlags) {
            this.props.sshFlags(sshFlags);
            return this;
        }
        /**
         * Property sshFlags: Whether to enable public network SSH login: true: open false: not open.
         * <p>
         * @return {@code this}
         * @param sshFlags Property sshFlags: Whether to enable public network SSH login: true: open false: not open. This parameter is required.
         */
        public Builder sshFlags(final com.aliyun.ros.cdk.core.IResolvable sshFlags) {
            this.props.sshFlags(sshFlags);
            return this;
        }

        /**
         * Property tags: Tag the cluster.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tag the cluster. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.cs.RosKubernetesCluster.TagsProperty> tags) {
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
         * Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes.
         * <p>
         * The optional values are:
         * true: automatic renewal
         * false: do not renew automatically
         * Default to true.
         * <p>
         * @return {@code this}
         * @param workerAutoRenew Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes. This parameter is required.
         */
        public Builder workerAutoRenew(final java.lang.Boolean workerAutoRenew) {
            this.props.workerAutoRenew(workerAutoRenew);
            return this;
        }
        /**
         * Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes.
         * <p>
         * The optional values are:
         * true: automatic renewal
         * false: do not renew automatically
         * Default to true.
         * <p>
         * @return {@code this}
         * @param workerAutoRenew Property workerAutoRenew: Whether to enable automatic renewal of Worker nodes. This parameter is required.
         */
        public Builder workerAutoRenew(final com.aliyun.ros.cdk.core.IResolvable workerAutoRenew) {
            this.props.workerAutoRenew(workerAutoRenew);
            return this;
        }

        /**
         * Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
         * <p>
         * @return {@code this}
         * @param workerAutoRenewPeriod Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1. This parameter is required.
         */
        public Builder workerAutoRenewPeriod(final java.lang.Number workerAutoRenewPeriod) {
            this.props.workerAutoRenewPeriod(workerAutoRenewPeriod);
            return this;
        }
        /**
         * Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
         * <p>
         * @return {@code this}
         * @param workerAutoRenewPeriod Property workerAutoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1. This parameter is required.
         */
        public Builder workerAutoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable workerAutoRenewPeriod) {
            this.props.workerAutoRenewPeriod(workerAutoRenewPeriod);
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
         * Property workerDataDisks: A combination of configurations such as worker data disk type and size.
         * <p>
         * This parameter is valid only when the worker node data disk is mounted.
         * <p>
         * @return {@code this}
         * @param workerDataDisks Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is required.
         */
        public Builder workerDataDisks(final com.aliyun.ros.cdk.core.IResolvable workerDataDisks) {
            this.props.workerDataDisks(workerDataDisks);
            return this;
        }
        /**
         * Property workerDataDisks: A combination of configurations such as worker data disk type and size.
         * <p>
         * This parameter is valid only when the worker node data disk is mounted.
         * <p>
         * @return {@code this}
         * @param workerDataDisks Property workerDataDisks: A combination of configurations such as worker data disk type and size. This parameter is required.
         */
        public Builder workerDataDisks(final java.util.List<? extends java.lang.Object> workerDataDisks) {
            this.props.workerDataDisks(workerDataDisks);
            return this;
        }

        /**
         * Property workerInstanceChargeType: Worker node payment type.
         * <p>
         * The optional values are:
         * PrePaid: prepaid
         * PostPaid: Pay as you go
         * Default to PostPaid.
         * <p>
         * @return {@code this}
         * @param workerInstanceChargeType Property workerInstanceChargeType: Worker node payment type. This parameter is required.
         */
        public Builder workerInstanceChargeType(final java.lang.String workerInstanceChargeType) {
            this.props.workerInstanceChargeType(workerInstanceChargeType);
            return this;
        }
        /**
         * Property workerInstanceChargeType: Worker node payment type.
         * <p>
         * The optional values are:
         * PrePaid: prepaid
         * PostPaid: Pay as you go
         * Default to PostPaid.
         * <p>
         * @return {@code this}
         * @param workerInstanceChargeType Property workerInstanceChargeType: Worker node payment type. This parameter is required.
         */
        public Builder workerInstanceChargeType(final com.aliyun.ros.cdk.core.IResolvable workerInstanceChargeType) {
            this.props.workerInstanceChargeType(workerInstanceChargeType);
            return this;
        }

        /**
         * Property workerPeriod: The duration of the annual and monthly subscription.
         * <p>
         * It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
         * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
         * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
         * Default to 1.
         * <p>
         * @return {@code this}
         * @param workerPeriod Property workerPeriod: The duration of the annual and monthly subscription. This parameter is required.
         */
        public Builder workerPeriod(final java.lang.Number workerPeriod) {
            this.props.workerPeriod(workerPeriod);
            return this;
        }
        /**
         * Property workerPeriod: The duration of the annual and monthly subscription.
         * <p>
         * It takes effect when the worker_instance_charge_type value is PrePaid and is required. The value range is:
         * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
         * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
         * Default to 1.
         * <p>
         * @return {@code this}
         * @param workerPeriod Property workerPeriod: The duration of the annual and monthly subscription. This parameter is required.
         */
        public Builder workerPeriod(final com.aliyun.ros.cdk.core.IResolvable workerPeriod) {
            this.props.workerPeriod(workerPeriod);
            return this;
        }

        /**
         * Property workerPeriodUnit: When you specify PrePaid, you need to specify the period.
         * <p>
         * The options are:
         * Week: Time is measured in weeks
         * Month: time in months
         * Default to Month.
         * <p>
         * @return {@code this}
         * @param workerPeriodUnit Property workerPeriodUnit: When you specify PrePaid, you need to specify the period. This parameter is required.
         */
        public Builder workerPeriodUnit(final java.lang.String workerPeriodUnit) {
            this.props.workerPeriodUnit(workerPeriodUnit);
            return this;
        }
        /**
         * Property workerPeriodUnit: When you specify PrePaid, you need to specify the period.
         * <p>
         * The options are:
         * Week: Time is measured in weeks
         * Month: time in months
         * Default to Month.
         * <p>
         * @return {@code this}
         * @param workerPeriodUnit Property workerPeriodUnit: When you specify PrePaid, you need to specify the period. This parameter is required.
         */
        public Builder workerPeriodUnit(final com.aliyun.ros.cdk.core.IResolvable workerPeriodUnit) {
            this.props.workerPeriodUnit(workerPeriodUnit);
            return this;
        }

        /**
         * Property workerSystemDiskCategory: Worker node system disk type.
         * <p>
         * The value includes:
         * cloud_efficiency: efficient cloud disk
         * cloud_ssd: SSD cloud disk
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
         * The value includes:
         * cloud_efficiency: efficient cloud disk
         * cloud_ssd: SSD cloud disk
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cs.KubernetesCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.cs.KubernetesCluster build() {
            return new com.aliyun.ros.cdk.cs.KubernetesCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
