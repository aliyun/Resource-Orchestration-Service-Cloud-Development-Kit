package com.aliyun.ros.cdk.hologram;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::Hologram::Instance</code>ALIYUN::IMM::Project is used to create an Intelligent Media Management (IMM) project.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:16.638Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hologram.$Module.class, fqn = "@alicloud/ros-cdk-hologram.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hologram.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hologram.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AutoRenewal: Whether automatic renewal is enabled.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAutoRenewal() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoRenewal", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ColdStorageSize: Instance low-frequency storage space.
     * <p>
     * Unit: GB.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrColdStorageSize() {
        return software.amazon.jsii.Kernel.get(this, "attrColdStorageSize", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CommodityCode: The commodity code.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCommodityCode() {
        return software.amazon.jsii.Kernel.get(this, "attrCommodityCode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ComputeNodeCount: Number of compute nodes.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrComputeNodeCount() {
        return software.amazon.jsii.Kernel.get(this, "attrComputeNodeCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Cpu: Instance specifications.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCpu() {
        return software.amazon.jsii.Kernel.get(this, "attrCpu", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EnableHiveAccess: Whether data Lake acceleration is enabled.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnableHiveAccess() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableHiveAccess", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Endpoints: List of domain names.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpoints() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpoints", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ExpirationTime: Expiration time.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExpirationTime() {
        return software.amazon.jsii.Kernel.get(this, "attrExpirationTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute GatewayCount: Number of gateway nodes.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGatewayCount() {
        return software.amazon.jsii.Kernel.get(this, "attrGatewayCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute GatewayCpu: Cpu resources of the Gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGatewayCpu() {
        return software.amazon.jsii.Kernel.get(this, "attrGatewayCpu", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute GatewayMemory: Gateway memory resources.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGatewayMemory() {
        return software.amazon.jsii.Kernel.get(this, "attrGatewayMemory", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: Resource attribute fields that represent the resource's primary key.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceName: The name of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceOwner: The instance owner.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceOwner() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceOwner", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceType: The instance type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Memory: Memory.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMemory() {
        return software.amazon.jsii.Kernel.get(this, "attrMemory", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute StorageSize: The standard storage space of the instance.
     * <p>
     * Unit: GB.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStorageSize() {
        return software.amazon.jsii.Kernel.get(this, "attrStorageSize", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SuspendReason: Reason for suspension.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSuspendReason() {
        return software.amazon.jsii.Kernel.get(this, "attrSuspendReason", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Tags: Instance tag.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Version: The instance version.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ZoneId: The zone Id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.hologram.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hologram.Instance> {
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
        private final com.aliyun.ros.cdk.hologram.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hologram.InstanceProps.Builder();
        }

        /**
         * Property endpoints: List of domain names.
         * <p>
         * @return {@code this}
         * @param endpoints Property endpoints: List of domain names. This parameter is required.
         */
        public Builder endpoints(final com.aliyun.ros.cdk.core.IResolvable endpoints) {
            this.props.endpoints(endpoints);
            return this;
        }
        /**
         * Property endpoints: List of domain names.
         * <p>
         * @return {@code this}
         * @param endpoints Property endpoints: List of domain names. This parameter is required.
         */
        public Builder endpoints(final java.util.List<? extends java.lang.Object> endpoints) {
            this.props.endpoints(endpoints);
            return this;
        }

        /**
         * Property instanceName: The name of the resource.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the resource. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The name of the resource.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the resource. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property instanceType: The instance type.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>Standard: Universal.</li>
         * <li>Follower: Read-only slave instance.</li>
         * <li>Warehouse: calculation group type.</li>
         * <li>Shared: Shared.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The instance type. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The instance type.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>Standard: Universal.</li>
         * <li>Follower: Read-only slave instance.</li>
         * <li>Warehouse: calculation group type.</li>
         * <li>Shared: Shared.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The instance type. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property paymentType: The payment type of the resource.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The payment type of the resource. This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * Property paymentType: The payment type of the resource.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The payment type of the resource. This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * Property zoneId: The zone Id.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone Id. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone Id.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone Id. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property autoPay: Whether to pay automatically.
         * <p>
         * The default value is true. Value:
         * <p>
         * <ul>
         * <li>true: automatic payment</li>
         * <li>false: only generate orders, not pay</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * The default value is true. If the balance of your payment method is insufficient, you can set the parameter AutoPay to false, and an unpaid order will be generated. You can log in to the user Center to pay by yourself.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to pay automatically. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Whether to pay automatically.
         * <p>
         * The default value is true. Value:
         * <p>
         * <ul>
         * <li>true: automatic payment</li>
         * <li>false: only generate orders, not pay</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * The default value is true. If the balance of your payment method is insufficient, you can set the parameter AutoPay to false, and an unpaid order will be generated. You can log in to the user Center to pay by yourself.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether to pay automatically. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property coldStorageSize: Instance low-frequency storage space.
         * <p>
         * Unit: GB.
         * <p>
         * <blockquote>
         * <p>
         * Pay-As-You-Go (PostPaid) instances ignore this parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param coldStorageSize Property coldStorageSize: Instance low-frequency storage space. This parameter is required.
         */
        public Builder coldStorageSize(final java.lang.Number coldStorageSize) {
            this.props.coldStorageSize(coldStorageSize);
            return this;
        }
        /**
         * Property coldStorageSize: Instance low-frequency storage space.
         * <p>
         * Unit: GB.
         * <p>
         * <blockquote>
         * <p>
         * Pay-As-You-Go (PostPaid) instances ignore this parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param coldStorageSize Property coldStorageSize: Instance low-frequency storage space. This parameter is required.
         */
        public Builder coldStorageSize(final com.aliyun.ros.cdk.core.IResolvable coldStorageSize) {
            this.props.coldStorageSize(coldStorageSize);
            return this;
        }

        /**
         * Property cpu: Instance specifications.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>8 cores 32 GB (number of compute nodes: 1)</li>
         * <li>16 cores 64 GB (number of compute nodes: 1)</li>
         * <li>32 core 128 GB (number of compute nodes: 2)</li>
         * <li>64 core 256 GB (number of compute nodes: 4)</li>
         * <li>96 core 384 GB (number of computing nodes: 6)</li>
         * <li>128 core 512 GB (number of compute nodes: 8)</li>
         * <li>Wait</li>
         * </ul>
         * <p>
         * <blockquote><blockquote></blockquote>
         * <p>
         * <ul>
         * <li>just fill in the audit number.</li>
         * <li>Please submit a work order application for purchasing 1024 or above specifications.</li>
         * <li>Shared instance types do not need to specify specifications.
         * The specification of -8 core 32GB (number of computing nodes: 1) is only for experience use and cannot be used for production.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: Instance specifications. This parameter is required.
         */
        public Builder cpu(final java.lang.Number cpu) {
            this.props.cpu(cpu);
            return this;
        }
        /**
         * Property cpu: Instance specifications.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>8 cores 32 GB (number of compute nodes: 1)</li>
         * <li>16 cores 64 GB (number of compute nodes: 1)</li>
         * <li>32 core 128 GB (number of compute nodes: 2)</li>
         * <li>64 core 256 GB (number of compute nodes: 4)</li>
         * <li>96 core 384 GB (number of computing nodes: 6)</li>
         * <li>128 core 512 GB (number of compute nodes: 8)</li>
         * <li>Wait</li>
         * </ul>
         * <p>
         * <blockquote><blockquote></blockquote>
         * <p>
         * <ul>
         * <li>just fill in the audit number.</li>
         * <li>Please submit a work order application for purchasing 1024 or above specifications.</li>
         * <li>Shared instance types do not need to specify specifications.
         * The specification of -8 core 32GB (number of computing nodes: 1) is only for experience use and cannot be used for production.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: Instance specifications. This parameter is required.
         */
        public Builder cpu(final com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.props.cpu(cpu);
            return this;
        }

        /**
         * Property duration: The buying cycle.
         * <p>
         * Buy for 2 months.
         * <p>
         * <blockquote>
         * <p>
         * If the Payment type is PostPaid, you do not need to specify it.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param duration Property duration: The buying cycle. This parameter is required.
         */
        public Builder duration(final java.lang.Number duration) {
            this.props.duration(duration);
            return this;
        }
        /**
         * Property duration: The buying cycle.
         * <p>
         * Buy for 2 months.
         * <p>
         * <blockquote>
         * <p>
         * If the Payment type is PostPaid, you do not need to specify it.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param duration Property duration: The buying cycle. This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props.duration(duration);
            return this;
        }

        /**
         * Property gatewayCount: Number of gateway nodes.
         * <p>
         * @return {@code this}
         * @param gatewayCount Property gatewayCount: Number of gateway nodes. This parameter is required.
         */
        public Builder gatewayCount(final java.lang.Number gatewayCount) {
            this.props.gatewayCount(gatewayCount);
            return this;
        }
        /**
         * Property gatewayCount: Number of gateway nodes.
         * <p>
         * @return {@code this}
         * @param gatewayCount Property gatewayCount: Number of gateway nodes. This parameter is required.
         */
        public Builder gatewayCount(final com.aliyun.ros.cdk.core.IResolvable gatewayCount) {
            this.props.gatewayCount(gatewayCount);
            return this;
        }

        /**
         * Property initialDatabases: Initialize the database and split multiple database names ",".
         * <p>
         * @return {@code this}
         * @param initialDatabases Property initialDatabases: Initialize the database and split multiple database names ",". This parameter is required.
         */
        public Builder initialDatabases(final java.lang.String initialDatabases) {
            this.props.initialDatabases(initialDatabases);
            return this;
        }
        /**
         * Property initialDatabases: Initialize the database and split multiple database names ",".
         * <p>
         * @return {@code this}
         * @param initialDatabases Property initialDatabases: Initialize the database and split multiple database names ",". This parameter is required.
         */
        public Builder initialDatabases(final com.aliyun.ros.cdk.core.IResolvable initialDatabases) {
            this.props.initialDatabases(initialDatabases);
            return this;
        }

        /**
         * Property leaderInstanceId: The id of leader instance.
         * <p>
         * @return {@code this}
         * @param leaderInstanceId Property leaderInstanceId: The id of leader instance. This parameter is required.
         */
        public Builder leaderInstanceId(final java.lang.String leaderInstanceId) {
            this.props.leaderInstanceId(leaderInstanceId);
            return this;
        }
        /**
         * Property leaderInstanceId: The id of leader instance.
         * <p>
         * @return {@code this}
         * @param leaderInstanceId Property leaderInstanceId: The id of leader instance. This parameter is required.
         */
        public Builder leaderInstanceId(final com.aliyun.ros.cdk.core.IResolvable leaderInstanceId) {
            this.props.leaderInstanceId(leaderInstanceId);
            return this;
        }

        /**
         * Property pricingCycle: Billing cycle.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>Month: monthly billing</li>
         * <li>Hour: hourly billing</li>
         * </ul>
         * <p>
         * <blockquote><blockquote></blockquote>
         * <p>
         * <ul>
         * <li>PrePaid only supports Month</li>
         * <li>PostPaid only supports Hour</li>
         * <li>The Shared type is automatically set to Hour without specifying it.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: Billing cycle. This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }
        /**
         * Property pricingCycle: Billing cycle.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>Month: monthly billing</li>
         * <li>Hour: hourly billing</li>
         * </ul>
         * <p>
         * <blockquote><blockquote></blockquote>
         * <p>
         * <ul>
         * <li>PrePaid only supports Month</li>
         * <li>PostPaid only supports Hour</li>
         * <li>The Shared type is automatically set to Hour without specifying it.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: Billing cycle. This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }

        /**
         * Property productCode: product code.
         * <p>
         * @return {@code this}
         * @param productCode Property productCode: product code. This parameter is required.
         */
        public Builder productCode(final java.lang.String productCode) {
            this.props.productCode(productCode);
            return this;
        }
        /**
         * Property productCode: product code.
         * <p>
         * @return {@code this}
         * @param productCode Property productCode: product code. This parameter is required.
         */
        public Builder productCode(final com.aliyun.ros.cdk.core.IResolvable productCode) {
            this.props.productCode(productCode);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
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
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property scaleType: Change matching type.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>UPGRADE: UPGRADE</li>
         * <li>DOWNGRADE: Downgrading</li>
         * </ul>
         * <p>
         * <blockquote><blockquote></blockquote>
         * <p>
         * <ul>
         * <li>The upgrade specification cannot be less than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is larger than the original specification.</li>
         * <li>The downgrading specification cannot be greater than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is smaller than the original specification.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param scaleType Property scaleType: Change matching type. This parameter is required.
         */
        public Builder scaleType(final java.lang.String scaleType) {
            this.props.scaleType(scaleType);
            return this;
        }
        /**
         * Property scaleType: Change matching type.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>UPGRADE: UPGRADE</li>
         * <li>DOWNGRADE: Downgrading</li>
         * </ul>
         * <p>
         * <blockquote><blockquote></blockquote>
         * <p>
         * <ul>
         * <li>The upgrade specification cannot be less than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is larger than the original specification.</li>
         * <li>The downgrading specification cannot be greater than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is smaller than the original specification.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param scaleType Property scaleType: Change matching type. This parameter is required.
         */
        public Builder scaleType(final com.aliyun.ros.cdk.core.IResolvable scaleType) {
            this.props.scaleType(scaleType);
            return this;
        }

        /**
         * Property storageSize: The standard storage space of the instance.
         * <p>
         * Unit: GB.
         * <p>
         * <blockquote>
         * <p>
         * Pay-As-You-Go instances (PostPaid) ignore this parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param storageSize Property storageSize: The standard storage space of the instance. This parameter is required.
         */
        public Builder storageSize(final java.lang.Number storageSize) {
            this.props.storageSize(storageSize);
            return this;
        }
        /**
         * Property storageSize: The standard storage space of the instance.
         * <p>
         * Unit: GB.
         * <p>
         * <blockquote>
         * <p>
         * Pay-As-You-Go instances (PostPaid) ignore this parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param storageSize Property storageSize: The standard storage space of the instance. This parameter is required.
         */
        public Builder storageSize(final com.aliyun.ros.cdk.core.IResolvable storageSize) {
            this.props.storageSize(storageSize);
            return this;
        }

        /**
         * Property tags: Tags of instance.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.hologram.RosInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hologram.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.hologram.Instance build() {
            return new com.aliyun.ros.cdk.hologram.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
