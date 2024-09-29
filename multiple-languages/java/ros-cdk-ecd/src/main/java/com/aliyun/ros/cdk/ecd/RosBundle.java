package com.aliyun.ros.cdk.ecd;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ECD::Bundle</code>, which is used to create a custom desktop template.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:38.347Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.RosBundle")
public class RosBundle extends com.aliyun.ros.cdk.core.RosResource {

    protected RosBundle(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosBundle(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecd.RosBundle.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosBundle(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.RosBundleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBundleId() {
        return software.amazon.jsii.Kernel.get(this, "attrBundleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDesktopType() {
        return software.amazon.jsii.Kernel.get(this, "desktopType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDesktopType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "desktopType", java.util.Objects.requireNonNull(value, "desktopType is required"));
    }

    /**
     */
    public void setDesktopType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "desktopType", java.util.Objects.requireNonNull(value, "desktopType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getImageId() {
        return software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "imageId", java.util.Objects.requireNonNull(value, "imageId is required"));
    }

    /**
     */
    public void setImageId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageId", java.util.Objects.requireNonNull(value, "imageId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRootDiskSizeGib() {
        return software.amazon.jsii.Kernel.get(this, "rootDiskSizeGib", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRootDiskSizeGib(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "rootDiskSizeGib", java.util.Objects.requireNonNull(value, "rootDiskSizeGib is required"));
    }

    /**
     */
    public void setRootDiskSizeGib(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rootDiskSizeGib", java.util.Objects.requireNonNull(value, "rootDiskSizeGib is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getUserDiskSizeGib() {
        return software.amazon.jsii.Kernel.get(this, "userDiskSizeGib", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserDiskSizeGib(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userDiskSizeGib", java.util.Objects.requireNonNull(value, "userDiskSizeGib is required"));
    }

    /**
     */
    public void setUserDiskSizeGib(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.Number)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.Number, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "userDiskSizeGib", java.util.Objects.requireNonNull(value, "userDiskSizeGib is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBundleName() {
        return software.amazon.jsii.Kernel.get(this, "bundleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBundleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bundleName", value);
    }

    /**
     */
    public void setBundleName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bundleName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLanguage() {
        return software.amazon.jsii.Kernel.get(this, "language", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLanguage(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "language", value);
    }

    /**
     */
    public void setLanguage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "language", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRootDiskPerformanceLevel() {
        return software.amazon.jsii.Kernel.get(this, "rootDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRootDiskPerformanceLevel(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rootDiskPerformanceLevel", value);
    }

    /**
     */
    public void setRootDiskPerformanceLevel(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rootDiskPerformanceLevel", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUserDiskPerformanceLevel() {
        return software.amazon.jsii.Kernel.get(this, "userDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserDiskPerformanceLevel(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "userDiskPerformanceLevel", value);
    }

    /**
     */
    public void setUserDiskPerformanceLevel(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userDiskPerformanceLevel", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecd.RosBundle}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecd.RosBundle> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ecd.RosBundleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecd.RosBundleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param desktopType This parameter is required.
         */
        public Builder desktopType(final java.lang.String desktopType) {
            this.props.desktopType(desktopType);
            return this;
        }
        /**
         * @return {@code this}
         * @param desktopType This parameter is required.
         */
        public Builder desktopType(final com.aliyun.ros.cdk.core.IResolvable desktopType) {
            this.props.desktopType(desktopType);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageId This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageId This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * @return {@code this}
         * @param rootDiskSizeGib This parameter is required.
         */
        public Builder rootDiskSizeGib(final java.lang.Number rootDiskSizeGib) {
            this.props.rootDiskSizeGib(rootDiskSizeGib);
            return this;
        }
        /**
         * @return {@code this}
         * @param rootDiskSizeGib This parameter is required.
         */
        public Builder rootDiskSizeGib(final com.aliyun.ros.cdk.core.IResolvable rootDiskSizeGib) {
            this.props.rootDiskSizeGib(rootDiskSizeGib);
            return this;
        }

        /**
         * @return {@code this}
         * @param userDiskSizeGib This parameter is required.
         */
        public Builder userDiskSizeGib(final com.aliyun.ros.cdk.core.IResolvable userDiskSizeGib) {
            this.props.userDiskSizeGib(userDiskSizeGib);
            return this;
        }
        /**
         * @return {@code this}
         * @param userDiskSizeGib This parameter is required.
         */
        public Builder userDiskSizeGib(final java.util.List<? extends java.lang.Object> userDiskSizeGib) {
            this.props.userDiskSizeGib(userDiskSizeGib);
            return this;
        }

        /**
         * @return {@code this}
         * @param bundleName This parameter is required.
         */
        public Builder bundleName(final java.lang.String bundleName) {
            this.props.bundleName(bundleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param bundleName This parameter is required.
         */
        public Builder bundleName(final com.aliyun.ros.cdk.core.IResolvable bundleName) {
            this.props.bundleName(bundleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param language This parameter is required.
         */
        public Builder language(final java.lang.String language) {
            this.props.language(language);
            return this;
        }
        /**
         * @return {@code this}
         * @param language This parameter is required.
         */
        public Builder language(final com.aliyun.ros.cdk.core.IResolvable language) {
            this.props.language(language);
            return this;
        }

        /**
         * @return {@code this}
         * @param rootDiskPerformanceLevel This parameter is required.
         */
        public Builder rootDiskPerformanceLevel(final java.lang.String rootDiskPerformanceLevel) {
            this.props.rootDiskPerformanceLevel(rootDiskPerformanceLevel);
            return this;
        }
        /**
         * @return {@code this}
         * @param rootDiskPerformanceLevel This parameter is required.
         */
        public Builder rootDiskPerformanceLevel(final com.aliyun.ros.cdk.core.IResolvable rootDiskPerformanceLevel) {
            this.props.rootDiskPerformanceLevel(rootDiskPerformanceLevel);
            return this;
        }

        /**
         * @return {@code this}
         * @param userDiskPerformanceLevel This parameter is required.
         */
        public Builder userDiskPerformanceLevel(final java.lang.String userDiskPerformanceLevel) {
            this.props.userDiskPerformanceLevel(userDiskPerformanceLevel);
            return this;
        }
        /**
         * @return {@code this}
         * @param userDiskPerformanceLevel This parameter is required.
         */
        public Builder userDiskPerformanceLevel(final com.aliyun.ros.cdk.core.IResolvable userDiskPerformanceLevel) {
            this.props.userDiskPerformanceLevel(userDiskPerformanceLevel);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecd.RosBundle}.
         */
        @Override
        public com.aliyun.ros.cdk.ecd.RosBundle build() {
            return new com.aliyun.ros.cdk.ecd.RosBundle(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
