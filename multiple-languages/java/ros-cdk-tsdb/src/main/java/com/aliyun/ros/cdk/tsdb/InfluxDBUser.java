package com.aliyun.ros.cdk.tsdb;

/**
 * A ROS resource type:  <code>ALIYUN::TSDB::InfluxDBUser</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:28.593Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.tsdb.$Module.class, fqn = "@alicloud/ros-cdk-tsdb.InfluxDBUser")
public class InfluxDBUser extends com.aliyun.ros.cdk.core.Resource {

    protected InfluxDBUser(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected InfluxDBUser(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::TSDB::InfluxDBUser</code>.
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
    public InfluxDBUser(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.tsdb.InfluxDBUserProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::TSDB::InfluxDBUser</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public InfluxDBUser(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.tsdb.InfluxDBUserProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceId: The ID of TSDB for InfluxDB.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UserName: The name of user.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserName() {
        return software.amazon.jsii.Kernel.get(this, "attrUserName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UserType: The type of user.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserType() {
        return software.amazon.jsii.Kernel.get(this, "attrUserType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.tsdb.InfluxDBUser}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.tsdb.InfluxDBUser> {
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
        private final com.aliyun.ros.cdk.tsdb.InfluxDBUserProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.tsdb.InfluxDBUserProps.Builder();
        }

        /**
         * Property instanceId: The ID of TSDB for InfluxDB.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of TSDB for InfluxDB. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of TSDB for InfluxDB.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of TSDB for InfluxDB. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!&#64;#$%^&amp;*()_+-=.
         * <p>
         * @return {@code this}
         * @param password Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!&#64;#$%^&amp;*()_+-=. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!&#64;#$%^&amp;*()_+-=.
         * <p>
         * @return {@code this}
         * @param password Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!&#64;#$%^&amp;*()_+-=. This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * Property userName: The name of user.
         * <p>
         * The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
         * <p>
         * @return {@code this}
         * @param userName Property userName: The name of user. This parameter is required.
         */
        public Builder userName(final java.lang.String userName) {
            this.props.userName(userName);
            return this;
        }
        /**
         * Property userName: The name of user.
         * <p>
         * The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
         * <p>
         * @return {@code this}
         * @param userName Property userName: The name of user. This parameter is required.
         */
        public Builder userName(final com.aliyun.ros.cdk.core.IResolvable userName) {
            this.props.userName(userName);
            return this;
        }

        /**
         * Property userType: The type of user.
         * <p>
         * Valid values:
         * normal: normal user
         * admin: administrator user.
         * <p>
         * @return {@code this}
         * @param userType Property userType: The type of user. This parameter is required.
         */
        public Builder userType(final java.lang.String userType) {
            this.props.userType(userType);
            return this;
        }
        /**
         * Property userType: The type of user.
         * <p>
         * Valid values:
         * normal: normal user
         * admin: administrator user.
         * <p>
         * @return {@code this}
         * @param userType Property userType: The type of user. This parameter is required.
         */
        public Builder userType(final com.aliyun.ros.cdk.core.IResolvable userType) {
            this.props.userType(userType);
            return this;
        }

        /**
         * Property databasePermissions: The list of databases that the user can access.
         * <p>
         * If the user type is admin, do not specify this parameter.
         * <p>
         * @return {@code this}
         * @param databasePermissions Property databasePermissions: The list of databases that the user can access. This parameter is required.
         */
        public Builder databasePermissions(final com.aliyun.ros.cdk.core.IResolvable databasePermissions) {
            this.props.databasePermissions(databasePermissions);
            return this;
        }
        /**
         * Property databasePermissions: The list of databases that the user can access.
         * <p>
         * If the user type is admin, do not specify this parameter.
         * <p>
         * @return {@code this}
         * @param databasePermissions Property databasePermissions: The list of databases that the user can access. This parameter is required.
         */
        public Builder databasePermissions(final java.util.List<? extends java.lang.Object> databasePermissions) {
            this.props.databasePermissions(databasePermissions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.tsdb.InfluxDBUser}.
         */
        @Override
        public com.aliyun.ros.cdk.tsdb.InfluxDBUser build() {
            return new com.aliyun.ros.cdk.tsdb.InfluxDBUser(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
