package com.aliyun.ros.cdk.clickhouse;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ClickHouse::EnterpriseDBCluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:46:45.070Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.RosEnterpriseDBCluster")
public class RosEnterpriseDBCluster extends com.aliyun.ros.cdk.core.RosResource {

    protected RosEnterpriseDBCluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosEnterpriseDBCluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosEnterpriseDBCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBClusterProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrivateConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getEngine() {
        return software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEngine(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "engine", java.util.Objects.requireNonNull(value, "engine is required"));
    }

    /**
     */
    public void setEngine(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "engine", java.util.Objects.requireNonNull(value, "engine is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNodeCount() {
        return software.amazon.jsii.Kernel.get(this, "nodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNodeCount(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "nodeCount", java.util.Objects.requireNonNull(value, "nodeCount is required"));
    }

    /**
     */
    public void setNodeCount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nodeCount", java.util.Objects.requireNonNull(value, "nodeCount is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNodeScaleMax() {
        return software.amazon.jsii.Kernel.get(this, "nodeScaleMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNodeScaleMax(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "nodeScaleMax", java.util.Objects.requireNonNull(value, "nodeScaleMax is required"));
    }

    /**
     */
    public void setNodeScaleMax(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nodeScaleMax", java.util.Objects.requireNonNull(value, "nodeScaleMax is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNodeScaleMin() {
        return software.amazon.jsii.Kernel.get(this, "nodeScaleMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNodeScaleMin(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "nodeScaleMin", java.util.Objects.requireNonNull(value, "nodeScaleMin is required"));
    }

    /**
     */
    public void setNodeScaleMin(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nodeScaleMin", java.util.Objects.requireNonNull(value, "nodeScaleMin is required"));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", java.util.Objects.requireNonNull(value, "zoneId is required"));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", java.util.Objects.requireNonNull(value, "zoneId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBackupSetId() {
        return software.amazon.jsii.Kernel.get(this, "backupSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackupSetId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "backupSetId", value);
    }

    /**
     */
    public void setBackupSetId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backupSetId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceDescription", value);
    }

    /**
     */
    public void setDbInstanceDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbTimeZone() {
        return software.amazon.jsii.Kernel.get(this, "dbTimeZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbTimeZone(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbTimeZone", value);
    }

    /**
     */
    public void setDbTimeZone(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbTimeZone", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeploySchema() {
        return software.amazon.jsii.Kernel.get(this, "deploySchema", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeploySchema(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deploySchema", value);
    }

    /**
     */
    public void setDeploySchema(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deploySchema", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMultiZone() {
        return software.amazon.jsii.Kernel.get(this, "multiZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMultiZone(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "multiZone", value);
    }

    /**
     */
    public void setMultiZone(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.MultiZoneProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.MultiZoneProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "multiZone", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPublicConnectionSetting() {
        return software.amazon.jsii.Kernel.get(this, "publicConnectionSetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPublicConnectionSetting(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "publicConnectionSetting", value);
    }

    /**
     */
    public void setPublicConnectionSetting(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.PublicConnectionSettingProperty value) {
        software.amazon.jsii.Kernel.set(this, "publicConnectionSetting", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "sourceDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceDbInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceDbInstanceId", value);
    }

    /**
     */
    public void setSourceDbInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceDbInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStorageQuota() {
        return software.amazon.jsii.Kernel.get(this, "storageQuota", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStorageQuota(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "storageQuota", value);
    }

    /**
     */
    public void setStorageQuota(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "storageQuota", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStorageType() {
        return software.amazon.jsii.Kernel.get(this, "storageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStorageType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "storageType", value);
    }

    /**
     */
    public void setStorageType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "storageType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.RosEnterpriseDBCluster.MultiZoneProperty")
    @software.amazon.jsii.Jsii.Proxy(MultiZoneProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MultiZoneProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchIds();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

        /**
         * @return a {@link Builder} of {@link MultiZoneProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MultiZoneProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MultiZoneProperty> {
            java.lang.Object vSwitchIds;
            java.lang.Object zoneId;

            /**
             * Sets the value of {@link MultiZoneProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Sets the value of {@link MultiZoneProperty#getVSwitchIds}
             * @param vSwitchIds the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
                this.vSwitchIds = vSwitchIds;
                return this;
            }

            /**
             * Sets the value of {@link MultiZoneProperty#getZoneId}
             * @param zoneId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(java.lang.String zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Sets the value of {@link MultiZoneProperty#getZoneId}
             * @param zoneId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MultiZoneProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MultiZoneProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MultiZoneProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MultiZoneProperty {
            private final java.lang.Object vSwitchIds;
            private final java.lang.Object zoneId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.vSwitchIds = java.util.Objects.requireNonNull(builder.vSwitchIds, "vSwitchIds is required");
                this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            }

            @Override
            public final java.lang.Object getVSwitchIds() {
                return this.vSwitchIds;
            }

            @Override
            public final java.lang.Object getZoneId() {
                return this.zoneId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
                data.set("zoneId", om.valueToTree(this.getZoneId()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-clickhouse.RosEnterpriseDBCluster.MultiZoneProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MultiZoneProperty.Jsii$Proxy that = (MultiZoneProperty.Jsii$Proxy) o;

                if (!vSwitchIds.equals(that.vSwitchIds)) return false;
                return this.zoneId.equals(that.zoneId);
            }

            @Override
            public final int hashCode() {
                int result = this.vSwitchIds.hashCode();
                result = 31 * result + (this.zoneId.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.RosEnterpriseDBCluster.PublicConnectionSettingProperty")
    @software.amazon.jsii.Jsii.Proxy(PublicConnectionSettingProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PublicConnectionSettingProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getConnectionPrefix();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnablePublicConnection();

        /**
         * @return a {@link Builder} of {@link PublicConnectionSettingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PublicConnectionSettingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PublicConnectionSettingProperty> {
            java.lang.Object connectionPrefix;
            java.lang.Object enablePublicConnection;

            /**
             * Sets the value of {@link PublicConnectionSettingProperty#getConnectionPrefix}
             * @param connectionPrefix the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionPrefix(java.lang.String connectionPrefix) {
                this.connectionPrefix = connectionPrefix;
                return this;
            }

            /**
             * Sets the value of {@link PublicConnectionSettingProperty#getConnectionPrefix}
             * @param connectionPrefix the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder connectionPrefix(com.aliyun.ros.cdk.core.IResolvable connectionPrefix) {
                this.connectionPrefix = connectionPrefix;
                return this;
            }

            /**
             * Sets the value of {@link PublicConnectionSettingProperty#getEnablePublicConnection}
             * @param enablePublicConnection the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enablePublicConnection(java.lang.Boolean enablePublicConnection) {
                this.enablePublicConnection = enablePublicConnection;
                return this;
            }

            /**
             * Sets the value of {@link PublicConnectionSettingProperty#getEnablePublicConnection}
             * @param enablePublicConnection the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enablePublicConnection(com.aliyun.ros.cdk.core.IResolvable enablePublicConnection) {
                this.enablePublicConnection = enablePublicConnection;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PublicConnectionSettingProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PublicConnectionSettingProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PublicConnectionSettingProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PublicConnectionSettingProperty {
            private final java.lang.Object connectionPrefix;
            private final java.lang.Object enablePublicConnection;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.connectionPrefix = software.amazon.jsii.Kernel.get(this, "connectionPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enablePublicConnection = software.amazon.jsii.Kernel.get(this, "enablePublicConnection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.connectionPrefix = java.util.Objects.requireNonNull(builder.connectionPrefix, "connectionPrefix is required");
                this.enablePublicConnection = java.util.Objects.requireNonNull(builder.enablePublicConnection, "enablePublicConnection is required");
            }

            @Override
            public final java.lang.Object getConnectionPrefix() {
                return this.connectionPrefix;
            }

            @Override
            public final java.lang.Object getEnablePublicConnection() {
                return this.enablePublicConnection;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("connectionPrefix", om.valueToTree(this.getConnectionPrefix()));
                data.set("enablePublicConnection", om.valueToTree(this.getEnablePublicConnection()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-clickhouse.RosEnterpriseDBCluster.PublicConnectionSettingProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PublicConnectionSettingProperty.Jsii$Proxy that = (PublicConnectionSettingProperty.Jsii$Proxy) o;

                if (!connectionPrefix.equals(that.connectionPrefix)) return false;
                return this.enablePublicConnection.equals(that.enablePublicConnection);
            }

            @Override
            public final int hashCode() {
                int result = this.connectionPrefix.hashCode();
                result = 31 * result + (this.enablePublicConnection.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.RosEnterpriseDBCluster.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-clickhouse.RosEnterpriseDBCluster.TagsProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster> {
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
        private final com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBClusterProps.Builder();
        }

        /**
         * @return {@code this}
         * @param engine This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.props.engine(engine);
            return this;
        }
        /**
         * @return {@code this}
         * @param engine This parameter is required.
         */
        public Builder engine(final com.aliyun.ros.cdk.core.IResolvable engine) {
            this.props.engine(engine);
            return this;
        }

        /**
         * @return {@code this}
         * @param nodeCount This parameter is required.
         */
        public Builder nodeCount(final java.lang.Number nodeCount) {
            this.props.nodeCount(nodeCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param nodeCount This parameter is required.
         */
        public Builder nodeCount(final com.aliyun.ros.cdk.core.IResolvable nodeCount) {
            this.props.nodeCount(nodeCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param nodeScaleMax This parameter is required.
         */
        public Builder nodeScaleMax(final java.lang.Number nodeScaleMax) {
            this.props.nodeScaleMax(nodeScaleMax);
            return this;
        }
        /**
         * @return {@code this}
         * @param nodeScaleMax This parameter is required.
         */
        public Builder nodeScaleMax(final com.aliyun.ros.cdk.core.IResolvable nodeScaleMax) {
            this.props.nodeScaleMax(nodeScaleMax);
            return this;
        }

        /**
         * @return {@code this}
         * @param nodeScaleMin This parameter is required.
         */
        public Builder nodeScaleMin(final java.lang.Number nodeScaleMin) {
            this.props.nodeScaleMin(nodeScaleMin);
            return this;
        }
        /**
         * @return {@code this}
         * @param nodeScaleMin This parameter is required.
         */
        public Builder nodeScaleMin(final com.aliyun.ros.cdk.core.IResolvable nodeScaleMin) {
            this.props.nodeScaleMin(nodeScaleMin);
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
         * @return {@code this}
         * @param backupSetId This parameter is required.
         */
        public Builder backupSetId(final java.lang.String backupSetId) {
            this.props.backupSetId(backupSetId);
            return this;
        }
        /**
         * @return {@code this}
         * @param backupSetId This parameter is required.
         */
        public Builder backupSetId(final com.aliyun.ros.cdk.core.IResolvable backupSetId) {
            this.props.backupSetId(backupSetId);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceDescription This parameter is required.
         */
        public Builder dbInstanceDescription(final java.lang.String dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceDescription This parameter is required.
         */
        public Builder dbInstanceDescription(final com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbTimeZone This parameter is required.
         */
        public Builder dbTimeZone(final java.lang.String dbTimeZone) {
            this.props.dbTimeZone(dbTimeZone);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbTimeZone This parameter is required.
         */
        public Builder dbTimeZone(final com.aliyun.ros.cdk.core.IResolvable dbTimeZone) {
            this.props.dbTimeZone(dbTimeZone);
            return this;
        }

        /**
         * @return {@code this}
         * @param deploySchema This parameter is required.
         */
        public Builder deploySchema(final java.lang.String deploySchema) {
            this.props.deploySchema(deploySchema);
            return this;
        }
        /**
         * @return {@code this}
         * @param deploySchema This parameter is required.
         */
        public Builder deploySchema(final com.aliyun.ros.cdk.core.IResolvable deploySchema) {
            this.props.deploySchema(deploySchema);
            return this;
        }

        /**
         * @return {@code this}
         * @param multiZone This parameter is required.
         */
        public Builder multiZone(final com.aliyun.ros.cdk.core.IResolvable multiZone) {
            this.props.multiZone(multiZone);
            return this;
        }
        /**
         * @return {@code this}
         * @param multiZone This parameter is required.
         */
        public Builder multiZone(final java.util.List<? extends java.lang.Object> multiZone) {
            this.props.multiZone(multiZone);
            return this;
        }

        /**
         * @return {@code this}
         * @param publicConnectionSetting This parameter is required.
         */
        public Builder publicConnectionSetting(final com.aliyun.ros.cdk.core.IResolvable publicConnectionSetting) {
            this.props.publicConnectionSetting(publicConnectionSetting);
            return this;
        }
        /**
         * @return {@code this}
         * @param publicConnectionSetting This parameter is required.
         */
        public Builder publicConnectionSetting(final com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.PublicConnectionSettingProperty publicConnectionSetting) {
            this.props.publicConnectionSetting(publicConnectionSetting);
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
         * @param sourceDbInstanceId This parameter is required.
         */
        public Builder sourceDbInstanceId(final java.lang.String sourceDbInstanceId) {
            this.props.sourceDbInstanceId(sourceDbInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceDbInstanceId This parameter is required.
         */
        public Builder sourceDbInstanceId(final com.aliyun.ros.cdk.core.IResolvable sourceDbInstanceId) {
            this.props.sourceDbInstanceId(sourceDbInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param storageQuota This parameter is required.
         */
        public Builder storageQuota(final java.lang.Number storageQuota) {
            this.props.storageQuota(storageQuota);
            return this;
        }
        /**
         * @return {@code this}
         * @param storageQuota This parameter is required.
         */
        public Builder storageQuota(final com.aliyun.ros.cdk.core.IResolvable storageQuota) {
            this.props.storageQuota(storageQuota);
            return this;
        }

        /**
         * @return {@code this}
         * @param storageType This parameter is required.
         */
        public Builder storageType(final java.lang.String storageType) {
            this.props.storageType(storageType);
            return this;
        }
        /**
         * @return {@code this}
         * @param storageType This parameter is required.
         */
        public Builder storageType(final com.aliyun.ros.cdk.core.IResolvable storageType) {
            this.props.storageType(storageType);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster build() {
            return new com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
