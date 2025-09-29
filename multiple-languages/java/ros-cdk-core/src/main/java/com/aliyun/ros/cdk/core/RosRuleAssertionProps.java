package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.275Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosRuleAssertionProps")
@software.amazon.jsii.Jsii.Proxy(RosRuleAssertionProps.Jsii$Proxy.class)
public interface RosRuleAssertionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Define assertions.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAssertValue();

    /**
     * Define the assertion description.
     * <p>
     * Default: - None
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAssertDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRuleAssertionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRuleAssertionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRuleAssertionProps> {
        com.aliyun.ros.cdk.core.IResolvable assertValue;
        java.lang.String assertDescription;

        /**
         * Sets the value of {@link RosRuleAssertionProps#getAssertValue}
         * @param assertValue Define assertions. This parameter is required.
         * @return {@code this}
         */
        public Builder assertValue(com.aliyun.ros.cdk.core.IResolvable assertValue) {
            this.assertValue = assertValue;
            return this;
        }

        /**
         * Sets the value of {@link RosRuleAssertionProps#getAssertDescription}
         * @param assertDescription Define the assertion description.
         * @return {@code this}
         */
        public Builder assertDescription(java.lang.String assertDescription) {
            this.assertDescription = assertDescription;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRuleAssertionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRuleAssertionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRuleAssertionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRuleAssertionProps {
        private final com.aliyun.ros.cdk.core.IResolvable assertValue;
        private final java.lang.String assertDescription;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.assertValue = software.amazon.jsii.Kernel.get(this, "assert", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
            this.assertDescription = software.amazon.jsii.Kernel.get(this, "assertDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.assertValue = java.util.Objects.requireNonNull(builder.assertValue, "assertValue is required");
            this.assertDescription = builder.assertDescription;
        }

        @Override
        public final com.aliyun.ros.cdk.core.IResolvable getAssertValue() {
            return this.assertValue;
        }

        @Override
        public final java.lang.String getAssertDescription() {
            return this.assertDescription;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("assert", om.valueToTree(this.getAssertValue()));
            if (this.getAssertDescription() != null) {
                data.set("assertDescription", om.valueToTree(this.getAssertDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.RosRuleAssertionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRuleAssertionProps.Jsii$Proxy that = (RosRuleAssertionProps.Jsii$Proxy) o;

            if (!assertValue.equals(that.assertValue)) return false;
            return this.assertDescription != null ? this.assertDescription.equals(that.assertDescription) : that.assertDescription == null;
        }

        @Override
        public final int hashCode() {
            int result = this.assertValue.hashCode();
            result = 31 * result + (this.assertDescription != null ? this.assertDescription.hashCode() : 0);
            return result;
        }
    }
}
