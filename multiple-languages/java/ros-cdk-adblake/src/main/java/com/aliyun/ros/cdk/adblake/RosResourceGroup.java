package com.aliyun.ros.cdk.adblake;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ADBLake::ResourceGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.159Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.adblake.$Module.class, fqn = "@alicloud/ros-cdk-adblake.RosResourceGroup")
public class RosResourceGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosResourceGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosResourceGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.adblake.RosResourceGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosResourceGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adblake.RosResourceGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupType() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupUsers() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupUsers", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbClusterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbClusterId", java.util.Objects.requireNonNull(value, "dbClusterId is required"));
    }

    /**
     */
    public void setDbClusterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbClusterId", java.util.Objects.requireNonNull(value, "dbClusterId is required"));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getGroupName() {
        return software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "groupName", java.util.Objects.requireNonNull(value, "groupName is required"));
    }

    /**
     */
    public void setGroupName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupName", java.util.Objects.requireNonNull(value, "groupName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getGroupType() {
        return software.amazon.jsii.Kernel.get(this, "groupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "groupType", java.util.Objects.requireNonNull(value, "groupType is required"));
    }

    /**
     */
    public void setGroupType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupType", java.util.Objects.requireNonNull(value, "groupType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoStopInterval() {
        return software.amazon.jsii.Kernel.get(this, "autoStopInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoStopInterval(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoStopInterval", value);
    }

    /**
     */
    public void setAutoStopInterval(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoStopInterval", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClusterMode() {
        return software.amazon.jsii.Kernel.get(this, "clusterMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterMode", value);
    }

    /**
     */
    public void setClusterMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClusterSizeResource() {
        return software.amazon.jsii.Kernel.get(this, "clusterSizeResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterSizeResource(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterSizeResource", value);
    }

    /**
     */
    public void setClusterSizeResource(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterSizeResource", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableSpot() {
        return software.amazon.jsii.Kernel.get(this, "enableSpot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableSpot(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableSpot", value);
    }

    /**
     */
    public void setEnableSpot(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableSpot", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEngineParams() {
        return software.amazon.jsii.Kernel.get(this, "engineParams", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEngineParams(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "engineParams", value);
    }

    /**
     */
    public void setEngineParams(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "engineParams", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxClusterCount() {
        return software.amazon.jsii.Kernel.get(this, "maxClusterCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxClusterCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxClusterCount", value);
    }

    /**
     */
    public void setMaxClusterCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxClusterCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxComputeResource() {
        return software.amazon.jsii.Kernel.get(this, "maxComputeResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxComputeResource(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "maxComputeResource", value);
    }

    /**
     */
    public void setMaxComputeResource(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxComputeResource", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMinClusterCount() {
        return software.amazon.jsii.Kernel.get(this, "minClusterCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMinClusterCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "minClusterCount", value);
    }

    /**
     */
    public void setMinClusterCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "minClusterCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMinComputeResource() {
        return software.amazon.jsii.Kernel.get(this, "minComputeResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMinComputeResource(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "minComputeResource", value);
    }

    /**
     */
    public void setMinComputeResource(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "minComputeResource", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRules() {
        return software.amazon.jsii.Kernel.get(this, "rules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRules(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rules", value);
    }

    /**
     */
    public void setRules(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.adblake.RosResourceGroup.RulesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.adblake.RosResourceGroup.RulesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "rules", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.adblake.$Module.class, fqn = "@alicloud/ros-cdk-adblake.RosResourceGroup.RulesProperty")
    @software.amazon.jsii.Jsii.Proxy(RulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface RulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getQueryTime();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTargetGroupName();

        /**
         * @return a {@link Builder} of {@link RulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link RulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<RulesProperty> {
            java.lang.Object groupName;
            java.lang.Object queryTime;
            java.lang.Object targetGroupName;

            /**
             * Sets the value of {@link RulesProperty#getGroupName}
             * @param groupName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupName(java.lang.String groupName) {
                this.groupName = groupName;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getGroupName}
             * @param groupName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
                this.groupName = groupName;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getQueryTime}
             * @param queryTime the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryTime(java.lang.String queryTime) {
                this.queryTime = queryTime;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getQueryTime}
             * @param queryTime the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queryTime(com.aliyun.ros.cdk.core.IResolvable queryTime) {
                this.queryTime = queryTime;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getTargetGroupName}
             * @param targetGroupName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetGroupName(java.lang.String targetGroupName) {
                this.targetGroupName = targetGroupName;
                return this;
            }

            /**
             * Sets the value of {@link RulesProperty#getTargetGroupName}
             * @param targetGroupName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetGroupName(com.aliyun.ros.cdk.core.IResolvable targetGroupName) {
                this.targetGroupName = targetGroupName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link RulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public RulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link RulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RulesProperty {
            private final java.lang.Object groupName;
            private final java.lang.Object queryTime;
            private final java.lang.Object targetGroupName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.queryTime = software.amazon.jsii.Kernel.get(this, "queryTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.targetGroupName = software.amazon.jsii.Kernel.get(this, "targetGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.groupName = java.util.Objects.requireNonNull(builder.groupName, "groupName is required");
                this.queryTime = java.util.Objects.requireNonNull(builder.queryTime, "queryTime is required");
                this.targetGroupName = java.util.Objects.requireNonNull(builder.targetGroupName, "targetGroupName is required");
            }

            @Override
            public final java.lang.Object getGroupName() {
                return this.groupName;
            }

            @Override
            public final java.lang.Object getQueryTime() {
                return this.queryTime;
            }

            @Override
            public final java.lang.Object getTargetGroupName() {
                return this.targetGroupName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("groupName", om.valueToTree(this.getGroupName()));
                data.set("queryTime", om.valueToTree(this.getQueryTime()));
                data.set("targetGroupName", om.valueToTree(this.getTargetGroupName()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-adblake.RosResourceGroup.RulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                RulesProperty.Jsii$Proxy that = (RulesProperty.Jsii$Proxy) o;

                if (!groupName.equals(that.groupName)) return false;
                if (!queryTime.equals(that.queryTime)) return false;
                return this.targetGroupName.equals(that.targetGroupName);
            }

            @Override
            public final int hashCode() {
                int result = this.groupName.hashCode();
                result = 31 * result + (this.queryTime.hashCode());
                result = 31 * result + (this.targetGroupName.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.adblake.RosResourceGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.adblake.RosResourceGroup> {
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
        private final com.aliyun.ros.cdk.adblake.RosResourceGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.adblake.RosResourceGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param dbClusterId This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbClusterId This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
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
         * @param groupName This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props.groupName(groupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupName This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props.groupName(groupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param groupType This parameter is required.
         */
        public Builder groupType(final java.lang.String groupType) {
            this.props.groupType(groupType);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupType This parameter is required.
         */
        public Builder groupType(final com.aliyun.ros.cdk.core.IResolvable groupType) {
            this.props.groupType(groupType);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoStopInterval This parameter is required.
         */
        public Builder autoStopInterval(final java.lang.String autoStopInterval) {
            this.props.autoStopInterval(autoStopInterval);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoStopInterval This parameter is required.
         */
        public Builder autoStopInterval(final com.aliyun.ros.cdk.core.IResolvable autoStopInterval) {
            this.props.autoStopInterval(autoStopInterval);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterMode This parameter is required.
         */
        public Builder clusterMode(final java.lang.String clusterMode) {
            this.props.clusterMode(clusterMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterMode This parameter is required.
         */
        public Builder clusterMode(final com.aliyun.ros.cdk.core.IResolvable clusterMode) {
            this.props.clusterMode(clusterMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterSizeResource This parameter is required.
         */
        public Builder clusterSizeResource(final java.lang.String clusterSizeResource) {
            this.props.clusterSizeResource(clusterSizeResource);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterSizeResource This parameter is required.
         */
        public Builder clusterSizeResource(final com.aliyun.ros.cdk.core.IResolvable clusterSizeResource) {
            this.props.clusterSizeResource(clusterSizeResource);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableSpot This parameter is required.
         */
        public Builder enableSpot(final java.lang.Boolean enableSpot) {
            this.props.enableSpot(enableSpot);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableSpot This parameter is required.
         */
        public Builder enableSpot(final com.aliyun.ros.cdk.core.IResolvable enableSpot) {
            this.props.enableSpot(enableSpot);
            return this;
        }

        /**
         * @return {@code this}
         * @param engineParams This parameter is required.
         */
        public Builder engineParams(final com.aliyun.ros.cdk.core.IResolvable engineParams) {
            this.props.engineParams(engineParams);
            return this;
        }
        /**
         * @return {@code this}
         * @param engineParams This parameter is required.
         */
        public Builder engineParams(final java.util.Map<java.lang.String, ? extends java.lang.Object> engineParams) {
            this.props.engineParams(engineParams);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxClusterCount This parameter is required.
         */
        public Builder maxClusterCount(final java.lang.Number maxClusterCount) {
            this.props.maxClusterCount(maxClusterCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxClusterCount This parameter is required.
         */
        public Builder maxClusterCount(final com.aliyun.ros.cdk.core.IResolvable maxClusterCount) {
            this.props.maxClusterCount(maxClusterCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxComputeResource This parameter is required.
         */
        public Builder maxComputeResource(final java.lang.String maxComputeResource) {
            this.props.maxComputeResource(maxComputeResource);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxComputeResource This parameter is required.
         */
        public Builder maxComputeResource(final com.aliyun.ros.cdk.core.IResolvable maxComputeResource) {
            this.props.maxComputeResource(maxComputeResource);
            return this;
        }

        /**
         * @return {@code this}
         * @param minClusterCount This parameter is required.
         */
        public Builder minClusterCount(final java.lang.Number minClusterCount) {
            this.props.minClusterCount(minClusterCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param minClusterCount This parameter is required.
         */
        public Builder minClusterCount(final com.aliyun.ros.cdk.core.IResolvable minClusterCount) {
            this.props.minClusterCount(minClusterCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param minComputeResource This parameter is required.
         */
        public Builder minComputeResource(final java.lang.String minComputeResource) {
            this.props.minComputeResource(minComputeResource);
            return this;
        }
        /**
         * @return {@code this}
         * @param minComputeResource This parameter is required.
         */
        public Builder minComputeResource(final com.aliyun.ros.cdk.core.IResolvable minComputeResource) {
            this.props.minComputeResource(minComputeResource);
            return this;
        }

        /**
         * @return {@code this}
         * @param rules This parameter is required.
         */
        public Builder rules(final com.aliyun.ros.cdk.core.IResolvable rules) {
            this.props.rules(rules);
            return this;
        }
        /**
         * @return {@code this}
         * @param rules This parameter is required.
         */
        public Builder rules(final java.util.List<? extends java.lang.Object> rules) {
            this.props.rules(rules);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.adblake.RosResourceGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.adblake.RosResourceGroup build() {
            return new com.aliyun.ros.cdk.adblake.RosResourceGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
