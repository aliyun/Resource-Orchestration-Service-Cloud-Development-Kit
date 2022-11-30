package com.aliyun.ros.cdk.nas;

/**
 * A ROS template type:  `ALIYUN::NAS::AccessGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:20.013Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.RosAccessGroup")
public class RosAccessGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAccessGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAccessGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.nas.RosAccessGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::NAS::AccessGroup`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAccessGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.RosAccessGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccessGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrAccessGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAccessGroupName() {
        return software.amazon.jsii.Kernel.get(this, "accessGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccessGroupName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accessGroupName", java.util.Objects.requireNonNull(value, "accessGroupName is required"));
    }

    /**
     */
    public void setAccessGroupName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accessGroupName", java.util.Objects.requireNonNull(value, "accessGroupName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAccessGroupType() {
        return software.amazon.jsii.Kernel.get(this, "accessGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccessGroupType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accessGroupType", java.util.Objects.requireNonNull(value, "accessGroupType is required"));
    }

    /**
     */
    public void setAccessGroupType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accessGroupType", java.util.Objects.requireNonNull(value, "accessGroupType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getFileSystemType() {
        return software.amazon.jsii.Kernel.get(this, "fileSystemType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFileSystemType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "fileSystemType", value);
    }

    /**
     */
    public void setFileSystemType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fileSystemType", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nas.RosAccessGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nas.RosAccessGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.nas.RosAccessGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nas.RosAccessGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param accessGroupName This parameter is required.
         */
        public Builder accessGroupName(final java.lang.String accessGroupName) {
            this.props.accessGroupName(accessGroupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param accessGroupName This parameter is required.
         */
        public Builder accessGroupName(final com.aliyun.ros.cdk.core.IResolvable accessGroupName) {
            this.props.accessGroupName(accessGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param accessGroupType This parameter is required.
         */
        public Builder accessGroupType(final java.lang.String accessGroupType) {
            this.props.accessGroupType(accessGroupType);
            return this;
        }
        /**
         * @return {@code this}
         * @param accessGroupType This parameter is required.
         */
        public Builder accessGroupType(final com.aliyun.ros.cdk.core.IResolvable accessGroupType) {
            this.props.accessGroupType(accessGroupType);
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
         * @param fileSystemType This parameter is required.
         */
        public Builder fileSystemType(final java.lang.String fileSystemType) {
            this.props.fileSystemType(fileSystemType);
            return this;
        }
        /**
         * @return {@code this}
         * @param fileSystemType This parameter is required.
         */
        public Builder fileSystemType(final com.aliyun.ros.cdk.core.IResolvable fileSystemType) {
            this.props.fileSystemType(fileSystemType);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.nas.RosAccessGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.nas.RosAccessGroup build() {
            return new com.aliyun.ros.cdk.nas.RosAccessGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
