package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a <code>RosOIDCProvider</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-oidcprovider
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:59.343Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosOIDCProviderProps")
@software.amazon.jsii.Jsii.Proxy(RosOIDCProviderProps.Jsii$Proxy.class)
public interface RosOIDCProviderProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFingerprints();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIssuerUrl();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOidcProviderName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClientIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIssuanceLimitTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosOIDCProviderProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosOIDCProviderProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosOIDCProviderProps> {
        java.lang.Object fingerprints;
        java.lang.Object issuerUrl;
        java.lang.Object oidcProviderName;
        java.lang.Object clientIds;
        java.lang.Object description;
        java.lang.Object issuanceLimitTime;

        /**
         * Sets the value of {@link RosOIDCProviderProps#getFingerprints}
         * @param fingerprints the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder fingerprints(com.aliyun.ros.cdk.core.IResolvable fingerprints) {
            this.fingerprints = fingerprints;
            return this;
        }

        /**
         * Sets the value of {@link RosOIDCProviderProps#getFingerprints}
         * @param fingerprints the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder fingerprints(java.util.List<? extends java.lang.Object> fingerprints) {
            this.fingerprints = fingerprints;
            return this;
        }

        /**
         * Sets the value of {@link RosOIDCProviderProps#getIssuerUrl}
         * @param issuerUrl the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder issuerUrl(java.lang.String issuerUrl) {
            this.issuerUrl = issuerUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosOIDCProviderProps#getIssuerUrl}
         * @param issuerUrl the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder issuerUrl(com.aliyun.ros.cdk.core.IResolvable issuerUrl) {
            this.issuerUrl = issuerUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosOIDCProviderProps#getOidcProviderName}
         * @param oidcProviderName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder oidcProviderName(java.lang.String oidcProviderName) {
            this.oidcProviderName = oidcProviderName;
            return this;
        }

        /**
         * Sets the value of {@link RosOIDCProviderProps#getOidcProviderName}
         * @param oidcProviderName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder oidcProviderName(com.aliyun.ros.cdk.core.IResolvable oidcProviderName) {
            this.oidcProviderName = oidcProviderName;
            return this;
        }

        /**
         * Sets the value of {@link RosOIDCProviderProps#getClientIds}
         * @param clientIds the value to be set.
         * @return {@code this}
         */
        public Builder clientIds(com.aliyun.ros.cdk.core.IResolvable clientIds) {
            this.clientIds = clientIds;
            return this;
        }

        /**
         * Sets the value of {@link RosOIDCProviderProps#getClientIds}
         * @param clientIds the value to be set.
         * @return {@code this}
         */
        public Builder clientIds(java.util.List<? extends java.lang.Object> clientIds) {
            this.clientIds = clientIds;
            return this;
        }

        /**
         * Sets the value of {@link RosOIDCProviderProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosOIDCProviderProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosOIDCProviderProps#getIssuanceLimitTime}
         * @param issuanceLimitTime the value to be set.
         * @return {@code this}
         */
        public Builder issuanceLimitTime(java.lang.Number issuanceLimitTime) {
            this.issuanceLimitTime = issuanceLimitTime;
            return this;
        }

        /**
         * Sets the value of {@link RosOIDCProviderProps#getIssuanceLimitTime}
         * @param issuanceLimitTime the value to be set.
         * @return {@code this}
         */
        public Builder issuanceLimitTime(com.aliyun.ros.cdk.core.IResolvable issuanceLimitTime) {
            this.issuanceLimitTime = issuanceLimitTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosOIDCProviderProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosOIDCProviderProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosOIDCProviderProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosOIDCProviderProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosOIDCProviderProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosOIDCProviderProps.Jsii$Proxy that = (RosOIDCProviderProps.Jsii$Proxy) o;

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
