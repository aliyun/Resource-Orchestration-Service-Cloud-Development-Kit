package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RosFlowLog</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:55.183Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosFlowLogProps")
@software.amazon.jsii.Jsii.Proxy(RosFlowLogProps.Jsii$Proxy.class)
public interface RosFlowLogProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFlowLogId();

    /**
     * @return a {@link Builder} of {@link RosFlowLogProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosFlowLogProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosFlowLogProps> {
        java.lang.Object flowLogId;

        /**
         * Sets the value of {@link RosFlowLogProps#getFlowLogId}
         * @param flowLogId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder flowLogId(java.lang.String flowLogId) {
            this.flowLogId = flowLogId;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowLogProps#getFlowLogId}
         * @param flowLogId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder flowLogId(com.aliyun.ros.cdk.core.IResolvable flowLogId) {
            this.flowLogId = flowLogId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosFlowLogProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosFlowLogProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosFlowLogProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosFlowLogProps {
        private final java.lang.Object flowLogId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.flowLogId = software.amazon.jsii.Kernel.get(this, "flowLogId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.flowLogId = java.util.Objects.requireNonNull(builder.flowLogId, "flowLogId is required");
        }

        @Override
        public final java.lang.Object getFlowLogId() {
            return this.flowLogId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("flowLogId", om.valueToTree(this.getFlowLogId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosFlowLogProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosFlowLogProps.Jsii$Proxy that = (RosFlowLogProps.Jsii$Proxy) o;

            return this.flowLogId.equals(that.flowLogId);
        }

        @Override
        public final int hashCode() {
            int result = this.flowLogId.hashCode();
            return result;
        }
    }
}
