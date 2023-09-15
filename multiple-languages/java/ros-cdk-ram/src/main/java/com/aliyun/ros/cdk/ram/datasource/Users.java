package com.aliyun.ros.cdk.ram.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::RAM::Users</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:49.874Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.datasource.Users")
public class Users extends com.aliyun.ros.cdk.core.Resource {

    protected Users(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Users(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::RAM::Users</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Users(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ram.datasource.UsersProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::RAM::Users</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Users(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ram.datasource.UsersProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::RAM::Users</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Users(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute UserNames: The list of user names.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserNames() {
        return software.amazon.jsii.Kernel.get(this, "attrUserNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Users: The list of users.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUsers() {
        return software.amazon.jsii.Kernel.get(this, "attrUsers", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.datasource.Users}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.datasource.Users> {
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
        private com.aliyun.ros.cdk.ram.datasource.UsersProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property groupName: The name of group to which users belongs.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: The name of group to which users belongs. This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props().groupName(groupName);
            return this;
        }
        /**
         * Property groupName: The name of group to which users belongs.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: The name of group to which users belongs. This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props().groupName(groupName);
            return this;
        }

        /**
         * Property userName: Filter the results by a specific user name.
         * <p>
         * Supports using * and ? to fuzzy match.
         * <p>
         * @return {@code this}
         * @param userName Property userName: Filter the results by a specific user name. This parameter is required.
         */
        public Builder userName(final java.lang.String userName) {
            this.props().userName(userName);
            return this;
        }
        /**
         * Property userName: Filter the results by a specific user name.
         * <p>
         * Supports using * and ? to fuzzy match.
         * <p>
         * @return {@code this}
         * @param userName Property userName: Filter the results by a specific user name. This parameter is required.
         */
        public Builder userName(final com.aliyun.ros.cdk.core.IResolvable userName) {
            this.props().userName(userName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ram.datasource.Users}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.datasource.Users build() {
            return new com.aliyun.ros.cdk.ram.datasource.Users(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ram.datasource.UsersProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ram.datasource.UsersProps.Builder();
            }
            return this.props;
        }
    }
}
