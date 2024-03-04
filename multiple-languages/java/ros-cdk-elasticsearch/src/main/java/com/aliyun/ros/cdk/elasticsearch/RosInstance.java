package com.aliyun.ros.cdk.elasticsearch;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ElasticSearch::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:52.285Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearch.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearch.RosInstance")
public class RosInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.elasticsearch.RosInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearch.RosInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceChargeType() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceChargeType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrKibanaDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrKibanaDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrKibanaPort() {
        return software.amazon.jsii.Kernel.get(this, "attrKibanaPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDataNode() {
        return software.amazon.jsii.Kernel.get(this, "dataNode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataNode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearch.RosInstance.DataNodeProperty value) {
        software.amazon.jsii.Kernel.set(this, "dataNode", java.util.Objects.requireNonNull(value, "dataNode is required"));
    }

    /**
     */
    public void setDataNode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataNode", java.util.Objects.requireNonNull(value, "dataNode is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPassword() {
        return software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "password", java.util.Objects.requireNonNull(value, "password is required"));
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "password", java.util.Objects.requireNonNull(value, "password is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVersion() {
        return software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVersion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "version", java.util.Objects.requireNonNull(value, "version is required"));
    }

    /**
     */
    public void setVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "version", java.util.Objects.requireNonNull(value, "version is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", java.util.Objects.requireNonNull(value, "vSwitchId is required"));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", java.util.Objects.requireNonNull(value, "vSwitchId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableKibanaPrivate() {
        return software.amazon.jsii.Kernel.get(this, "enableKibanaPrivate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableKibanaPrivate(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableKibanaPrivate", value);
    }

    /**
     */
    public void setEnableKibanaPrivate(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableKibanaPrivate", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableKibanaPublic() {
        return software.amazon.jsii.Kernel.get(this, "enableKibanaPublic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableKibanaPublic(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableKibanaPublic", value);
    }

    /**
     */
    public void setEnableKibanaPublic(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableKibanaPublic", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnablePublic() {
        return software.amazon.jsii.Kernel.get(this, "enablePublic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnablePublic(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enablePublic", value);
    }

    /**
     */
    public void setEnablePublic(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enablePublic", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getKibanaNode() {
        return software.amazon.jsii.Kernel.get(this, "kibanaNode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKibanaNode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "kibanaNode", value);
    }

    /**
     */
    public void setKibanaNode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.elasticsearch.RosInstance.KibanaNodeProperty value) {
        software.amazon.jsii.Kernel.set(this, "kibanaNode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKibanaWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "kibanaWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKibanaWhitelist(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "kibanaWhitelist", value);
    }

    /**
     */
    public void setKibanaWhitelist(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "kibanaWhitelist", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterNode() {
        return software.amazon.jsii.Kernel.get(this, "masterNode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterNode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterNode", value);
    }

    /**
     */
    public void setMasterNode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.elasticsearch.RosInstance.MasterNodeProperty value) {
        software.amazon.jsii.Kernel.set(this, "masterNode", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getPrivateWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "privateWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrivateWhitelist(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "privateWhitelist", value);
    }

    /**
     */
    public void setPrivateWhitelist(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "privateWhitelist", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPublicWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "publicWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPublicWhitelist(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "publicWhitelist", value);
    }

    /**
     */
    public void setPublicWhitelist(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "publicWhitelist", value);
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
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.elasticsearch.RosInstance.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.elasticsearch.RosInstance.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.elasticsearch.RosInstance.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.elasticsearch.RosInstance.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getYmlConfig() {
        return software.amazon.jsii.Kernel.get(this, "ymlConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setYmlConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ymlConfig", value);
    }

    /**
     */
    public void setYmlConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.elasticsearch.RosInstance.YMLConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "ymlConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getZoneCount() {
        return software.amazon.jsii.Kernel.get(this, "zoneCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "zoneCount", value);
    }

    /**
     */
    public void setZoneCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneCount", value);
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
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearch.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearch.RosInstance.DataNodeProperty")
    @software.amazon.jsii.Jsii.Proxy(DataNodeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DataNodeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getAmount();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDiskSize();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDiskType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSpec();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDiskEncryption() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPerformanceLevel() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DataNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DataNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DataNodeProperty> {
            java.lang.Object amount;
            java.lang.Object diskSize;
            java.lang.Object diskType;
            java.lang.Object spec;
            java.lang.Object diskEncryption;
            java.lang.Object performanceLevel;

            /**
             * Sets the value of {@link DataNodeProperty#getAmount}
             * @param amount the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder amount(java.lang.Number amount) {
                this.amount = amount;
                return this;
            }

            /**
             * Sets the value of {@link DataNodeProperty#getAmount}
             * @param amount the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder amount(com.aliyun.ros.cdk.core.IResolvable amount) {
                this.amount = amount;
                return this;
            }

            /**
             * Sets the value of {@link DataNodeProperty#getDiskSize}
             * @param diskSize the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskSize(java.lang.Number diskSize) {
                this.diskSize = diskSize;
                return this;
            }

            /**
             * Sets the value of {@link DataNodeProperty#getDiskSize}
             * @param diskSize the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskSize(com.aliyun.ros.cdk.core.IResolvable diskSize) {
                this.diskSize = diskSize;
                return this;
            }

            /**
             * Sets the value of {@link DataNodeProperty#getDiskType}
             * @param diskType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskType(java.lang.String diskType) {
                this.diskType = diskType;
                return this;
            }

            /**
             * Sets the value of {@link DataNodeProperty#getDiskType}
             * @param diskType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskType(com.aliyun.ros.cdk.core.IResolvable diskType) {
                this.diskType = diskType;
                return this;
            }

            /**
             * Sets the value of {@link DataNodeProperty#getSpec}
             * @param spec the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spec(java.lang.String spec) {
                this.spec = spec;
                return this;
            }

            /**
             * Sets the value of {@link DataNodeProperty#getSpec}
             * @param spec the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spec(com.aliyun.ros.cdk.core.IResolvable spec) {
                this.spec = spec;
                return this;
            }

            /**
             * Sets the value of {@link DataNodeProperty#getDiskEncryption}
             * @param diskEncryption the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskEncryption(java.lang.Boolean diskEncryption) {
                this.diskEncryption = diskEncryption;
                return this;
            }

            /**
             * Sets the value of {@link DataNodeProperty#getDiskEncryption}
             * @param diskEncryption the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskEncryption(com.aliyun.ros.cdk.core.IResolvable diskEncryption) {
                this.diskEncryption = diskEncryption;
                return this;
            }

            /**
             * Sets the value of {@link DataNodeProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(java.lang.String performanceLevel) {
                this.performanceLevel = performanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link DataNodeProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(com.aliyun.ros.cdk.core.IResolvable performanceLevel) {
                this.performanceLevel = performanceLevel;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DataNodeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DataNodeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DataNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DataNodeProperty {
            private final java.lang.Object amount;
            private final java.lang.Object diskSize;
            private final java.lang.Object diskType;
            private final java.lang.Object spec;
            private final java.lang.Object diskEncryption;
            private final java.lang.Object performanceLevel;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.amount = software.amazon.jsii.Kernel.get(this, "amount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.diskSize = software.amazon.jsii.Kernel.get(this, "diskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.diskType = software.amazon.jsii.Kernel.get(this, "diskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.diskEncryption = software.amazon.jsii.Kernel.get(this, "diskEncryption", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.performanceLevel = software.amazon.jsii.Kernel.get(this, "performanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.amount = java.util.Objects.requireNonNull(builder.amount, "amount is required");
                this.diskSize = java.util.Objects.requireNonNull(builder.diskSize, "diskSize is required");
                this.diskType = java.util.Objects.requireNonNull(builder.diskType, "diskType is required");
                this.spec = java.util.Objects.requireNonNull(builder.spec, "spec is required");
                this.diskEncryption = builder.diskEncryption;
                this.performanceLevel = builder.performanceLevel;
            }

            @Override
            public final java.lang.Object getAmount() {
                return this.amount;
            }

            @Override
            public final java.lang.Object getDiskSize() {
                return this.diskSize;
            }

            @Override
            public final java.lang.Object getDiskType() {
                return this.diskType;
            }

            @Override
            public final java.lang.Object getSpec() {
                return this.spec;
            }

            @Override
            public final java.lang.Object getDiskEncryption() {
                return this.diskEncryption;
            }

            @Override
            public final java.lang.Object getPerformanceLevel() {
                return this.performanceLevel;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("amount", om.valueToTree(this.getAmount()));
                data.set("diskSize", om.valueToTree(this.getDiskSize()));
                data.set("diskType", om.valueToTree(this.getDiskType()));
                data.set("spec", om.valueToTree(this.getSpec()));
                if (this.getDiskEncryption() != null) {
                    data.set("diskEncryption", om.valueToTree(this.getDiskEncryption()));
                }
                if (this.getPerformanceLevel() != null) {
                    data.set("performanceLevel", om.valueToTree(this.getPerformanceLevel()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearch.RosInstance.DataNodeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DataNodeProperty.Jsii$Proxy that = (DataNodeProperty.Jsii$Proxy) o;

                if (!amount.equals(that.amount)) return false;
                if (!diskSize.equals(that.diskSize)) return false;
                if (!diskType.equals(that.diskType)) return false;
                if (!spec.equals(that.spec)) return false;
                if (this.diskEncryption != null ? !this.diskEncryption.equals(that.diskEncryption) : that.diskEncryption != null) return false;
                return this.performanceLevel != null ? this.performanceLevel.equals(that.performanceLevel) : that.performanceLevel == null;
            }

            @Override
            public final int hashCode() {
                int result = this.amount.hashCode();
                result = 31 * result + (this.diskSize.hashCode());
                result = 31 * result + (this.diskType.hashCode());
                result = 31 * result + (this.spec.hashCode());
                result = 31 * result + (this.diskEncryption != null ? this.diskEncryption.hashCode() : 0);
                result = 31 * result + (this.performanceLevel != null ? this.performanceLevel.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearch.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearch.RosInstance.KibanaNodeProperty")
    @software.amazon.jsii.Jsii.Proxy(KibanaNodeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface KibanaNodeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSpec();

        /**
         * @return a {@link Builder} of {@link KibanaNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link KibanaNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<KibanaNodeProperty> {
            java.lang.Object spec;

            /**
             * Sets the value of {@link KibanaNodeProperty#getSpec}
             * @param spec the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spec(java.lang.String spec) {
                this.spec = spec;
                return this;
            }

            /**
             * Sets the value of {@link KibanaNodeProperty#getSpec}
             * @param spec the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spec(com.aliyun.ros.cdk.core.IResolvable spec) {
                this.spec = spec;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link KibanaNodeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public KibanaNodeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link KibanaNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements KibanaNodeProperty {
            private final java.lang.Object spec;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.spec = java.util.Objects.requireNonNull(builder.spec, "spec is required");
            }

            @Override
            public final java.lang.Object getSpec() {
                return this.spec;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("spec", om.valueToTree(this.getSpec()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearch.RosInstance.KibanaNodeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                KibanaNodeProperty.Jsii$Proxy that = (KibanaNodeProperty.Jsii$Proxy) o;

                return this.spec.equals(that.spec);
            }

            @Override
            public final int hashCode() {
                int result = this.spec.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearch.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearch.RosInstance.MasterNodeProperty")
    @software.amazon.jsii.Jsii.Proxy(MasterNodeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MasterNodeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSpec();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAmount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDiskSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDiskType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MasterNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MasterNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MasterNodeProperty> {
            java.lang.Object spec;
            java.lang.Object amount;
            java.lang.Object diskSize;
            java.lang.Object diskType;

            /**
             * Sets the value of {@link MasterNodeProperty#getSpec}
             * @param spec the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spec(java.lang.String spec) {
                this.spec = spec;
                return this;
            }

            /**
             * Sets the value of {@link MasterNodeProperty#getSpec}
             * @param spec the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spec(com.aliyun.ros.cdk.core.IResolvable spec) {
                this.spec = spec;
                return this;
            }

            /**
             * Sets the value of {@link MasterNodeProperty#getAmount}
             * @param amount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder amount(java.lang.Number amount) {
                this.amount = amount;
                return this;
            }

            /**
             * Sets the value of {@link MasterNodeProperty#getAmount}
             * @param amount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder amount(com.aliyun.ros.cdk.core.IResolvable amount) {
                this.amount = amount;
                return this;
            }

            /**
             * Sets the value of {@link MasterNodeProperty#getDiskSize}
             * @param diskSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskSize(java.lang.Number diskSize) {
                this.diskSize = diskSize;
                return this;
            }

            /**
             * Sets the value of {@link MasterNodeProperty#getDiskSize}
             * @param diskSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskSize(com.aliyun.ros.cdk.core.IResolvable diskSize) {
                this.diskSize = diskSize;
                return this;
            }

            /**
             * Sets the value of {@link MasterNodeProperty#getDiskType}
             * @param diskType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskType(java.lang.String diskType) {
                this.diskType = diskType;
                return this;
            }

            /**
             * Sets the value of {@link MasterNodeProperty#getDiskType}
             * @param diskType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskType(com.aliyun.ros.cdk.core.IResolvable diskType) {
                this.diskType = diskType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MasterNodeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MasterNodeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MasterNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MasterNodeProperty {
            private final java.lang.Object spec;
            private final java.lang.Object amount;
            private final java.lang.Object diskSize;
            private final java.lang.Object diskType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.amount = software.amazon.jsii.Kernel.get(this, "amount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.diskSize = software.amazon.jsii.Kernel.get(this, "diskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.diskType = software.amazon.jsii.Kernel.get(this, "diskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.spec = java.util.Objects.requireNonNull(builder.spec, "spec is required");
                this.amount = builder.amount;
                this.diskSize = builder.diskSize;
                this.diskType = builder.diskType;
            }

            @Override
            public final java.lang.Object getSpec() {
                return this.spec;
            }

            @Override
            public final java.lang.Object getAmount() {
                return this.amount;
            }

            @Override
            public final java.lang.Object getDiskSize() {
                return this.diskSize;
            }

            @Override
            public final java.lang.Object getDiskType() {
                return this.diskType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("spec", om.valueToTree(this.getSpec()));
                if (this.getAmount() != null) {
                    data.set("amount", om.valueToTree(this.getAmount()));
                }
                if (this.getDiskSize() != null) {
                    data.set("diskSize", om.valueToTree(this.getDiskSize()));
                }
                if (this.getDiskType() != null) {
                    data.set("diskType", om.valueToTree(this.getDiskType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearch.RosInstance.MasterNodeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MasterNodeProperty.Jsii$Proxy that = (MasterNodeProperty.Jsii$Proxy) o;

                if (!spec.equals(that.spec)) return false;
                if (this.amount != null ? !this.amount.equals(that.amount) : that.amount != null) return false;
                if (this.diskSize != null ? !this.diskSize.equals(that.diskSize) : that.diskSize != null) return false;
                return this.diskType != null ? this.diskType.equals(that.diskType) : that.diskType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.spec.hashCode();
                result = 31 * result + (this.amount != null ? this.amount.hashCode() : 0);
                result = 31 * result + (this.diskSize != null ? this.diskSize.hashCode() : 0);
                result = 31 * result + (this.diskType != null ? this.diskType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearch.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearch.RosInstance.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearch.RosInstance.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearch.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearch.RosInstance.YMLConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(YMLConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface YMLConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAuditLog() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCreateIndex() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDestructiveRequiresName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOtherConfigs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWatcher() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link YMLConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link YMLConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<YMLConfigProperty> {
            java.lang.Object auditLog;
            java.lang.Object createIndex;
            java.lang.Object destructiveRequiresName;
            java.lang.Object otherConfigs;
            java.lang.Object watcher;

            /**
             * Sets the value of {@link YMLConfigProperty#getAuditLog}
             * @param auditLog the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder auditLog(java.lang.Boolean auditLog) {
                this.auditLog = auditLog;
                return this;
            }

            /**
             * Sets the value of {@link YMLConfigProperty#getAuditLog}
             * @param auditLog the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder auditLog(com.aliyun.ros.cdk.core.IResolvable auditLog) {
                this.auditLog = auditLog;
                return this;
            }

            /**
             * Sets the value of {@link YMLConfigProperty#getCreateIndex}
             * @param createIndex the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder createIndex(java.lang.String createIndex) {
                this.createIndex = createIndex;
                return this;
            }

            /**
             * Sets the value of {@link YMLConfigProperty#getCreateIndex}
             * @param createIndex the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder createIndex(com.aliyun.ros.cdk.core.IResolvable createIndex) {
                this.createIndex = createIndex;
                return this;
            }

            /**
             * Sets the value of {@link YMLConfigProperty#getDestructiveRequiresName}
             * @param destructiveRequiresName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destructiveRequiresName(java.lang.Boolean destructiveRequiresName) {
                this.destructiveRequiresName = destructiveRequiresName;
                return this;
            }

            /**
             * Sets the value of {@link YMLConfigProperty#getDestructiveRequiresName}
             * @param destructiveRequiresName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder destructiveRequiresName(com.aliyun.ros.cdk.core.IResolvable destructiveRequiresName) {
                this.destructiveRequiresName = destructiveRequiresName;
                return this;
            }

            /**
             * Sets the value of {@link YMLConfigProperty#getOtherConfigs}
             * @param otherConfigs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder otherConfigs(com.aliyun.ros.cdk.core.IResolvable otherConfigs) {
                this.otherConfigs = otherConfigs;
                return this;
            }

            /**
             * Sets the value of {@link YMLConfigProperty#getOtherConfigs}
             * @param otherConfigs the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder otherConfigs(java.util.Map<java.lang.String, ? extends java.lang.Object> otherConfigs) {
                this.otherConfigs = otherConfigs;
                return this;
            }

            /**
             * Sets the value of {@link YMLConfigProperty#getWatcher}
             * @param watcher the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder watcher(java.lang.Boolean watcher) {
                this.watcher = watcher;
                return this;
            }

            /**
             * Sets the value of {@link YMLConfigProperty#getWatcher}
             * @param watcher the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder watcher(com.aliyun.ros.cdk.core.IResolvable watcher) {
                this.watcher = watcher;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link YMLConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public YMLConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link YMLConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements YMLConfigProperty {
            private final java.lang.Object auditLog;
            private final java.lang.Object createIndex;
            private final java.lang.Object destructiveRequiresName;
            private final java.lang.Object otherConfigs;
            private final java.lang.Object watcher;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.auditLog = software.amazon.jsii.Kernel.get(this, "auditLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.createIndex = software.amazon.jsii.Kernel.get(this, "createIndex", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.destructiveRequiresName = software.amazon.jsii.Kernel.get(this, "destructiveRequiresName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.otherConfigs = software.amazon.jsii.Kernel.get(this, "otherConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.watcher = software.amazon.jsii.Kernel.get(this, "watcher", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.auditLog = builder.auditLog;
                this.createIndex = builder.createIndex;
                this.destructiveRequiresName = builder.destructiveRequiresName;
                this.otherConfigs = builder.otherConfigs;
                this.watcher = builder.watcher;
            }

            @Override
            public final java.lang.Object getAuditLog() {
                return this.auditLog;
            }

            @Override
            public final java.lang.Object getCreateIndex() {
                return this.createIndex;
            }

            @Override
            public final java.lang.Object getDestructiveRequiresName() {
                return this.destructiveRequiresName;
            }

            @Override
            public final java.lang.Object getOtherConfigs() {
                return this.otherConfigs;
            }

            @Override
            public final java.lang.Object getWatcher() {
                return this.watcher;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAuditLog() != null) {
                    data.set("auditLog", om.valueToTree(this.getAuditLog()));
                }
                if (this.getCreateIndex() != null) {
                    data.set("createIndex", om.valueToTree(this.getCreateIndex()));
                }
                if (this.getDestructiveRequiresName() != null) {
                    data.set("destructiveRequiresName", om.valueToTree(this.getDestructiveRequiresName()));
                }
                if (this.getOtherConfigs() != null) {
                    data.set("otherConfigs", om.valueToTree(this.getOtherConfigs()));
                }
                if (this.getWatcher() != null) {
                    data.set("watcher", om.valueToTree(this.getWatcher()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearch.RosInstance.YMLConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                YMLConfigProperty.Jsii$Proxy that = (YMLConfigProperty.Jsii$Proxy) o;

                if (this.auditLog != null ? !this.auditLog.equals(that.auditLog) : that.auditLog != null) return false;
                if (this.createIndex != null ? !this.createIndex.equals(that.createIndex) : that.createIndex != null) return false;
                if (this.destructiveRequiresName != null ? !this.destructiveRequiresName.equals(that.destructiveRequiresName) : that.destructiveRequiresName != null) return false;
                if (this.otherConfigs != null ? !this.otherConfigs.equals(that.otherConfigs) : that.otherConfigs != null) return false;
                return this.watcher != null ? this.watcher.equals(that.watcher) : that.watcher == null;
            }

            @Override
            public final int hashCode() {
                int result = this.auditLog != null ? this.auditLog.hashCode() : 0;
                result = 31 * result + (this.createIndex != null ? this.createIndex.hashCode() : 0);
                result = 31 * result + (this.destructiveRequiresName != null ? this.destructiveRequiresName.hashCode() : 0);
                result = 31 * result + (this.otherConfigs != null ? this.otherConfigs.hashCode() : 0);
                result = 31 * result + (this.watcher != null ? this.watcher.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.elasticsearch.RosInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.elasticsearch.RosInstance> {
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
        private final com.aliyun.ros.cdk.elasticsearch.RosInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.elasticsearch.RosInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param dataNode This parameter is required.
         */
        public Builder dataNode(final com.aliyun.ros.cdk.elasticsearch.RosInstance.DataNodeProperty dataNode) {
            this.props.dataNode(dataNode);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataNode This parameter is required.
         */
        public Builder dataNode(final com.aliyun.ros.cdk.core.IResolvable dataNode) {
            this.props.dataNode(dataNode);
            return this;
        }

        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * @return {@code this}
         * @param version This parameter is required.
         */
        public Builder version(final java.lang.String version) {
            this.props.version(version);
            return this;
        }
        /**
         * @return {@code this}
         * @param version This parameter is required.
         */
        public Builder version(final com.aliyun.ros.cdk.core.IResolvable version) {
            this.props.version(version);
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
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableKibanaPrivate This parameter is required.
         */
        public Builder enableKibanaPrivate(final java.lang.Boolean enableKibanaPrivate) {
            this.props.enableKibanaPrivate(enableKibanaPrivate);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableKibanaPrivate This parameter is required.
         */
        public Builder enableKibanaPrivate(final com.aliyun.ros.cdk.core.IResolvable enableKibanaPrivate) {
            this.props.enableKibanaPrivate(enableKibanaPrivate);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableKibanaPublic This parameter is required.
         */
        public Builder enableKibanaPublic(final java.lang.Boolean enableKibanaPublic) {
            this.props.enableKibanaPublic(enableKibanaPublic);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableKibanaPublic This parameter is required.
         */
        public Builder enableKibanaPublic(final com.aliyun.ros.cdk.core.IResolvable enableKibanaPublic) {
            this.props.enableKibanaPublic(enableKibanaPublic);
            return this;
        }

        /**
         * @return {@code this}
         * @param enablePublic This parameter is required.
         */
        public Builder enablePublic(final java.lang.Boolean enablePublic) {
            this.props.enablePublic(enablePublic);
            return this;
        }
        /**
         * @return {@code this}
         * @param enablePublic This parameter is required.
         */
        public Builder enablePublic(final com.aliyun.ros.cdk.core.IResolvable enablePublic) {
            this.props.enablePublic(enablePublic);
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
         * @param kibanaNode This parameter is required.
         */
        public Builder kibanaNode(final com.aliyun.ros.cdk.core.IResolvable kibanaNode) {
            this.props.kibanaNode(kibanaNode);
            return this;
        }
        /**
         * @return {@code this}
         * @param kibanaNode This parameter is required.
         */
        public Builder kibanaNode(final com.aliyun.ros.cdk.elasticsearch.RosInstance.KibanaNodeProperty kibanaNode) {
            this.props.kibanaNode(kibanaNode);
            return this;
        }

        /**
         * @return {@code this}
         * @param kibanaWhitelist This parameter is required.
         */
        public Builder kibanaWhitelist(final java.util.List<? extends java.lang.Object> kibanaWhitelist) {
            this.props.kibanaWhitelist(kibanaWhitelist);
            return this;
        }
        /**
         * @return {@code this}
         * @param kibanaWhitelist This parameter is required.
         */
        public Builder kibanaWhitelist(final com.aliyun.ros.cdk.core.IResolvable kibanaWhitelist) {
            this.props.kibanaWhitelist(kibanaWhitelist);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterNode This parameter is required.
         */
        public Builder masterNode(final com.aliyun.ros.cdk.core.IResolvable masterNode) {
            this.props.masterNode(masterNode);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterNode This parameter is required.
         */
        public Builder masterNode(final com.aliyun.ros.cdk.elasticsearch.RosInstance.MasterNodeProperty masterNode) {
            this.props.masterNode(masterNode);
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
         * @param privateWhitelist This parameter is required.
         */
        public Builder privateWhitelist(final java.util.List<? extends java.lang.Object> privateWhitelist) {
            this.props.privateWhitelist(privateWhitelist);
            return this;
        }
        /**
         * @return {@code this}
         * @param privateWhitelist This parameter is required.
         */
        public Builder privateWhitelist(final com.aliyun.ros.cdk.core.IResolvable privateWhitelist) {
            this.props.privateWhitelist(privateWhitelist);
            return this;
        }

        /**
         * @return {@code this}
         * @param publicWhitelist This parameter is required.
         */
        public Builder publicWhitelist(final java.util.List<? extends java.lang.Object> publicWhitelist) {
            this.props.publicWhitelist(publicWhitelist);
            return this;
        }
        /**
         * @return {@code this}
         * @param publicWhitelist This parameter is required.
         */
        public Builder publicWhitelist(final com.aliyun.ros.cdk.core.IResolvable publicWhitelist) {
            this.props.publicWhitelist(publicWhitelist);
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
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.elasticsearch.RosInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param ymlConfig This parameter is required.
         */
        public Builder ymlConfig(final com.aliyun.ros.cdk.core.IResolvable ymlConfig) {
            this.props.ymlConfig(ymlConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param ymlConfig This parameter is required.
         */
        public Builder ymlConfig(final com.aliyun.ros.cdk.elasticsearch.RosInstance.YMLConfigProperty ymlConfig) {
            this.props.ymlConfig(ymlConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneCount This parameter is required.
         */
        public Builder zoneCount(final java.lang.Number zoneCount) {
            this.props.zoneCount(zoneCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneCount This parameter is required.
         */
        public Builder zoneCount(final com.aliyun.ros.cdk.core.IResolvable zoneCount) {
            this.props.zoneCount(zoneCount);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.elasticsearch.RosInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.elasticsearch.RosInstance build() {
            return new com.aliyun.ros.cdk.elasticsearch.RosInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
