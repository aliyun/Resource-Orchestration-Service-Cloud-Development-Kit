package com.aliyun.ros.cdk.nlb;

/**
 * Properties for defining a <code>RosSecurityPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitypolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:40.986Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.RosSecurityPolicyProps")
@software.amazon.jsii.Jsii.Proxy(RosSecurityPolicyProps.Jsii$Proxy.class)
public interface RosSecurityPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCiphers();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTlsVersions();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityPolicyName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.nlb.RosSecurityPolicy.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSecurityPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSecurityPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSecurityPolicyProps> {
        java.lang.Object ciphers;
        java.lang.Object tlsVersions;
        java.lang.Object resourceGroupId;
        java.lang.Object securityPolicyName;
        java.util.List<com.aliyun.ros.cdk.nlb.RosSecurityPolicy.TagsProperty> tags;

        /**
         * Sets the value of {@link RosSecurityPolicyProps#getCiphers}
         * @param ciphers the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ciphers(com.aliyun.ros.cdk.core.IResolvable ciphers) {
            this.ciphers = ciphers;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPolicyProps#getCiphers}
         * @param ciphers the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ciphers(java.util.List<? extends java.lang.Object> ciphers) {
            this.ciphers = ciphers;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPolicyProps#getTlsVersions}
         * @param tlsVersions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder tlsVersions(com.aliyun.ros.cdk.core.IResolvable tlsVersions) {
            this.tlsVersions = tlsVersions;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPolicyProps#getTlsVersions}
         * @param tlsVersions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder tlsVersions(java.util.List<? extends java.lang.Object> tlsVersions) {
            this.tlsVersions = tlsVersions;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPolicyProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPolicyProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPolicyProps#getSecurityPolicyName}
         * @param securityPolicyName the value to be set.
         * @return {@code this}
         */
        public Builder securityPolicyName(java.lang.String securityPolicyName) {
            this.securityPolicyName = securityPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPolicyProps#getSecurityPolicyName}
         * @param securityPolicyName the value to be set.
         * @return {@code this}
         */
        public Builder securityPolicyName(com.aliyun.ros.cdk.core.IResolvable securityPolicyName) {
            this.securityPolicyName = securityPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link RosSecurityPolicyProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.nlb.RosSecurityPolicy.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.nlb.RosSecurityPolicy.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSecurityPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSecurityPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSecurityPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSecurityPolicyProps {
        private final java.lang.Object ciphers;
        private final java.lang.Object tlsVersions;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityPolicyName;
        private final java.util.List<com.aliyun.ros.cdk.nlb.RosSecurityPolicy.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ciphers = software.amazon.jsii.Kernel.get(this, "ciphers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tlsVersions = software.amazon.jsii.Kernel.get(this, "tlsVersions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityPolicyName = software.amazon.jsii.Kernel.get(this, "securityPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nlb.RosSecurityPolicy.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ciphers = java.util.Objects.requireNonNull(builder.ciphers, "ciphers is required");
            this.tlsVersions = java.util.Objects.requireNonNull(builder.tlsVersions, "tlsVersions is required");
            this.resourceGroupId = builder.resourceGroupId;
            this.securityPolicyName = builder.securityPolicyName;
            this.tags = (java.util.List<com.aliyun.ros.cdk.nlb.RosSecurityPolicy.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getCiphers() {
            return this.ciphers;
        }

        @Override
        public final java.lang.Object getTlsVersions() {
            return this.tlsVersions;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecurityPolicyName() {
            return this.securityPolicyName;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.nlb.RosSecurityPolicy.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("ciphers", om.valueToTree(this.getCiphers()));
            data.set("tlsVersions", om.valueToTree(this.getTlsVersions()));
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityPolicyName() != null) {
                data.set("securityPolicyName", om.valueToTree(this.getSecurityPolicyName()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlb.RosSecurityPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSecurityPolicyProps.Jsii$Proxy that = (RosSecurityPolicyProps.Jsii$Proxy) o;

            if (!ciphers.equals(that.ciphers)) return false;
            if (!tlsVersions.equals(that.tlsVersions)) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityPolicyName != null ? !this.securityPolicyName.equals(that.securityPolicyName) : that.securityPolicyName != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ciphers.hashCode();
            result = 31 * result + (this.tlsVersions.hashCode());
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityPolicyName != null ? this.securityPolicyName.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
