package com.aliyun.ros.cdk.arms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ARMS::Rum</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:21.979Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.Rum")
public class Rum extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.arms.IRum {

    protected Rum(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Rum(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Rum(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.RumProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Rum(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.RumProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CdnDomain: The CDN domain of the RUM application.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCdnDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrCdnDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Endpoint: The endpoint of the RUM application.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Pid: The PID of the RUM application.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPid() {
        return software.amazon.jsii.Kernel.get(this, "attrPid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.RumProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.RumProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.arms.Rum}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.arms.Rum> {
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
        private final com.aliyun.ros.cdk.arms.RumProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.arms.RumProps.Builder();
        }

        /**
         * Property appName: The name of the RUM application.
         * <p>
         * The value can be up to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param appName Property appName: The name of the RUM application. This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props.appName(appName);
            return this;
        }
        /**
         * Property appName: The name of the RUM application.
         * <p>
         * The value can be up to 64 characters in length.
         * <p>
         * @return {@code this}
         * @param appName Property appName: The name of the RUM application. This parameter is required.
         */
        public Builder appName(final com.aliyun.ros.cdk.core.IResolvable appName) {
            this.props.appName(appName);
            return this;
        }

        /**
         * Property siteType: The type of the website.
         * <p>
         * @return {@code this}
         * @param siteType Property siteType: The type of the website. This parameter is required.
         */
        public Builder siteType(final java.lang.String siteType) {
            this.props.siteType(siteType);
            return this;
        }
        /**
         * Property siteType: The type of the website.
         * <p>
         * @return {@code this}
         * @param siteType Property siteType: The type of the website. This parameter is required.
         */
        public Builder siteType(final com.aliyun.ros.cdk.core.IResolvable siteType) {
            this.props.siteType(siteType);
            return this;
        }

        /**
         * Property appGroup: The group to which the RUM application belongs.
         * <p>
         * @return {@code this}
         * @param appGroup Property appGroup: The group to which the RUM application belongs. This parameter is required.
         */
        public Builder appGroup(final java.lang.String appGroup) {
            this.props.appGroup(appGroup);
            return this;
        }
        /**
         * Property appGroup: The group to which the RUM application belongs.
         * <p>
         * @return {@code this}
         * @param appGroup Property appGroup: The group to which the RUM application belongs. This parameter is required.
         */
        public Builder appGroup(final com.aliyun.ros.cdk.core.IResolvable appGroup) {
            this.props.appGroup(appGroup);
            return this;
        }

        /**
         * Property description: The description of the RUM application.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the RUM application. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the RUM application.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the RUM application. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property language: The programming language of the RUM application.
         * <p>
         * @return {@code this}
         * @param language Property language: The programming language of the RUM application. This parameter is required.
         */
        public Builder language(final java.lang.String language) {
            this.props.language(language);
            return this;
        }
        /**
         * Property language: The programming language of the RUM application.
         * <p>
         * @return {@code this}
         * @param language Property language: The programming language of the RUM application. This parameter is required.
         */
        public Builder language(final com.aliyun.ros.cdk.core.IResolvable language) {
            this.props.language(language);
            return this;
        }

        /**
         * Property nickName: The nickname of the RUM application.
         * <p>
         * @return {@code this}
         * @param nickName Property nickName: The nickname of the RUM application. This parameter is required.
         */
        public Builder nickName(final java.lang.String nickName) {
            this.props.nickName(nickName);
            return this;
        }
        /**
         * Property nickName: The nickname of the RUM application.
         * <p>
         * @return {@code this}
         * @param nickName Property nickName: The nickname of the RUM application. This parameter is required.
         */
        public Builder nickName(final com.aliyun.ros.cdk.core.IResolvable nickName) {
            this.props.nickName(nickName);
            return this;
        }

        /**
         * Property packageName: The package name of the RUM application.
         * <p>
         * @return {@code this}
         * @param packageName Property packageName: The package name of the RUM application. This parameter is required.
         */
        public Builder packageName(final java.lang.String packageName) {
            this.props.packageName(packageName);
            return this;
        }
        /**
         * Property packageName: The package name of the RUM application.
         * <p>
         * @return {@code this}
         * @param packageName Property packageName: The package name of the RUM application. This parameter is required.
         */
        public Builder packageName(final com.aliyun.ros.cdk.core.IResolvable packageName) {
            this.props.packageName(packageName);
            return this;
        }

        /**
         * Property realRegionId: The actual region ID for internal use.
         * <p>
         * @return {@code this}
         * @param realRegionId Property realRegionId: The actual region ID for internal use. This parameter is required.
         */
        public Builder realRegionId(final java.lang.String realRegionId) {
            this.props.realRegionId(realRegionId);
            return this;
        }
        /**
         * Property realRegionId: The actual region ID for internal use.
         * <p>
         * @return {@code this}
         * @param realRegionId Property realRegionId: The actual region ID for internal use. This parameter is required.
         */
        public Builder realRegionId(final com.aliyun.ros.cdk.core.IResolvable realRegionId) {
            this.props.realRegionId(realRegionId);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the RUM application belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the RUM application belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the RUM application belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the RUM application belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property source: The source of the RUM application.
         * <p>
         * @return {@code this}
         * @param source Property source: The source of the RUM application. This parameter is required.
         */
        public Builder source(final java.lang.String source) {
            this.props.source(source);
            return this;
        }
        /**
         * Property source: The source of the RUM application.
         * <p>
         * @return {@code this}
         * @param source Property source: The source of the RUM application. This parameter is required.
         */
        public Builder source(final com.aliyun.ros.cdk.core.IResolvable source) {
            this.props.source(source);
            return this;
        }

        /**
         * Property tags: A list of tags to attach to the RUM application.
         * <p>
         * Each tag is a key-value pair.
         * <p>
         * @return {@code this}
         * @param tags Property tags: A list of tags to attach to the RUM application. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.arms.RosRum.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.arms.Rum}.
         */
        @Override
        public com.aliyun.ros.cdk.arms.Rum build() {
            return new com.aliyun.ros.cdk.arms.Rum(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
