package com.aliyun.ros.cdk.mobi;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MOBI::App</code>, which is used to create an application.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:18.007Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mobi.$Module.class, fqn = "@alicloud/ros-cdk-mobi.App")
public class App extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.mobi.IApp {

    protected App(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected App(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public App(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mobi.AppProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public App(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mobi.AppProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AppDescription: Description of application.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrAppDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AppIcon: Application icon label, The system provides an icon by default, which is given in the form of a label.
     * <p>
     * The default value is -1.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppIcon() {
        return software.amazon.jsii.Kernel.get(this, "attrAppIcon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AppId: Application ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AppName: The application name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppName() {
        return software.amazon.jsii.Kernel.get(this, "attrAppName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AppType: The application type.
     * <p>
     * Web applications and Copilot applications are supported.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppType() {
        return software.amazon.jsii.Kernel.get(this, "attrAppType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AppWorkspaceId: Workspace ID of application, The application belongs to the workspace.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: Create time of application.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ModifiedTime: Modified time of application.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mobi.AppProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mobi.AppProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mobi.App}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mobi.App> {
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
        private final com.aliyun.ros.cdk.mobi.AppProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mobi.AppProps.Builder();
        }

        /**
         * Property appIcon: Application icon label, The system provides an icon by default, which is given in the form of a label.
         * <p>
         * The default value is -1.
         * <p>
         * @return {@code this}
         * @param appIcon Property appIcon: Application icon label, The system provides an icon by default, which is given in the form of a label. This parameter is required.
         */
        public Builder appIcon(final java.lang.String appIcon) {
            this.props.appIcon(appIcon);
            return this;
        }
        /**
         * Property appIcon: Application icon label, The system provides an icon by default, which is given in the form of a label.
         * <p>
         * The default value is -1.
         * <p>
         * @return {@code this}
         * @param appIcon Property appIcon: Application icon label, The system provides an icon by default, which is given in the form of a label. This parameter is required.
         */
        public Builder appIcon(final com.aliyun.ros.cdk.core.IResolvable appIcon) {
            this.props.appIcon(appIcon);
            return this;
        }

        /**
         * Property appName: The application name.
         * <p>
         * @return {@code this}
         * @param appName Property appName: The application name. This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props.appName(appName);
            return this;
        }
        /**
         * Property appName: The application name.
         * <p>
         * @return {@code this}
         * @param appName Property appName: The application name. This parameter is required.
         */
        public Builder appName(final com.aliyun.ros.cdk.core.IResolvable appName) {
            this.props.appName(appName);
            return this;
        }

        /**
         * Property appWorkspaceId: Workspace ID of application, The application belongs to the workspace.
         * <p>
         * @return {@code this}
         * @param appWorkspaceId Property appWorkspaceId: Workspace ID of application, The application belongs to the workspace. This parameter is required.
         */
        public Builder appWorkspaceId(final java.lang.String appWorkspaceId) {
            this.props.appWorkspaceId(appWorkspaceId);
            return this;
        }
        /**
         * Property appWorkspaceId: Workspace ID of application, The application belongs to the workspace.
         * <p>
         * @return {@code this}
         * @param appWorkspaceId Property appWorkspaceId: Workspace ID of application, The application belongs to the workspace. This parameter is required.
         */
        public Builder appWorkspaceId(final com.aliyun.ros.cdk.core.IResolvable appWorkspaceId) {
            this.props.appWorkspaceId(appWorkspaceId);
            return this;
        }

        /**
         * Property template: Application Template.
         * <p>
         * @return {@code this}
         * @param template Property template: Application Template. This parameter is required.
         */
        public Builder template(final com.aliyun.ros.cdk.core.IResolvable template) {
            this.props.template(template);
            return this;
        }
        /**
         * Property template: Application Template.
         * <p>
         * @return {@code this}
         * @param template Property template: Application Template. This parameter is required.
         */
        public Builder template(final com.aliyun.ros.cdk.mobi.RosApp.TemplateProperty template) {
            this.props.template(template);
            return this;
        }

        /**
         * Property appDescription: Description of application.
         * <p>
         * @return {@code this}
         * @param appDescription Property appDescription: Description of application. This parameter is required.
         */
        public Builder appDescription(final java.lang.String appDescription) {
            this.props.appDescription(appDescription);
            return this;
        }
        /**
         * Property appDescription: Description of application.
         * <p>
         * @return {@code this}
         * @param appDescription Property appDescription: Description of application. This parameter is required.
         */
        public Builder appDescription(final com.aliyun.ros.cdk.core.IResolvable appDescription) {
            this.props.appDescription(appDescription);
            return this;
        }

        /**
         * Property appType: The application type.
         * <p>
         * Web applications and Copilot applications are supported.
         * <p>
         * <ul>
         * <li><strong>Web</strong>:Web application.</li>
         * <li><strong>Copilot</strong>:Copilot application.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param appType Property appType: The application type. This parameter is required.
         */
        public Builder appType(final java.lang.String appType) {
            this.props.appType(appType);
            return this;
        }
        /**
         * Property appType: The application type.
         * <p>
         * Web applications and Copilot applications are supported.
         * <p>
         * <ul>
         * <li><strong>Web</strong>:Web application.</li>
         * <li><strong>Copilot</strong>:Copilot application.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param appType Property appType: The application type. This parameter is required.
         */
        public Builder appType(final com.aliyun.ros.cdk.core.IResolvable appType) {
            this.props.appType(appType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mobi.App}.
         */
        @Override
        public com.aliyun.ros.cdk.mobi.App build() {
            return new com.aliyun.ros.cdk.mobi.App(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
