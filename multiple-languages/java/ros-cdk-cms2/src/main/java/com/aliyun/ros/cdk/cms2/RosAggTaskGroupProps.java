package com.aliyun.ros.cdk.cms2;

/**
 * Properties for defining a <code>RosAggTaskGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-aggtaskgroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T07:47:48.985Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.RosAggTaskGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosAggTaskGroupProps.Jsii$Proxy.class)
public interface RosAggTaskGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAggTaskGroupConfig();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAggTaskGroupName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetPrometheusId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAggTaskGroupConfigType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCronExpr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDelay() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFromTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxRetries() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxRunTimeInSeconds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOverrideIfExists() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrecheckString() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScheduleMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScheduleTimeExpr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cms2.RosAggTaskGroup.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getToTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAggTaskGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAggTaskGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAggTaskGroupProps> {
        java.lang.Object aggTaskGroupConfig;
        java.lang.Object aggTaskGroupName;
        java.lang.Object instanceId;
        java.lang.Object targetPrometheusId;
        java.lang.Object aggTaskGroupConfigType;
        java.lang.Object cronExpr;
        java.lang.Object delay;
        java.lang.Object description;
        java.lang.Object fromTime;
        java.lang.Object maxRetries;
        java.lang.Object maxRunTimeInSeconds;
        java.lang.Object overrideIfExists;
        java.lang.Object precheckString;
        java.lang.Object scheduleMode;
        java.lang.Object scheduleTimeExpr;
        java.lang.Object status;
        java.util.List<com.aliyun.ros.cdk.cms2.RosAggTaskGroup.TagsProperty> tags;
        java.lang.Object toTime;

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getAggTaskGroupConfig}
         * @param aggTaskGroupConfig the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aggTaskGroupConfig(java.lang.String aggTaskGroupConfig) {
            this.aggTaskGroupConfig = aggTaskGroupConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getAggTaskGroupConfig}
         * @param aggTaskGroupConfig the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aggTaskGroupConfig(com.aliyun.ros.cdk.core.IResolvable aggTaskGroupConfig) {
            this.aggTaskGroupConfig = aggTaskGroupConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getAggTaskGroupName}
         * @param aggTaskGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aggTaskGroupName(java.lang.String aggTaskGroupName) {
            this.aggTaskGroupName = aggTaskGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getAggTaskGroupName}
         * @param aggTaskGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aggTaskGroupName(com.aliyun.ros.cdk.core.IResolvable aggTaskGroupName) {
            this.aggTaskGroupName = aggTaskGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getTargetPrometheusId}
         * @param targetPrometheusId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetPrometheusId(java.lang.String targetPrometheusId) {
            this.targetPrometheusId = targetPrometheusId;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getTargetPrometheusId}
         * @param targetPrometheusId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetPrometheusId(com.aliyun.ros.cdk.core.IResolvable targetPrometheusId) {
            this.targetPrometheusId = targetPrometheusId;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getAggTaskGroupConfigType}
         * @param aggTaskGroupConfigType the value to be set.
         * @return {@code this}
         */
        public Builder aggTaskGroupConfigType(java.lang.String aggTaskGroupConfigType) {
            this.aggTaskGroupConfigType = aggTaskGroupConfigType;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getAggTaskGroupConfigType}
         * @param aggTaskGroupConfigType the value to be set.
         * @return {@code this}
         */
        public Builder aggTaskGroupConfigType(com.aliyun.ros.cdk.core.IResolvable aggTaskGroupConfigType) {
            this.aggTaskGroupConfigType = aggTaskGroupConfigType;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getCronExpr}
         * @param cronExpr the value to be set.
         * @return {@code this}
         */
        public Builder cronExpr(java.lang.String cronExpr) {
            this.cronExpr = cronExpr;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getCronExpr}
         * @param cronExpr the value to be set.
         * @return {@code this}
         */
        public Builder cronExpr(com.aliyun.ros.cdk.core.IResolvable cronExpr) {
            this.cronExpr = cronExpr;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getDelay}
         * @param delay the value to be set.
         * @return {@code this}
         */
        public Builder delay(java.lang.Number delay) {
            this.delay = delay;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getDelay}
         * @param delay the value to be set.
         * @return {@code this}
         */
        public Builder delay(com.aliyun.ros.cdk.core.IResolvable delay) {
            this.delay = delay;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getFromTime}
         * @param fromTime the value to be set.
         * @return {@code this}
         */
        public Builder fromTime(java.lang.Number fromTime) {
            this.fromTime = fromTime;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getFromTime}
         * @param fromTime the value to be set.
         * @return {@code this}
         */
        public Builder fromTime(com.aliyun.ros.cdk.core.IResolvable fromTime) {
            this.fromTime = fromTime;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getMaxRetries}
         * @param maxRetries the value to be set.
         * @return {@code this}
         */
        public Builder maxRetries(java.lang.Number maxRetries) {
            this.maxRetries = maxRetries;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getMaxRetries}
         * @param maxRetries the value to be set.
         * @return {@code this}
         */
        public Builder maxRetries(com.aliyun.ros.cdk.core.IResolvable maxRetries) {
            this.maxRetries = maxRetries;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getMaxRunTimeInSeconds}
         * @param maxRunTimeInSeconds the value to be set.
         * @return {@code this}
         */
        public Builder maxRunTimeInSeconds(java.lang.Number maxRunTimeInSeconds) {
            this.maxRunTimeInSeconds = maxRunTimeInSeconds;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getMaxRunTimeInSeconds}
         * @param maxRunTimeInSeconds the value to be set.
         * @return {@code this}
         */
        public Builder maxRunTimeInSeconds(com.aliyun.ros.cdk.core.IResolvable maxRunTimeInSeconds) {
            this.maxRunTimeInSeconds = maxRunTimeInSeconds;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getOverrideIfExists}
         * @param overrideIfExists the value to be set.
         * @return {@code this}
         */
        public Builder overrideIfExists(java.lang.Boolean overrideIfExists) {
            this.overrideIfExists = overrideIfExists;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getOverrideIfExists}
         * @param overrideIfExists the value to be set.
         * @return {@code this}
         */
        public Builder overrideIfExists(com.aliyun.ros.cdk.core.IResolvable overrideIfExists) {
            this.overrideIfExists = overrideIfExists;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getPrecheckString}
         * @param precheckString the value to be set.
         * @return {@code this}
         */
        public Builder precheckString(com.aliyun.ros.cdk.core.IResolvable precheckString) {
            this.precheckString = precheckString;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getPrecheckString}
         * @param precheckString the value to be set.
         * @return {@code this}
         */
        public Builder precheckString(java.util.Map<java.lang.String, ? extends java.lang.Object> precheckString) {
            this.precheckString = precheckString;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getScheduleMode}
         * @param scheduleMode the value to be set.
         * @return {@code this}
         */
        public Builder scheduleMode(java.lang.String scheduleMode) {
            this.scheduleMode = scheduleMode;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getScheduleMode}
         * @param scheduleMode the value to be set.
         * @return {@code this}
         */
        public Builder scheduleMode(com.aliyun.ros.cdk.core.IResolvable scheduleMode) {
            this.scheduleMode = scheduleMode;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getScheduleTimeExpr}
         * @param scheduleTimeExpr the value to be set.
         * @return {@code this}
         */
        public Builder scheduleTimeExpr(java.lang.String scheduleTimeExpr) {
            this.scheduleTimeExpr = scheduleTimeExpr;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getScheduleTimeExpr}
         * @param scheduleTimeExpr the value to be set.
         * @return {@code this}
         */
        public Builder scheduleTimeExpr(com.aliyun.ros.cdk.core.IResolvable scheduleTimeExpr) {
            this.scheduleTimeExpr = scheduleTimeExpr;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getStatus}
         * @param status the value to be set.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cms2.RosAggTaskGroup.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.cms2.RosAggTaskGroup.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getToTime}
         * @param toTime the value to be set.
         * @return {@code this}
         */
        public Builder toTime(java.lang.Number toTime) {
            this.toTime = toTime;
            return this;
        }

        /**
         * Sets the value of {@link RosAggTaskGroupProps#getToTime}
         * @param toTime the value to be set.
         * @return {@code this}
         */
        public Builder toTime(com.aliyun.ros.cdk.core.IResolvable toTime) {
            this.toTime = toTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAggTaskGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAggTaskGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAggTaskGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAggTaskGroupProps {
        private final java.lang.Object aggTaskGroupConfig;
        private final java.lang.Object aggTaskGroupName;
        private final java.lang.Object instanceId;
        private final java.lang.Object targetPrometheusId;
        private final java.lang.Object aggTaskGroupConfigType;
        private final java.lang.Object cronExpr;
        private final java.lang.Object delay;
        private final java.lang.Object description;
        private final java.lang.Object fromTime;
        private final java.lang.Object maxRetries;
        private final java.lang.Object maxRunTimeInSeconds;
        private final java.lang.Object overrideIfExists;
        private final java.lang.Object precheckString;
        private final java.lang.Object scheduleMode;
        private final java.lang.Object scheduleTimeExpr;
        private final java.lang.Object status;
        private final java.util.List<com.aliyun.ros.cdk.cms2.RosAggTaskGroup.TagsProperty> tags;
        private final java.lang.Object toTime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aggTaskGroupConfig = software.amazon.jsii.Kernel.get(this, "aggTaskGroupConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aggTaskGroupName = software.amazon.jsii.Kernel.get(this, "aggTaskGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetPrometheusId = software.amazon.jsii.Kernel.get(this, "targetPrometheusId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aggTaskGroupConfigType = software.amazon.jsii.Kernel.get(this, "aggTaskGroupConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cronExpr = software.amazon.jsii.Kernel.get(this, "cronExpr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.delay = software.amazon.jsii.Kernel.get(this, "delay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fromTime = software.amazon.jsii.Kernel.get(this, "fromTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxRetries = software.amazon.jsii.Kernel.get(this, "maxRetries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxRunTimeInSeconds = software.amazon.jsii.Kernel.get(this, "maxRunTimeInSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.overrideIfExists = software.amazon.jsii.Kernel.get(this, "overrideIfExists", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.precheckString = software.amazon.jsii.Kernel.get(this, "precheckString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduleMode = software.amazon.jsii.Kernel.get(this, "scheduleMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduleTimeExpr = software.amazon.jsii.Kernel.get(this, "scheduleTimeExpr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms2.RosAggTaskGroup.TagsProperty.class)));
            this.toTime = software.amazon.jsii.Kernel.get(this, "toTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aggTaskGroupConfig = java.util.Objects.requireNonNull(builder.aggTaskGroupConfig, "aggTaskGroupConfig is required");
            this.aggTaskGroupName = java.util.Objects.requireNonNull(builder.aggTaskGroupName, "aggTaskGroupName is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.targetPrometheusId = java.util.Objects.requireNonNull(builder.targetPrometheusId, "targetPrometheusId is required");
            this.aggTaskGroupConfigType = builder.aggTaskGroupConfigType;
            this.cronExpr = builder.cronExpr;
            this.delay = builder.delay;
            this.description = builder.description;
            this.fromTime = builder.fromTime;
            this.maxRetries = builder.maxRetries;
            this.maxRunTimeInSeconds = builder.maxRunTimeInSeconds;
            this.overrideIfExists = builder.overrideIfExists;
            this.precheckString = builder.precheckString;
            this.scheduleMode = builder.scheduleMode;
            this.scheduleTimeExpr = builder.scheduleTimeExpr;
            this.status = builder.status;
            this.tags = (java.util.List<com.aliyun.ros.cdk.cms2.RosAggTaskGroup.TagsProperty>)builder.tags;
            this.toTime = builder.toTime;
        }

        @Override
        public final java.lang.Object getAggTaskGroupConfig() {
            return this.aggTaskGroupConfig;
        }

        @Override
        public final java.lang.Object getAggTaskGroupName() {
            return this.aggTaskGroupName;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getTargetPrometheusId() {
            return this.targetPrometheusId;
        }

        @Override
        public final java.lang.Object getAggTaskGroupConfigType() {
            return this.aggTaskGroupConfigType;
        }

        @Override
        public final java.lang.Object getCronExpr() {
            return this.cronExpr;
        }

        @Override
        public final java.lang.Object getDelay() {
            return this.delay;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getFromTime() {
            return this.fromTime;
        }

        @Override
        public final java.lang.Object getMaxRetries() {
            return this.maxRetries;
        }

        @Override
        public final java.lang.Object getMaxRunTimeInSeconds() {
            return this.maxRunTimeInSeconds;
        }

        @Override
        public final java.lang.Object getOverrideIfExists() {
            return this.overrideIfExists;
        }

        @Override
        public final java.lang.Object getPrecheckString() {
            return this.precheckString;
        }

        @Override
        public final java.lang.Object getScheduleMode() {
            return this.scheduleMode;
        }

        @Override
        public final java.lang.Object getScheduleTimeExpr() {
            return this.scheduleTimeExpr;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.cms2.RosAggTaskGroup.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getToTime() {
            return this.toTime;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("aggTaskGroupConfig", om.valueToTree(this.getAggTaskGroupConfig()));
            data.set("aggTaskGroupName", om.valueToTree(this.getAggTaskGroupName()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("targetPrometheusId", om.valueToTree(this.getTargetPrometheusId()));
            if (this.getAggTaskGroupConfigType() != null) {
                data.set("aggTaskGroupConfigType", om.valueToTree(this.getAggTaskGroupConfigType()));
            }
            if (this.getCronExpr() != null) {
                data.set("cronExpr", om.valueToTree(this.getCronExpr()));
            }
            if (this.getDelay() != null) {
                data.set("delay", om.valueToTree(this.getDelay()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getFromTime() != null) {
                data.set("fromTime", om.valueToTree(this.getFromTime()));
            }
            if (this.getMaxRetries() != null) {
                data.set("maxRetries", om.valueToTree(this.getMaxRetries()));
            }
            if (this.getMaxRunTimeInSeconds() != null) {
                data.set("maxRunTimeInSeconds", om.valueToTree(this.getMaxRunTimeInSeconds()));
            }
            if (this.getOverrideIfExists() != null) {
                data.set("overrideIfExists", om.valueToTree(this.getOverrideIfExists()));
            }
            if (this.getPrecheckString() != null) {
                data.set("precheckString", om.valueToTree(this.getPrecheckString()));
            }
            if (this.getScheduleMode() != null) {
                data.set("scheduleMode", om.valueToTree(this.getScheduleMode()));
            }
            if (this.getScheduleTimeExpr() != null) {
                data.set("scheduleTimeExpr", om.valueToTree(this.getScheduleTimeExpr()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getToTime() != null) {
                data.set("toTime", om.valueToTree(this.getToTime()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms2.RosAggTaskGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAggTaskGroupProps.Jsii$Proxy that = (RosAggTaskGroupProps.Jsii$Proxy) o;

            if (!aggTaskGroupConfig.equals(that.aggTaskGroupConfig)) return false;
            if (!aggTaskGroupName.equals(that.aggTaskGroupName)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!targetPrometheusId.equals(that.targetPrometheusId)) return false;
            if (this.aggTaskGroupConfigType != null ? !this.aggTaskGroupConfigType.equals(that.aggTaskGroupConfigType) : that.aggTaskGroupConfigType != null) return false;
            if (this.cronExpr != null ? !this.cronExpr.equals(that.cronExpr) : that.cronExpr != null) return false;
            if (this.delay != null ? !this.delay.equals(that.delay) : that.delay != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.fromTime != null ? !this.fromTime.equals(that.fromTime) : that.fromTime != null) return false;
            if (this.maxRetries != null ? !this.maxRetries.equals(that.maxRetries) : that.maxRetries != null) return false;
            if (this.maxRunTimeInSeconds != null ? !this.maxRunTimeInSeconds.equals(that.maxRunTimeInSeconds) : that.maxRunTimeInSeconds != null) return false;
            if (this.overrideIfExists != null ? !this.overrideIfExists.equals(that.overrideIfExists) : that.overrideIfExists != null) return false;
            if (this.precheckString != null ? !this.precheckString.equals(that.precheckString) : that.precheckString != null) return false;
            if (this.scheduleMode != null ? !this.scheduleMode.equals(that.scheduleMode) : that.scheduleMode != null) return false;
            if (this.scheduleTimeExpr != null ? !this.scheduleTimeExpr.equals(that.scheduleTimeExpr) : that.scheduleTimeExpr != null) return false;
            if (this.status != null ? !this.status.equals(that.status) : that.status != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.toTime != null ? this.toTime.equals(that.toTime) : that.toTime == null;
        }

        @Override
        public final int hashCode() {
            int result = this.aggTaskGroupConfig.hashCode();
            result = 31 * result + (this.aggTaskGroupName.hashCode());
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.targetPrometheusId.hashCode());
            result = 31 * result + (this.aggTaskGroupConfigType != null ? this.aggTaskGroupConfigType.hashCode() : 0);
            result = 31 * result + (this.cronExpr != null ? this.cronExpr.hashCode() : 0);
            result = 31 * result + (this.delay != null ? this.delay.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.fromTime != null ? this.fromTime.hashCode() : 0);
            result = 31 * result + (this.maxRetries != null ? this.maxRetries.hashCode() : 0);
            result = 31 * result + (this.maxRunTimeInSeconds != null ? this.maxRunTimeInSeconds.hashCode() : 0);
            result = 31 * result + (this.overrideIfExists != null ? this.overrideIfExists.hashCode() : 0);
            result = 31 * result + (this.precheckString != null ? this.precheckString.hashCode() : 0);
            result = 31 * result + (this.scheduleMode != null ? this.scheduleMode.hashCode() : 0);
            result = 31 * result + (this.scheduleTimeExpr != null ? this.scheduleTimeExpr.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.toTime != null ? this.toTime.hashCode() : 0);
            return result;
        }
    }
}
