package com.aliyun.ros.cdk.dms;

/**
 * A ROS resource type:  <code>ALIYUN::DMS::User</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:36.493Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dms.$Module.class, fqn = "@alicloud/ros-cdk-dms.User")
public class User extends com.aliyun.ros.cdk.core.Resource {

    protected User(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected User(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::DMS::User</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public User(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.UserProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::DMS::User</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public User(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.UserProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Mobile: UserMobile.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMobile() {
        return software.amazon.jsii.Kernel.get(this, "attrMobile", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ParentUid: ParentAliYunUid.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrParentUid() {
        return software.amazon.jsii.Kernel.get(this, "attrParentUid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RoleIds: UserRoleId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRoleIds() {
        return software.amazon.jsii.Kernel.get(this, "attrRoleIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RoleNames: UserRole.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRoleNames() {
        return software.amazon.jsii.Kernel.get(this, "attrRoleNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Uid: UserAliYunUid.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUid() {
        return software.amazon.jsii.Kernel.get(this, "attrUid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UserId: UserId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UserName: UserNickName.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserName() {
        return software.amazon.jsii.Kernel.get(this, "attrUserName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dms.User}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dms.User> {
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
        private final com.aliyun.ros.cdk.dms.UserProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dms.UserProps.Builder();
        }

        /**
         * Property uid: UserAliYunUid.
         * <p>
         * @return {@code this}
         * @param uid Property uid: UserAliYunUid. This parameter is required.
         */
        public Builder uid(final java.lang.String uid) {
            this.props.uid(uid);
            return this;
        }
        /**
         * Property uid: UserAliYunUid.
         * <p>
         * @return {@code this}
         * @param uid Property uid: UserAliYunUid. This parameter is required.
         */
        public Builder uid(final com.aliyun.ros.cdk.core.IResolvable uid) {
            this.props.uid(uid);
            return this;
        }

        /**
         * Property mobile: UserMobile.
         * <p>
         * @return {@code this}
         * @param mobile Property mobile: UserMobile. This parameter is required.
         */
        public Builder mobile(final java.lang.String mobile) {
            this.props.mobile(mobile);
            return this;
        }
        /**
         * Property mobile: UserMobile.
         * <p>
         * @return {@code this}
         * @param mobile Property mobile: UserMobile. This parameter is required.
         */
        public Builder mobile(final com.aliyun.ros.cdk.core.IResolvable mobile) {
            this.props.mobile(mobile);
            return this;
        }

        /**
         * Property roleNames: UserRole.
         * <p>
         * @return {@code this}
         * @param roleNames Property roleNames: UserRole. This parameter is required.
         */
        public Builder roleNames(final com.aliyun.ros.cdk.core.IResolvable roleNames) {
            this.props.roleNames(roleNames);
            return this;
        }
        /**
         * Property roleNames: UserRole.
         * <p>
         * @return {@code this}
         * @param roleNames Property roleNames: UserRole. This parameter is required.
         */
        public Builder roleNames(final java.util.List<? extends java.lang.Object> roleNames) {
            this.props.roleNames(roleNames);
            return this;
        }

        /**
         * Property status: UserStatus.
         * <p>
         * @return {@code this}
         * @param status Property status: UserStatus. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * Property status: UserStatus.
         * <p>
         * @return {@code this}
         * @param status Property status: UserStatus. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * Property tid:.
         * <p>
         * @return {@code this}
         * @param tid Property tid:. This parameter is required.
         */
        public Builder tid(final java.lang.String tid) {
            this.props.tid(tid);
            return this;
        }
        /**
         * Property tid:.
         * <p>
         * @return {@code this}
         * @param tid Property tid:. This parameter is required.
         */
        public Builder tid(final com.aliyun.ros.cdk.core.IResolvable tid) {
            this.props.tid(tid);
            return this;
        }

        /**
         * Property userName: UserNickName.
         * <p>
         * @return {@code this}
         * @param userName Property userName: UserNickName. This parameter is required.
         */
        public Builder userName(final java.lang.String userName) {
            this.props.userName(userName);
            return this;
        }
        /**
         * Property userName: UserNickName.
         * <p>
         * @return {@code this}
         * @param userName Property userName: UserNickName. This parameter is required.
         */
        public Builder userName(final com.aliyun.ros.cdk.core.IResolvable userName) {
            this.props.userName(userName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dms.User}.
         */
        @Override
        public com.aliyun.ros.cdk.dms.User build() {
            return new com.aliyun.ros.cdk.dms.User(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
