package com.aliyun.ros.cdk.ecd;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECD::Bundle</code>, which is used to create a custom desktop template.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:38.315Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.Bundle")
public class Bundle extends com.aliyun.ros.cdk.core.Resource {

    protected Bundle(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Bundle(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Bundle(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.BundleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Bundle(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.BundleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BundleId: Desktop bundle ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBundleId() {
        return software.amazon.jsii.Kernel.get(this, "attrBundleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.BundleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecd.BundleProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.BundleProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecd.Bundle}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecd.Bundle> {
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
        private final com.aliyun.ros.cdk.ecd.BundleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecd.BundleProps.Builder();
        }

        /**
         * Property desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType. Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification.
         * <p>
         * @return {@code this}
         * @param desktopType Property desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType. Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification. This parameter is required.
         */
        public Builder desktopType(final java.lang.String desktopType) {
            this.props.desktopType(desktopType);
            return this;
        }
        /**
         * Property desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType. Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification.
         * <p>
         * @return {@code this}
         * @param desktopType Property desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType. Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification. This parameter is required.
         */
        public Builder desktopType(final com.aliyun.ros.cdk.core.IResolvable desktopType) {
            this.props.desktopType(desktopType);
            return this;
        }

        /**
         * Property imageId: The ID of the image.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The ID of the image. This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }
        /**
         * Property imageId: The ID of the image.
         * <p>
         * @return {@code this}
         * @param imageId Property imageId: The ID of the image. This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * Property rootDiskSizeGib: The root disk size gib.
         * <p>
         * @return {@code this}
         * @param rootDiskSizeGib Property rootDiskSizeGib: The root disk size gib. This parameter is required.
         */
        public Builder rootDiskSizeGib(final java.lang.Number rootDiskSizeGib) {
            this.props.rootDiskSizeGib(rootDiskSizeGib);
            return this;
        }
        /**
         * Property rootDiskSizeGib: The root disk size gib.
         * <p>
         * @return {@code this}
         * @param rootDiskSizeGib Property rootDiskSizeGib: The root disk size gib. This parameter is required.
         */
        public Builder rootDiskSizeGib(final com.aliyun.ros.cdk.core.IResolvable rootDiskSizeGib) {
            this.props.rootDiskSizeGib(rootDiskSizeGib);
            return this;
        }

        /**
         * Property userDiskSizeGib: The size of the data disk.
         * <p>
         * Currently, only one data disk can be set. Unit: GiB.
         * <p>
         * <ul>
         * <li>The size of the data disk that supports the setting corresponds to the specification.</li>
         * <li>The data disk size (user_disk_size_gib) set in the template must be greater than the data disk size (data_disk_size) in the mirror.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param userDiskSizeGib Property userDiskSizeGib: The size of the data disk. This parameter is required.
         */
        public Builder userDiskSizeGib(final com.aliyun.ros.cdk.core.IResolvable userDiskSizeGib) {
            this.props.userDiskSizeGib(userDiskSizeGib);
            return this;
        }
        /**
         * Property userDiskSizeGib: The size of the data disk.
         * <p>
         * Currently, only one data disk can be set. Unit: GiB.
         * <p>
         * <ul>
         * <li>The size of the data disk that supports the setting corresponds to the specification.</li>
         * <li>The data disk size (user_disk_size_gib) set in the template must be greater than the data disk size (data_disk_size) in the mirror.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param userDiskSizeGib Property userDiskSizeGib: The size of the data disk. This parameter is required.
         */
        public Builder userDiskSizeGib(final java.util.List<? extends java.lang.Object> userDiskSizeGib) {
            this.props.userDiskSizeGib(userDiskSizeGib);
            return this;
        }

        /**
         * Property bundleName: The name of the bundle.
         * <p>
         * @return {@code this}
         * @param bundleName Property bundleName: The name of the bundle. This parameter is required.
         */
        public Builder bundleName(final java.lang.String bundleName) {
            this.props.bundleName(bundleName);
            return this;
        }
        /**
         * Property bundleName: The name of the bundle.
         * <p>
         * @return {@code this}
         * @param bundleName Property bundleName: The name of the bundle. This parameter is required.
         */
        public Builder bundleName(final com.aliyun.ros.cdk.core.IResolvable bundleName) {
            this.props.bundleName(bundleName);
            return this;
        }

        /**
         * Property description: The description of the bundle.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the bundle. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the bundle.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the bundle. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property language: The language.
         * <p>
         * Valid values:
         * zh-CN: Simplified Chinese
         * zh-HK: Traditional Chinese (Hong Kong)
         * en-US: English
         * ja-JP: Japanese
         * <p>
         * @return {@code this}
         * @param language Property language: The language. This parameter is required.
         */
        public Builder language(final java.lang.String language) {
            this.props.language(language);
            return this;
        }
        /**
         * Property language: The language.
         * <p>
         * Valid values:
         * zh-CN: Simplified Chinese
         * zh-HK: Traditional Chinese (Hong Kong)
         * en-US: English
         * ja-JP: Japanese
         * <p>
         * @return {@code this}
         * @param language Property language: The language. This parameter is required.
         */
        public Builder language(final com.aliyun.ros.cdk.core.IResolvable language) {
            this.props.language(language);
            return this;
        }

        /**
         * Property rootDiskPerformanceLevel: The root disk performance level.
         * <p>
         * Valid values:
         * PL0
         * PL1
         * PL2
         * PL3
         * <p>
         * @return {@code this}
         * @param rootDiskPerformanceLevel Property rootDiskPerformanceLevel: The root disk performance level. This parameter is required.
         */
        public Builder rootDiskPerformanceLevel(final java.lang.String rootDiskPerformanceLevel) {
            this.props.rootDiskPerformanceLevel(rootDiskPerformanceLevel);
            return this;
        }
        /**
         * Property rootDiskPerformanceLevel: The root disk performance level.
         * <p>
         * Valid values:
         * PL0
         * PL1
         * PL2
         * PL3
         * <p>
         * @return {@code this}
         * @param rootDiskPerformanceLevel Property rootDiskPerformanceLevel: The root disk performance level. This parameter is required.
         */
        public Builder rootDiskPerformanceLevel(final com.aliyun.ros.cdk.core.IResolvable rootDiskPerformanceLevel) {
            this.props.rootDiskPerformanceLevel(rootDiskPerformanceLevel);
            return this;
        }

        /**
         * Property userDiskPerformanceLevel: The user disk performance level.Valid values: PL0 PL1 PL2 PL3.
         * <p>
         * @return {@code this}
         * @param userDiskPerformanceLevel Property userDiskPerformanceLevel: The user disk performance level.Valid values: PL0 PL1 PL2 PL3. This parameter is required.
         */
        public Builder userDiskPerformanceLevel(final java.lang.String userDiskPerformanceLevel) {
            this.props.userDiskPerformanceLevel(userDiskPerformanceLevel);
            return this;
        }
        /**
         * Property userDiskPerformanceLevel: The user disk performance level.Valid values: PL0 PL1 PL2 PL3.
         * <p>
         * @return {@code this}
         * @param userDiskPerformanceLevel Property userDiskPerformanceLevel: The user disk performance level.Valid values: PL0 PL1 PL2 PL3. This parameter is required.
         */
        public Builder userDiskPerformanceLevel(final com.aliyun.ros.cdk.core.IResolvable userDiskPerformanceLevel) {
            this.props.userDiskPerformanceLevel(userDiskPerformanceLevel);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecd.Bundle}.
         */
        @Override
        public com.aliyun.ros.cdk.ecd.Bundle build() {
            return new com.aliyun.ros.cdk.ecd.Bundle(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
