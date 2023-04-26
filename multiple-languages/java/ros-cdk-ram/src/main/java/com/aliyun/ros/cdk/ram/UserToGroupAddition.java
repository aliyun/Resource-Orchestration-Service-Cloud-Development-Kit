package com.aliyun.ros.cdk.ram;

/**
 * A ROS resource type:  `ALIYUN::RAM::UserToGroupAddition`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:51.675Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.UserToGroupAddition")
public class UserToGroupAddition extends com.aliyun.ros.cdk.core.Resource {

    protected UserToGroupAddition(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected UserToGroupAddition(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::RAM::UserToGroupAddition`.
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
    public UserToGroupAddition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.UserToGroupAdditionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::RAM::UserToGroupAddition`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public UserToGroupAddition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.UserToGroupAdditionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.UserToGroupAddition}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.UserToGroupAddition> {
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
        private final com.aliyun.ros.cdk.ram.UserToGroupAdditionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ram.UserToGroupAdditionProps.Builder();
        }

        /**
         * Property groupName: Specifies the group name, containing up to 64 characters.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: Specifies the group name, containing up to 64 characters. This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props.groupName(groupName);
            return this;
        }
        /**
         * Property groupName: Specifies the group name, containing up to 64 characters.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: Specifies the group name, containing up to 64 characters. This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props.groupName(groupName);
            return this;
        }

        /**
         * Property users: list name of a users to which you want to add the group.
         * <p>
         * @return {@code this}
         * @param users Property users: list name of a users to which you want to add the group. This parameter is required.
         */
        public Builder users(final java.util.List<? extends java.lang.Object> users) {
            this.props.users(users);
            return this;
        }
        /**
         * Property users: list name of a users to which you want to add the group.
         * <p>
         * @return {@code this}
         * @param users Property users: list name of a users to which you want to add the group. This parameter is required.
         */
        public Builder users(final com.aliyun.ros.cdk.core.IResolvable users) {
            this.props.users(users);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ram.UserToGroupAddition}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.UserToGroupAddition build() {
            return new com.aliyun.ros.cdk.ram.UserToGroupAddition(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
