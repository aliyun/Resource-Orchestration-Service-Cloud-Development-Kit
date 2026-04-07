package com.aliyun.ros.cdk.ecs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECS::LaunchTemplateVersion</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:24.729Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.LaunchTemplateVersion")
public class LaunchTemplateVersion extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.ILaunchTemplateVersion {

    protected LaunchTemplateVersion(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected LaunchTemplateVersion(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public LaunchTemplateVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.LaunchTemplateVersionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public LaunchTemplateVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.LaunchTemplateVersionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public LaunchTemplateVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute CreatedBy: The ID of the Alibaba Cloud account that created the launch template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedBy() {
        return software.amazon.jsii.Kernel.get(this, "attrCreatedBy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The time when the launch template version was created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DefaultVersion: Indicates whether the launch template version is the default version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrDefaultVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LaunchTemplateData: The configurations of the launch template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateData() {
        return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LaunchTemplateId: The ID of the launch template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LaunchTemplateName: The name of the launch template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLaunchTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "attrLaunchTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ModifiedTime: The time when the launch template version was modified.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which to assign the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VersionDescription: The description of the launch template version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrVersionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VersionNumber: The number of the created version of the launch template.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrVersionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.LaunchTemplateVersionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.LaunchTemplateVersionProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.LaunchTemplateVersion}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.LaunchTemplateVersion> {
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
        private com.aliyun.ros.cdk.ecs.LaunchTemplateVersionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property launchTemplateData: The configurations of the launch template.
         * <p>
         * @return {@code this}
         * @param launchTemplateData Property launchTemplateData: The configurations of the launch template. This parameter is required.
         */
        public Builder launchTemplateData(final com.aliyun.ros.cdk.core.IResolvable launchTemplateData) {
            this.props().launchTemplateData(launchTemplateData);
            return this;
        }
        /**
         * Property launchTemplateData: The configurations of the launch template.
         * <p>
         * @return {@code this}
         * @param launchTemplateData Property launchTemplateData: The configurations of the launch template. This parameter is required.
         */
        public Builder launchTemplateData(final com.aliyun.ros.cdk.ecs.RosLaunchTemplateVersion.LaunchTemplateDataProperty launchTemplateData) {
            this.props().launchTemplateData(launchTemplateData);
            return this;
        }

        /**
         * Property launchTemplateId: The ID of the launch template.
         * <p>
         * You must specify LaunchTemplateId or LaunchTemplateName to specify a launch template.
         * <p>
         * @return {@code this}
         * @param launchTemplateId Property launchTemplateId: The ID of the launch template. This parameter is required.
         */
        public Builder launchTemplateId(final java.lang.String launchTemplateId) {
            this.props().launchTemplateId(launchTemplateId);
            return this;
        }
        /**
         * Property launchTemplateId: The ID of the launch template.
         * <p>
         * You must specify LaunchTemplateId or LaunchTemplateName to specify a launch template.
         * <p>
         * @return {@code this}
         * @param launchTemplateId Property launchTemplateId: The ID of the launch template. This parameter is required.
         */
        public Builder launchTemplateId(final com.aliyun.ros.cdk.core.IResolvable launchTemplateId) {
            this.props().launchTemplateId(launchTemplateId);
            return this;
        }

        /**
         * Property launchTemplateName: The name of the launch template.
         * <p>
         * The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param launchTemplateName Property launchTemplateName: The name of the launch template. This parameter is required.
         */
        public Builder launchTemplateName(final java.lang.String launchTemplateName) {
            this.props().launchTemplateName(launchTemplateName);
            return this;
        }
        /**
         * Property launchTemplateName: The name of the launch template.
         * <p>
         * The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param launchTemplateName Property launchTemplateName: The name of the launch template. This parameter is required.
         */
        public Builder launchTemplateName(final com.aliyun.ros.cdk.core.IResolvable launchTemplateName) {
            this.props().launchTemplateName(launchTemplateName);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which to assign the instance.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the instance. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which to assign the instance.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the instance. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property versionDescription: The description of the launch template version.
         * <p>
         * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param versionDescription Property versionDescription: The description of the launch template version. This parameter is required.
         */
        public Builder versionDescription(final java.lang.String versionDescription) {
            this.props().versionDescription(versionDescription);
            return this;
        }
        /**
         * Property versionDescription: The description of the launch template version.
         * <p>
         * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param versionDescription Property versionDescription: The description of the launch template version. This parameter is required.
         */
        public Builder versionDescription(final com.aliyun.ros.cdk.core.IResolvable versionDescription) {
            this.props().versionDescription(versionDescription);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.LaunchTemplateVersion}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.LaunchTemplateVersion build() {
            return new com.aliyun.ros.cdk.ecs.LaunchTemplateVersion(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.LaunchTemplateVersionProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.LaunchTemplateVersionProps.Builder();
            }
            return this.props;
        }
    }
}
