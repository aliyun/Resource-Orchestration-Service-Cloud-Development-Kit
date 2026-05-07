package com.aliyun.ros.cdk.hbr;

/**
 * Properties for defining a <code>RosPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-policy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:51.233Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosPolicyProps")
@software.amazon.jsii.Jsii.Proxy(RosPolicyProps.Jsii$Proxy.class)
public interface RosPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRules();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicyDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPolicyProps> {
        java.lang.Object policyName;
        java.lang.Object policyType;
        java.lang.Object rules;
        java.lang.Object policyDescription;

        /**
         * Sets the value of {@link RosPolicyProps#getPolicyName}
         * @param policyName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(java.lang.String policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getPolicyName}
         * @param policyName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyName(com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getPolicyType}
         * @param policyType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyType(java.lang.String policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getPolicyType}
         * @param policyType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder policyType(com.aliyun.ros.cdk.core.IResolvable policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getRules}
         * @param rules the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder rules(com.aliyun.ros.cdk.core.IResolvable rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getRules}
         * @param rules the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder rules(java.util.List<? extends java.lang.Object> rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getPolicyDescription}
         * @param policyDescription the value to be set.
         * @return {@code this}
         */
        public Builder policyDescription(java.lang.String policyDescription) {
            this.policyDescription = policyDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosPolicyProps#getPolicyDescription}
         * @param policyDescription the value to be set.
         * @return {@code this}
         */
        public Builder policyDescription(com.aliyun.ros.cdk.core.IResolvable policyDescription) {
            this.policyDescription = policyDescription;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPolicyProps {
        private final java.lang.Object policyName;
        private final java.lang.Object policyType;
        private final java.lang.Object rules;
        private final java.lang.Object policyDescription;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.policyName = software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyType = software.amazon.jsii.Kernel.get(this, "policyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rules = software.amazon.jsii.Kernel.get(this, "rules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyDescription = software.amazon.jsii.Kernel.get(this, "policyDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.policyName = java.util.Objects.requireNonNull(builder.policyName, "policyName is required");
            this.policyType = java.util.Objects.requireNonNull(builder.policyType, "policyType is required");
            this.rules = java.util.Objects.requireNonNull(builder.rules, "rules is required");
            this.policyDescription = builder.policyDescription;
        }

        @Override
        public final java.lang.Object getPolicyName() {
            return this.policyName;
        }

        @Override
        public final java.lang.Object getPolicyType() {
            return this.policyType;
        }

        @Override
        public final java.lang.Object getRules() {
            return this.rules;
        }

        @Override
        public final java.lang.Object getPolicyDescription() {
            return this.policyDescription;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("policyName", om.valueToTree(this.getPolicyName()));
            data.set("policyType", om.valueToTree(this.getPolicyType()));
            data.set("rules", om.valueToTree(this.getRules()));
            if (this.getPolicyDescription() != null) {
                data.set("policyDescription", om.valueToTree(this.getPolicyDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.RosPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPolicyProps.Jsii$Proxy that = (RosPolicyProps.Jsii$Proxy) o;

            if (!policyName.equals(that.policyName)) return false;
            if (!policyType.equals(that.policyType)) return false;
            if (!rules.equals(that.rules)) return false;
            return this.policyDescription != null ? this.policyDescription.equals(that.policyDescription) : that.policyDescription == null;
        }

        @Override
        public final int hashCode() {
            int result = this.policyName.hashCode();
            result = 31 * result + (this.policyType.hashCode());
            result = 31 * result + (this.rules.hashCode());
            result = 31 * result + (this.policyDescription != null ? this.policyDescription.hashCode() : 0);
            return result;
        }
    }
}
