package com.aliyun.ros.cdk.cms2;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CMS2::AggTaskGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T07:47:48.982Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.RosAggTaskGroup")
public class RosAggTaskGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAggTaskGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAggTaskGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cms2.RosAggTaskGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAggTaskGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms2.RosAggTaskGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAggTaskGroupConfigHash() {
        return software.amazon.jsii.Kernel.get(this, "attrAggTaskGroupConfigHash", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAggTaskGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrAggTaskGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAggTaskGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrAggTaskGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourcePrometheusId() {
        return software.amazon.jsii.Kernel.get(this, "attrSourcePrometheusId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAggTaskGroupConfig() {
        return software.amazon.jsii.Kernel.get(this, "aggTaskGroupConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAggTaskGroupConfig(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aggTaskGroupConfig", java.util.Objects.requireNonNull(value, "aggTaskGroupConfig is required"));
    }

    /**
     */
    public void setAggTaskGroupConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aggTaskGroupConfig", java.util.Objects.requireNonNull(value, "aggTaskGroupConfig is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAggTaskGroupName() {
        return software.amazon.jsii.Kernel.get(this, "aggTaskGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAggTaskGroupName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aggTaskGroupName", java.util.Objects.requireNonNull(value, "aggTaskGroupName is required"));
    }

    /**
     */
    public void setAggTaskGroupName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aggTaskGroupName", java.util.Objects.requireNonNull(value, "aggTaskGroupName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargetPrometheusId() {
        return software.amazon.jsii.Kernel.get(this, "targetPrometheusId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetPrometheusId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetPrometheusId", java.util.Objects.requireNonNull(value, "targetPrometheusId is required"));
    }

    /**
     */
    public void setTargetPrometheusId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetPrometheusId", java.util.Objects.requireNonNull(value, "targetPrometheusId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAggTaskGroupConfigType() {
        return software.amazon.jsii.Kernel.get(this, "aggTaskGroupConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAggTaskGroupConfigType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aggTaskGroupConfigType", value);
    }

    /**
     */
    public void setAggTaskGroupConfigType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aggTaskGroupConfigType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCronExpr() {
        return software.amazon.jsii.Kernel.get(this, "cronExpr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCronExpr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cronExpr", value);
    }

    /**
     */
    public void setCronExpr(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cronExpr", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDelay() {
        return software.amazon.jsii.Kernel.get(this, "delay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDelay(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "delay", value);
    }

    /**
     */
    public void setDelay(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "delay", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getFromTime() {
        return software.amazon.jsii.Kernel.get(this, "fromTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFromTime(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "fromTime", value);
    }

    /**
     */
    public void setFromTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fromTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxRetries() {
        return software.amazon.jsii.Kernel.get(this, "maxRetries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxRetries(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxRetries", value);
    }

    /**
     */
    public void setMaxRetries(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxRetries", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxRunTimeInSeconds() {
        return software.amazon.jsii.Kernel.get(this, "maxRunTimeInSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxRunTimeInSeconds(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxRunTimeInSeconds", value);
    }

    /**
     */
    public void setMaxRunTimeInSeconds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxRunTimeInSeconds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOverrideIfExists() {
        return software.amazon.jsii.Kernel.get(this, "overrideIfExists", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOverrideIfExists(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "overrideIfExists", value);
    }

    /**
     */
    public void setOverrideIfExists(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "overrideIfExists", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPrecheckString() {
        return software.amazon.jsii.Kernel.get(this, "precheckString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrecheckString(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "precheckString", value);
    }

    /**
     */
    public void setPrecheckString(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "precheckString", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScheduleMode() {
        return software.amazon.jsii.Kernel.get(this, "scheduleMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScheduleMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scheduleMode", value);
    }

    /**
     */
    public void setScheduleMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scheduleMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScheduleTimeExpr() {
        return software.amazon.jsii.Kernel.get(this, "scheduleTimeExpr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScheduleTimeExpr(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scheduleTimeExpr", value);
    }

    /**
     */
    public void setScheduleTimeExpr(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scheduleTimeExpr", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "status", value);
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "status", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cms2.RosAggTaskGroup.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.cms2.RosAggTaskGroup.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms2.RosAggTaskGroup.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cms2.RosAggTaskGroup.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getToTime() {
        return software.amazon.jsii.Kernel.get(this, "toTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setToTime(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "toTime", value);
    }

    /**
     */
    public void setToTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "toTime", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.RosAggTaskGroup.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms2.RosAggTaskGroup.TagsProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cms2.RosAggTaskGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms2.RosAggTaskGroup> {
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
        private final com.aliyun.ros.cdk.cms2.RosAggTaskGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms2.RosAggTaskGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param aggTaskGroupConfig This parameter is required.
         */
        public Builder aggTaskGroupConfig(final java.lang.String aggTaskGroupConfig) {
            this.props.aggTaskGroupConfig(aggTaskGroupConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param aggTaskGroupConfig This parameter is required.
         */
        public Builder aggTaskGroupConfig(final com.aliyun.ros.cdk.core.IResolvable aggTaskGroupConfig) {
            this.props.aggTaskGroupConfig(aggTaskGroupConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param aggTaskGroupName This parameter is required.
         */
        public Builder aggTaskGroupName(final java.lang.String aggTaskGroupName) {
            this.props.aggTaskGroupName(aggTaskGroupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param aggTaskGroupName This parameter is required.
         */
        public Builder aggTaskGroupName(final com.aliyun.ros.cdk.core.IResolvable aggTaskGroupName) {
            this.props.aggTaskGroupName(aggTaskGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetPrometheusId This parameter is required.
         */
        public Builder targetPrometheusId(final java.lang.String targetPrometheusId) {
            this.props.targetPrometheusId(targetPrometheusId);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetPrometheusId This parameter is required.
         */
        public Builder targetPrometheusId(final com.aliyun.ros.cdk.core.IResolvable targetPrometheusId) {
            this.props.targetPrometheusId(targetPrometheusId);
            return this;
        }

        /**
         * @return {@code this}
         * @param aggTaskGroupConfigType This parameter is required.
         */
        public Builder aggTaskGroupConfigType(final java.lang.String aggTaskGroupConfigType) {
            this.props.aggTaskGroupConfigType(aggTaskGroupConfigType);
            return this;
        }
        /**
         * @return {@code this}
         * @param aggTaskGroupConfigType This parameter is required.
         */
        public Builder aggTaskGroupConfigType(final com.aliyun.ros.cdk.core.IResolvable aggTaskGroupConfigType) {
            this.props.aggTaskGroupConfigType(aggTaskGroupConfigType);
            return this;
        }

        /**
         * @return {@code this}
         * @param cronExpr This parameter is required.
         */
        public Builder cronExpr(final java.lang.String cronExpr) {
            this.props.cronExpr(cronExpr);
            return this;
        }
        /**
         * @return {@code this}
         * @param cronExpr This parameter is required.
         */
        public Builder cronExpr(final com.aliyun.ros.cdk.core.IResolvable cronExpr) {
            this.props.cronExpr(cronExpr);
            return this;
        }

        /**
         * @return {@code this}
         * @param delay This parameter is required.
         */
        public Builder delay(final java.lang.Number delay) {
            this.props.delay(delay);
            return this;
        }
        /**
         * @return {@code this}
         * @param delay This parameter is required.
         */
        public Builder delay(final com.aliyun.ros.cdk.core.IResolvable delay) {
            this.props.delay(delay);
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
         * @param fromTime This parameter is required.
         */
        public Builder fromTime(final java.lang.Number fromTime) {
            this.props.fromTime(fromTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param fromTime This parameter is required.
         */
        public Builder fromTime(final com.aliyun.ros.cdk.core.IResolvable fromTime) {
            this.props.fromTime(fromTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxRetries This parameter is required.
         */
        public Builder maxRetries(final java.lang.Number maxRetries) {
            this.props.maxRetries(maxRetries);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxRetries This parameter is required.
         */
        public Builder maxRetries(final com.aliyun.ros.cdk.core.IResolvable maxRetries) {
            this.props.maxRetries(maxRetries);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxRunTimeInSeconds This parameter is required.
         */
        public Builder maxRunTimeInSeconds(final java.lang.Number maxRunTimeInSeconds) {
            this.props.maxRunTimeInSeconds(maxRunTimeInSeconds);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxRunTimeInSeconds This parameter is required.
         */
        public Builder maxRunTimeInSeconds(final com.aliyun.ros.cdk.core.IResolvable maxRunTimeInSeconds) {
            this.props.maxRunTimeInSeconds(maxRunTimeInSeconds);
            return this;
        }

        /**
         * @return {@code this}
         * @param overrideIfExists This parameter is required.
         */
        public Builder overrideIfExists(final java.lang.Boolean overrideIfExists) {
            this.props.overrideIfExists(overrideIfExists);
            return this;
        }
        /**
         * @return {@code this}
         * @param overrideIfExists This parameter is required.
         */
        public Builder overrideIfExists(final com.aliyun.ros.cdk.core.IResolvable overrideIfExists) {
            this.props.overrideIfExists(overrideIfExists);
            return this;
        }

        /**
         * @return {@code this}
         * @param precheckString This parameter is required.
         */
        public Builder precheckString(final com.aliyun.ros.cdk.core.IResolvable precheckString) {
            this.props.precheckString(precheckString);
            return this;
        }
        /**
         * @return {@code this}
         * @param precheckString This parameter is required.
         */
        public Builder precheckString(final java.util.Map<java.lang.String, ? extends java.lang.Object> precheckString) {
            this.props.precheckString(precheckString);
            return this;
        }

        /**
         * @return {@code this}
         * @param scheduleMode This parameter is required.
         */
        public Builder scheduleMode(final java.lang.String scheduleMode) {
            this.props.scheduleMode(scheduleMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param scheduleMode This parameter is required.
         */
        public Builder scheduleMode(final com.aliyun.ros.cdk.core.IResolvable scheduleMode) {
            this.props.scheduleMode(scheduleMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param scheduleTimeExpr This parameter is required.
         */
        public Builder scheduleTimeExpr(final java.lang.String scheduleTimeExpr) {
            this.props.scheduleTimeExpr(scheduleTimeExpr);
            return this;
        }
        /**
         * @return {@code this}
         * @param scheduleTimeExpr This parameter is required.
         */
        public Builder scheduleTimeExpr(final com.aliyun.ros.cdk.core.IResolvable scheduleTimeExpr) {
            this.props.scheduleTimeExpr(scheduleTimeExpr);
            return this;
        }

        /**
         * @return {@code this}
         * @param status This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * @return {@code this}
         * @param status This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.cms2.RosAggTaskGroup.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param toTime This parameter is required.
         */
        public Builder toTime(final java.lang.Number toTime) {
            this.props.toTime(toTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param toTime This parameter is required.
         */
        public Builder toTime(final com.aliyun.ros.cdk.core.IResolvable toTime) {
            this.props.toTime(toTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms2.RosAggTaskGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.cms2.RosAggTaskGroup build() {
            return new com.aliyun.ros.cdk.cms2.RosAggTaskGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
