package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a <code>RosCustomDomain</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-customdomain
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:36.258Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosCustomDomainProps")
@software.amazon.jsii.Jsii.Proxy(RosCustomDomainProps.Jsii$Proxy.class)
public interface RosCustomDomainProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertificateBody() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertificateName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertificatePrivateKey() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCustomDomainProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCustomDomainProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCustomDomainProps> {
        java.lang.Object domainName;
        java.lang.Object groupId;
        java.lang.Object certificateBody;
        java.lang.Object certificateName;
        java.lang.Object certificatePrivateKey;

        /**
         * Sets the value of {@link RosCustomDomainProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getCertificateBody}
         * @param certificateBody the value to be set.
         * @return {@code this}
         */
        public Builder certificateBody(java.lang.String certificateBody) {
            this.certificateBody = certificateBody;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getCertificateBody}
         * @param certificateBody the value to be set.
         * @return {@code this}
         */
        public Builder certificateBody(com.aliyun.ros.cdk.core.IResolvable certificateBody) {
            this.certificateBody = certificateBody;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getCertificateName}
         * @param certificateName the value to be set.
         * @return {@code this}
         */
        public Builder certificateName(java.lang.String certificateName) {
            this.certificateName = certificateName;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getCertificateName}
         * @param certificateName the value to be set.
         * @return {@code this}
         */
        public Builder certificateName(com.aliyun.ros.cdk.core.IResolvable certificateName) {
            this.certificateName = certificateName;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getCertificatePrivateKey}
         * @param certificatePrivateKey the value to be set.
         * @return {@code this}
         */
        public Builder certificatePrivateKey(java.lang.String certificatePrivateKey) {
            this.certificatePrivateKey = certificatePrivateKey;
            return this;
        }

        /**
         * Sets the value of {@link RosCustomDomainProps#getCertificatePrivateKey}
         * @param certificatePrivateKey the value to be set.
         * @return {@code this}
         */
        public Builder certificatePrivateKey(com.aliyun.ros.cdk.core.IResolvable certificatePrivateKey) {
            this.certificatePrivateKey = certificatePrivateKey;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCustomDomainProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCustomDomainProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCustomDomainProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCustomDomainProps {
        private final java.lang.Object domainName;
        private final java.lang.Object groupId;
        private final java.lang.Object certificateBody;
        private final java.lang.Object certificateName;
        private final java.lang.Object certificatePrivateKey;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certificateBody = software.amazon.jsii.Kernel.get(this, "certificateBody", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certificateName = software.amazon.jsii.Kernel.get(this, "certificateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certificatePrivateKey = software.amazon.jsii.Kernel.get(this, "certificatePrivateKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainName = java.util.Objects.requireNonNull(builder.domainName, "domainName is required");
            this.groupId = java.util.Objects.requireNonNull(builder.groupId, "groupId is required");
            this.certificateBody = builder.certificateBody;
            this.certificateName = builder.certificateName;
            this.certificatePrivateKey = builder.certificatePrivateKey;
        }

        @Override
        public final java.lang.Object getDomainName() {
            return this.domainName;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getCertificateBody() {
            return this.certificateBody;
        }

        @Override
        public final java.lang.Object getCertificateName() {
            return this.certificateName;
        }

        @Override
        public final java.lang.Object getCertificatePrivateKey() {
            return this.certificatePrivateKey;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domainName", om.valueToTree(this.getDomainName()));
            data.set("groupId", om.valueToTree(this.getGroupId()));
            if (this.getCertificateBody() != null) {
                data.set("certificateBody", om.valueToTree(this.getCertificateBody()));
            }
            if (this.getCertificateName() != null) {
                data.set("certificateName", om.valueToTree(this.getCertificateName()));
            }
            if (this.getCertificatePrivateKey() != null) {
                data.set("certificatePrivateKey", om.valueToTree(this.getCertificatePrivateKey()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosCustomDomainProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCustomDomainProps.Jsii$Proxy that = (RosCustomDomainProps.Jsii$Proxy) o;

            if (!domainName.equals(that.domainName)) return false;
            if (!groupId.equals(that.groupId)) return false;
            if (this.certificateBody != null ? !this.certificateBody.equals(that.certificateBody) : that.certificateBody != null) return false;
            if (this.certificateName != null ? !this.certificateName.equals(that.certificateName) : that.certificateName != null) return false;
            return this.certificatePrivateKey != null ? this.certificatePrivateKey.equals(that.certificatePrivateKey) : that.certificatePrivateKey == null;
        }

        @Override
        public final int hashCode() {
            int result = this.domainName.hashCode();
            result = 31 * result + (this.groupId.hashCode());
            result = 31 * result + (this.certificateBody != null ? this.certificateBody.hashCode() : 0);
            result = 31 * result + (this.certificateName != null ? this.certificateName.hashCode() : 0);
            result = 31 * result + (this.certificatePrivateKey != null ? this.certificatePrivateKey.hashCode() : 0);
            return result;
        }
    }
}
