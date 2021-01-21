package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:01.174Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosConditionProps")
@software.amazon.jsii.Jsii.Proxy(RosConditionProps.Jsii$Proxy.class)
public interface RosConditionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * The expression that the condition will evaluate.
     * <p>
     * Default: - None.
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IRosConditionExpression getExpression() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosConditionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosConditionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosConditionProps> {
        private com.aliyun.ros.cdk.core.IRosConditionExpression expression;

        /**
         * Sets the value of {@link RosConditionProps#getExpression}
         * @param expression The expression that the condition will evaluate.
         * @return {@code this}
         */
        public Builder expression(com.aliyun.ros.cdk.core.IRosConditionExpression expression) {
            this.expression = expression;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosConditionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosConditionProps build() {
            return new Jsii$Proxy(expression);
        }
    }

    /**
     * An implementation for {@link RosConditionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosConditionProps {
        private final com.aliyun.ros.cdk.core.IRosConditionExpression expression;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.expression = software.amazon.jsii.Kernel.get(this, "expression", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IRosConditionExpression.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final com.aliyun.ros.cdk.core.IRosConditionExpression expression) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.expression = expression;
        }

        @Override
        public final com.aliyun.ros.cdk.core.IRosConditionExpression getExpression() {
            return this.expression;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getExpression() != null) {
                data.set("expression", om.valueToTree(this.getExpression()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.RosConditionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosConditionProps.Jsii$Proxy that = (RosConditionProps.Jsii$Proxy) o;

            return this.expression != null ? this.expression.equals(that.expression) : that.expression == null;
        }

        @Override
        public final int hashCode() {
            int result = this.expression != null ? this.expression.hashCode() : 0;
            return result;
        }
    }
}
