package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a <code>RosApplication</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-application
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:11.591Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosApplicationProps")
@software.amazon.jsii.Jsii.Proxy(RosApplicationProps.Jsii$Proxy.class)
public interface RosApplicationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDisplayName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessTokenValidity() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsMultiTenant() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPredefinedScopes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRedirectUris() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshTokenValidity() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRequiredScopes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecretRequired() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosApplicationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosApplicationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosApplicationProps> {
        java.lang.Object appName;
        java.lang.Object appType;
        java.lang.Object displayName;
        java.lang.Object accessTokenValidity;
        java.lang.Object isMultiTenant;
        java.lang.Object predefinedScopes;
        java.lang.Object redirectUris;
        java.lang.Object refreshTokenValidity;
        java.lang.Object requiredScopes;
        java.lang.Object secretRequired;

        /**
         * Sets the value of {@link RosApplicationProps#getAppName}
         * @param appName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(java.lang.String appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAppName}
         * @param appName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appName(com.aliyun.ros.cdk.core.IResolvable appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAppType}
         * @param appType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appType(java.lang.String appType) {
            this.appType = appType;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAppType}
         * @param appType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appType(com.aliyun.ros.cdk.core.IResolvable appType) {
            this.appType = appType;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getDisplayName}
         * @param displayName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder displayName(java.lang.String displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getDisplayName}
         * @param displayName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAccessTokenValidity}
         * @param accessTokenValidity the value to be set.
         * @return {@code this}
         */
        public Builder accessTokenValidity(java.lang.Number accessTokenValidity) {
            this.accessTokenValidity = accessTokenValidity;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getAccessTokenValidity}
         * @param accessTokenValidity the value to be set.
         * @return {@code this}
         */
        public Builder accessTokenValidity(com.aliyun.ros.cdk.core.IResolvable accessTokenValidity) {
            this.accessTokenValidity = accessTokenValidity;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getIsMultiTenant}
         * @param isMultiTenant the value to be set.
         * @return {@code this}
         */
        public Builder isMultiTenant(java.lang.Boolean isMultiTenant) {
            this.isMultiTenant = isMultiTenant;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getIsMultiTenant}
         * @param isMultiTenant the value to be set.
         * @return {@code this}
         */
        public Builder isMultiTenant(com.aliyun.ros.cdk.core.IResolvable isMultiTenant) {
            this.isMultiTenant = isMultiTenant;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPredefinedScopes}
         * @param predefinedScopes the value to be set.
         * @return {@code this}
         */
        public Builder predefinedScopes(com.aliyun.ros.cdk.core.IResolvable predefinedScopes) {
            this.predefinedScopes = predefinedScopes;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPredefinedScopes}
         * @param predefinedScopes the value to be set.
         * @return {@code this}
         */
        public Builder predefinedScopes(java.util.List<? extends java.lang.Object> predefinedScopes) {
            this.predefinedScopes = predefinedScopes;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getRedirectUris}
         * @param redirectUris the value to be set.
         * @return {@code this}
         */
        public Builder redirectUris(com.aliyun.ros.cdk.core.IResolvable redirectUris) {
            this.redirectUris = redirectUris;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getRedirectUris}
         * @param redirectUris the value to be set.
         * @return {@code this}
         */
        public Builder redirectUris(java.util.List<? extends java.lang.Object> redirectUris) {
            this.redirectUris = redirectUris;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getRefreshTokenValidity}
         * @param refreshTokenValidity the value to be set.
         * @return {@code this}
         */
        public Builder refreshTokenValidity(java.lang.Number refreshTokenValidity) {
            this.refreshTokenValidity = refreshTokenValidity;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getRefreshTokenValidity}
         * @param refreshTokenValidity the value to be set.
         * @return {@code this}
         */
        public Builder refreshTokenValidity(com.aliyun.ros.cdk.core.IResolvable refreshTokenValidity) {
            this.refreshTokenValidity = refreshTokenValidity;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getRequiredScopes}
         * @param requiredScopes the value to be set.
         * @return {@code this}
         */
        public Builder requiredScopes(com.aliyun.ros.cdk.core.IResolvable requiredScopes) {
            this.requiredScopes = requiredScopes;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getRequiredScopes}
         * @param requiredScopes the value to be set.
         * @return {@code this}
         */
        public Builder requiredScopes(java.util.List<? extends java.lang.Object> requiredScopes) {
            this.requiredScopes = requiredScopes;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getSecretRequired}
         * @param secretRequired the value to be set.
         * @return {@code this}
         */
        public Builder secretRequired(java.lang.Boolean secretRequired) {
            this.secretRequired = secretRequired;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getSecretRequired}
         * @param secretRequired the value to be set.
         * @return {@code this}
         */
        public Builder secretRequired(com.aliyun.ros.cdk.core.IResolvable secretRequired) {
            this.secretRequired = secretRequired;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosApplicationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosApplicationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosApplicationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosApplicationProps {
        private final java.lang.Object appName;
        private final java.lang.Object appType;
        private final java.lang.Object displayName;
        private final java.lang.Object accessTokenValidity;
        private final java.lang.Object isMultiTenant;
        private final java.lang.Object predefinedScopes;
        private final java.lang.Object redirectUris;
        private final java.lang.Object refreshTokenValidity;
        private final java.lang.Object requiredScopes;
        private final java.lang.Object secretRequired;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appName = software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appType = software.amazon.jsii.Kernel.get(this, "appType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessTokenValidity = software.amazon.jsii.Kernel.get(this, "accessTokenValidity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isMultiTenant = software.amazon.jsii.Kernel.get(this, "isMultiTenant", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.predefinedScopes = software.amazon.jsii.Kernel.get(this, "predefinedScopes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.redirectUris = software.amazon.jsii.Kernel.get(this, "redirectUris", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshTokenValidity = software.amazon.jsii.Kernel.get(this, "refreshTokenValidity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.requiredScopes = software.amazon.jsii.Kernel.get(this, "requiredScopes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.secretRequired = software.amazon.jsii.Kernel.get(this, "secretRequired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appName = java.util.Objects.requireNonNull(builder.appName, "appName is required");
            this.appType = java.util.Objects.requireNonNull(builder.appType, "appType is required");
            this.displayName = java.util.Objects.requireNonNull(builder.displayName, "displayName is required");
            this.accessTokenValidity = builder.accessTokenValidity;
            this.isMultiTenant = builder.isMultiTenant;
            this.predefinedScopes = builder.predefinedScopes;
            this.redirectUris = builder.redirectUris;
            this.refreshTokenValidity = builder.refreshTokenValidity;
            this.requiredScopes = builder.requiredScopes;
            this.secretRequired = builder.secretRequired;
        }

        @Override
        public final java.lang.Object getAppName() {
            return this.appName;
        }

        @Override
        public final java.lang.Object getAppType() {
            return this.appType;
        }

        @Override
        public final java.lang.Object getDisplayName() {
            return this.displayName;
        }

        @Override
        public final java.lang.Object getAccessTokenValidity() {
            return this.accessTokenValidity;
        }

        @Override
        public final java.lang.Object getIsMultiTenant() {
            return this.isMultiTenant;
        }

        @Override
        public final java.lang.Object getPredefinedScopes() {
            return this.predefinedScopes;
        }

        @Override
        public final java.lang.Object getRedirectUris() {
            return this.redirectUris;
        }

        @Override
        public final java.lang.Object getRefreshTokenValidity() {
            return this.refreshTokenValidity;
        }

        @Override
        public final java.lang.Object getRequiredScopes() {
            return this.requiredScopes;
        }

        @Override
        public final java.lang.Object getSecretRequired() {
            return this.secretRequired;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("appName", om.valueToTree(this.getAppName()));
            data.set("appType", om.valueToTree(this.getAppType()));
            data.set("displayName", om.valueToTree(this.getDisplayName()));
            if (this.getAccessTokenValidity() != null) {
                data.set("accessTokenValidity", om.valueToTree(this.getAccessTokenValidity()));
            }
            if (this.getIsMultiTenant() != null) {
                data.set("isMultiTenant", om.valueToTree(this.getIsMultiTenant()));
            }
            if (this.getPredefinedScopes() != null) {
                data.set("predefinedScopes", om.valueToTree(this.getPredefinedScopes()));
            }
            if (this.getRedirectUris() != null) {
                data.set("redirectUris", om.valueToTree(this.getRedirectUris()));
            }
            if (this.getRefreshTokenValidity() != null) {
                data.set("refreshTokenValidity", om.valueToTree(this.getRefreshTokenValidity()));
            }
            if (this.getRequiredScopes() != null) {
                data.set("requiredScopes", om.valueToTree(this.getRequiredScopes()));
            }
            if (this.getSecretRequired() != null) {
                data.set("secretRequired", om.valueToTree(this.getSecretRequired()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosApplicationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosApplicationProps.Jsii$Proxy that = (RosApplicationProps.Jsii$Proxy) o;

            if (!appName.equals(that.appName)) return false;
            if (!appType.equals(that.appType)) return false;
            if (!displayName.equals(that.displayName)) return false;
            if (this.accessTokenValidity != null ? !this.accessTokenValidity.equals(that.accessTokenValidity) : that.accessTokenValidity != null) return false;
            if (this.isMultiTenant != null ? !this.isMultiTenant.equals(that.isMultiTenant) : that.isMultiTenant != null) return false;
            if (this.predefinedScopes != null ? !this.predefinedScopes.equals(that.predefinedScopes) : that.predefinedScopes != null) return false;
            if (this.redirectUris != null ? !this.redirectUris.equals(that.redirectUris) : that.redirectUris != null) return false;
            if (this.refreshTokenValidity != null ? !this.refreshTokenValidity.equals(that.refreshTokenValidity) : that.refreshTokenValidity != null) return false;
            if (this.requiredScopes != null ? !this.requiredScopes.equals(that.requiredScopes) : that.requiredScopes != null) return false;
            return this.secretRequired != null ? this.secretRequired.equals(that.secretRequired) : that.secretRequired == null;
        }

        @Override
        public final int hashCode() {
            int result = this.appName.hashCode();
            result = 31 * result + (this.appType.hashCode());
            result = 31 * result + (this.displayName.hashCode());
            result = 31 * result + (this.accessTokenValidity != null ? this.accessTokenValidity.hashCode() : 0);
            result = 31 * result + (this.isMultiTenant != null ? this.isMultiTenant.hashCode() : 0);
            result = 31 * result + (this.predefinedScopes != null ? this.predefinedScopes.hashCode() : 0);
            result = 31 * result + (this.redirectUris != null ? this.redirectUris.hashCode() : 0);
            result = 31 * result + (this.refreshTokenValidity != null ? this.refreshTokenValidity.hashCode() : 0);
            result = 31 * result + (this.requiredScopes != null ? this.requiredScopes.hashCode() : 0);
            result = 31 * result + (this.secretRequired != null ? this.secretRequired.hashCode() : 0);
            return result;
        }
    }
}
