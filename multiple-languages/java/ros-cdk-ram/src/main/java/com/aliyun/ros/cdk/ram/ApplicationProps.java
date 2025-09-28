package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a <code>Application</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-application
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:28.367Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.ApplicationProps")
@software.amazon.jsii.Jsii.Proxy(ApplicationProps.Jsii$Proxy.class)
public interface ApplicationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property appName: The name of the application.
     * <p>
     * The name can be up to 64 characters in length. The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppName();

    /**
     * Property appType: The type of the application.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>WebApp</strong>: a web application that interacts with a browser.</li>
     * <li><strong>NativeApp</strong>: a native application that runs on an operating system, such as a desktop operating system or a mobile operating system.</li>
     * <li><strong>ServerApp</strong>: an application that accesses Alibaba Cloud services without the need of manual user logon. User provisioning is automated based on the System for Cross-Domain Identity Management (SCIM) protocol.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppType();

    /**
     * Property displayName: The display name of the application.
     * <p>
     * The name can be up to 24 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDisplayName();

    /**
     * Property accessTokenValidity: The validity period of the access token.
     * <p>
     * Valid values: 900 to 10800. Unit: seconds.
     * Default value: 3600.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessTokenValidity() {
        return null;
    }

    /**
     * Property isMultiTenant: Indicates whether the application can be installed by using other Alibaba Cloud accounts.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>true</strong>: If you do not set this parameter for applications of the NativeApp and ServerApp types, true is used.</li>
     * <li><strong>false</strong>: If you do not set this parameter for applications of the WebApp type, false is used.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsMultiTenant() {
        return null;
    }

    /**
     * Property predefinedScopes: List of the scopes of application permissions.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPredefinedScopes() {
        return null;
    }

    /**
     * Property redirectUris: List of the callback URLs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRedirectUris() {
        return null;
    }

    /**
     * Property refreshTokenValidity: The validity period of the refreshed token.
     * <p>
     * Valid values: 7200 to 31536000. Unit: seconds.
     * Default value:
     * <p>
     * <ul>
     * <li>For applications of the WebApp and ServerApp types, if this parameter is left empty, the value 2592000 is used. The value 2592000 indicates that the validity period of the refreshed token is 30 days.</li>
     * <li>For applications of the NativeApp type, if this parameter is left empty, the value 7776000 is used. The value 7776000 indicates that the validity period of the refreshed token is 90 days.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshTokenValidity() {
        return null;
    }

    /**
     * Property requiredScopes: Required scope of application permissions.
     * <p>
     * You can set one or more of the scopes set in the <strong>PredefinedScopes</strong> to be required, so that when a user authorizes the application, the required scopes are selected by default and cannot be canceled.
     * <strong>Notes</strong>: If you set a <strong>RequiredScopes</strong> entry that is not within the scope of <strong>PredefinedScopes</strong>, the required range will not take effect.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRequiredScopes() {
        return null;
    }

    /**
     * Property secretRequired: Indicates whether a secret is required.
     * <p>
     * Valid values: <strong>true</strong> and <strong>false</strong>.
     * <strong>Note</strong>:
     * <p>
     * <ul>
     * <li>For applications of the WebApp and ServerApp types, this parameter is automatically set to <strong>true</strong> and cannot be changed.</li>
     * <li>For applications of the NativeApp type, this parameter can be set to true or false. If you do not set this parameter, false is used. Applications of the NativeApp type run in untrusted environments and the secrets of these applications are not protected. Therefore, we recommend that you do not set this parameter to true unless otherwise specified.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecretRequired() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ApplicationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ApplicationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ApplicationProps> {
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
         * Sets the value of {@link ApplicationProps#getAppName}
         * @param appName Property appName: The name of the application. This parameter is required.
         *                The name can be up to 64 characters in length. The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder appName(java.lang.String appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getAppName}
         * @param appName Property appName: The name of the application. This parameter is required.
         *                The name can be up to 64 characters in length. The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder appName(com.aliyun.ros.cdk.core.IResolvable appName) {
            this.appName = appName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getAppType}
         * @param appType Property appType: The type of the application. This parameter is required.
         *                Valid values:
         *                <p>
         *                <ul>
         *                <li><strong>WebApp</strong>: a web application that interacts with a browser.</li>
         *                <li><strong>NativeApp</strong>: a native application that runs on an operating system, such as a desktop operating system or a mobile operating system.</li>
         *                <li><strong>ServerApp</strong>: an application that accesses Alibaba Cloud services without the need of manual user logon. User provisioning is automated based on the System for Cross-Domain Identity Management (SCIM) protocol.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder appType(java.lang.String appType) {
            this.appType = appType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getAppType}
         * @param appType Property appType: The type of the application. This parameter is required.
         *                Valid values:
         *                <p>
         *                <ul>
         *                <li><strong>WebApp</strong>: a web application that interacts with a browser.</li>
         *                <li><strong>NativeApp</strong>: a native application that runs on an operating system, such as a desktop operating system or a mobile operating system.</li>
         *                <li><strong>ServerApp</strong>: an application that accesses Alibaba Cloud services without the need of manual user logon. User provisioning is automated based on the System for Cross-Domain Identity Management (SCIM) protocol.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder appType(com.aliyun.ros.cdk.core.IResolvable appType) {
            this.appType = appType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getDisplayName}
         * @param displayName Property displayName: The display name of the application. This parameter is required.
         *                    The name can be up to 24 characters in length.
         * @return {@code this}
         */
        public Builder displayName(java.lang.String displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getDisplayName}
         * @param displayName Property displayName: The display name of the application. This parameter is required.
         *                    The name can be up to 24 characters in length.
         * @return {@code this}
         */
        public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getAccessTokenValidity}
         * @param accessTokenValidity Property accessTokenValidity: The validity period of the access token.
         *                            Valid values: 900 to 10800. Unit: seconds.
         *                            Default value: 3600.
         * @return {@code this}
         */
        public Builder accessTokenValidity(java.lang.Number accessTokenValidity) {
            this.accessTokenValidity = accessTokenValidity;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getAccessTokenValidity}
         * @param accessTokenValidity Property accessTokenValidity: The validity period of the access token.
         *                            Valid values: 900 to 10800. Unit: seconds.
         *                            Default value: 3600.
         * @return {@code this}
         */
        public Builder accessTokenValidity(com.aliyun.ros.cdk.core.IResolvable accessTokenValidity) {
            this.accessTokenValidity = accessTokenValidity;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getIsMultiTenant}
         * @param isMultiTenant Property isMultiTenant: Indicates whether the application can be installed by using other Alibaba Cloud accounts.
         *                      Valid values:
         *                      <p>
         *                      <ul>
         *                      <li><strong>true</strong>: If you do not set this parameter for applications of the NativeApp and ServerApp types, true is used.</li>
         *                      <li><strong>false</strong>: If you do not set this parameter for applications of the WebApp type, false is used.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder isMultiTenant(java.lang.Boolean isMultiTenant) {
            this.isMultiTenant = isMultiTenant;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getIsMultiTenant}
         * @param isMultiTenant Property isMultiTenant: Indicates whether the application can be installed by using other Alibaba Cloud accounts.
         *                      Valid values:
         *                      <p>
         *                      <ul>
         *                      <li><strong>true</strong>: If you do not set this parameter for applications of the NativeApp and ServerApp types, true is used.</li>
         *                      <li><strong>false</strong>: If you do not set this parameter for applications of the WebApp type, false is used.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder isMultiTenant(com.aliyun.ros.cdk.core.IResolvable isMultiTenant) {
            this.isMultiTenant = isMultiTenant;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPredefinedScopes}
         * @param predefinedScopes Property predefinedScopes: List of the scopes of application permissions.
         * @return {@code this}
         */
        public Builder predefinedScopes(com.aliyun.ros.cdk.core.IResolvable predefinedScopes) {
            this.predefinedScopes = predefinedScopes;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPredefinedScopes}
         * @param predefinedScopes Property predefinedScopes: List of the scopes of application permissions.
         * @return {@code this}
         */
        public Builder predefinedScopes(java.util.List<? extends java.lang.Object> predefinedScopes) {
            this.predefinedScopes = predefinedScopes;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getRedirectUris}
         * @param redirectUris Property redirectUris: List of the callback URLs.
         * @return {@code this}
         */
        public Builder redirectUris(com.aliyun.ros.cdk.core.IResolvable redirectUris) {
            this.redirectUris = redirectUris;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getRedirectUris}
         * @param redirectUris Property redirectUris: List of the callback URLs.
         * @return {@code this}
         */
        public Builder redirectUris(java.util.List<? extends java.lang.Object> redirectUris) {
            this.redirectUris = redirectUris;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getRefreshTokenValidity}
         * @param refreshTokenValidity Property refreshTokenValidity: The validity period of the refreshed token.
         *                             Valid values: 7200 to 31536000. Unit: seconds.
         *                             Default value:
         *                             <p>
         *                             <ul>
         *                             <li>For applications of the WebApp and ServerApp types, if this parameter is left empty, the value 2592000 is used. The value 2592000 indicates that the validity period of the refreshed token is 30 days.</li>
         *                             <li>For applications of the NativeApp type, if this parameter is left empty, the value 7776000 is used. The value 7776000 indicates that the validity period of the refreshed token is 90 days.</li>
         *                             </ul>
         * @return {@code this}
         */
        public Builder refreshTokenValidity(java.lang.Number refreshTokenValidity) {
            this.refreshTokenValidity = refreshTokenValidity;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getRefreshTokenValidity}
         * @param refreshTokenValidity Property refreshTokenValidity: The validity period of the refreshed token.
         *                             Valid values: 7200 to 31536000. Unit: seconds.
         *                             Default value:
         *                             <p>
         *                             <ul>
         *                             <li>For applications of the WebApp and ServerApp types, if this parameter is left empty, the value 2592000 is used. The value 2592000 indicates that the validity period of the refreshed token is 30 days.</li>
         *                             <li>For applications of the NativeApp type, if this parameter is left empty, the value 7776000 is used. The value 7776000 indicates that the validity period of the refreshed token is 90 days.</li>
         *                             </ul>
         * @return {@code this}
         */
        public Builder refreshTokenValidity(com.aliyun.ros.cdk.core.IResolvable refreshTokenValidity) {
            this.refreshTokenValidity = refreshTokenValidity;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getRequiredScopes}
         * @param requiredScopes Property requiredScopes: Required scope of application permissions.
         *                       You can set one or more of the scopes set in the <strong>PredefinedScopes</strong> to be required, so that when a user authorizes the application, the required scopes are selected by default and cannot be canceled.
         *                       <strong>Notes</strong>: If you set a <strong>RequiredScopes</strong> entry that is not within the scope of <strong>PredefinedScopes</strong>, the required range will not take effect.
         * @return {@code this}
         */
        public Builder requiredScopes(com.aliyun.ros.cdk.core.IResolvable requiredScopes) {
            this.requiredScopes = requiredScopes;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getRequiredScopes}
         * @param requiredScopes Property requiredScopes: Required scope of application permissions.
         *                       You can set one or more of the scopes set in the <strong>PredefinedScopes</strong> to be required, so that when a user authorizes the application, the required scopes are selected by default and cannot be canceled.
         *                       <strong>Notes</strong>: If you set a <strong>RequiredScopes</strong> entry that is not within the scope of <strong>PredefinedScopes</strong>, the required range will not take effect.
         * @return {@code this}
         */
        public Builder requiredScopes(java.util.List<? extends java.lang.Object> requiredScopes) {
            this.requiredScopes = requiredScopes;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getSecretRequired}
         * @param secretRequired Property secretRequired: Indicates whether a secret is required.
         *                       Valid values: <strong>true</strong> and <strong>false</strong>.
         *                       <strong>Note</strong>:
         *                       <p>
         *                       <ul>
         *                       <li>For applications of the WebApp and ServerApp types, this parameter is automatically set to <strong>true</strong> and cannot be changed.</li>
         *                       <li>For applications of the NativeApp type, this parameter can be set to true or false. If you do not set this parameter, false is used. Applications of the NativeApp type run in untrusted environments and the secrets of these applications are not protected. Therefore, we recommend that you do not set this parameter to true unless otherwise specified.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder secretRequired(java.lang.Boolean secretRequired) {
            this.secretRequired = secretRequired;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getSecretRequired}
         * @param secretRequired Property secretRequired: Indicates whether a secret is required.
         *                       Valid values: <strong>true</strong> and <strong>false</strong>.
         *                       <strong>Note</strong>:
         *                       <p>
         *                       <ul>
         *                       <li>For applications of the WebApp and ServerApp types, this parameter is automatically set to <strong>true</strong> and cannot be changed.</li>
         *                       <li>For applications of the NativeApp type, this parameter can be set to true or false. If you do not set this parameter, false is used. Applications of the NativeApp type run in untrusted environments and the secrets of these applications are not protected. Therefore, we recommend that you do not set this parameter to true unless otherwise specified.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder secretRequired(com.aliyun.ros.cdk.core.IResolvable secretRequired) {
            this.secretRequired = secretRequired;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ApplicationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ApplicationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ApplicationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApplicationProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.ApplicationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ApplicationProps.Jsii$Proxy that = (ApplicationProps.Jsii$Proxy) o;

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
