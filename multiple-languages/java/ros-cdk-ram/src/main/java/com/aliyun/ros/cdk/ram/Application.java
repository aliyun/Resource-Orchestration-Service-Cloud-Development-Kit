package com.aliyun.ros.cdk.ram;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::RAM::Application</code>, which is used to create an application.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:08.630Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.Application")
public class Application extends com.aliyun.ros.cdk.core.Resource {

    protected Application(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Application(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Application(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ApplicationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Application(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ApplicationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AppId: The ID of the application.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AppName: The name of the application.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppName() {
        return software.amazon.jsii.Kernel.get(this, "attrAppName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ApplicationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.ApplicationProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ApplicationProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.Application}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.Application> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ram.ApplicationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ram.ApplicationProps.Builder();
        }

        /**
         * Property appName: The name of the application.
         * <p>
         * The name can be up to 64 characters in length. The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param appName Property appName: The name of the application. This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props.appName(appName);
            return this;
        }
        /**
         * Property appName: The name of the application.
         * <p>
         * The name can be up to 64 characters in length. The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param appName Property appName: The name of the application. This parameter is required.
         */
        public Builder appName(final com.aliyun.ros.cdk.core.IResolvable appName) {
            this.props.appName(appName);
            return this;
        }

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
         * <p>
         * @return {@code this}
         * @param appType Property appType: The type of the application. This parameter is required.
         */
        public Builder appType(final java.lang.String appType) {
            this.props.appType(appType);
            return this;
        }
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
         * <p>
         * @return {@code this}
         * @param appType Property appType: The type of the application. This parameter is required.
         */
        public Builder appType(final com.aliyun.ros.cdk.core.IResolvable appType) {
            this.props.appType(appType);
            return this;
        }

        /**
         * Property displayName: The display name of the application.
         * <p>
         * The name can be up to 24 characters in length.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: The display name of the application. This parameter is required.
         */
        public Builder displayName(final java.lang.String displayName) {
            this.props.displayName(displayName);
            return this;
        }
        /**
         * Property displayName: The display name of the application.
         * <p>
         * The name can be up to 24 characters in length.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: The display name of the application. This parameter is required.
         */
        public Builder displayName(final com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.props.displayName(displayName);
            return this;
        }

        /**
         * Property accessTokenValidity: The validity period of the access token.
         * <p>
         * Valid values: 900 to 10800. Unit: seconds.
         * Default value: 3600.
         * <p>
         * @return {@code this}
         * @param accessTokenValidity Property accessTokenValidity: The validity period of the access token. This parameter is required.
         */
        public Builder accessTokenValidity(final java.lang.Number accessTokenValidity) {
            this.props.accessTokenValidity(accessTokenValidity);
            return this;
        }
        /**
         * Property accessTokenValidity: The validity period of the access token.
         * <p>
         * Valid values: 900 to 10800. Unit: seconds.
         * Default value: 3600.
         * <p>
         * @return {@code this}
         * @param accessTokenValidity Property accessTokenValidity: The validity period of the access token. This parameter is required.
         */
        public Builder accessTokenValidity(final com.aliyun.ros.cdk.core.IResolvable accessTokenValidity) {
            this.props.accessTokenValidity(accessTokenValidity);
            return this;
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
         * <p>
         * @return {@code this}
         * @param isMultiTenant Property isMultiTenant: Indicates whether the application can be installed by using other Alibaba Cloud accounts. This parameter is required.
         */
        public Builder isMultiTenant(final java.lang.Boolean isMultiTenant) {
            this.props.isMultiTenant(isMultiTenant);
            return this;
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
         * <p>
         * @return {@code this}
         * @param isMultiTenant Property isMultiTenant: Indicates whether the application can be installed by using other Alibaba Cloud accounts. This parameter is required.
         */
        public Builder isMultiTenant(final com.aliyun.ros.cdk.core.IResolvable isMultiTenant) {
            this.props.isMultiTenant(isMultiTenant);
            return this;
        }

        /**
         * Property predefinedScopes: List of the scopes of application permissions.
         * <p>
         * @return {@code this}
         * @param predefinedScopes Property predefinedScopes: List of the scopes of application permissions. This parameter is required.
         */
        public Builder predefinedScopes(final com.aliyun.ros.cdk.core.IResolvable predefinedScopes) {
            this.props.predefinedScopes(predefinedScopes);
            return this;
        }
        /**
         * Property predefinedScopes: List of the scopes of application permissions.
         * <p>
         * @return {@code this}
         * @param predefinedScopes Property predefinedScopes: List of the scopes of application permissions. This parameter is required.
         */
        public Builder predefinedScopes(final java.util.List<? extends java.lang.Object> predefinedScopes) {
            this.props.predefinedScopes(predefinedScopes);
            return this;
        }

        /**
         * Property redirectUris: List of the callback URLs.
         * <p>
         * @return {@code this}
         * @param redirectUris Property redirectUris: List of the callback URLs. This parameter is required.
         */
        public Builder redirectUris(final com.aliyun.ros.cdk.core.IResolvable redirectUris) {
            this.props.redirectUris(redirectUris);
            return this;
        }
        /**
         * Property redirectUris: List of the callback URLs.
         * <p>
         * @return {@code this}
         * @param redirectUris Property redirectUris: List of the callback URLs. This parameter is required.
         */
        public Builder redirectUris(final java.util.List<? extends java.lang.Object> redirectUris) {
            this.props.redirectUris(redirectUris);
            return this;
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
         * <p>
         * @return {@code this}
         * @param refreshTokenValidity Property refreshTokenValidity: The validity period of the refreshed token. This parameter is required.
         */
        public Builder refreshTokenValidity(final java.lang.Number refreshTokenValidity) {
            this.props.refreshTokenValidity(refreshTokenValidity);
            return this;
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
         * <p>
         * @return {@code this}
         * @param refreshTokenValidity Property refreshTokenValidity: The validity period of the refreshed token. This parameter is required.
         */
        public Builder refreshTokenValidity(final com.aliyun.ros.cdk.core.IResolvable refreshTokenValidity) {
            this.props.refreshTokenValidity(refreshTokenValidity);
            return this;
        }

        /**
         * Property requiredScopes: Required scope of application permissions.
         * <p>
         * You can set one or more of the scopes set in the <strong>PredefinedScopes</strong> to be required, so that when a user authorizes the application, the required scopes are selected by default and cannot be canceled.
         * <strong>Notes</strong>: If you set a <strong>RequiredScopes</strong> entry that is not within the scope of <strong>PredefinedScopes</strong>, the required range will not take effect.
         * <p>
         * @return {@code this}
         * @param requiredScopes Property requiredScopes: Required scope of application permissions. This parameter is required.
         */
        public Builder requiredScopes(final com.aliyun.ros.cdk.core.IResolvable requiredScopes) {
            this.props.requiredScopes(requiredScopes);
            return this;
        }
        /**
         * Property requiredScopes: Required scope of application permissions.
         * <p>
         * You can set one or more of the scopes set in the <strong>PredefinedScopes</strong> to be required, so that when a user authorizes the application, the required scopes are selected by default and cannot be canceled.
         * <strong>Notes</strong>: If you set a <strong>RequiredScopes</strong> entry that is not within the scope of <strong>PredefinedScopes</strong>, the required range will not take effect.
         * <p>
         * @return {@code this}
         * @param requiredScopes Property requiredScopes: Required scope of application permissions. This parameter is required.
         */
        public Builder requiredScopes(final java.util.List<? extends java.lang.Object> requiredScopes) {
            this.props.requiredScopes(requiredScopes);
            return this;
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
         * <p>
         * @return {@code this}
         * @param secretRequired Property secretRequired: Indicates whether a secret is required. This parameter is required.
         */
        public Builder secretRequired(final java.lang.Boolean secretRequired) {
            this.props.secretRequired(secretRequired);
            return this;
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
         * <p>
         * @return {@code this}
         * @param secretRequired Property secretRequired: Indicates whether a secret is required. This parameter is required.
         */
        public Builder secretRequired(final com.aliyun.ros.cdk.core.IResolvable secretRequired) {
            this.props.secretRequired(secretRequired);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ram.Application}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.Application build() {
            return new com.aliyun.ros.cdk.ram.Application(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
