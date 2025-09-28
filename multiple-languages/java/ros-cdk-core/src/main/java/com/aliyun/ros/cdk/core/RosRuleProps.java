package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.276Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosRuleProps.Jsii$Proxy.class)
public interface RosRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Used to describe assertions.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.RosRuleAssertionProps getAssertions();

    /**
     * Define the rule condition.
     * <p>
     * If the rule condition is not defined, the assertion is always valid.
     * <p>
     * Default: - None
     */
    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable getRuleCondition() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRuleProps> {
        com.aliyun.ros.cdk.core.RosRuleAssertionProps assertions;
        com.aliyun.ros.cdk.core.IResolvable ruleCondition;

        /**
         * Sets the value of {@link RosRuleProps#getAssertions}
         * @param assertions Used to describe assertions. This parameter is required.
         * @return {@code this}
         */
        public Builder assertions(com.aliyun.ros.cdk.core.RosRuleAssertionProps assertions) {
            this.assertions = assertions;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleProps#getRuleCondition}
         * @param ruleCondition Define the rule condition.
         *                      If the rule condition is not defined, the assertion is always valid.
         * @return {@code this}
         */
        public Builder ruleCondition(com.aliyun.ros.cdk.core.IResolvable ruleCondition) {
            this.ruleCondition = ruleCondition;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRuleProps {
        private final com.aliyun.ros.cdk.core.RosRuleAssertionProps assertions;
        private final com.aliyun.ros.cdk.core.IResolvable ruleCondition;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.assertions = software.amazon.jsii.Kernel.get(this, "assertions", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.RosRuleAssertionProps.class));
            this.ruleCondition = software.amazon.jsii.Kernel.get(this, "ruleCondition", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.assertions = java.util.Objects.requireNonNull(builder.assertions, "assertions is required");
            this.ruleCondition = builder.ruleCondition;
        }

        @Override
        public final com.aliyun.ros.cdk.core.RosRuleAssertionProps getAssertions() {
            return this.assertions;
        }

        @Override
        public final com.aliyun.ros.cdk.core.IResolvable getRuleCondition() {
            return this.ruleCondition;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("assertions", om.valueToTree(this.getAssertions()));
            if (this.getRuleCondition() != null) {
                data.set("ruleCondition", om.valueToTree(this.getRuleCondition()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.RosRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRuleProps.Jsii$Proxy that = (RosRuleProps.Jsii$Proxy) o;

            if (!assertions.equals(that.assertions)) return false;
            return this.ruleCondition != null ? this.ruleCondition.equals(that.ruleCondition) : that.ruleCondition == null;
        }

        @Override
        public final int hashCode() {
            int result = this.assertions.hashCode();
            result = 31 * result + (this.ruleCondition != null ? this.ruleCondition.hashCode() : 0);
            return result;
        }
    }
}
