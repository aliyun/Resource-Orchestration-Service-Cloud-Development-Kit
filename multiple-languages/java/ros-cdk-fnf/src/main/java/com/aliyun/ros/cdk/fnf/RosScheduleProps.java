package com.aliyun.ros.cdk.fnf;

/**
 * Properties for defining a <code>RosSchedule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fnf-schedule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:33.238Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fnf.$Module.class, fqn = "@alicloud/ros-cdk-fnf.RosScheduleProps")
@software.amazon.jsii.Jsii.Proxy(RosScheduleProps.Jsii$Proxy.class)
public interface RosScheduleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCronExpression();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFlowName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScheduleName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayload() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosScheduleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosScheduleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosScheduleProps> {
        java.lang.Object cronExpression;
        java.lang.Object flowName;
        java.lang.Object scheduleName;
        java.lang.Object description;
        java.lang.Object enable;
        java.lang.Object payload;

        /**
         * Sets the value of {@link RosScheduleProps#getCronExpression}
         * @param cronExpression the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cronExpression(java.lang.String cronExpression) {
            this.cronExpression = cronExpression;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduleProps#getCronExpression}
         * @param cronExpression the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cronExpression(com.aliyun.ros.cdk.core.IResolvable cronExpression) {
            this.cronExpression = cronExpression;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduleProps#getFlowName}
         * @param flowName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder flowName(java.lang.String flowName) {
            this.flowName = flowName;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduleProps#getFlowName}
         * @param flowName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder flowName(com.aliyun.ros.cdk.core.IResolvable flowName) {
            this.flowName = flowName;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduleProps#getScheduleName}
         * @param scheduleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scheduleName(java.lang.String scheduleName) {
            this.scheduleName = scheduleName;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduleProps#getScheduleName}
         * @param scheduleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scheduleName(com.aliyun.ros.cdk.core.IResolvable scheduleName) {
            this.scheduleName = scheduleName;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduleProps#getEnable}
         * @param enable the value to be set.
         * @return {@code this}
         */
        public Builder enable(java.lang.Boolean enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduleProps#getEnable}
         * @param enable the value to be set.
         * @return {@code this}
         */
        public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduleProps#getPayload}
         * @param payload the value to be set.
         * @return {@code this}
         */
        public Builder payload(java.lang.String payload) {
            this.payload = payload;
            return this;
        }

        /**
         * Sets the value of {@link RosScheduleProps#getPayload}
         * @param payload the value to be set.
         * @return {@code this}
         */
        public Builder payload(com.aliyun.ros.cdk.core.IResolvable payload) {
            this.payload = payload;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosScheduleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosScheduleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosScheduleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosScheduleProps {
        private final java.lang.Object cronExpression;
        private final java.lang.Object flowName;
        private final java.lang.Object scheduleName;
        private final java.lang.Object description;
        private final java.lang.Object enable;
        private final java.lang.Object payload;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cronExpression = software.amazon.jsii.Kernel.get(this, "cronExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.flowName = software.amazon.jsii.Kernel.get(this, "flowName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduleName = software.amazon.jsii.Kernel.get(this, "scheduleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payload = software.amazon.jsii.Kernel.get(this, "payload", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cronExpression = java.util.Objects.requireNonNull(builder.cronExpression, "cronExpression is required");
            this.flowName = java.util.Objects.requireNonNull(builder.flowName, "flowName is required");
            this.scheduleName = java.util.Objects.requireNonNull(builder.scheduleName, "scheduleName is required");
            this.description = builder.description;
            this.enable = builder.enable;
            this.payload = builder.payload;
        }

        @Override
        public final java.lang.Object getCronExpression() {
            return this.cronExpression;
        }

        @Override
        public final java.lang.Object getFlowName() {
            return this.flowName;
        }

        @Override
        public final java.lang.Object getScheduleName() {
            return this.scheduleName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEnable() {
            return this.enable;
        }

        @Override
        public final java.lang.Object getPayload() {
            return this.payload;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cronExpression", om.valueToTree(this.getCronExpression()));
            data.set("flowName", om.valueToTree(this.getFlowName()));
            data.set("scheduleName", om.valueToTree(this.getScheduleName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEnable() != null) {
                data.set("enable", om.valueToTree(this.getEnable()));
            }
            if (this.getPayload() != null) {
                data.set("payload", om.valueToTree(this.getPayload()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fnf.RosScheduleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosScheduleProps.Jsii$Proxy that = (RosScheduleProps.Jsii$Proxy) o;

            if (!cronExpression.equals(that.cronExpression)) return false;
            if (!flowName.equals(that.flowName)) return false;
            if (!scheduleName.equals(that.scheduleName)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enable != null ? !this.enable.equals(that.enable) : that.enable != null) return false;
            return this.payload != null ? this.payload.equals(that.payload) : that.payload == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cronExpression.hashCode();
            result = 31 * result + (this.flowName.hashCode());
            result = 31 * result + (this.scheduleName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.enable != null ? this.enable.hashCode() : 0);
            result = 31 * result + (this.payload != null ? this.payload.hashCode() : 0);
            return result;
        }
    }
}
