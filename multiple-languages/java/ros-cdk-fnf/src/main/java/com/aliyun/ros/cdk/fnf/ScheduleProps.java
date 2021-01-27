package com.aliyun.ros.cdk.fnf;

/**
 * Properties for defining a `ALIYUN::FNF::Schedule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.972Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fnf.$Module.class, fqn = "@alicloud/ros-cdk-fnf.ScheduleProps")
@software.amazon.jsii.Jsii.Proxy(ScheduleProps.Jsii$Proxy.class)
public interface ScheduleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getCronExpression();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getFlowName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getScheduleName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPayload() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ScheduleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ScheduleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ScheduleProps> {
        private java.lang.String cronExpression;
        private java.lang.String flowName;
        private java.lang.String scheduleName;
        private java.lang.String description;
        private java.lang.Object enable;
        private java.lang.String payload;

        /**
         * Sets the value of {@link ScheduleProps#getCronExpression}
         * @param cronExpression the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cronExpression(java.lang.String cronExpression) {
            this.cronExpression = cronExpression;
            return this;
        }

        /**
         * Sets the value of {@link ScheduleProps#getFlowName}
         * @param flowName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder flowName(java.lang.String flowName) {
            this.flowName = flowName;
            return this;
        }

        /**
         * Sets the value of {@link ScheduleProps#getScheduleName}
         * @param scheduleName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scheduleName(java.lang.String scheduleName) {
            this.scheduleName = scheduleName;
            return this;
        }

        /**
         * Sets the value of {@link ScheduleProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ScheduleProps#getEnable}
         * @param enable the value to be set.
         * @return {@code this}
         */
        public Builder enable(java.lang.Boolean enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link ScheduleProps#getEnable}
         * @param enable the value to be set.
         * @return {@code this}
         */
        public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link ScheduleProps#getPayload}
         * @param payload the value to be set.
         * @return {@code this}
         */
        public Builder payload(java.lang.String payload) {
            this.payload = payload;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ScheduleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ScheduleProps build() {
            return new Jsii$Proxy(cronExpression, flowName, scheduleName, description, enable, payload);
        }
    }

    /**
     * An implementation for {@link ScheduleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScheduleProps {
        private final java.lang.String cronExpression;
        private final java.lang.String flowName;
        private final java.lang.String scheduleName;
        private final java.lang.String description;
        private final java.lang.Object enable;
        private final java.lang.String payload;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cronExpression = software.amazon.jsii.Kernel.get(this, "cronExpression", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.flowName = software.amazon.jsii.Kernel.get(this, "flowName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.scheduleName = software.amazon.jsii.Kernel.get(this, "scheduleName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payload = software.amazon.jsii.Kernel.get(this, "payload", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String cronExpression, final java.lang.String flowName, final java.lang.String scheduleName, final java.lang.String description, final java.lang.Object enable, final java.lang.String payload) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cronExpression = java.util.Objects.requireNonNull(cronExpression, "cronExpression is required");
            this.flowName = java.util.Objects.requireNonNull(flowName, "flowName is required");
            this.scheduleName = java.util.Objects.requireNonNull(scheduleName, "scheduleName is required");
            this.description = description;
            this.enable = enable;
            this.payload = payload;
        }

        @Override
        public final java.lang.String getCronExpression() {
            return this.cronExpression;
        }

        @Override
        public final java.lang.String getFlowName() {
            return this.flowName;
        }

        @Override
        public final java.lang.String getScheduleName() {
            return this.scheduleName;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEnable() {
            return this.enable;
        }

        @Override
        public final java.lang.String getPayload() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fnf.ScheduleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ScheduleProps.Jsii$Proxy that = (ScheduleProps.Jsii$Proxy) o;

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
