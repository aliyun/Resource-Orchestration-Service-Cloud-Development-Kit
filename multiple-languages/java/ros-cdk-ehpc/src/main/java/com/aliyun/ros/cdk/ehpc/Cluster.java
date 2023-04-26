package com.aliyun.ros.cdk.ehpc;

/**
 * A ROS resource type:  `ALIYUN::EHPC::Cluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:50.659Z")
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
         * Property ecsOrderComputeCount: Computing node number, which ranges from: 0-99.
         * <p>
         * @return {@code this}
         * @param ecsOrderComputeCount Property ecsOrderComputeCount: Computing node number, which ranges from: 0-99. This parameter is required.
         */
        public Builder ecsOrderComputeCount(final java.lang.Number ecsOrderComputeCount) {
            this.props.ecsOrderComputeCount(ecsOrderComputeCount);
            return this;
        }
        /**
         * Property ecsOrderComputeCount: Computing node number, which ranges from: 0-99.
         * <p>
         * @return {@code this}
         * @param ecsOrderComputeCount Property ecsOrderComputeCount: Computing node number, which ranges from: 0-99. This parameter is required.
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
         * Property accountType: The service type of the domain account.
         * <p>
         * Valid values:
         * nis
         * ldap
         * Default value: nis
         * <p>
         * @return {@code this}
         * @param accountType Property accountType: The service type of the domain account. This parameter is required.
         */
        public Builder accountType(final java.lang.String accountType) {
            this.props.accountType(accountType);
            return this;
        }
        /**
         * Property accountType: The service type of the domain account.
         * <p>
         * Valid values:
         * nis
         * ldap
         * Default value: nis
         * <p>
         * @return {@code this}
         * @param accountType Property accountType: The service type of the domain account. This parameter is required.
         */
        public Builder accountType(final com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.props.accountType(accountType);
            return this;
        }

        /**
         * Property additionalVolumes:.
         * <p>
         * @return {@code this}
         * @param additionalVolumes Property additionalVolumes:. This parameter is required.
         */
        public Builder additionalVolumes(final com.aliyun.ros.cdk.core.IResolvable additionalVolumes) {
            this.props.additionalVolumes(additionalVolumes);
            return this;
        }
        /**
         * Property additionalVolumes:.
         * <p>
         * @return {@code this}
         * @param additionalVolumes Property additionalVolumes:. This parameter is required.
         */
        public Builder additionalVolumes(final java.util.List<? extends java.lang.Object> additionalVolumes) {
            this.props.additionalVolumes(additionalVolumes);
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
         * Property clientVersion: The version of the E-HPC client.
         * <p>
         * By default, the parameter is set to the latest version number.
         * You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
         * <p>
         * @return {@code this}
         * @param clientVersion Property clientVersion: The version of the E-HPC client. This parameter is required.
         */
        public Builder clientVersion(final java.lang.String clientVersion) {
            this.props.clientVersion(clientVersion);
            return this;
        }
        /**
         * Property clientVersion: The version of the E-HPC client.
         * <p>
         * By default, the parameter is set to the latest version number.
         * You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
         * <p>
         * @return {@code this}
         * @param clientVersion Property clientVersion: The version of the E-HPC client. This parameter is required.
         */
        public Builder clientVersion(final com.aliyun.ros.cdk.core.IResolvable clientVersion) {
            this.props.clientVersion(clientVersion);
            return this;
        }

        /**
         * Property computeEnableHt: Specifies whether the compute nodes support hyper-threading.
         * <p>
         * Valid values:
         * true: Hyper-threading is supported.
         * false: Hyper-threading is not supported.
         * Default value: true
         * <p>
         * @return {@code this}
         * @param computeEnableHt Property computeEnableHt: Specifies whether the compute nodes support hyper-threading. This parameter is required.
         */
        public Builder computeEnableHt(final java.lang.Boolean computeEnableHt) {
            this.props.computeEnableHt(computeEnableHt);
            return this;
        }
        /**
         * Property computeEnableHt: Specifies whether the compute nodes support hyper-threading.
         * <p>
         * Valid values:
         * true: Hyper-threading is supported.
         * false: Hyper-threading is not supported.
         * Default value: true
         * <p>
         * @return {@code this}
         * @param computeEnableHt Property computeEnableHt: Specifies whether the compute nodes support hyper-threading. This parameter is required.
         */
        public Builder computeEnableHt(final com.aliyun.ros.cdk.core.IResolvable computeEnableHt) {
            this.props.computeEnableHt(computeEnableHt);
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
         * Property deployMode: The mode in which the cluster is deployed.
         * <p>
         * Valid values:
         * Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
         * Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
         * Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
         * Default value: Standard
         * <p>
         * @return {@code this}
         * @param deployMode Property deployMode: The mode in which the cluster is deployed. This parameter is required.
         */
        public Builder deployMode(final java.lang.String deployMode) {
            this.props.deployMode(deployMode);
            return this;
        }
        /**
         * Property deployMode: The mode in which the cluster is deployed.
         * <p>
         * Valid values:
         * Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
         * Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
         * Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
         * Default value: Standard
         * <p>
         * @return {@code this}
         * @param deployMode Property deployMode: The mode in which the cluster is deployed. This parameter is required.
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
         * Property ecsOrderManagerCount: Control node number can be 1, 2.
         * <p>
         * @return {@code this}
         * @param ecsOrderManagerCount Property ecsOrderManagerCount: Control node number can be 1, 2. This parameter is required.
         */
        public Builder ecsOrderManagerCount(final java.lang.Number ecsOrderManagerCount) {
            this.props.ecsOrderManagerCount(ecsOrderManagerCount);
            return this;
        }
        /**
         * Property ecsOrderManagerCount: Control node number can be 1, 2.
         * <p>
         * @return {@code this}
         * @param ecsOrderManagerCount Property ecsOrderManagerCount: Control node number can be 1, 2. This parameter is required.
         */
        public Builder ecsOrderManagerCount(final com.aliyun.ros.cdk.core.IResolvable ecsOrderManagerCount) {
            this.props.ecsOrderManagerCount(ecsOrderManagerCount);
            return this;
        }

        /**
         * Property ehpcVersion: The version of E-HPC.
         * <p>
         * By default, the parameter is set to the latest version number.
         * <p>
         * @return {@code this}
         * @param ehpcVersion Property ehpcVersion: The version of E-HPC. This parameter is required.
         */
        public Builder ehpcVersion(final java.lang.String ehpcVersion) {
            this.props.ehpcVersion(ehpcVersion);
            return this;
        }
        /**
         * Property ehpcVersion: The version of E-HPC.
         * <p>
         * By default, the parameter is set to the latest version number.
         * <p>
         * @return {@code this}
         * @param ehpcVersion Property ehpcVersion: The version of E-HPC. This parameter is required.
         */
        public Builder ehpcVersion(final com.aliyun.ros.cdk.core.IResolvable ehpcVersion) {
            this.props.ehpcVersion(ehpcVersion);
            return this;
        }

        /**
         * Property haEnable: Specifies whether to enable the high availability feature.
         * <p>
         * Valid values:
         * true: enables the high availability feature
         * false: disables the high availability feature
         * Default value: false
         * Note If high availability is enabled, primary management nodes and secondary management nodes are used.
         * <p>
         * @return {@code this}
         * @param haEnable Property haEnable: Specifies whether to enable the high availability feature. This parameter is required.
         */
        public Builder haEnable(final java.lang.Boolean haEnable) {
            this.props.haEnable(haEnable);
            return this;
        }
        /**
         * Property haEnable: Specifies whether to enable the high availability feature.
         * <p>
         * Valid values:
         * true: enables the high availability feature
         * false: disables the high availability feature
         * Default value: false
         * Note If high availability is enabled, primary management nodes and secondary management nodes are used.
         * <p>
         * @return {@code this}
         * @param haEnable Property haEnable: Specifies whether to enable the high availability feature. This parameter is required.
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
         * Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
         * <p>
         * @return {@code this}
         * @param inputFileUrl Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket. This parameter is required.
         */
        public Builder inputFileUrl(final java.lang.String inputFileUrl) {
            this.props.inputFileUrl(inputFileUrl);
            return this;
        }
        /**
         * Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
         * <p>
         * @return {@code this}
         * @param inputFileUrl Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket. This parameter is required.
         */
        public Builder inputFileUrl(final com.aliyun.ros.cdk.core.IResolvable inputFileUrl) {
            this.props.inputFileUrl(inputFileUrl);
            return this;
        }

        /**
         * Property isComputeEss: Specifies whether to enable auto scaling.
         * <p>
         * Valid values:
         * true: enables auto scaling
         * false: disables auto scaling
         * Default value: false
         * <p>
         * @return {@code this}
         * @param isComputeEss Property isComputeEss: Specifies whether to enable auto scaling. This parameter is required.
         */
        public Builder isComputeEss(final java.lang.Boolean isComputeEss) {
            this.props.isComputeEss(isComputeEss);
            return this;
        }
        /**
         * Property isComputeEss: Specifies whether to enable auto scaling.
         * <p>
         * Valid values:
         * true: enables auto scaling
         * false: disables auto scaling
         * Default value: false
         * <p>
         * @return {@code this}
         * @param isComputeEss Property isComputeEss: Specifies whether to enable auto scaling. This parameter is required.
         */
        public Builder isComputeEss(final com.aliyun.ros.cdk.core.IResolvable isComputeEss) {
            this.props.isComputeEss(isComputeEss);
            return this;
        }

        /**
         * Property jobQueue: 	The queue to which the compute nodes are added.
         * <p>
         * @return {@code this}
         * @param jobQueue Property jobQueue: 	The queue to which the compute nodes are added. This parameter is required.
         */
        public Builder jobQueue(final java.lang.String jobQueue) {
            this.props.jobQueue(jobQueue);
            return this;
        }
        /**
         * Property jobQueue: 	The queue to which the compute nodes are added.
         * <p>
         * @return {@code this}
         * @param jobQueue Property jobQueue: 	The queue to which the compute nodes are added. This parameter is required.
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
         * Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC).
         * <p>
         * Valid values:
         * true: enables VNC
         * false: disables VNC
         * Default value: false
         * <p>
         * @return {@code this}
         * @param remoteVisEnable Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC). This parameter is required.
         */
        public Builder remoteVisEnable(final java.lang.Boolean remoteVisEnable) {
            this.props.remoteVisEnable(remoteVisEnable);
            return this;
        }
        /**
         * Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC).
         * <p>
         * Valid values:
         * true: enables VNC
         * false: disables VNC
         * Default value: false
         * <p>
         * @return {@code this}
         * @param remoteVisEnable Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC). This parameter is required.
         */
        public Builder remoteVisEnable(final com.aliyun.ros.cdk.core.IResolvable remoteVisEnable) {
            this.props.remoteVisEnable(remoteVisEnable);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * You can call the ListResourceGroups operation to obtain the ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * You can call the ListResourceGroups operation to obtain the ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
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
         * Property schedulerType: The type of the scheduler.
         * <p>
         * Valid values:
         * pbs
         * slurm
         * opengridscheduler
         * deadline
         * Default value: pbs
         * <p>
         * @return {@code this}
         * @param schedulerType Property schedulerType: The type of the scheduler. This parameter is required.
         */
        public Builder schedulerType(final java.lang.String schedulerType) {
            this.props.schedulerType(schedulerType);
            return this;
        }
        /**
         * Property schedulerType: The type of the scheduler.
         * <p>
         * Valid values:
         * pbs
         * slurm
         * opengridscheduler
         * deadline
         * Default value: pbs
         * <p>
         * @return {@code this}
         * @param schedulerType Property schedulerType: The type of the scheduler. This parameter is required.
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
         * Property systemDiskLevel: The performance level of the ESSD that is created as the system disk.
         * <p>
         * Valid values:
         * PL0: A single ESSD can deliver up to 10,000 input/output operations per second (IOPS) of random read/write.
         * PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write.
         * PL2: A single ESSD can deliver up to 100,000 IOPS of random read/write.
         * PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read/write.
         * Default value: PL1
         * <p>
         * @return {@code this}
         * @param systemDiskLevel Property systemDiskLevel: The performance level of the ESSD that is created as the system disk. This parameter is required.
         */
        public Builder systemDiskLevel(final java.lang.String systemDiskLevel) {
            this.props.systemDiskLevel(systemDiskLevel);
            return this;
        }
        /**
         * Property systemDiskLevel: The performance level of the ESSD that is created as the system disk.
         * <p>
         * Valid values:
         * PL0: A single ESSD can deliver up to 10,000 input/output operations per second (IOPS) of random read/write.
         * PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write.
         * PL2: A single ESSD can deliver up to 100,000 IOPS of random read/write.
         * PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read/write.
         * Default value: PL1
         * <p>
         * @return {@code this}
         * @param systemDiskLevel Property systemDiskLevel: The performance level of the ESSD that is created as the system disk. This parameter is required.
         */
        public Builder systemDiskLevel(final com.aliyun.ros.cdk.core.IResolvable systemDiskLevel) {
            this.props.systemDiskLevel(systemDiskLevel);
            return this;
        }

        /**
         * Property systemDiskSize: The size of the system disk.
         * <p>
         * Unit: GB
         * Valid values: 40 to 500
         * Default value: 40
         * <p>
         * @return {@code this}
         * @param systemDiskSize Property systemDiskSize: The size of the system disk. This parameter is required.
         */
        public Builder systemDiskSize(final java.lang.Number systemDiskSize) {
            this.props.systemDiskSize(systemDiskSize);
            return this;
        }
        /**
         * Property systemDiskSize: The size of the system disk.
         * <p>
         * Unit: GB
         * Valid values: 40 to 500
         * Default value: 40
         * <p>
         * @return {@code this}
         * @param systemDiskSize Property systemDiskSize: The size of the system disk. This parameter is required.
         */
        public Builder systemDiskSize(final com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.props.systemDiskSize(systemDiskSize);
            return this;
        }

        /**
         * Property systemDiskType: The type of the system disk.
         * <p>
         * Valid values:
         * cloud_efficiency: ultra disk.
         * cloud_ssd: SSD.
         * cloud_essd: ESSD.
         * Default value: cloud_ssd
         * <p>
         * @return {@code this}
         * @param systemDiskType Property systemDiskType: The type of the system disk. This parameter is required.
         */
        public Builder systemDiskType(final java.lang.String systemDiskType) {
            this.props.systemDiskType(systemDiskType);
            return this;
        }
        /**
         * Property systemDiskType: The type of the system disk.
         * <p>
         * Valid values:
         * cloud_efficiency: ultra disk.
         * cloud_ssd: SSD.
         * cloud_essd: ESSD.
         * Default value: cloud_ssd
         * <p>
         * @return {@code this}
         * @param systemDiskType Property systemDiskType: The type of the system disk. This parameter is required.
         */
        public Builder systemDiskType(final com.aliyun.ros.cdk.core.IResolvable systemDiskType) {
            this.props.systemDiskType(systemDiskType);
            return this;
        }

        /**
         * Property volumeId: The ID of the file system.
         * <p>
         * If you leave the parameter empty, a Performance NAS file system is created by default.
         * <p>
         * @return {@code this}
         * @param volumeId Property volumeId: The ID of the file system. This parameter is required.
         */
        public Builder volumeId(final java.lang.String volumeId) {
            this.props.volumeId(volumeId);
            return this;
        }
        /**
         * Property volumeId: The ID of the file system.
         * <p>
         * If you leave the parameter empty, a Performance NAS file system is created by default.
         * <p>
         * @return {@code this}
         * @param volumeId Property volumeId: The ID of the file system. This parameter is required.
         */
        public Builder volumeId(final com.aliyun.ros.cdk.core.IResolvable volumeId) {
            this.props.volumeId(volumeId);
            return this;
        }

        /**
         * Property volumeMountpoint: The mount target of the file system.
         * <p>
         * Take note of the following information:
         * If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
         * If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
         * <p>
         * @return {@code this}
         * @param volumeMountpoint Property volumeMountpoint: The mount target of the file system. This parameter is required.
         */
        public Builder volumeMountpoint(final java.lang.String volumeMountpoint) {
            this.props.volumeMountpoint(volumeMountpoint);
            return this;
        }
        /**
         * Property volumeMountpoint: The mount target of the file system.
         * <p>
         * Take note of the following information:
         * If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
         * If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
         * <p>
         * @return {@code this}
         * @param volumeMountpoint Property volumeMountpoint: The mount target of the file system. This parameter is required.
         */
        public Builder volumeMountpoint(final com.aliyun.ros.cdk.core.IResolvable volumeMountpoint) {
            this.props.volumeMountpoint(volumeMountpoint);
            return this;
        }

        /**
         * Property volumeProtocol: The type of the protocol that is used by the file system.
         * <p>
         * Valid values:
         * nfs
         * smb
         * Default value: nfs
         * <p>
         * @return {@code this}
         * @param volumeProtocol Property volumeProtocol: The type of the protocol that is used by the file system. This parameter is required.
         */
        public Builder volumeProtocol(final java.lang.String volumeProtocol) {
            this.props.volumeProtocol(volumeProtocol);
            return this;
        }
        /**
         * Property volumeProtocol: The type of the protocol that is used by the file system.
         * <p>
         * Valid values:
         * nfs
         * smb
         * Default value: nfs
         * <p>
         * @return {@code this}
         * @param volumeProtocol Property volumeProtocol: The type of the protocol that is used by the file system. This parameter is required.
         */
        public Builder volumeProtocol(final com.aliyun.ros.cdk.core.IResolvable volumeProtocol) {
            this.props.volumeProtocol(volumeProtocol);
            return this;
        }

        /**
         * Property volumeType: The type of the shared storage.
         * <p>
         * Only Apsara File Storage nas file systems are supported.
         * <p>
         * @return {@code this}
         * @param volumeType Property volumeType: The type of the shared storage. This parameter is required.
         */
        public Builder volumeType(final java.lang.String volumeType) {
            this.props.volumeType(volumeType);
            return this;
        }
        /**
         * Property volumeType: The type of the shared storage.
         * <p>
         * Only Apsara File Storage nas file systems are supported.
         * <p>
         * @return {@code this}
         * @param volumeType Property volumeType: The type of the shared storage. This parameter is required.
         */
        public Builder volumeType(final com.aliyun.ros.cdk.core.IResolvable volumeType) {
            this.props.volumeType(volumeType);
            return this;
        }

        /**
         * Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP).
         * <p>
         * Default value: false
         * <p>
         * @return {@code this}
         * @param withoutElasticIp Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP). This parameter is required.
         */
        public Builder withoutElasticIp(final java.lang.Boolean withoutElasticIp) {
            this.props.withoutElasticIp(withoutElasticIp);
            return this;
        }
        /**
         * Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP).
         * <p>
         * Default value: false
         * <p>
         * @return {@code this}
         * @param withoutElasticIp Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP). This parameter is required.
         */
        public Builder withoutElasticIp(final com.aliyun.ros.cdk.core.IResolvable withoutElasticIp) {
            this.props.withoutElasticIp(withoutElasticIp);
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
