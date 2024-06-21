package com.aliyun.ros.cdk.iot;

/**
 * Properties for defining a <code>RosRuleAction</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-ruleaction
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:10.426Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.RosRuleActionProps")
@software.amazon.jsii.Jsii.Proxy(RosRuleActionProps.Jsii$Proxy.class)
public interface RosRuleActionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConfiguration();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getErrorActionFlag() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIotInstanceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRuleActionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRuleActionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRuleActionProps> {
        java.lang.Object configuration;
        java.lang.Object ruleId;
        java.lang.Object type;
        java.lang.Object errorActionFlag;
        java.lang.Object iotInstanceId;

        /**
         * Sets the value of {@link RosRuleActionProps#getConfiguration}
         * @param configuration the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder configuration(java.lang.String configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleActionProps#getConfiguration}
         * @param configuration the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder configuration(com.aliyun.ros.cdk.core.IResolvable configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleActionProps#getRuleId}
         * @param ruleId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleId(java.lang.Number ruleId) {
            this.ruleId = ruleId;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleActionProps#getRuleId}
         * @param ruleId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleId(com.aliyun.ros.cdk.core.IResolvable ruleId) {
            this.ruleId = ruleId;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleActionProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleActionProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleActionProps#getErrorActionFlag}
         * @param errorActionFlag the value to be set.
         * @return {@code this}
         */
        public Builder errorActionFlag(java.lang.Boolean errorActionFlag) {
            this.errorActionFlag = errorActionFlag;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleActionProps#getErrorActionFlag}
         * @param errorActionFlag the value to be set.
         * @return {@code this}
         */
        public Builder errorActionFlag(com.aliyun.ros.cdk.core.IResolvable errorActionFlag) {
            this.errorActionFlag = errorActionFlag;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleActionProps#getIotInstanceId}
         * @param iotInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder iotInstanceId(java.lang.String iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleActionProps#getIotInstanceId}
         * @param iotInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder iotInstanceId(com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRuleActionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRuleActionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRuleActionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRuleActionProps {
        private final java.lang.Object configuration;
        private final java.lang.Object ruleId;
        private final java.lang.Object type;
        private final java.lang.Object errorActionFlag;
        private final java.lang.Object iotInstanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.configuration = software.amazon.jsii.Kernel.get(this, "configuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleId = software.amazon.jsii.Kernel.get(this, "ruleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.errorActionFlag = software.amazon.jsii.Kernel.get(this, "errorActionFlag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.iotInstanceId = software.amazon.jsii.Kernel.get(this, "iotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.configuration = java.util.Objects.requireNonNull(builder.configuration, "configuration is required");
            this.ruleId = java.util.Objects.requireNonNull(builder.ruleId, "ruleId is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.errorActionFlag = builder.errorActionFlag;
            this.iotInstanceId = builder.iotInstanceId;
        }

        @Override
        public final java.lang.Object getConfiguration() {
            return this.configuration;
        }

        @Override
        public final java.lang.Object getRuleId() {
            return this.ruleId;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getErrorActionFlag() {
            return this.errorActionFlag;
        }

        @Override
        public final java.lang.Object getIotInstanceId() {
            return this.iotInstanceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("configuration", om.valueToTree(this.getConfiguration()));
            data.set("ruleId", om.valueToTree(this.getRuleId()));
            data.set("type", om.valueToTree(this.getType()));
            if (this.getErrorActionFlag() != null) {
                data.set("errorActionFlag", om.valueToTree(this.getErrorActionFlag()));
            }
            if (this.getIotInstanceId() != null) {
                data.set("iotInstanceId", om.valueToTree(this.getIotInstanceId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-iot.RosRuleActionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRuleActionProps.Jsii$Proxy that = (RosRuleActionProps.Jsii$Proxy) o;

            if (!configuration.equals(that.configuration)) return false;
            if (!ruleId.equals(that.ruleId)) return false;
            if (!type.equals(that.type)) return false;
            if (this.errorActionFlag != null ? !this.errorActionFlag.equals(that.errorActionFlag) : that.errorActionFlag != null) return false;
            return this.iotInstanceId != null ? this.iotInstanceId.equals(that.iotInstanceId) : that.iotInstanceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.configuration.hashCode();
            result = 31 * result + (this.ruleId.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.errorActionFlag != null ? this.errorActionFlag.hashCode() : 0);
            result = 31 * result + (this.iotInstanceId != null ? this.iotInstanceId.hashCode() : 0);
            return result;
        }
    }
}
