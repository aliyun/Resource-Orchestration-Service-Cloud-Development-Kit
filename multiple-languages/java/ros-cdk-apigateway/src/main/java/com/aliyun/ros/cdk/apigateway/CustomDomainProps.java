package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a `ALIYUN::ApiGateway::CustomDomain`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:41.651Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.CustomDomainProps")
@software.amazon.jsii.Jsii.Proxy(CustomDomainProps.Jsii$Proxy.class)
public interface CustomDomainProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property domainName: Custom domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainName();

    /**
     * Property groupId: The id of the Group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     * Property certificateBody: SSL certificate body.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertificateBody() {
        return null;
    }

    /**
     * Property certificateName: SSL certificate name.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertificateName() {
        return null;
    }

    /**
     * Property certificatePrivateKey: SSL certificate key.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertificatePrivateKey() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CustomDomainProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CustomDomainProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CustomDomainProps> {
        private java.lang.Object domainName;
        private java.lang.Object groupId;
        private java.lang.Object certificateBody;
        private java.lang.Object certificateName;
        private java.lang.Object certificatePrivateKey;

        /**
         * Sets the value of {@link CustomDomainProps#getDomainName}
         * @param domainName Property domainName: Custom domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getDomainName}
         * @param domainName Property domainName: Custom domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getGroupId}
         * @param groupId Property groupId: The id of the Group. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getGroupId}
         * @param groupId Property groupId: The id of the Group. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getCertificateBody}
         * @param certificateBody Property certificateBody: SSL certificate body.
         * @return {@code this}
         */
        public Builder certificateBody(java.lang.String certificateBody) {
            this.certificateBody = certificateBody;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getCertificateBody}
         * @param certificateBody Property certificateBody: SSL certificate body.
         * @return {@code this}
         */
        public Builder certificateBody(com.aliyun.ros.cdk.core.IResolvable certificateBody) {
            this.certificateBody = certificateBody;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getCertificateName}
         * @param certificateName Property certificateName: SSL certificate name.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
         * @return {@code this}
         */
        public Builder certificateName(java.lang.String certificateName) {
            this.certificateName = certificateName;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getCertificateName}
         * @param certificateName Property certificateName: SSL certificate name.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
         * @return {@code this}
         */
        public Builder certificateName(com.aliyun.ros.cdk.core.IResolvable certificateName) {
            this.certificateName = certificateName;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getCertificatePrivateKey}
         * @param certificatePrivateKey Property certificatePrivateKey: SSL certificate key.
         * @return {@code this}
         */
        public Builder certificatePrivateKey(java.lang.String certificatePrivateKey) {
            this.certificatePrivateKey = certificatePrivateKey;
            return this;
        }

        /**
         * Sets the value of {@link CustomDomainProps#getCertificatePrivateKey}
         * @param certificatePrivateKey Property certificatePrivateKey: SSL certificate key.
         * @return {@code this}
         */
        public Builder certificatePrivateKey(com.aliyun.ros.cdk.core.IResolvable certificatePrivateKey) {
            this.certificatePrivateKey = certificatePrivateKey;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CustomDomainProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CustomDomainProps build() {
            return new Jsii$Proxy(domainName, groupId, certificateBody, certificateName, certificatePrivateKey);
        }
    }

    /**
     * An implementation for {@link CustomDomainProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomDomainProps {
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
        protected Jsii$Proxy(final java.lang.Object domainName, final java.lang.Object groupId, final java.lang.Object certificateBody, final java.lang.Object certificateName, final java.lang.Object certificatePrivateKey) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainName = java.util.Objects.requireNonNull(domainName, "domainName is required");
            this.groupId = java.util.Objects.requireNonNull(groupId, "groupId is required");
            this.certificateBody = certificateBody;
            this.certificateName = certificateName;
            this.certificatePrivateKey = certificatePrivateKey;
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.CustomDomainProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CustomDomainProps.Jsii$Proxy that = (CustomDomainProps.Jsii$Proxy) o;

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
