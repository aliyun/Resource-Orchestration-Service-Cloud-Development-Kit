package com.aliyun.ros.cdk.ice;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ICE::Category</code>, which is used to create a media asset category.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.190Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ice.$Module.class, fqn = "@alicloud/ros-cdk-ice.Category")
public class Category extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ice.ICategory {

    protected Category(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Category(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Category(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ice.CategoryProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Category(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ice.CategoryProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CateId: The ID of the category.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCateId() {
        return software.amazon.jsii.Kernel.get(this, "attrCateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Level: The level of the category.
     * <p>
     * The primary classification level is 0, the secondary classification level is 1, and the tertiary classification level is 2.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLevel() {
        return software.amazon.jsii.Kernel.get(this, "attrLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ParentId: The ID of the parent category.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrParentId() {
        return software.amazon.jsii.Kernel.get(this, "attrParentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ice.CategoryProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ice.CategoryProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ice.Category}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ice.Category> {
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
        private final com.aliyun.ros.cdk.ice.CategoryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ice.CategoryProps.Builder();
        }

        /**
         * Property cateName: The category name.
         * <p>
         * The value can be up to 64 bytes in length.
         * The value must be encoded in UTF-8.
         * <p>
         * @return {@code this}
         * @param cateName Property cateName: The category name. This parameter is required.
         */
        public Builder cateName(final java.lang.String cateName) {
            this.props.cateName(cateName);
            return this;
        }
        /**
         * Property cateName: The category name.
         * <p>
         * The value can be up to 64 bytes in length.
         * The value must be encoded in UTF-8.
         * <p>
         * @return {@code this}
         * @param cateName Property cateName: The category name. This parameter is required.
         */
        public Builder cateName(final com.aliyun.ros.cdk.core.IResolvable cateName) {
            this.props.cateName(cateName);
            return this;
        }

        /**
         * Property parentId: The ID of the parent category.
         * <p>
         * @return {@code this}
         * @param parentId Property parentId: The ID of the parent category. This parameter is required.
         */
        public Builder parentId(final java.lang.Number parentId) {
            this.props.parentId(parentId);
            return this;
        }
        /**
         * Property parentId: The ID of the parent category.
         * <p>
         * @return {@code this}
         * @param parentId Property parentId: The ID of the parent category. This parameter is required.
         */
        public Builder parentId(final com.aliyun.ros.cdk.core.IResolvable parentId) {
            this.props.parentId(parentId);
            return this;
        }

        /**
         * Property type: The type of the category.
         * <p>
         * Valid values:
         * default: audio, video, and image files. This is the default value.
         * material: short video materials.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the category. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The type of the category.
         * <p>
         * Valid values:
         * default: audio, video, and image files. This is the default value.
         * material: short video materials.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the category. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ice.Category}.
         */
        @Override
        public com.aliyun.ros.cdk.ice.Category build() {
            return new com.aliyun.ros.cdk.ice.Category(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
