package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>RosVulWhitelist</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-vulwhitelist
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.580Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosVulWhitelistProps")
@software.amazon.jsii.Jsii.Proxy(RosVulWhitelistProps.Jsii$Proxy.class)
public interface RosVulWhitelistProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetInfo();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWhitelist();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReason() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosVulWhitelistProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVulWhitelistProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVulWhitelistProps> {
        java.lang.Object targetInfo;
        java.lang.Object whitelist;
        java.lang.Object reason;

        /**
         * Sets the value of {@link RosVulWhitelistProps#getTargetInfo}
         * @param targetInfo the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetInfo(com.aliyun.ros.cdk.core.IResolvable targetInfo) {
            this.targetInfo = targetInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosVulWhitelistProps#getTargetInfo}
         * @param targetInfo the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder targetInfo(java.util.Map<java.lang.String, ? extends java.lang.Object> targetInfo) {
            this.targetInfo = targetInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosVulWhitelistProps#getWhitelist}
         * @param whitelist the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder whitelist(com.aliyun.ros.cdk.core.IResolvable whitelist) {
            this.whitelist = whitelist;
            return this;
        }

        /**
         * Sets the value of {@link RosVulWhitelistProps#getWhitelist}
         * @param whitelist the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder whitelist(java.util.Map<java.lang.String, ? extends java.lang.Object> whitelist) {
            this.whitelist = whitelist;
            return this;
        }

        /**
         * Sets the value of {@link RosVulWhitelistProps#getReason}
         * @param reason the value to be set.
         * @return {@code this}
         */
        public Builder reason(java.lang.String reason) {
            this.reason = reason;
            return this;
        }

        /**
         * Sets the value of {@link RosVulWhitelistProps#getReason}
         * @param reason the value to be set.
         * @return {@code this}
         */
        public Builder reason(com.aliyun.ros.cdk.core.IResolvable reason) {
            this.reason = reason;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVulWhitelistProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVulWhitelistProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVulWhitelistProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVulWhitelistProps {
        private final java.lang.Object targetInfo;
        private final java.lang.Object whitelist;
        private final java.lang.Object reason;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.targetInfo = software.amazon.jsii.Kernel.get(this, "targetInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.whitelist = software.amazon.jsii.Kernel.get(this, "whitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.reason = software.amazon.jsii.Kernel.get(this, "reason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.targetInfo = java.util.Objects.requireNonNull(builder.targetInfo, "targetInfo is required");
            this.whitelist = java.util.Objects.requireNonNull(builder.whitelist, "whitelist is required");
            this.reason = builder.reason;
        }

        @Override
        public final java.lang.Object getTargetInfo() {
            return this.targetInfo;
        }

        @Override
        public final java.lang.Object getWhitelist() {
            return this.whitelist;
        }

        @Override
        public final java.lang.Object getReason() {
            return this.reason;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("targetInfo", om.valueToTree(this.getTargetInfo()));
            data.set("whitelist", om.valueToTree(this.getWhitelist()));
            if (this.getReason() != null) {
                data.set("reason", om.valueToTree(this.getReason()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.RosVulWhitelistProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVulWhitelistProps.Jsii$Proxy that = (RosVulWhitelistProps.Jsii$Proxy) o;

            if (!targetInfo.equals(that.targetInfo)) return false;
            if (!whitelist.equals(that.whitelist)) return false;
            return this.reason != null ? this.reason.equals(that.reason) : that.reason == null;
        }

        @Override
        public final int hashCode() {
            int result = this.targetInfo.hashCode();
            result = 31 * result + (this.whitelist.hashCode());
            result = 31 * result + (this.reason != null ? this.reason.hashCode() : 0);
            return result;
        }
    }
}
