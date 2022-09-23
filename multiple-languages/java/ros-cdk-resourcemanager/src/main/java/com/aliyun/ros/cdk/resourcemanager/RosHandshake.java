package com.aliyun.ros.cdk.resourcemanager;

/**
 * A ROS template type:  `ALIYUN::ResourceManager::Handshake`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:11.455Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.RosHandshake")
public class RosHandshake extends com.aliyun.ros.cdk.core.RosResource {

    protected RosHandshake(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosHandshake(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.resourcemanager.RosHandshake.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ResourceManager::Handshake`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosHandshake(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.RosHandshakeProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHandshakeId() {
        return software.amazon.jsii.Kernel.get(this, "attrHandshakeId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMasterAccountId() {
        return software.amazon.jsii.Kernel.get(this, "attrMasterAccountId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMasterAccountName() {
        return software.amazon.jsii.Kernel.get(this, "attrMasterAccountName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNote() {
        return software.amazon.jsii.Kernel.get(this, "attrNote", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceDirectoryId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceDirectoryId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTargetEntity() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetEntity", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTargetType() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargetEntity() {
        return software.amazon.jsii.Kernel.get(this, "targetEntity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetEntity(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetEntity", java.util.Objects.requireNonNull(value, "targetEntity is required"));
    }

    /**
     */
    public void setTargetEntity(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetEntity", java.util.Objects.requireNonNull(value, "targetEntity is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargetType() {
        return software.amazon.jsii.Kernel.get(this, "targetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetType", java.util.Objects.requireNonNull(value, "targetType is required"));
    }

    /**
     */
    public void setTargetType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetType", java.util.Objects.requireNonNull(value, "targetType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNote() {
        return software.amazon.jsii.Kernel.get(this, "note", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNote(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "note", value);
    }

    /**
     */
    public void setNote(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "note", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.resourcemanager.RosHandshake}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.resourcemanager.RosHandshake> {
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
        private final com.aliyun.ros.cdk.resourcemanager.RosHandshakeProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.resourcemanager.RosHandshakeProps.Builder();
        }

        /**
         * @return {@code this}
         * @param targetEntity This parameter is required.
         */
        public Builder targetEntity(final java.lang.String targetEntity) {
            this.props.targetEntity(targetEntity);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetEntity This parameter is required.
         */
        public Builder targetEntity(final com.aliyun.ros.cdk.core.IResolvable targetEntity) {
            this.props.targetEntity(targetEntity);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetType This parameter is required.
         */
        public Builder targetType(final java.lang.String targetType) {
            this.props.targetType(targetType);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetType This parameter is required.
         */
        public Builder targetType(final com.aliyun.ros.cdk.core.IResolvable targetType) {
            this.props.targetType(targetType);
            return this;
        }

        /**
         * @return {@code this}
         * @param note This parameter is required.
         */
        public Builder note(final java.lang.String note) {
            this.props.note(note);
            return this;
        }
        /**
         * @return {@code this}
         * @param note This parameter is required.
         */
        public Builder note(final com.aliyun.ros.cdk.core.IResolvable note) {
            this.props.note(note);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.resourcemanager.RosHandshake}.
         */
        @Override
        public com.aliyun.ros.cdk.resourcemanager.RosHandshake build() {
            return new com.aliyun.ros.cdk.resourcemanager.RosHandshake(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
