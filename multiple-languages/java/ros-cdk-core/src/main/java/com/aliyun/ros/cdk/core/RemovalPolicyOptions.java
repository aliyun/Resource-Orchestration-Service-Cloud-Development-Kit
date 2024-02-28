package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:26.449Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RemovalPolicyOptions")
@software.amazon.jsii.Jsii.Proxy(RemovalPolicyOptions.Jsii$Proxy.class)
public interface RemovalPolicyOptions extends software.amazon.jsii.JsiiSerializable {

    default @org.jetbrains.annotations.Nullable java.lang.Boolean getApplyToUpdateReplacePolicy() {
        return null;
    }

    default @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RemovalPolicy getDefaultPolicy() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RemovalPolicyOptions}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RemovalPolicyOptions}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RemovalPolicyOptions> {
        java.lang.Boolean applyToUpdateReplacePolicy;
        com.aliyun.ros.cdk.core.RemovalPolicy defaultPolicy;

        /**
         * Sets the value of {@link RemovalPolicyOptions#getApplyToUpdateReplacePolicy}
         * @param applyToUpdateReplacePolicy the value to be set.
         * @return {@code this}
         */
        public Builder applyToUpdateReplacePolicy(java.lang.Boolean applyToUpdateReplacePolicy) {
            this.applyToUpdateReplacePolicy = applyToUpdateReplacePolicy;
            return this;
        }

        /**
         * Sets the value of {@link RemovalPolicyOptions#getDefaultPolicy}
         * @param defaultPolicy the value to be set.
         * @return {@code this}
         */
        public Builder defaultPolicy(com.aliyun.ros.cdk.core.RemovalPolicy defaultPolicy) {
            this.defaultPolicy = defaultPolicy;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RemovalPolicyOptions}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RemovalPolicyOptions build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RemovalPolicyOptions}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RemovalPolicyOptions {
        private final java.lang.Boolean applyToUpdateReplacePolicy;
        private final com.aliyun.ros.cdk.core.RemovalPolicy defaultPolicy;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.applyToUpdateReplacePolicy = software.amazon.jsii.Kernel.get(this, "applyToUpdateReplacePolicy", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
            this.defaultPolicy = software.amazon.jsii.Kernel.get(this, "defaultPolicy", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.RemovalPolicy.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.applyToUpdateReplacePolicy = builder.applyToUpdateReplacePolicy;
            this.defaultPolicy = builder.defaultPolicy;
        }

        @Override
        public final java.lang.Boolean getApplyToUpdateReplacePolicy() {
            return this.applyToUpdateReplacePolicy;
        }

        @Override
        public final com.aliyun.ros.cdk.core.RemovalPolicy getDefaultPolicy() {
            return this.defaultPolicy;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getApplyToUpdateReplacePolicy() != null) {
                data.set("applyToUpdateReplacePolicy", om.valueToTree(this.getApplyToUpdateReplacePolicy()));
            }
            if (this.getDefaultPolicy() != null) {
                data.set("defaultPolicy", om.valueToTree(this.getDefaultPolicy()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.RemovalPolicyOptions"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RemovalPolicyOptions.Jsii$Proxy that = (RemovalPolicyOptions.Jsii$Proxy) o;

            if (this.applyToUpdateReplacePolicy != null ? !this.applyToUpdateReplacePolicy.equals(that.applyToUpdateReplacePolicy) : that.applyToUpdateReplacePolicy != null) return false;
            return this.defaultPolicy != null ? this.defaultPolicy.equals(that.defaultPolicy) : that.defaultPolicy == null;
        }

        @Override
        public final int hashCode() {
            int result = this.applyToUpdateReplacePolicy != null ? this.applyToUpdateReplacePolicy.hashCode() : 0;
            result = 31 * result + (this.defaultPolicy != null ? this.defaultPolicy.hashCode() : 0);
            return result;
        }
    }
}
