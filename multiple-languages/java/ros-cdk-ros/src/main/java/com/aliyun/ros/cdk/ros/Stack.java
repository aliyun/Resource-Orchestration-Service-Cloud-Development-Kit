package com.aliyun.ros.cdk.ros;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ROS::Stack</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:10.250Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.Stack")
public class Stack extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ros.IStack {

    protected Stack(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Stack(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Stack(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ros.StackProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Stack(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ros.StackProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Stack(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.StackProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ros.StackProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ros.Stack}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ros.Stack> {
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
        private com.aliyun.ros.cdk.ros.StackProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property parameters: The set of parameters passed to this nested stack.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: The set of parameters passed to this nested stack. This parameter is required.
         */
        public Builder parameters(final com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.props().parameters(parameters);
            return this;
        }
        /**
         * Property parameters: The set of parameters passed to this nested stack.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: The set of parameters passed to this nested stack. This parameter is required.
         */
        public Builder parameters(final java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.props().parameters(parameters);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: The tags of nested stack.
         * <p>
         * If it is specified, it will be passed to all tag-supported resources in the nested stack.
         * <p>
         * @return {@code this}
         * @param tags Property tags: The tags of nested stack. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ros.RosStack.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property templateBody: Structure containing the template body.
         * <p>
         * It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
         * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
         * <p>
         * @return {@code this}
         * @param templateBody Property templateBody: Structure containing the template body. This parameter is required.
         */
        public Builder templateBody(final com.aliyun.ros.cdk.core.IResolvable templateBody) {
            this.props().templateBody(templateBody);
            return this;
        }
        /**
         * Property templateBody: Structure containing the template body.
         * <p>
         * It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
         * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
         * <p>
         * @return {@code this}
         * @param templateBody Property templateBody: Structure containing the template body. This parameter is required.
         */
        public Builder templateBody(final java.util.Map<java.lang.String, ? extends java.lang.Object> templateBody) {
            this.props().templateBody(templateBody);
            return this;
        }

        /**
         * Property templateId: Template ID of template containing the template body.
         * <p>
         * @return {@code this}
         * @param templateId Property templateId: Template ID of template containing the template body. This parameter is required.
         */
        public Builder templateId(final java.lang.String templateId) {
            this.props().templateId(templateId);
            return this;
        }
        /**
         * Property templateId: Template ID of template containing the template body.
         * <p>
         * @return {@code this}
         * @param templateId Property templateId: Template ID of template containing the template body. This parameter is required.
         */
        public Builder templateId(final com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.props().templateId(templateId);
            return this;
        }

        /**
         * Property templateUrl: Location of file containing the template body.
         * <p>
         * The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
         * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
         * <p>
         * @return {@code this}
         * @param templateUrl Property templateUrl: Location of file containing the template body. This parameter is required.
         */
        public Builder templateUrl(final java.lang.String templateUrl) {
            this.props().templateUrl(templateUrl);
            return this;
        }
        /**
         * Property templateUrl: Location of file containing the template body.
         * <p>
         * The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
         * You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
         * <p>
         * @return {@code this}
         * @param templateUrl Property templateUrl: Location of file containing the template body. This parameter is required.
         */
        public Builder templateUrl(final com.aliyun.ros.cdk.core.IResolvable templateUrl) {
            this.props().templateUrl(templateUrl);
            return this;
        }

        /**
         * Property templateVersion: Template version of template containing the template body.
         * <p>
         * @return {@code this}
         * @param templateVersion Property templateVersion: Template version of template containing the template body. This parameter is required.
         */
        public Builder templateVersion(final java.lang.String templateVersion) {
            this.props().templateVersion(templateVersion);
            return this;
        }
        /**
         * Property templateVersion: Template version of template containing the template body.
         * <p>
         * @return {@code this}
         * @param templateVersion Property templateVersion: Template version of template containing the template body. This parameter is required.
         */
        public Builder templateVersion(final com.aliyun.ros.cdk.core.IResolvable templateVersion) {
            this.props().templateVersion(templateVersion);
            return this;
        }

        /**
         * Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update.
         * <p>
         * Default to 60 minutes.
         * <p>
         * @return {@code this}
         * @param timeoutMins Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. This parameter is required.
         */
        public Builder timeoutMins(final java.lang.Number timeoutMins) {
            this.props().timeoutMins(timeoutMins);
            return this;
        }
        /**
         * Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update.
         * <p>
         * Default to 60 minutes.
         * <p>
         * @return {@code this}
         * @param timeoutMins Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. This parameter is required.
         */
        public Builder timeoutMins(final com.aliyun.ros.cdk.core.IResolvable timeoutMins) {
            this.props().timeoutMins(timeoutMins);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ros.Stack}.
         */
        @Override
        public com.aliyun.ros.cdk.ros.Stack build() {
            return new com.aliyun.ros.cdk.ros.Stack(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ros.StackProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ros.StackProps.Builder();
            }
            return this.props;
        }
    }
}
