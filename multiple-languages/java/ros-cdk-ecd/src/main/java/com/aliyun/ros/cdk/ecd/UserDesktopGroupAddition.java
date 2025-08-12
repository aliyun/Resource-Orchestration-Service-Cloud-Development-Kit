package com.aliyun.ros.cdk.ecd;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ECD::UserDesktopGroupAddition</code>, which is used grant the permissions on a cloud computer pool to users.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:46.032Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.UserDesktopGroupAddition")
public class UserDesktopGroupAddition extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecd.IUserDesktopGroupAddition {

    protected UserDesktopGroupAddition(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected UserDesktopGroupAddition(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public UserDesktopGroupAddition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.UserDesktopGroupAdditionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public UserDesktopGroupAddition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.UserDesktopGroupAdditionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DesktopGroupId: The ID of the desktop group that you want to assign to more regular users.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDesktopGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrDesktopGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EndUserIds: The regular users to whom you want to assign the desktop group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndUserIds() {
        return software.amazon.jsii.Kernel.get(this, "attrEndUserIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.UserDesktopGroupAdditionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecd.UserDesktopGroupAdditionProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecd.UserDesktopGroupAddition}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecd.UserDesktopGroupAddition> {
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
        private final com.aliyun.ros.cdk.ecd.UserDesktopGroupAdditionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecd.UserDesktopGroupAdditionProps.Builder();
        }

        /**
         * Property desktopGroupId: The ID of the desktop group that you want to assign to more regular users.
         * <p>
         * @return {@code this}
         * @param desktopGroupId Property desktopGroupId: The ID of the desktop group that you want to assign to more regular users. This parameter is required.
         */
        public Builder desktopGroupId(final java.lang.String desktopGroupId) {
            this.props.desktopGroupId(desktopGroupId);
            return this;
        }
        /**
         * Property desktopGroupId: The ID of the desktop group that you want to assign to more regular users.
         * <p>
         * @return {@code this}
         * @param desktopGroupId Property desktopGroupId: The ID of the desktop group that you want to assign to more regular users. This parameter is required.
         */
        public Builder desktopGroupId(final com.aliyun.ros.cdk.core.IResolvable desktopGroupId) {
            this.props.desktopGroupId(desktopGroupId);
            return this;
        }

        /**
         * Property endUserIds: The regular users to whom you want to assign the desktop group.
         * <p>
         * @return {@code this}
         * @param endUserIds Property endUserIds: The regular users to whom you want to assign the desktop group. This parameter is required.
         */
        public Builder endUserIds(final com.aliyun.ros.cdk.core.IResolvable endUserIds) {
            this.props.endUserIds(endUserIds);
            return this;
        }
        /**
         * Property endUserIds: The regular users to whom you want to assign the desktop group.
         * <p>
         * @return {@code this}
         * @param endUserIds Property endUserIds: The regular users to whom you want to assign the desktop group. This parameter is required.
         */
        public Builder endUserIds(final java.util.List<? extends java.lang.Object> endUserIds) {
            this.props.endUserIds(endUserIds);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecd.UserDesktopGroupAddition}.
         */
        @Override
        public com.aliyun.ros.cdk.ecd.UserDesktopGroupAddition build() {
            return new com.aliyun.ros.cdk.ecd.UserDesktopGroupAddition(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
