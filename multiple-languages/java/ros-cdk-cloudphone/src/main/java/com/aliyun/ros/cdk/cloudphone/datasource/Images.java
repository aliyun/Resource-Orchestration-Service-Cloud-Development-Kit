package com.aliyun.ros.cdk.cloudphone.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::CloudPhone::Images</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:23.982Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudphone.$Module.class, fqn = "@alicloud/ros-cdk-cloudphone.datasource.Images")
public class Images extends com.aliyun.ros.cdk.core.Resource {

    protected Images(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Images(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::CloudPhone::Images</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Images(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cloudphone.datasource.ImagesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::CloudPhone::Images</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Images(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cloudphone.datasource.ImagesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::CloudPhone::Images</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Images(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ImageIds: The list of image IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageIds() {
        return software.amazon.jsii.Kernel.get(this, "attrImageIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Images: The list of images.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImages() {
        return software.amazon.jsii.Kernel.get(this, "attrImages", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudphone.datasource.Images}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudphone.datasource.Images> {
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
        private com.aliyun.ros.cdk.cloudphone.datasource.ImagesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property imageCategory: Mirror type.
         * <p>
         * @return {@code this}
         * @param imageCategory Property imageCategory: Mirror type. This parameter is required.
         */
        public Builder imageCategory(final java.lang.String imageCategory) {
            this.props().imageCategory(imageCategory);
            return this;
        }
        /**
         * Property imageCategory: Mirror type.
         * <p>
         * @return {@code this}
         * @param imageCategory Property imageCategory: Mirror type. This parameter is required.
         */
        public Builder imageCategory(final com.aliyun.ros.cdk.core.IResolvable imageCategory) {
            this.props().imageCategory(imageCategory);
            return this;
        }

        /**
         * Property imageId: Image ID.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: Image ID. This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props().imageId(imageId);
            return this;
        }
        /**
         * Property imageId: Image ID.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: Image ID. This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props().imageId(imageId);
            return this;
        }

        /**
         * Property imageName: The name of the mirror image.
         * <p>
         * @return {@code this}
         * @param imageName Property imageName: The name of the mirror image. This parameter is required.
         */
        public Builder imageName(final java.lang.String imageName) {
            this.props().imageName(imageName);
            return this;
        }
        /**
         * Property imageName: The name of the mirror image.
         * <p>
         * @return {@code this}
         * @param imageName Property imageName: The name of the mirror image. This parameter is required.
         */
        public Builder imageName(final com.aliyun.ros.cdk.core.IResolvable imageName) {
            this.props().imageName(imageName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudphone.datasource.Images}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudphone.datasource.Images build() {
            return new com.aliyun.ros.cdk.cloudphone.datasource.Images(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.cloudphone.datasource.ImagesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.cloudphone.datasource.ImagesProps.Builder();
            }
            return this.props;
        }
    }
}
