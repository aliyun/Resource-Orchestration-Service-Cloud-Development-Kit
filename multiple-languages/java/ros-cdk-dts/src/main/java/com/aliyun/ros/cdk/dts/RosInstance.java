package com.aliyun.ros.cdk.dts;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DTS::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:27.987Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosInstance")
public class RosInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dts.RosInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.RosInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrJobId() {
        return software.amazon.jsii.Kernel.get(this, "attrJobId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceClass() {
        return software.amazon.jsii.Kernel.get(this, "instanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceClass(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceClass", java.util.Objects.requireNonNull(value, "instanceClass is required"));
    }

    /**
     */
    public void setInstanceClass(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceClass", java.util.Objects.requireNonNull(value, "instanceClass is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPayType() {
        return software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPayType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "payType", java.util.Objects.requireNonNull(value, "payType is required"));
    }

    /**
     */
    public void setPayType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "payType", java.util.Objects.requireNonNull(value, "payType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getType() {
        return software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "type", java.util.Objects.requireNonNull(value, "type is required"));
    }

    /**
     */
    public void setType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "type", java.util.Objects.requireNonNull(value, "type is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoPay(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoPay", value);
    }

    /**
     */
    public void setAutoPay(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoPay", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoStart() {
        return software.amazon.jsii.Kernel.get(this, "autoStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoStart(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoStart", value);
    }

    /**
     */
    public void setAutoStart(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoStart", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getComputeUnit() {
        return software.amazon.jsii.Kernel.get(this, "computeUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setComputeUnit(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "computeUnit", value);
    }

    /**
     */
    public void setComputeUnit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "computeUnit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDatabaseCount() {
        return software.amazon.jsii.Kernel.get(this, "databaseCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDatabaseCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "databaseCount", value);
    }

    /**
     */
    public void setDatabaseCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "databaseCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointEngineName() {
        return software.amazon.jsii.Kernel.get(this, "destinationEndpointEngineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationEndpointEngineName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointEngineName", value);
    }

    /**
     */
    public void setDestinationEndpointEngineName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationEndpointEngineName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDestinationRegion() {
        return software.amazon.jsii.Kernel.get(this, "destinationRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationRegion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationRegion", value);
    }

    /**
     */
    public void setDestinationRegion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationRegion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDu() {
        return software.amazon.jsii.Kernel.get(this, "du", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDu(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "du", value);
    }

    /**
     */
    public void setDu(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "du", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFeeType() {
        return software.amazon.jsii.Kernel.get(this, "feeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFeeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "feeType", value);
    }

    /**
     */
    public void setFeeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "feeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getJobId() {
        return software.amazon.jsii.Kernel.get(this, "jobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setJobId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "jobId", value);
    }

    /**
     */
    public void setJobId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "jobId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceEndpointEngineName() {
        return software.amazon.jsii.Kernel.get(this, "sourceEndpointEngineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceEndpointEngineName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceEndpointEngineName", value);
    }

    /**
     */
    public void setSourceEndpointEngineName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceEndpointEngineName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceRegion() {
        return software.amazon.jsii.Kernel.get(this, "sourceRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceRegion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceRegion", value);
    }

    /**
     */
    public void setSourceRegion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceRegion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSyncArchitecture() {
        return software.amazon.jsii.Kernel.get(this, "syncArchitecture", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSyncArchitecture(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "syncArchitecture", value);
    }

    /**
     */
    public void setSyncArchitecture(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "syncArchitecture", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUsedTime() {
        return software.amazon.jsii.Kernel.get(this, "usedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUsedTime(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "usedTime", value);
    }

    /**
     */
    public void setUsedTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "usedTime", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dts.RosInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dts.RosInstance> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.dts.RosInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dts.RosInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param instanceClass This parameter is required.
         */
        public Builder instanceClass(final java.lang.String instanceClass) {
            this.props.instanceClass(instanceClass);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceClass This parameter is required.
         */
        public Builder instanceClass(final com.aliyun.ros.cdk.core.IResolvable instanceClass) {
            this.props.instanceClass(instanceClass);
            return this;
        }

        /**
         * @return {@code this}
         * @param payType This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * @return {@code this}
         * @param payType This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * @return {@code this}
         * @param type This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * @return {@code this}
         * @param type This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoPay This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoPay This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoStart This parameter is required.
         */
        public Builder autoStart(final java.lang.Boolean autoStart) {
            this.props.autoStart(autoStart);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoStart This parameter is required.
         */
        public Builder autoStart(final com.aliyun.ros.cdk.core.IResolvable autoStart) {
            this.props.autoStart(autoStart);
            return this;
        }

        /**
         * @return {@code this}
         * @param computeUnit This parameter is required.
         */
        public Builder computeUnit(final java.lang.Number computeUnit) {
            this.props.computeUnit(computeUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param computeUnit This parameter is required.
         */
        public Builder computeUnit(final com.aliyun.ros.cdk.core.IResolvable computeUnit) {
            this.props.computeUnit(computeUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param databaseCount This parameter is required.
         */
        public Builder databaseCount(final java.lang.Number databaseCount) {
            this.props.databaseCount(databaseCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param databaseCount This parameter is required.
         */
        public Builder databaseCount(final com.aliyun.ros.cdk.core.IResolvable databaseCount) {
            this.props.databaseCount(databaseCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationEndpointEngineName This parameter is required.
         */
        public Builder destinationEndpointEngineName(final java.lang.String destinationEndpointEngineName) {
            this.props.destinationEndpointEngineName(destinationEndpointEngineName);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationEndpointEngineName This parameter is required.
         */
        public Builder destinationEndpointEngineName(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointEngineName) {
            this.props.destinationEndpointEngineName(destinationEndpointEngineName);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationRegion This parameter is required.
         */
        public Builder destinationRegion(final java.lang.String destinationRegion) {
            this.props.destinationRegion(destinationRegion);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationRegion This parameter is required.
         */
        public Builder destinationRegion(final com.aliyun.ros.cdk.core.IResolvable destinationRegion) {
            this.props.destinationRegion(destinationRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param du This parameter is required.
         */
        public Builder du(final java.lang.Number du) {
            this.props.du(du);
            return this;
        }
        /**
         * @return {@code this}
         * @param du This parameter is required.
         */
        public Builder du(final com.aliyun.ros.cdk.core.IResolvable du) {
            this.props.du(du);
            return this;
        }

        /**
         * @return {@code this}
         * @param feeType This parameter is required.
         */
        public Builder feeType(final java.lang.String feeType) {
            this.props.feeType(feeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param feeType This parameter is required.
         */
        public Builder feeType(final com.aliyun.ros.cdk.core.IResolvable feeType) {
            this.props.feeType(feeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param jobId This parameter is required.
         */
        public Builder jobId(final java.lang.String jobId) {
            this.props.jobId(jobId);
            return this;
        }
        /**
         * @return {@code this}
         * @param jobId This parameter is required.
         */
        public Builder jobId(final com.aliyun.ros.cdk.core.IResolvable jobId) {
            this.props.jobId(jobId);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.String period) {
            this.props.period(period);
            return this;
        }
        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceEndpointEngineName This parameter is required.
         */
        public Builder sourceEndpointEngineName(final java.lang.String sourceEndpointEngineName) {
            this.props.sourceEndpointEngineName(sourceEndpointEngineName);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceEndpointEngineName This parameter is required.
         */
        public Builder sourceEndpointEngineName(final com.aliyun.ros.cdk.core.IResolvable sourceEndpointEngineName) {
            this.props.sourceEndpointEngineName(sourceEndpointEngineName);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceRegion This parameter is required.
         */
        public Builder sourceRegion(final java.lang.String sourceRegion) {
            this.props.sourceRegion(sourceRegion);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceRegion This parameter is required.
         */
        public Builder sourceRegion(final com.aliyun.ros.cdk.core.IResolvable sourceRegion) {
            this.props.sourceRegion(sourceRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param syncArchitecture This parameter is required.
         */
        public Builder syncArchitecture(final java.lang.String syncArchitecture) {
            this.props.syncArchitecture(syncArchitecture);
            return this;
        }
        /**
         * @return {@code this}
         * @param syncArchitecture This parameter is required.
         */
        public Builder syncArchitecture(final com.aliyun.ros.cdk.core.IResolvable syncArchitecture) {
            this.props.syncArchitecture(syncArchitecture);
            return this;
        }

        /**
         * @return {@code this}
         * @param usedTime This parameter is required.
         */
        public Builder usedTime(final java.lang.Number usedTime) {
            this.props.usedTime(usedTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param usedTime This parameter is required.
         */
        public Builder usedTime(final com.aliyun.ros.cdk.core.IResolvable usedTime) {
            this.props.usedTime(usedTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dts.RosInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.dts.RosInstance build() {
            return new com.aliyun.ros.cdk.dts.RosInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
