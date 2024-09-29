package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a <code>RosAlarmTaskEnable</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtaskenable
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:39.715Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosAlarmTaskEnableProps")
@software.amazon.jsii.Jsii.Proxy(RosAlarmTaskEnableProps.Jsii$Proxy.class)
public interface RosAlarmTaskEnableProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAlarmTaskId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnable();

    /**
     * @return a {@link Builder} of {@link RosAlarmTaskEnableProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAlarmTaskEnableProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAlarmTaskEnableProps> {
        java.lang.Object alarmTaskId;
        java.lang.Object enable;

        /**
         * Sets the value of {@link RosAlarmTaskEnableProps#getAlarmTaskId}
         * @param alarmTaskId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder alarmTaskId(java.lang.String alarmTaskId) {
            this.alarmTaskId = alarmTaskId;
            return this;
        }

        /**
         * Sets the value of {@link RosAlarmTaskEnableProps#getAlarmTaskId}
         * @param alarmTaskId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder alarmTaskId(com.aliyun.ros.cdk.core.IResolvable alarmTaskId) {
            this.alarmTaskId = alarmTaskId;
            return this;
        }

        /**
         * Sets the value of {@link RosAlarmTaskEnableProps#getEnable}
         * @param enable the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder enable(java.lang.Boolean enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link RosAlarmTaskEnableProps#getEnable}
         * @param enable the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAlarmTaskEnableProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAlarmTaskEnableProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAlarmTaskEnableProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAlarmTaskEnableProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosAlarmTaskEnableProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAlarmTaskEnableProps.Jsii$Proxy that = (RosAlarmTaskEnableProps.Jsii$Proxy) o;

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
