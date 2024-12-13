package com.aliyun.ros.cdk.aligreen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::Aligreen::ImageLib</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:04.074Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.ImageLib")
public class ImageLib extends com.aliyun.ros.cdk.core.Resource {

    protected ImageLib(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ImageLib(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ImageLib(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.ImageLibProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ImageLib(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.ImageLibProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BizTypes: List of business scenarios.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBizTypes() {
        return software.amazon.jsii.Kernel.get(this, "attrBizTypes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Category: The category of the image library.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCategory() {
        return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Enable: Specifies whether to enable the image library.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrEnable", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ImageLibId: The ID of the primary key of the image library.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageLibId() {
        return software.amazon.jsii.Kernel.get(this, "attrImageLibId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ImageLibName: The name of the image library defined by the customer.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageLibName() {
        return software.amazon.jsii.Kernel.get(this, "attrImageLibName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Scene: The moderation scenario to which the custom image library applies.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScene() {
        return software.amazon.jsii.Kernel.get(this, "attrScene", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.ImageLibProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.aligreen.ImageLibProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.ImageLibProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.aligreen.ImageLib}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.aligreen.ImageLib> {
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
        private final com.aliyun.ros.cdk.aligreen.ImageLibProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.aligreen.ImageLibProps.Builder();
        }

        /**
         * Property category: The category of the image library.
         * <p>
         * Valid values: BLACK: a blacklist, WHITE: a whitelist, REVIEW: a review list.
         * <p>
         * @return {@code this}
         * @param category Property category: The category of the image library. This parameter is required.
         */
        public Builder category(final java.lang.String category) {
            this.props.category(category);
            return this;
        }
        /**
         * Property category: The category of the image library.
         * <p>
         * Valid values: BLACK: a blacklist, WHITE: a whitelist, REVIEW: a review list.
         * <p>
         * @return {@code this}
         * @param category Property category: The category of the image library. This parameter is required.
         */
        public Builder category(final com.aliyun.ros.cdk.core.IResolvable category) {
            this.props.category(category);
            return this;
        }

        /**
         * Property imageLibName: The name of the image library defined by the customer.
         * <p>
         * It can contain no more than 20 characters in Chinese, English, and underscore (_).
         * <p>
         * @return {@code this}
         * @param imageLibName Property imageLibName: The name of the image library defined by the customer. This parameter is required.
         */
        public Builder imageLibName(final java.lang.String imageLibName) {
            this.props.imageLibName(imageLibName);
            return this;
        }
        /**
         * Property imageLibName: The name of the image library defined by the customer.
         * <p>
         * It can contain no more than 20 characters in Chinese, English, and underscore (_).
         * <p>
         * @return {@code this}
         * @param imageLibName Property imageLibName: The name of the image library defined by the customer. This parameter is required.
         */
        public Builder imageLibName(final com.aliyun.ros.cdk.core.IResolvable imageLibName) {
            this.props.imageLibName(imageLibName);
            return this;
        }

        /**
         * Property scene: The moderation scenario to which the custom image library applies.
         * <p>
         * Valid values: PORN: pornography detection, AD: ad detection, ILLEGAL: terrorist content detection.
         * <p>
         * @return {@code this}
         * @param scene Property scene: The moderation scenario to which the custom image library applies. This parameter is required.
         */
        public Builder scene(final java.lang.String scene) {
            this.props.scene(scene);
            return this;
        }
        /**
         * Property scene: The moderation scenario to which the custom image library applies.
         * <p>
         * Valid values: PORN: pornography detection, AD: ad detection, ILLEGAL: terrorist content detection.
         * <p>
         * @return {@code this}
         * @param scene Property scene: The moderation scenario to which the custom image library applies. This parameter is required.
         */
        public Builder scene(final com.aliyun.ros.cdk.core.IResolvable scene) {
            this.props.scene(scene);
            return this;
        }

        /**
         * Property bizTypes: List of business scenarios.
         * <p>
         * For example: ["bizTypeA", "bizTypeB", "bizTypeC"].
         * <p>
         * @return {@code this}
         * @param bizTypes Property bizTypes: List of business scenarios. This parameter is required.
         */
        public Builder bizTypes(final com.aliyun.ros.cdk.core.IResolvable bizTypes) {
            this.props.bizTypes(bizTypes);
            return this;
        }
        /**
         * Property bizTypes: List of business scenarios.
         * <p>
         * For example: ["bizTypeA", "bizTypeB", "bizTypeC"].
         * <p>
         * @return {@code this}
         * @param bizTypes Property bizTypes: List of business scenarios. This parameter is required.
         */
        public Builder bizTypes(final java.util.List<? extends java.lang.Object> bizTypes) {
            this.props.bizTypes(bizTypes);
            return this;
        }

        /**
         * Property enable: Specifies whether to enable the image library.
         * <p>
         * Valid values:
         * true: Enable the image library. This is the default value. false: Disable the image library.
         * <p>
         * @return {@code this}
         * @param enable Property enable: Specifies whether to enable the image library. This parameter is required.
         */
        public Builder enable(final java.lang.Boolean enable) {
            this.props.enable(enable);
            return this;
        }
        /**
         * Property enable: Specifies whether to enable the image library.
         * <p>
         * Valid values:
         * true: Enable the image library. This is the default value. false: Disable the image library.
         * <p>
         * @return {@code this}
         * @param enable Property enable: Specifies whether to enable the image library. This parameter is required.
         */
        public Builder enable(final com.aliyun.ros.cdk.core.IResolvable enable) {
            this.props.enable(enable);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.aligreen.ImageLib}.
         */
        @Override
        public com.aliyun.ros.cdk.aligreen.ImageLib build() {
            return new com.aliyun.ros.cdk.aligreen.ImageLib(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
