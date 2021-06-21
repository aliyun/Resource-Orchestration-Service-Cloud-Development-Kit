package com.aliyun.ros.cdk.ehpc;

/**
 * A ROS resource type:  `ALIYUN::EHPC::Cluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:43.293Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.Cluster")
public class Cluster extends com.aliyun.ros.cdk.core.Resource {

    protected Cluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Cluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::EHPC::Cluster`.
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
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.ClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::EHPC::Cluster`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.ClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterId: Cluster Id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.
     * <p>
     * You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEcsInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrEcsInfo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Name: Cluster name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SecurityGroupId: Security group ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ehpc.Cluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ehpc.Cluster> {
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
        private final com.aliyun.ros.cdk.ehpc.ClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ehpc.ClusterProps.Builder();
        }

        /**
         * Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99.
         * <p>
         * @return {@code this}
         * @param ecsOrderComputeCount Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99. This parameter is required.
         */
        public Builder ecsOrderComputeCount(final java.lang.Number ecsOrderComputeCount) {
            this.props.ecsOrderComputeCount(ecsOrderComputeCount);
            return this;
        }
        /**
         * Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99.
         * <p>
         * @return {@code this}
         * @param ecsOrderComputeCount Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99. This parameter is required.
         */
        public Builder ecsOrderComputeCount(final com.aliyun.ros.cdk.core.IResolvable ecsOrderComputeCount) {
            this.props.ecsOrderComputeCount(ecsOrderComputeCount);
            return this;
        }

        /**
         * Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
         * <p>
         * @return {@code this}
         * @param ecsOrderComputeInstanceType Property ecsOrderComputeInstanceType: Cluster computing node instance specifications. This parameter is required.
         */
        public Builder ecsOrderComputeInstanceType(final java.lang.String ecsOrderComputeInstanceType) {
            this.props.ecsOrderComputeInstanceType(ecsOrderComputeInstanceType);
            return this;
        }
        /**
         * Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
         * <p>
         * @return {@code this}
         * @param ecsOrderComputeInstanceType Property ecsOrderComputeInstanceType: Cluster computing node instance specifications. This parameter is required.
         */
        public Builder ecsOrderComputeInstanceType(final com.aliyun.ros.cdk.core.IResolvable ecsOrderComputeInstanceType) {
            this.props.ecsOrderComputeInstanceType(ecsOrderComputeInstanceType);
            return this;
        }

        /**
         * Property ecsOrderLoginCount: Login node number can only be 1.
         * <p>
         * @return {@code this}
         * @param ecsOrderLoginCount Property ecsOrderLoginCount: Login node number can only be 1. This parameter is required.
         */
        public Builder ecsOrderLoginCount(final java.lang.Number ecsOrderLoginCount) {
            this.props.ecsOrderLoginCount(ecsOrderLoginCount);
            return this;
        }
        /**
         * Property ecsOrderLoginCount: Login node number can only be 1.
         * <p>
         * @return {@code this}
         * @param ecsOrderLoginCount Property ecsOrderLoginCount: Login node number can only be 1. This parameter is required.
         */
        public Builder ecsOrderLoginCount(final com.aliyun.ros.cdk.core.IResolvable ecsOrderLoginCount) {
            this.props.ecsOrderLoginCount(ecsOrderLoginCount);
            return this;
        }

        /**
         * Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
         * <p>
         * @return {@code this}
         * @param ecsOrderLoginInstanceType Property ecsOrderLoginInstanceType: Log cluster node instance specifications. This parameter is required.
         */
        public Builder ecsOrderLoginInstanceType(final java.lang.String ecsOrderLoginInstanceType) {
            this.props.ecsOrderLoginInstanceType(ecsOrderLoginInstanceType);
            return this;
        }
        /**
         * Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
         * <p>
         * @return {@code this}
         * @param ecsOrderLoginInstanceType Property ecsOrderLoginInstanceType: Log cluster node instance specifications. This parameter is required.
         */
        public Builder ecsOrderLoginInstanceType(final com.aliyun.ros.cdk.core.IResolvable ecsOrderLoginInstanceType) {
            this.props.ecsOrderLoginInstanceType(ecsOrderLoginInstanceType);
            return this;
        }

        /**
         * Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
         * <p>
         * @return {@code this}
         * @param ecsOrderManagerInstanceType Property ecsOrderManagerInstanceType: Cluster control node instance specifications. This parameter is required.
         */
        public Builder ecsOrderManagerInstanceType(final java.lang.String ecsOrderManagerInstanceType) {
            this.props.ecsOrderManagerInstanceType(ecsOrderManagerInstanceType);
            return this;
        }
        /**
         * Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
         * <p>
         * @return {@code this}
         * @param ecsOrderManagerInstanceType Property ecsOrderManagerInstanceType: Cluster control node instance specifications. This parameter is required.
         */
        public Builder ecsOrderManagerInstanceType(final com.aliyun.ros.cdk.core.IResolvable ecsOrderManagerInstanceType) {
            this.props.ecsOrderManagerInstanceType(ecsOrderManagerInstanceType);
            return this;
        }

        /**
         * Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0.
         * <p>
         * @return {@code this}
         * @param ehpcVersion Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0. This parameter is required.
         */
        public Builder ehpcVersion(final java.lang.String ehpcVersion) {
            this.props.ehpcVersion(ehpcVersion);
            return this;
        }
        /**
         * Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0.
         * <p>
         * @return {@code this}
         * @param ehpcVersion Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0. This parameter is required.
         */
        public Builder ehpcVersion(final com.aliyun.ros.cdk.core.IResolvable ehpcVersion) {
            this.props.ehpcVersion(ehpcVersion);
            return this;
        }

        /**
         * Property name: Cluster name.
         * <p>
         * 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
         * <p>
         * @return {@code this}
         * @param name Property name: Cluster name. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: Cluster name.
         * <p>
         * 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
         * <p>
         * @return {@code this}
         * @param name Property name: Cluster name. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property osTag: Operating system image tag.
         * <p>
         * You can call ListImages API to query.
         * <p>
         * @return {@code this}
         * @param osTag Property osTag: Operating system image tag. This parameter is required.
         */
        public Builder osTag(final java.lang.String osTag) {
            this.props.osTag(osTag);
            return this;
        }
        /**
         * Property osTag: Operating system image tag.
         * <p>
         * You can call ListImages API to query.
         * <p>
         * @return {@code this}
         * @param osTag Property osTag: Operating system image tag. This parameter is required.
         */
        public Builder osTag(final com.aliyun.ros.cdk.core.IResolvable osTag) {
            this.props.osTag(osTag);
            return this;
        }

        /**
         * Property volumeId: Ali cloud NAS instance Id.
         * <p>
         * Currently it does not support automatic creation Ali cloud NAS instance.
         * <p>
         * @return {@code this}
         * @param volumeId Property volumeId: Ali cloud NAS instance Id. This parameter is required.
         */
        public Builder volumeId(final java.lang.String volumeId) {
            this.props.volumeId(volumeId);
            return this;
        }
        /**
         * Property volumeId: Ali cloud NAS instance Id.
         * <p>
         * Currently it does not support automatic creation Ali cloud NAS instance.
         * <p>
         * @return {@code this}
         * @param volumeId Property volumeId: Ali cloud NAS instance Id. This parameter is required.
         */
        public Builder volumeId(final com.aliyun.ros.cdk.core.IResolvable volumeId) {
            this.props.volumeId(volumeId);
            return this;
        }

        /**
         * Property volumeMountpoint: NAS vpc mount point.
         * <p>
         * Currently it does not support automatic creation Ali cloud NAS mount point.
         * <p>
         * @return {@code this}
         * @param volumeMountpoint Property volumeMountpoint: NAS vpc mount point. This parameter is required.
         */
        public Builder volumeMountpoint(final java.lang.String volumeMountpoint) {
            this.props.volumeMountpoint(volumeMountpoint);
            return this;
        }
        /**
         * Property volumeMountpoint: NAS vpc mount point.
         * <p>
         * Currently it does not support automatic creation Ali cloud NAS mount point.
         * <p>
         * @return {@code this}
         * @param volumeMountpoint Property volumeMountpoint: NAS vpc mount point. This parameter is required.
         */
        public Builder volumeMountpoint(final com.aliyun.ros.cdk.core.IResolvable volumeMountpoint) {
            this.props.volumeMountpoint(volumeMountpoint);
            return this;
        }

        /**
         * Property vSwitchId: VPC in switch ID.
         * <p>
         * Products currently only supports VPC network.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VPC in switch ID. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: VPC in switch ID.
         * <p>
         * Products currently only supports VPC network.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VPC in switch ID. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property accountType: Domain service account types, currently supports nis.
         * <p>
         * @return {@code this}
         * @param accountType Property accountType: Domain service account types, currently supports nis. This parameter is required.
         */
        public Builder accountType(final java.lang.String accountType) {
            this.props.accountType(accountType);
            return this;
        }
        /**
         * Property accountType: Domain service account types, currently supports nis.
         * <p>
         * @return {@code this}
         * @param accountType Property accountType: Domain service account types, currently supports nis. This parameter is required.
         */
        public Builder accountType(final com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.props.accountType(accountType);
            return this;
        }

        /**
         * Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
         * <p>
         * @return {@code this}
         * @param application Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query. This parameter is required.
         */
        public Builder application(final com.aliyun.ros.cdk.core.IResolvable application) {
            this.props.application(application);
            return this;
        }
        /**
         * Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
         * <p>
         * @return {@code this}
         * @param application Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query. This parameter is required.
         */
        public Builder application(final java.util.List<? extends java.lang.Object> application) {
            this.props.application(application);
            return this;
        }

        /**
         * Property autoRenew: true: automatic renewals;
         * <p>
         * false: no automatic renewals.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: true: automatic renewals;. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: true: automatic renewals;
         * <p>
         * false: no automatic renewals.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: true: automatic renewals;. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True. This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True. This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
         * <p>
         * @return {@code this}
         * @param computeSpotPriceLimit Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range. This parameter is required.
         */
        public Builder computeSpotPriceLimit(final java.lang.String computeSpotPriceLimit) {
            this.props.computeSpotPriceLimit(computeSpotPriceLimit);
            return this;
        }
        /**
         * Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
         * <p>
         * @return {@code this}
         * @param computeSpotPriceLimit Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range. This parameter is required.
         */
        public Builder computeSpotPriceLimit(final com.aliyun.ros.cdk.core.IResolvable computeSpotPriceLimit) {
            this.props.computeSpotPriceLimit(computeSpotPriceLimit);
            return this;
        }

        /**
         * Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.
         * <p>
         * @return {@code this}
         * @param computeSpotStrategy Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo. This parameter is required.
         */
        public Builder computeSpotStrategy(final java.lang.String computeSpotStrategy) {
            this.props.computeSpotStrategy(computeSpotStrategy);
            return this;
        }
        /**
         * Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo.
         * <p>
         * @return {@code this}
         * @param computeSpotStrategy Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo. This parameter is required.
         */
        public Builder computeSpotStrategy(final com.aliyun.ros.cdk.core.IResolvable computeSpotStrategy) {
            this.props.computeSpotStrategy(computeSpotStrategy);
            return this;
        }

        /**
         * Property deployMode: Deployment mode: Standard: account node + scheduling node + login node + computing node.
         * <p>
         * Advanced: HA mode.
         * Simple: (account + schedule) node + login node + compute node.
         * Tiny: (account + scheduling + login) node + compute node.
         * OneBox: (account + scheduling + login + compute) node + more compute nodes.
         * <p>
         * @return {@code this}
         * @param deployMode Property deployMode: Deployment mode: Standard: account node + scheduling node + login node + computing node. This parameter is required.
         */
        public Builder deployMode(final java.lang.String deployMode) {
            this.props.deployMode(deployMode);
            return this;
        }
        /**
         * Property deployMode: Deployment mode: Standard: account node + scheduling node + login node + computing node.
         * <p>
         * Advanced: HA mode.
         * Simple: (account + schedule) node + login node + compute node.
         * Tiny: (account + scheduling + login) node + compute node.
         * OneBox: (account + scheduling + login + compute) node + more compute nodes.
         * <p>
         * @return {@code this}
         * @param deployMode Property deployMode: Deployment mode: Standard: account node + scheduling node + login node + computing node. This parameter is required.
         */
        public Builder deployMode(final com.aliyun.ros.cdk.core.IResolvable deployMode) {
            this.props.deployMode(deployMode);
            return this;
        }

        /**
         * Property description: Cluster description, 2 to 128 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Cluster description, 2 to 128 characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Cluster description, 2 to 128 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Cluster description, 2 to 128 characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
         * <p>
         * @return {@code this}
         * @param ecsChargeType Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released. This parameter is required.
         */
        public Builder ecsChargeType(final java.lang.String ecsChargeType) {
            this.props.ecsChargeType(ecsChargeType);
            return this;
        }
        /**
         * Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
         * <p>
         * @return {@code this}
         * @param ecsChargeType Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released. This parameter is required.
         */
        public Builder ecsChargeType(final com.aliyun.ros.cdk.core.IResolvable ecsChargeType) {
            this.props.ecsChargeType(ecsChargeType);
            return this;
        }

        /**
         * Property ecsOrderManagerCount: Control node number can be 1, 2, 4(HA).
         * <p>
         * @return {@code this}
         * @param ecsOrderManagerCount Property ecsOrderManagerCount: Control node number can be 1, 2, 4(HA). This parameter is required.
         */
        public Builder ecsOrderManagerCount(final java.lang.Number ecsOrderManagerCount) {
            this.props.ecsOrderManagerCount(ecsOrderManagerCount);
            return this;
        }
        /**
         * Property ecsOrderManagerCount: Control node number can be 1, 2, 4(HA).
         * <p>
         * @return {@code this}
         * @param ecsOrderManagerCount Property ecsOrderManagerCount: Control node number can be 1, 2, 4(HA). This parameter is required.
         */
        public Builder ecsOrderManagerCount(final com.aliyun.ros.cdk.core.IResolvable ecsOrderManagerCount) {
            this.props.ecsOrderManagerCount(ecsOrderManagerCount);
            return this;
        }

        /**
         * Property haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.
         * <p>
         * @return {@code this}
         * @param haEnable Property haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances. This parameter is required.
         */
        public Builder haEnable(final java.lang.Boolean haEnable) {
            this.props.haEnable(haEnable);
            return this;
        }
        /**
         * Property haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.
         * <p>
         * @return {@code this}
         * @param haEnable Property haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances. This parameter is required.
         */
        public Builder haEnable(final com.aliyun.ros.cdk.core.IResolvable haEnable) {
            this.props.haEnable(haEnable);
            return this;
        }

        /**
         * Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag;
         * <p>
         * if self, others, or marketplace, ImageId is mandatory.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag;. This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }
        /**
         * Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag;
         * <p>
         * if self, others, or marketplace, ImageId is mandatory.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag;. This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * Property imageOwnerAlias: Mirror type: system, self, others or marketplace.
         * <p>
         * @return {@code this}
         * @param imageOwnerAlias Property imageOwnerAlias: Mirror type: system, self, others or marketplace. This parameter is required.
         */
        public Builder imageOwnerAlias(final java.lang.String imageOwnerAlias) {
            this.props.imageOwnerAlias(imageOwnerAlias);
            return this;
        }
        /**
         * Property imageOwnerAlias: Mirror type: system, self, others or marketplace.
         * <p>
         * @return {@code this}
         * @param imageOwnerAlias Property imageOwnerAlias: Mirror type: system, self, others or marketplace. This parameter is required.
         */
        public Builder imageOwnerAlias(final com.aliyun.ros.cdk.core.IResolvable imageOwnerAlias) {
            this.props.imageOwnerAlias(imageOwnerAlias);
            return this;
        }

        /**
         * Property jobQueue: Computing node added queue.
         * <p>
         * @return {@code this}
         * @param jobQueue Property jobQueue: Computing node added queue. This parameter is required.
         */
        public Builder jobQueue(final java.lang.String jobQueue) {
            this.props.jobQueue(jobQueue);
            return this;
        }
        /**
         * Property jobQueue: Computing node added queue.
         * <p>
         * @return {@code this}
         * @param jobQueue Property jobQueue: Computing node added queue. This parameter is required.
         */
        public Builder jobQueue(final com.aliyun.ros.cdk.core.IResolvable jobQueue) {
            this.props.jobQueue(jobQueue);
            return this;
        }

        /**
         * Property keyPairName: Key pair name.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: Key pair name. This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }
        /**
         * Property keyPairName: Key pair name.
         * <p>
         * @return {@code this}
         * @param keyPairName Property keyPairName: Key pair name. This parameter is required.
         */
        public Builder keyPairName(final com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * Property password: Root password of jump server (login node).
         * <p>
         * 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ &#64; # $% ^ &amp; * - + = | {} []:; '&lt;&gt;, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
         * <p>
         * @return {@code this}
         * @param password Property password: Root password of jump server (login node). This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * Property password: Root password of jump server (login node).
         * <p>
         * 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ &#64; # $% ^ &amp; * - + = | {} []:; '&lt;&gt;, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
         * <p>
         * @return {@code this}
         * @param password Property password: Root password of jump server (login node). This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * Property period: The purchase of long resources, units: week / month / year.
         * <p>
         * When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
         * <p>
         * @return {@code this}
         * @param period Property period: The purchase of long resources, units: week / month / year. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The purchase of long resources, units: week / month / year.
         * <p>
         * When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
         * <p>
         * @return {@code this}
         * @param period Property period: The purchase of long resources, units: week / month / year. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: The purchase of long-resources unit.
         * <p>
         * Alternatively value Week / Month / year.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The purchase of long-resources unit. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The purchase of long-resources unit.
         * <p>
         * Alternatively value Week / Month / year.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The purchase of long-resources unit. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property postInstallScript:.
         * <p>
         * @return {@code this}
         * @param postInstallScript Property postInstallScript:. This parameter is required.
         */
        public Builder postInstallScript(final com.aliyun.ros.cdk.core.IResolvable postInstallScript) {
            this.props.postInstallScript(postInstallScript);
            return this;
        }
        /**
         * Property postInstallScript:.
         * <p>
         * @return {@code this}
         * @param postInstallScript Property postInstallScript:. This parameter is required.
         */
        public Builder postInstallScript(final java.util.List<? extends java.lang.Object> postInstallScript) {
            this.props.postInstallScript(postInstallScript);
            return this;
        }

        /**
         * Property remoteDirectory: Mount shared storage remote directory.
         * <p>
         * The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
         * <p>
         * @return {@code this}
         * @param remoteDirectory Property remoteDirectory: Mount shared storage remote directory. This parameter is required.
         */
        public Builder remoteDirectory(final java.lang.String remoteDirectory) {
            this.props.remoteDirectory(remoteDirectory);
            return this;
        }
        /**
         * Property remoteDirectory: Mount shared storage remote directory.
         * <p>
         * The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
         * <p>
         * @return {@code this}
         * @param remoteDirectory Property remoteDirectory: Mount shared storage remote directory. This parameter is required.
         */
        public Builder remoteDirectory(final com.aliyun.ros.cdk.core.IResolvable remoteDirectory) {
            this.props.remoteDirectory(remoteDirectory);
            return this;
        }

        /**
         * Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
         * <p>
         * @return {@code this}
         * @param sccClusterId Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user. This parameter is required.
         */
        public Builder sccClusterId(final java.lang.String sccClusterId) {
            this.props.sccClusterId(sccClusterId);
            return this;
        }
        /**
         * Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
         * <p>
         * @return {@code this}
         * @param sccClusterId Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user. This parameter is required.
         */
        public Builder sccClusterId(final com.aliyun.ros.cdk.core.IResolvable sccClusterId) {
            this.props.sccClusterId(sccClusterId);
            return this;
        }

        /**
         * Property schedulerType: The scheduler type, currently support pbs.
         * <p>
         * @return {@code this}
         * @param schedulerType Property schedulerType: The scheduler type, currently support pbs. This parameter is required.
         */
        public Builder schedulerType(final java.lang.String schedulerType) {
            this.props.schedulerType(schedulerType);
            return this;
        }
        /**
         * Property schedulerType: The scheduler type, currently support pbs.
         * <p>
         * @return {@code this}
         * @param schedulerType Property schedulerType: The scheduler type, currently support pbs. This parameter is required.
         */
        public Builder schedulerType(final com.aliyun.ros.cdk.core.IResolvable schedulerType) {
            this.props.schedulerType(schedulerType);
            return this;
        }

        /**
         * Property securityGroupId: Security group ID.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security group ID. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: Security group ID.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Security group ID. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy.
         * <p>
         * Format Requirements Reference ECS security group name.
         * <p>
         * @return {@code this}
         * @param securityGroupName Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. This parameter is required.
         */
        public Builder securityGroupName(final java.lang.String securityGroupName) {
            this.props.securityGroupName(securityGroupName);
            return this;
        }
        /**
         * Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy.
         * <p>
         * Format Requirements Reference ECS security group name.
         * <p>
         * @return {@code this}
         * @param securityGroupName Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. This parameter is required.
         */
        public Builder securityGroupName(final com.aliyun.ros.cdk.core.IResolvable securityGroupName) {
            this.props.securityGroupName(securityGroupName);
            return this;
        }

        /**
         * Property volumeProtocol: Shared storage network protocols, currently only supports nfs.
         * <p>
         * @return {@code this}
         * @param volumeProtocol Property volumeProtocol: Shared storage network protocols, currently only supports nfs. This parameter is required.
         */
        public Builder volumeProtocol(final java.lang.String volumeProtocol) {
            this.props.volumeProtocol(volumeProtocol);
            return this;
        }
        /**
         * Property volumeProtocol: Shared storage network protocols, currently only supports nfs.
         * <p>
         * @return {@code this}
         * @param volumeProtocol Property volumeProtocol: Shared storage network protocols, currently only supports nfs. This parameter is required.
         */
        public Builder volumeProtocol(final com.aliyun.ros.cdk.core.IResolvable volumeProtocol) {
            this.props.volumeProtocol(volumeProtocol);
            return this;
        }

        /**
         * Property volumeType: Network shared storage types, currently supports only Ali cloud NAS.
         * <p>
         * @return {@code this}
         * @param volumeType Property volumeType: Network shared storage types, currently supports only Ali cloud NAS. This parameter is required.
         */
        public Builder volumeType(final java.lang.String volumeType) {
            this.props.volumeType(volumeType);
            return this;
        }
        /**
         * Property volumeType: Network shared storage types, currently supports only Ali cloud NAS.
         * <p>
         * @return {@code this}
         * @param volumeType Property volumeType: Network shared storage types, currently supports only Ali cloud NAS. This parameter is required.
         */
        public Builder volumeType(final com.aliyun.ros.cdk.core.IResolvable volumeType) {
            this.props.volumeType(volumeType);
            return this;
        }

        /**
         * Property zoneId: Available area ID.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Available area ID. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: Available area ID.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Available area ID. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ehpc.Cluster}.
         */
        @Override
        public com.aliyun.ros.cdk.ehpc.Cluster build() {
            return new com.aliyun.ros.cdk.ehpc.Cluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
