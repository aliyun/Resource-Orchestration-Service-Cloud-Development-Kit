package com.aliyun.ros.cdk.lindorm;

/**
 * A ROS template type:  <code>ALIYUN::Lindorm::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:00.806Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.lindorm.$Module.class, fqn = "@alicloud/ros-cdk-lindorm.RosInstance")
public class RosInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.lindorm.RosInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::Lindorm::Instance</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.lindorm.RosInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrJdbcUrlList() {
        return software.amazon.jsii.Kernel.get(this, "attrJdbcUrlList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDiskCategory() {
        return software.amazon.jsii.Kernel.get(this, "diskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDiskCategory(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "diskCategory", java.util.Objects.requireNonNull(value, "diskCategory is required"));
    }

    /**
     */
    public void setDiskCategory(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "diskCategory", java.util.Objects.requireNonNull(value, "diskCategory is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", java.util.Objects.requireNonNull(value, "instanceName is required"));
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", java.util.Objects.requireNonNull(value, "instanceName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getColdStorage() {
        return software.amazon.jsii.Kernel.get(this, "coldStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setColdStorage(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "coldStorage", value);
    }

    /**
     */
    public void setColdStorage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "coldStorage", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCoreSpec() {
        return software.amazon.jsii.Kernel.get(this, "coreSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCoreSpec(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "coreSpec", value);
    }

    /**
     */
    public void setCoreSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "coreSpec", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFilestoreNum() {
        return software.amazon.jsii.Kernel.get(this, "filestoreNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFilestoreNum(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "filestoreNum", value);
    }

    /**
     */
    public void setFilestoreNum(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "filestoreNum", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFilestoreSpec() {
        return software.amazon.jsii.Kernel.get(this, "filestoreSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFilestoreSpec(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "filestoreSpec", value);
    }

    /**
     */
    public void setFilestoreSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "filestoreSpec", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceChargeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceChargeType", value);
    }

    /**
     */
    public void setInstanceChargeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceChargeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceStorage() {
        return software.amazon.jsii.Kernel.get(this, "instanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceStorage(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "instanceStorage", value);
    }

    /**
     */
    public void setInstanceStorage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceStorage", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLindormNum() {
        return software.amazon.jsii.Kernel.get(this, "lindormNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLindormNum(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "lindormNum", value);
    }

    /**
     */
    public void setLindormNum(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "lindormNum", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLindormSpec() {
        return software.amazon.jsii.Kernel.get(this, "lindormSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLindormSpec(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "lindormSpec", value);
    }

    /**
     */
    public void setLindormSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "lindormSpec", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", value);
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpList() {
        return software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityIpList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityIpList", value);
    }

    /**
     */
    public void setSecurityIpList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "securityIpList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSolrNum() {
        return software.amazon.jsii.Kernel.get(this, "solrNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSolrNum(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "solrNum", value);
    }

    /**
     */
    public void setSolrNum(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "solrNum", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSolrSpec() {
        return software.amazon.jsii.Kernel.get(this, "solrSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSolrSpec(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "solrSpec", value);
    }

    /**
     */
    public void setSolrSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "solrSpec", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStreamNum() {
        return software.amazon.jsii.Kernel.get(this, "streamNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStreamNum(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "streamNum", value);
    }

    /**
     */
    public void setStreamNum(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "streamNum", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStreamSpec() {
        return software.amazon.jsii.Kernel.get(this, "streamSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStreamSpec(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "streamSpec", value);
    }

    /**
     */
    public void setStreamSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "streamSpec", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTsdbNum() {
        return software.amazon.jsii.Kernel.get(this, "tsdbNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTsdbNum(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "tsdbNum", value);
    }

    /**
     */
    public void setTsdbNum(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tsdbNum", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTsdbSpec() {
        return software.amazon.jsii.Kernel.get(this, "tsdbSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTsdbSpec(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "tsdbSpec", value);
    }

    /**
     */
    public void setTsdbSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tsdbSpec", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.lindorm.RosInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.lindorm.RosInstance> {
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
        private final com.aliyun.ros.cdk.lindorm.RosInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.lindorm.RosInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param diskCategory This parameter is required.
         */
        public Builder diskCategory(final java.lang.String diskCategory) {
            this.props.diskCategory(diskCategory);
            return this;
        }
        /**
         * @return {@code this}
         * @param diskCategory This parameter is required.
         */
        public Builder diskCategory(final com.aliyun.ros.cdk.core.IResolvable diskCategory) {
            this.props.diskCategory(diskCategory);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param coldStorage This parameter is required.
         */
        public Builder coldStorage(final java.lang.Number coldStorage) {
            this.props.coldStorage(coldStorage);
            return this;
        }
        /**
         * @return {@code this}
         * @param coldStorage This parameter is required.
         */
        public Builder coldStorage(final com.aliyun.ros.cdk.core.IResolvable coldStorage) {
            this.props.coldStorage(coldStorage);
            return this;
        }

        /**
         * @return {@code this}
         * @param coreSpec This parameter is required.
         */
        public Builder coreSpec(final java.lang.String coreSpec) {
            this.props.coreSpec(coreSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param coreSpec This parameter is required.
         */
        public Builder coreSpec(final com.aliyun.ros.cdk.core.IResolvable coreSpec) {
            this.props.coreSpec(coreSpec);
            return this;
        }

        /**
         * @return {@code this}
         * @param filestoreNum This parameter is required.
         */
        public Builder filestoreNum(final java.lang.Number filestoreNum) {
            this.props.filestoreNum(filestoreNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param filestoreNum This parameter is required.
         */
        public Builder filestoreNum(final com.aliyun.ros.cdk.core.IResolvable filestoreNum) {
            this.props.filestoreNum(filestoreNum);
            return this;
        }

        /**
         * @return {@code this}
         * @param filestoreSpec This parameter is required.
         */
        public Builder filestoreSpec(final java.lang.String filestoreSpec) {
            this.props.filestoreSpec(filestoreSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param filestoreSpec This parameter is required.
         */
        public Builder filestoreSpec(final com.aliyun.ros.cdk.core.IResolvable filestoreSpec) {
            this.props.filestoreSpec(filestoreSpec);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceChargeType This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceChargeType This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceStorage This parameter is required.
         */
        public Builder instanceStorage(final java.lang.Number instanceStorage) {
            this.props.instanceStorage(instanceStorage);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceStorage This parameter is required.
         */
        public Builder instanceStorage(final com.aliyun.ros.cdk.core.IResolvable instanceStorage) {
            this.props.instanceStorage(instanceStorage);
            return this;
        }

        /**
         * @return {@code this}
         * @param lindormNum This parameter is required.
         */
        public Builder lindormNum(final java.lang.Number lindormNum) {
            this.props.lindormNum(lindormNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param lindormNum This parameter is required.
         */
        public Builder lindormNum(final com.aliyun.ros.cdk.core.IResolvable lindormNum) {
            this.props.lindormNum(lindormNum);
            return this;
        }

        /**
         * @return {@code this}
         * @param lindormSpec This parameter is required.
         */
        public Builder lindormSpec(final java.lang.String lindormSpec) {
            this.props.lindormSpec(lindormSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param lindormSpec This parameter is required.
         */
        public Builder lindormSpec(final com.aliyun.ros.cdk.core.IResolvable lindormSpec) {
            this.props.lindormSpec(lindormSpec);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
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
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
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
         * @param securityIpList This parameter is required.
         */
        public Builder securityIpList(final com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityIpList This parameter is required.
         */
        public Builder securityIpList(final java.util.List<? extends java.lang.Object> securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }

        /**
         * @return {@code this}
         * @param solrNum This parameter is required.
         */
        public Builder solrNum(final java.lang.Number solrNum) {
            this.props.solrNum(solrNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param solrNum This parameter is required.
         */
        public Builder solrNum(final com.aliyun.ros.cdk.core.IResolvable solrNum) {
            this.props.solrNum(solrNum);
            return this;
        }

        /**
         * @return {@code this}
         * @param solrSpec This parameter is required.
         */
        public Builder solrSpec(final java.lang.String solrSpec) {
            this.props.solrSpec(solrSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param solrSpec This parameter is required.
         */
        public Builder solrSpec(final com.aliyun.ros.cdk.core.IResolvable solrSpec) {
            this.props.solrSpec(solrSpec);
            return this;
        }

        /**
         * @return {@code this}
         * @param streamNum This parameter is required.
         */
        public Builder streamNum(final java.lang.Number streamNum) {
            this.props.streamNum(streamNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param streamNum This parameter is required.
         */
        public Builder streamNum(final com.aliyun.ros.cdk.core.IResolvable streamNum) {
            this.props.streamNum(streamNum);
            return this;
        }

        /**
         * @return {@code this}
         * @param streamSpec This parameter is required.
         */
        public Builder streamSpec(final java.lang.String streamSpec) {
            this.props.streamSpec(streamSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param streamSpec This parameter is required.
         */
        public Builder streamSpec(final com.aliyun.ros.cdk.core.IResolvable streamSpec) {
            this.props.streamSpec(streamSpec);
            return this;
        }

        /**
         * @return {@code this}
         * @param tsdbNum This parameter is required.
         */
        public Builder tsdbNum(final java.lang.Number tsdbNum) {
            this.props.tsdbNum(tsdbNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param tsdbNum This parameter is required.
         */
        public Builder tsdbNum(final com.aliyun.ros.cdk.core.IResolvable tsdbNum) {
            this.props.tsdbNum(tsdbNum);
            return this;
        }

        /**
         * @return {@code this}
         * @param tsdbSpec This parameter is required.
         */
        public Builder tsdbSpec(final java.lang.String tsdbSpec) {
            this.props.tsdbSpec(tsdbSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param tsdbSpec This parameter is required.
         */
        public Builder tsdbSpec(final com.aliyun.ros.cdk.core.IResolvable tsdbSpec) {
            this.props.tsdbSpec(tsdbSpec);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.lindorm.RosInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.lindorm.RosInstance build() {
            return new com.aliyun.ros.cdk.lindorm.RosInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
