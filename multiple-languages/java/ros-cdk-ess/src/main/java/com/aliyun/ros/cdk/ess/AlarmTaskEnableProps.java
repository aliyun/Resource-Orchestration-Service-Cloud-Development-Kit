package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a <code>ALIYUN::ESS::AlarmTaskEnable</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:09.984Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.AlarmTaskEnableProps")
@software.amazon.jsii.Jsii.Proxy(AlarmTaskEnableProps.Jsii$Proxy.class)
public interface AlarmTaskEnableProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property alarmTaskId: The id of alarm task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAlarmTaskId();

    /**
     * Property enable: Enable alarm task or not.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnable();

    /**
     * @return a {@link Builder} of {@link AlarmTaskEnableProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AlarmTaskEnableProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AlarmTaskEnableProps> {
        java.lang.Object alarmTaskId;
        java.lang.Object enable;

        /**
         * Sets the value of {@link AlarmTaskEnableProps#getAlarmTaskId}
         * @param alarmTaskId Property alarmTaskId: The id of alarm task. This parameter is required.
         * @return {@code this}
         */
        public Builder alarmTaskId(java.lang.String alarmTaskId) {
            this.alarmTaskId = alarmTaskId;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskEnableProps#getAlarmTaskId}
         * @param alarmTaskId Property alarmTaskId: The id of alarm task. This parameter is required.
         * @return {@code this}
         */
        public Builder alarmTaskId(com.aliyun.ros.cdk.core.IResolvable alarmTaskId) {
            this.alarmTaskId = alarmTaskId;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskEnableProps#getEnable}
         * @param enable Property enable: Enable alarm task or not. This parameter is required.
         * @return {@code this}
         */
        public Builder enable(java.lang.Boolean enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskEnableProps#getEnable}
         * @param enable Property enable: Enable alarm task or not. This parameter is required.
         * @return {@code this}
         */
        public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AlarmTaskEnableProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AlarmTaskEnableProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AlarmTaskEnableProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AlarmTaskEnableProps {
        private final java.lang.Object alarmTaskId;
        private final java.lang.Object enable;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.alarmTaskId = software.amazon.jsii.Kernel.get(this, "alarmTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.alarmTaskId = java.util.Objects.requireNonNull(builder.alarmTaskId, "alarmTaskId is required");
            this.enable = java.util.Objects.requireNonNull(builder.enable, "enable is required");
        }

        @Override
        public final java.lang.Object getAlarmTaskId() {
            return this.alarmTaskId;
        }

        @Override
        public final java.lang.Object getEnable() {
            return this.enable;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("alarmTaskId", om.valueToTree(this.getAlarmTaskId()));
            data.set("enable", om.valueToTree(this.getEnable()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.AlarmTaskEnableProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AlarmTaskEnableProps.Jsii$Proxy that = (AlarmTaskEnableProps.Jsii$Proxy) o;

            if (!alarmTaskId.equals(that.alarmTaskId)) return false;
            return this.enable.equals(that.enable);
        }

        @Override
        public final int hashCode() {
            int result = this.alarmTaskId.hashCode();
            result = 31 * result + (this.enable.hashCode());
            return result;
        }
    }
}
