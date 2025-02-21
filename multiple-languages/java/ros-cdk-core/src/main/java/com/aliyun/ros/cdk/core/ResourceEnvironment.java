package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:10.888Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ResourceEnvironment")
@software.amazon.jsii.Jsii.Proxy(ResourceEnvironment.Jsii$Proxy.class)
public interface ResourceEnvironment extends software.amazon.jsii.JsiiSerializable {

    /**
     * The Alibaba Cloud account ID that this resource belongs to.
     * <p>
     * Since this can be a Token
     * (for example, when the account is ROS's ALIYUN::AccountId intrinsic),
     * make sure to use Token.compareStrings()
     * instead of just comparing the values for equality.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAccount();

    /**
     * The Alibaba Cloud region that this resource belongs to.
     * <p>
     * Since this can be a Token
     * (for example, when the region is ROS's ALIYUN::Region intrinsic),
     * make sure to use Token.compareStrings()
     * instead of just comparing the values for equality.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRegion();

    /**
     * @return a {@link Builder} of {@link ResourceEnvironment}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ResourceEnvironment}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ResourceEnvironment> {
        java.lang.String account;
        java.lang.String region;

        /**
         * Sets the value of {@link ResourceEnvironment#getAccount}
         * @param account The Alibaba Cloud account ID that this resource belongs to. This parameter is required.
         *                Since this can be a Token
         *                (for example, when the account is ROS's ALIYUN::AccountId intrinsic),
         *                make sure to use Token.compareStrings()
         *                instead of just comparing the values for equality.
         * @return {@code this}
         */
        public Builder account(java.lang.String account) {
            this.account = account;
            return this;
        }

        /**
         * Sets the value of {@link ResourceEnvironment#getRegion}
         * @param region The Alibaba Cloud region that this resource belongs to. This parameter is required.
         *               Since this can be a Token
         *               (for example, when the region is ROS's ALIYUN::Region intrinsic),
         *               make sure to use Token.compareStrings()
         *               instead of just comparing the values for equality.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ResourceEnvironment}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ResourceEnvironment build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ResourceEnvironment}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourceEnvironment {
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
            this.account = java.util.Objects.requireNonNull(builder.account, "account is required");
            this.region = java.util.Objects.requireNonNull(builder.region, "region is required");
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

            data.set("account", om.valueToTree(this.getAccount()));
            data.set("region", om.valueToTree(this.getRegion()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-core.ResourceEnvironment"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ResourceEnvironment.Jsii$Proxy that = (ResourceEnvironment.Jsii$Proxy) o;

            if (!account.equals(that.account)) return false;
            return this.region.equals(that.region);
        }

        @Override
        public final int hashCode() {
            int result = this.account.hashCode();
            result = 31 * result + (this.region.hashCode());
            return result;
        }
    }
}
