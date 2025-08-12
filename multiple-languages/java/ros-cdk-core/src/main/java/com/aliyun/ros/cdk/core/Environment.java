package com.aliyun.ros.cdk.core;

/**
 * The deployment environment for a stack.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:42.930Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.Environment")
@software.amazon.jsii.Jsii.Proxy(Environment.Jsii$Proxy.class)
public interface Environment extends software.amazon.jsii.JsiiSerializable {

    /**
     * The ALIYUN account ID for this environment.
     * <p>
     * This can be either a concrete value such as <code>585191031104</code> or <code>ALIYUN.ACCOUNT_ID</code> which
     * indicates that account ID will only be determined during deployment (it
     * will resolve to the ROS intrinsic <code>{"Ref":"ALIYUN::AccountId"}</code>).
     * Note that certain features, such as cross-stack references and
     * environmental context providers require concrete region information and
     * will cause this stack to emit synthesis errors.
     * <p>
     * Default: ALIYUN.ACCOUNT_ID which means that the stack will be account-agnostic.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAccount() {
        return null;
    }

    /**
     * The ALIYUN region for this environment.
     * <p>
     * This can be either a concrete value such as <code>eu-west-2</code> or <code>ALIYUN.REGION</code>
     * which indicates that account ID will only be determined during deployment
     * (it will resolve to the ROS intrinsic <code>{"Ref":"ALIYUN::Region"}</code>).
     * Note that certain features, such as cross-stack references and
     * environmental context providers require concrete region information and
     * will cause this stack to emit synthesis errors.
     * <p>
     * Default: ALIYUN.REGION which means that the stack will be region-agnostic.
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRegion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link Environment}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link Environment}
     */
    public static final class Builder implements software.amazon.jsii.Builder<Environment> {
        java.lang.String account;
        java.lang.String region;

        /**
         * Sets the value of {@link Environment#getAccount}
         * @param account The ALIYUN account ID for this environment.
         *                This can be either a concrete value such as <code>585191031104</code> or <code>ALIYUN.ACCOUNT_ID</code> which
         *                indicates that account ID will only be determined during deployment (it
         *                will resolve to the ROS intrinsic <code>{"Ref":"ALIYUN::AccountId"}</code>).
         *                Note that certain features, such as cross-stack references and
         *                environmental context providers require concrete region information and
         *                will cause this stack to emit synthesis errors.
         * @return {@code this}
         */
        public Builder account(java.lang.String account) {
            this.account = account;
            return this;
        }

        /**
         * Sets the value of {@link Environment#getRegion}
         * @param region The ALIYUN region for this environment.
         *               This can be either a concrete value such as <code>eu-west-2</code> or <code>ALIYUN.REGION</code>
         *               which indicates that account ID will only be determined during deployment
         *               (it will resolve to the ROS intrinsic <code>{"Ref":"ALIYUN::Region"}</code>).
         *               Note that certain features, such as cross-stack references and
         *               environmental context providers require concrete region information and
         *               will cause this stack to emit synthesis errors.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link Environment}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public Environment build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link Environment}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements Environment {
        private final java.lang.String account;
        private final java.lang.String region;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.account = software.amazon.jsii.Kernel.get(this, "account", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.account = builder.account;
            this.region = builder.region;
        }

        @Override
        public final java.lang.String getAccount() {
            return this.account;
        }

        @Override
        public final java.lang.String getRegion() {
            return this.region;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAccount() != null) {
                data.set("account", om.valueToTree(this.getAccount()));
            }
            if (this.getRegion() != null) {
                data.set("region", om.valueToTree(this.getRegion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.Environment"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            Environment.Jsii$Proxy that = (Environment.Jsii$Proxy) o;

            if (this.account != null ? !this.account.equals(that.account) : that.account != null) return false;
            return this.region != null ? this.region.equals(that.region) : that.region == null;
        }

        @Override
        public final int hashCode() {
            int result = this.account != null ? this.account.hashCode() : 0;
            result = 31 * result + (this.region != null ? this.region.hashCode() : 0);
            return result;
        }
    }
}
