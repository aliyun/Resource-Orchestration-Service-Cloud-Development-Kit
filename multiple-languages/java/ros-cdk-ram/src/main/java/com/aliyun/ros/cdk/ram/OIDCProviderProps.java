package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a <code>OIDCProvider</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-oidcprovider
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:42.921Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.OIDCProviderProps")
@software.amazon.jsii.Jsii.Proxy(OIDCProviderProps.Jsii$Proxy.class)
public interface OIDCProviderProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property fingerprints: The list of the fingerprints, max length is 5.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFingerprints();

    /**
     * Property issuerUrl: The URL of the issuer, which is provided by the external IdP.
     * <p>
     * The URL of the issuer must be unique within an Alibaba Cloud account.
     * The URL of the issuer must start with https and be in the valid URL format. The URL cannot contain query parameters that follow a question mark (?) or logon information that is identified by at signs (&#64;). The URL cannot be a fragment URL that contains number signs (#).
     * The URL can be up to 255 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIssuerUrl();

    /**
     * Property oidcProviderName: The name of the OIDC IdP.
     * <p>
     * The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
     * The name can be up to 128 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOidcProviderName();

    /**
     * Property clientIds: The list of the client IDs, max length is 20.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClientIds() {
        return null;
    }

    /**
     * Property description: The description of the OIDC IdP.
     * <p>
     * The description can be up to 256 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property issuanceLimitTime: The earliest time when an external IdP can issue an ID token.
     * <p>
     * If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIssuanceLimitTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link OIDCProviderProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link OIDCProviderProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<OIDCProviderProps> {
        java.lang.Object fingerprints;
        java.lang.Object issuerUrl;
        java.lang.Object oidcProviderName;
        java.lang.Object clientIds;
        java.lang.Object description;
        java.lang.Object issuanceLimitTime;

        /**
         * Sets the value of {@link OIDCProviderProps#getFingerprints}
         * @param fingerprints Property fingerprints: The list of the fingerprints, max length is 5. This parameter is required.
         * @return {@code this}
         */
        public Builder fingerprints(com.aliyun.ros.cdk.core.IResolvable fingerprints) {
            this.fingerprints = fingerprints;
            return this;
        }

        /**
         * Sets the value of {@link OIDCProviderProps#getFingerprints}
         * @param fingerprints Property fingerprints: The list of the fingerprints, max length is 5. This parameter is required.
         * @return {@code this}
         */
        public Builder fingerprints(java.util.List<? extends java.lang.Object> fingerprints) {
            this.fingerprints = fingerprints;
            return this;
        }

        /**
         * Sets the value of {@link OIDCProviderProps#getIssuerUrl}
         * @param issuerUrl Property issuerUrl: The URL of the issuer, which is provided by the external IdP. This parameter is required.
         *                  The URL of the issuer must be unique within an Alibaba Cloud account.
         *                  The URL of the issuer must start with https and be in the valid URL format. The URL cannot contain query parameters that follow a question mark (?) or logon information that is identified by at signs (&#64;). The URL cannot be a fragment URL that contains number signs (#).
         *                  The URL can be up to 255 characters in length.
         * @return {@code this}
         */
        public Builder issuerUrl(java.lang.String issuerUrl) {
            this.issuerUrl = issuerUrl;
            return this;
        }

        /**
         * Sets the value of {@link OIDCProviderProps#getIssuerUrl}
         * @param issuerUrl Property issuerUrl: The URL of the issuer, which is provided by the external IdP. This parameter is required.
         *                  The URL of the issuer must be unique within an Alibaba Cloud account.
         *                  The URL of the issuer must start with https and be in the valid URL format. The URL cannot contain query parameters that follow a question mark (?) or logon information that is identified by at signs (&#64;). The URL cannot be a fragment URL that contains number signs (#).
         *                  The URL can be up to 255 characters in length.
         * @return {@code this}
         */
        public Builder issuerUrl(com.aliyun.ros.cdk.core.IResolvable issuerUrl) {
            this.issuerUrl = issuerUrl;
            return this;
        }

        /**
         * Sets the value of {@link OIDCProviderProps#getOidcProviderName}
         * @param oidcProviderName Property oidcProviderName: The name of the OIDC IdP. This parameter is required.
         *                         The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
         *                         The name can be up to 128 characters in length.
         * @return {@code this}
         */
        public Builder oidcProviderName(java.lang.String oidcProviderName) {
            this.oidcProviderName = oidcProviderName;
            return this;
        }

        /**
         * Sets the value of {@link OIDCProviderProps#getOidcProviderName}
         * @param oidcProviderName Property oidcProviderName: The name of the OIDC IdP. This parameter is required.
         *                         The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
         *                         The name can be up to 128 characters in length.
         * @return {@code this}
         */
        public Builder oidcProviderName(com.aliyun.ros.cdk.core.IResolvable oidcProviderName) {
            this.oidcProviderName = oidcProviderName;
            return this;
        }

        /**
         * Sets the value of {@link OIDCProviderProps#getClientIds}
         * @param clientIds Property clientIds: The list of the client IDs, max length is 20.
         * @return {@code this}
         */
        public Builder clientIds(com.aliyun.ros.cdk.core.IResolvable clientIds) {
            this.clientIds = clientIds;
            return this;
        }

        /**
         * Sets the value of {@link OIDCProviderProps#getClientIds}
         * @param clientIds Property clientIds: The list of the client IDs, max length is 20.
         * @return {@code this}
         */
        public Builder clientIds(java.util.List<? extends java.lang.Object> clientIds) {
            this.clientIds = clientIds;
            return this;
        }

        /**
         * Sets the value of {@link OIDCProviderProps#getDescription}
         * @param description Property description: The description of the OIDC IdP.
         *                    The description can be up to 256 characters in length.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link OIDCProviderProps#getDescription}
         * @param description Property description: The description of the OIDC IdP.
         *                    The description can be up to 256 characters in length.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link OIDCProviderProps#getIssuanceLimitTime}
         * @param issuanceLimitTime Property issuanceLimitTime: The earliest time when an external IdP can issue an ID token.
         *                          If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
         * @return {@code this}
         */
        public Builder issuanceLimitTime(java.lang.Number issuanceLimitTime) {
            this.issuanceLimitTime = issuanceLimitTime;
            return this;
        }

        /**
         * Sets the value of {@link OIDCProviderProps#getIssuanceLimitTime}
         * @param issuanceLimitTime Property issuanceLimitTime: The earliest time when an external IdP can issue an ID token.
         *                          If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
         * @return {@code this}
         */
        public Builder issuanceLimitTime(com.aliyun.ros.cdk.core.IResolvable issuanceLimitTime) {
            this.issuanceLimitTime = issuanceLimitTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link OIDCProviderProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public OIDCProviderProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link OIDCProviderProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements OIDCProviderProps {
        private final java.lang.Object fingerprints;
        private final java.lang.Object issuerUrl;
        private final java.lang.Object oidcProviderName;
        private final java.lang.Object clientIds;
        private final java.lang.Object description;
        private final java.lang.Object issuanceLimitTime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.fingerprints = software.amazon.jsii.Kernel.get(this, "fingerprints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.issuerUrl = software.amazon.jsii.Kernel.get(this, "issuerUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.oidcProviderName = software.amazon.jsii.Kernel.get(this, "oidcProviderName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clientIds = software.amazon.jsii.Kernel.get(this, "clientIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.issuanceLimitTime = software.amazon.jsii.Kernel.get(this, "issuanceLimitTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.fingerprints = java.util.Objects.requireNonNull(builder.fingerprints, "fingerprints is required");
            this.issuerUrl = java.util.Objects.requireNonNull(builder.issuerUrl, "issuerUrl is required");
            this.oidcProviderName = java.util.Objects.requireNonNull(builder.oidcProviderName, "oidcProviderName is required");
            this.clientIds = builder.clientIds;
            this.description = builder.description;
            this.issuanceLimitTime = builder.issuanceLimitTime;
        }

        @Override
        public final java.lang.Object getFingerprints() {
            return this.fingerprints;
        }

        @Override
        public final java.lang.Object getIssuerUrl() {
            return this.issuerUrl;
        }

        @Override
        public final java.lang.Object getOidcProviderName() {
            return this.oidcProviderName;
        }

        @Override
        public final java.lang.Object getClientIds() {
            return this.clientIds;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getIssuanceLimitTime() {
            return this.issuanceLimitTime;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("fingerprints", om.valueToTree(this.getFingerprints()));
            data.set("issuerUrl", om.valueToTree(this.getIssuerUrl()));
            data.set("oidcProviderName", om.valueToTree(this.getOidcProviderName()));
            if (this.getClientIds() != null) {
                data.set("clientIds", om.valueToTree(this.getClientIds()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getIssuanceLimitTime() != null) {
                data.set("issuanceLimitTime", om.valueToTree(this.getIssuanceLimitTime()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.OIDCProviderProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            OIDCProviderProps.Jsii$Proxy that = (OIDCProviderProps.Jsii$Proxy) o;

            if (!fingerprints.equals(that.fingerprints)) return false;
            if (!issuerUrl.equals(that.issuerUrl)) return false;
            if (!oidcProviderName.equals(that.oidcProviderName)) return false;
            if (this.clientIds != null ? !this.clientIds.equals(that.clientIds) : that.clientIds != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.issuanceLimitTime != null ? this.issuanceLimitTime.equals(that.issuanceLimitTime) : that.issuanceLimitTime == null;
        }

        @Override
        public final int hashCode() {
            int result = this.fingerprints.hashCode();
            result = 31 * result + (this.issuerUrl.hashCode());
            result = 31 * result + (this.oidcProviderName.hashCode());
            result = 31 * result + (this.clientIds != null ? this.clientIds.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.issuanceLimitTime != null ? this.issuanceLimitTime.hashCode() : 0);
            return result;
        }
    }
}
