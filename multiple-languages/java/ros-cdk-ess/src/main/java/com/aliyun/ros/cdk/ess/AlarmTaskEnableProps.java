package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a `ALIYUN::ESS::AlarmTaskEnable`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.888Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.AlarmTaskEnableProps")
@software.amazon.jsii.Jsii.Proxy(AlarmTaskEnableProps.Jsii$Proxy.class)
public interface AlarmTaskEnableProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAlarmTaskId();

    /**
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
        private java.lang.String alarmTaskId;
        private java.lang.Object enable;

        /**
         * Sets the value of {@link AlarmTaskEnableProps#getAlarmTaskId}
         * @param alarmTaskId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder alarmTaskId(java.lang.String alarmTaskId) {
            this.alarmTaskId = alarmTaskId;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskEnableProps#getEnable}
         * @param enable the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder enable(java.lang.Boolean enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link AlarmTaskEnableProps#getEnable}
         * @param enable the value to be set. This parameter is required.
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
            return new Jsii$Proxy(alarmTaskId, enable);
        }
    }

    /**
     * An implementation for {@link AlarmTaskEnableProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AlarmTaskEnableProps {
        private final java.lang.String alarmTaskId;
        private final java.lang.Object enable;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.alarmTaskId = software.amazon.jsii.Kernel.get(this, "alarmTaskId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String alarmTaskId, final java.lang.Object enable) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.alarmTaskId = java.util.Objects.requireNonNull(alarmTaskId, "alarmTaskId is required");
            this.enable = java.util.Objects.requireNonNull(enable, "enable is required");
        }

        @Override
        public final java.lang.String getAlarmTaskId() {
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
