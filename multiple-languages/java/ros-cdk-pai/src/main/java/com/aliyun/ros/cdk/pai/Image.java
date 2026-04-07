package com.aliyun.ros.cdk.pai;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PAI::Image</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:28.391Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.Image")
public class Image extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.pai.IImage {

    protected Image(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Image(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Image(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ImageProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Image(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ImageProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Accessibility: Visibility of the mirror.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility() {
        return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageName: The image name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageName() {
        return software.amazon.jsii.Kernel.get(this, "attrImageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ImageUri: The Image address, which contains the version number.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageUri() {
        return software.amazon.jsii.Kernel.get(this, "attrImageUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Labels: Labels.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels() {
        return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WorkspaceId: The ID of the workspace to which the image belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ImageProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.ImageProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.Image}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.Image> {
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
        private final com.aliyun.ros.cdk.pai.ImageProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pai.ImageProps.Builder();
        }

        /**
         * Property imageName: The image name.
         * <p>
         * @return {@code this}
         * @param imageName Property imageName: The image name. This parameter is required.
         */
        public Builder imageName(final java.lang.String imageName) {
            this.props.imageName(imageName);
            return this;
        }
        /**
         * Property imageName: The image name.
         * <p>
         * @return {@code this}
         * @param imageName Property imageName: The image name. This parameter is required.
         */
        public Builder imageName(final com.aliyun.ros.cdk.core.IResolvable imageName) {
            this.props.imageName(imageName);
            return this;
        }

        /**
         * Property imageUri: The Image address, which contains the version number.
         * <p>
         * @return {@code this}
         * @param imageUri Property imageUri: The Image address, which contains the version number. This parameter is required.
         */
        public Builder imageUri(final java.lang.String imageUri) {
            this.props.imageUri(imageUri);
            return this;
        }
        /**
         * Property imageUri: The Image address, which contains the version number.
         * <p>
         * @return {@code this}
         * @param imageUri Property imageUri: The Image address, which contains the version number. This parameter is required.
         */
        public Builder imageUri(final com.aliyun.ros.cdk.core.IResolvable imageUri) {
            this.props.imageUri(imageUri);
            return this;
        }

        /**
         * Property accessibility: Visibility of the mirror, possible values: - PUBLIC: all members of the current workspace can operate.
         * <p>
         * <ul>
         * <li>PRIVATE: Only the creator can operate.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accessibility Property accessibility: Visibility of the mirror, possible values: - PUBLIC: all members of the current workspace can operate. This parameter is required.
         */
        public Builder accessibility(final java.lang.String accessibility) {
            this.props.accessibility(accessibility);
            return this;
        }
        /**
         * Property accessibility: Visibility of the mirror, possible values: - PUBLIC: all members of the current workspace can operate.
         * <p>
         * <ul>
         * <li>PRIVATE: Only the creator can operate.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accessibility Property accessibility: Visibility of the mirror, possible values: - PUBLIC: all members of the current workspace can operate. This parameter is required.
         */
        public Builder accessibility(final com.aliyun.ros.cdk.core.IResolvable accessibility) {
            this.props.accessibility(accessibility);
            return this;
        }

        /**
         * Property labels: Labels.
         * <p>
         * @return {@code this}
         * @param labels Property labels: Labels. This parameter is required.
         */
        public Builder labels(final com.aliyun.ros.cdk.core.IResolvable labels) {
            this.props.labels(labels);
            return this;
        }
        /**
         * Property labels: Labels.
         * <p>
         * @return {@code this}
         * @param labels Property labels: Labels. This parameter is required.
         */
        public Builder labels(final java.util.List<? extends java.lang.Object> labels) {
            this.props.labels(labels);
            return this;
        }

        /**
         * Property workspaceId: The ID of the workspace to which the image belongs.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: The ID of the workspace to which the image belongs. This parameter is required.
         */
        public Builder workspaceId(final java.lang.String workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }
        /**
         * Property workspaceId: The ID of the workspace to which the image belongs.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: The ID of the workspace to which the image belongs. This parameter is required.
         */
        public Builder workspaceId(final com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.Image}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.Image build() {
            return new com.aliyun.ros.cdk.pai.Image(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
