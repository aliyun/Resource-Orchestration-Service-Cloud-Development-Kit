package com.aliyun.ros.cdk.dms;

/**
 * A ROS template type:  `ALIYUN::DMS::User`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:01.998Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dms.$Module.class, fqn = "@alicloud/ros-cdk-dms.RosUser")
public class RosUser extends com.aliyun.ros.cdk.core.RosResource {

    protected RosUser(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosUser(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dms.RosUser.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::DMS::User`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosUser(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.RosUserProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMobile() {
        return software.amazon.jsii.Kernel.get(this, "attrMobile", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrParentUid() {
        return software.amazon.jsii.Kernel.get(this, "attrParentUid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRoleIds() {
        return software.amazon.jsii.Kernel.get(this, "attrRoleIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRoleNames() {
        return software.amazon.jsii.Kernel.get(this, "attrRoleNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUid() {
        return software.amazon.jsii.Kernel.get(this, "attrUid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserName() {
        return software.amazon.jsii.Kernel.get(this, "attrUserName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getUid() {
        return software.amazon.jsii.Kernel.get(this, "uid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUid(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "uid", java.util.Objects.requireNonNull(value, "uid is required"));
    }

    /**
     */
    public void setUid(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "uid", java.util.Objects.requireNonNull(value, "uid is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMobile() {
        return software.amazon.jsii.Kernel.get(this, "mobile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMobile(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "mobile", value);
    }

    /**
     */
    public void setMobile(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mobile", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRoleNames() {
        return software.amazon.jsii.Kernel.get(this, "roleNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRoleNames(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "roleNames", value);
    }

    /**
     */
    public void setRoleNames(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "roleNames", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "status", value);
    }

    /**
     */
    public void setStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "status", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTid() {
        return software.amazon.jsii.Kernel.get(this, "tid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTid(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "tid", value);
    }

    /**
     */
    public void setTid(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tid", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUserName() {
        return software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "userName", value);
    }

    /**
     */
    public void setUserName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userName", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dms.RosUser}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dms.RosUser> {
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
        private final com.aliyun.ros.cdk.dms.RosUserProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dms.RosUserProps.Builder();
        }

        /**
         * @return {@code this}
         * @param uid This parameter is required.
         */
        public Builder uid(final java.lang.String uid) {
            this.props.uid(uid);
            return this;
        }
        /**
         * @return {@code this}
         * @param uid This parameter is required.
         */
        public Builder uid(final com.aliyun.ros.cdk.core.IResolvable uid) {
            this.props.uid(uid);
            return this;
        }

        /**
         * @return {@code this}
         * @param mobile This parameter is required.
         */
        public Builder mobile(final java.lang.String mobile) {
            this.props.mobile(mobile);
            return this;
        }
        /**
         * @return {@code this}
         * @param mobile This parameter is required.
         */
        public Builder mobile(final com.aliyun.ros.cdk.core.IResolvable mobile) {
            this.props.mobile(mobile);
            return this;
        }

        /**
         * @return {@code this}
         * @param roleNames This parameter is required.
         */
        public Builder roleNames(final com.aliyun.ros.cdk.core.IResolvable roleNames) {
            this.props.roleNames(roleNames);
            return this;
        }
        /**
         * @return {@code this}
         * @param roleNames This parameter is required.
         */
        public Builder roleNames(final java.util.List<? extends java.lang.Object> roleNames) {
            this.props.roleNames(roleNames);
            return this;
        }

        /**
         * @return {@code this}
         * @param status This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * @return {@code this}
         * @param status This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * @return {@code this}
         * @param tid This parameter is required.
         */
        public Builder tid(final java.lang.String tid) {
            this.props.tid(tid);
            return this;
        }
        /**
         * @return {@code this}
         * @param tid This parameter is required.
         */
        public Builder tid(final com.aliyun.ros.cdk.core.IResolvable tid) {
            this.props.tid(tid);
            return this;
        }

        /**
         * @return {@code this}
         * @param userName This parameter is required.
         */
        public Builder userName(final java.lang.String userName) {
            this.props.userName(userName);
            return this;
        }
        /**
         * @return {@code this}
         * @param userName This parameter is required.
         */
        public Builder userName(final com.aliyun.ros.cdk.core.IResolvable userName) {
            this.props.userName(userName);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.dms.RosUser}.
         */
        @Override
        public com.aliyun.ros.cdk.dms.RosUser build() {
            return new com.aliyun.ros.cdk.dms.RosUser(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
