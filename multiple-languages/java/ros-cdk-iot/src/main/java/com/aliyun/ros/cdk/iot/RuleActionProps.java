package com.aliyun.ros.cdk.iot;

/**
 * Properties for defining a `ALIYUN::IOT::RuleAction`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:15.802Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.RuleActionProps")
@software.amazon.jsii.Jsii.Proxy(RuleActionProps.Jsii$Proxy.class)
public interface RuleActionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property configuration: The configurations of the rule action.
     * <p>
     * You must specify a JSON string. The configurations
     * for different types of rule actions are different. For more information about required
     * syntax and examples, see the following tables.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConfiguration();

    /**
     * Property ruleId: The ID of the rule for which you want to create an action.
     * <p>
     * You can use either of the
     * following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules&gt;Data Forwarding. 2. Call the ListRule operation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleId();

    /**
     * Property type: The type of the rule action.
     * <p>
     * Valid values:
     * MNS: forwards data in the topics that have been processed by the rule engine to Message
     * Service (MNS) for message transmission.
     * FC: forwards data in the topics that have been processed by the rule engine to Function
     * Compute for event computing.
     * REPUBLISH: forwards data in the topics that have been processed by the rule engine to another
     * IoT Platform topic.
     * AMQP: forwards data to AMQP consumer groups.
     * OTS: forwards data in the topics that have been processed by the rule engine to Table
     * Store for NoSQL data storage.
     * Note
     * Rules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store.
     * Destination Alibaba Cloud services that are supported by the rule engine vary based
     * on regions. For more information about the regions and destination cloud services
     * that are supported by the rule engine, see Regions and zones.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property errorActionFlag: Indicates whether the rule action forwarded error operation data.
     * <p>
     * Error operation
     * data indicates that the rule engine failed to forward data from the IoT Platform topic
     * to the destination cloud service. A data forwarding failure indicates that forwarding
     * retries also failed. Valid values:
     * true: forwards error operation data.
     * false: forwards normal data instead of error operation data.
     * Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getErrorActionFlag() {
        return null;
    }

    /**
     * Property iotInstanceId: The ID of the instance.
     * <p>
     * This parameter is not required for public instances. However,
     * the parameter is required for the instances that you have purchased.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIotInstanceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RuleActionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RuleActionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RuleActionProps> {
        java.lang.Object configuration;
        java.lang.Object ruleId;
        java.lang.Object type;
        java.lang.Object errorActionFlag;
        java.lang.Object iotInstanceId;

        /**
         * Sets the value of {@link RuleActionProps#getConfiguration}
         * @param configuration Property configuration: The configurations of the rule action. This parameter is required.
         *                      You must specify a JSON string. The configurations
         *                      for different types of rule actions are different. For more information about required
         *                      syntax and examples, see the following tables.
         * @return {@code this}
         */
        public Builder configuration(java.lang.String configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link RuleActionProps#getConfiguration}
         * @param configuration Property configuration: The configurations of the rule action. This parameter is required.
         *                      You must specify a JSON string. The configurations
         *                      for different types of rule actions are different. For more information about required
         *                      syntax and examples, see the following tables.
         * @return {@code this}
         */
        public Builder configuration(com.aliyun.ros.cdk.core.IResolvable configuration) {
            this.configuration = configuration;
            return this;
        }

        /**
         * Sets the value of {@link RuleActionProps#getRuleId}
         * @param ruleId Property ruleId: The ID of the rule for which you want to create an action. This parameter is required.
         *               You can use either of the
         *               following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules&gt;Data Forwarding. 2. Call the ListRule operation.
         * @return {@code this}
         */
        public Builder ruleId(java.lang.Number ruleId) {
            this.ruleId = ruleId;
            return this;
        }

        /**
         * Sets the value of {@link RuleActionProps#getRuleId}
         * @param ruleId Property ruleId: The ID of the rule for which you want to create an action. This parameter is required.
         *               You can use either of the
         *               following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules&gt;Data Forwarding. 2. Call the ListRule operation.
         * @return {@code this}
         */
        public Builder ruleId(com.aliyun.ros.cdk.core.IResolvable ruleId) {
            this.ruleId = ruleId;
            return this;
        }

        /**
         * Sets the value of {@link RuleActionProps#getType}
         * @param type Property type: The type of the rule action. This parameter is required.
         *             Valid values:
         *             MNS: forwards data in the topics that have been processed by the rule engine to Message
         *             Service (MNS) for message transmission.
         *             FC: forwards data in the topics that have been processed by the rule engine to Function
         *             Compute for event computing.
         *             REPUBLISH: forwards data in the topics that have been processed by the rule engine to another
         *             IoT Platform topic.
         *             AMQP: forwards data to AMQP consumer groups.
         *             OTS: forwards data in the topics that have been processed by the rule engine to Table
         *             Store for NoSQL data storage.
         *             Note
         *             Rules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store.
         *             Destination Alibaba Cloud services that are supported by the rule engine vary based
         *             on regions. For more information about the regions and destination cloud services
         *             that are supported by the rule engine, see Regions and zones.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RuleActionProps#getType}
         * @param type Property type: The type of the rule action. This parameter is required.
         *             Valid values:
         *             MNS: forwards data in the topics that have been processed by the rule engine to Message
         *             Service (MNS) for message transmission.
         *             FC: forwards data in the topics that have been processed by the rule engine to Function
         *             Compute for event computing.
         *             REPUBLISH: forwards data in the topics that have been processed by the rule engine to another
         *             IoT Platform topic.
         *             AMQP: forwards data to AMQP consumer groups.
         *             OTS: forwards data in the topics that have been processed by the rule engine to Table
         *             Store for NoSQL data storage.
         *             Note
         *             Rules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store.
         *             Destination Alibaba Cloud services that are supported by the rule engine vary based
         *             on regions. For more information about the regions and destination cloud services
         *             that are supported by the rule engine, see Regions and zones.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RuleActionProps#getErrorActionFlag}
         * @param errorActionFlag Property errorActionFlag: Indicates whether the rule action forwarded error operation data.
         *                        Error operation
         *                        data indicates that the rule engine failed to forward data from the IoT Platform topic
         *                        to the destination cloud service. A data forwarding failure indicates that forwarding
         *                        retries also failed. Valid values:
         *                        true: forwards error operation data.
         *                        false: forwards normal data instead of error operation data.
         *                        Default value: false.
         * @return {@code this}
         */
        public Builder errorActionFlag(java.lang.Boolean errorActionFlag) {
            this.errorActionFlag = errorActionFlag;
            return this;
        }

        /**
         * Sets the value of {@link RuleActionProps#getErrorActionFlag}
         * @param errorActionFlag Property errorActionFlag: Indicates whether the rule action forwarded error operation data.
         *                        Error operation
         *                        data indicates that the rule engine failed to forward data from the IoT Platform topic
         *                        to the destination cloud service. A data forwarding failure indicates that forwarding
         *                        retries also failed. Valid values:
         *                        true: forwards error operation data.
         *                        false: forwards normal data instead of error operation data.
         *                        Default value: false.
         * @return {@code this}
         */
        public Builder errorActionFlag(com.aliyun.ros.cdk.core.IResolvable errorActionFlag) {
            this.errorActionFlag = errorActionFlag;
            return this;
        }

        /**
         * Sets the value of {@link RuleActionProps#getIotInstanceId}
         * @param iotInstanceId Property iotInstanceId: The ID of the instance.
         *                      This parameter is not required for public instances. However,
         *                      the parameter is required for the instances that you have purchased.
         * @return {@code this}
         */
        public Builder iotInstanceId(java.lang.String iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RuleActionProps#getIotInstanceId}
         * @param iotInstanceId Property iotInstanceId: The ID of the instance.
         *                      This parameter is not required for public instances. However,
         *                      the parameter is required for the instances that you have purchased.
         * @return {@code this}
         */
        public Builder iotInstanceId(com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RuleActionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RuleActionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RuleActionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RuleActionProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-iot.RuleActionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RuleActionProps.Jsii$Proxy that = (RuleActionProps.Jsii$Proxy) o;

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
