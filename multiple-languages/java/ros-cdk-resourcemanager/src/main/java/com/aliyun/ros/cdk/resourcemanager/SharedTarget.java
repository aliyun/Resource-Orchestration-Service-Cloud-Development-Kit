package com.aliyun.ros.cdk.resourcemanager;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ResourceManager::SharedTarget</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:38:07.317Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.SharedTarget")
public class SharedTarget extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.resourcemanager.ISharedTarget {

    protected SharedTarget(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SharedTarget(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SharedTarget(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.SharedTargetProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SharedTarget(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.SharedTargetProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: Create time of the resource share.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceShareId: The ID of the resource share.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceShareId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceShareId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceShareName: The name of the resource share.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceShareName() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceShareName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TargetId: The ID of the principal.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTargetId() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdateTime: Update time of the resource share.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.SharedTargetProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.SharedTargetProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.resourcemanager.SharedTarget}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.resourcemanager.SharedTarget> {
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
        private final com.aliyun.ros.cdk.resourcemanager.SharedTargetProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.resourcemanager.SharedTargetProps.Builder();
        }

        /**
         * Property resourceShareId: The ID of the resource share.
         * <p>
         * @return {@code this}
         * @param resourceShareId Property resourceShareId: The ID of the resource share. This parameter is required.
         */
        public Builder resourceShareId(final java.lang.String resourceShareId) {
            this.props.resourceShareId(resourceShareId);
            return this;
        }
        /**
         * Property resourceShareId: The ID of the resource share.
         * <p>
         * @return {@code this}
         * @param resourceShareId Property resourceShareId: The ID of the resource share. This parameter is required.
         */
        public Builder resourceShareId(final com.aliyun.ros.cdk.core.IResolvable resourceShareId) {
            this.props.resourceShareId(resourceShareId);
            return this;
        }

        /**
         * Property targetId: The ID of the principal.
         * <p>
         * @return {@code this}
         * @param targetId Property targetId: The ID of the principal. This parameter is required.
         */
        public Builder targetId(final java.lang.String targetId) {
            this.props.targetId(targetId);
            return this;
        }
        /**
         * Property targetId: The ID of the principal.
         * <p>
         * @return {@code this}
         * @param targetId Property targetId: The ID of the principal. This parameter is required.
         */
        public Builder targetId(final com.aliyun.ros.cdk.core.IResolvable targetId) {
            this.props.targetId(targetId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.resourcemanager.SharedTarget}.
         */
        @Override
        public com.aliyun.ros.cdk.resourcemanager.SharedTarget build() {
            return new com.aliyun.ros.cdk.resourcemanager.SharedTarget(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
