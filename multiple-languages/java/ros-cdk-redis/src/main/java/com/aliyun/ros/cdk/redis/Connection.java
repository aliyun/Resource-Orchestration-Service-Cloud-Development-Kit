package com.aliyun.ros.cdk.redis;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::REDIS::Connection</code>, which is used to apply for a public endpoint for an ApsaraDB for Redis instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:30.418Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.Connection")
public class Connection extends com.aliyun.ros.cdk.core.Resource {

    protected Connection(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Connection(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Connection(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.ConnectionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Connection(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.ConnectionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConnectionString: The allocated connection string.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.redis.Connection}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.redis.Connection> {
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
        private final com.aliyun.ros.cdk.redis.ConnectionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.redis.ConnectionProps.Builder();
        }

        /**
         * Property connectionStringPrefix: The prefix of the public endpoint.
         * <p>
         * The prefix must be 8 to 64 characters in length,
         * and can contain lowercase letters and digits.
         * It must start with a lowercase letter.
         * <p>
         * @return {@code this}
         * @param connectionStringPrefix Property connectionStringPrefix: The prefix of the public endpoint. This parameter is required.
         */
        public Builder connectionStringPrefix(final java.lang.String connectionStringPrefix) {
            this.props.connectionStringPrefix(connectionStringPrefix);
            return this;
        }
        /**
         * Property connectionStringPrefix: The prefix of the public endpoint.
         * <p>
         * The prefix must be 8 to 64 characters in length,
         * and can contain lowercase letters and digits.
         * It must start with a lowercase letter.
         * <p>
         * @return {@code this}
         * @param connectionStringPrefix Property connectionStringPrefix: The prefix of the public endpoint. This parameter is required.
         */
        public Builder connectionStringPrefix(final com.aliyun.ros.cdk.core.IResolvable connectionStringPrefix) {
            this.props.connectionStringPrefix(connectionStringPrefix);
            return this;
        }

        /**
         * Property connectionType: Allowed values: - Public: Public address.
         * <p>
         * <ul>
         * <li>Direct: Direct connection address. The instance is a cluster instance. You can apply for a direct connection endpoint as required.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param connectionType Property connectionType: Allowed values: - Public: Public address. This parameter is required.
         */
        public Builder connectionType(final java.lang.String connectionType) {
            this.props.connectionType(connectionType);
            return this;
        }
        /**
         * Property connectionType: Allowed values: - Public: Public address.
         * <p>
         * <ul>
         * <li>Direct: Direct connection address. The instance is a cluster instance. You can apply for a direct connection endpoint as required.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param connectionType Property connectionType: Allowed values: - Public: Public address. This parameter is required.
         */
        public Builder connectionType(final com.aliyun.ros.cdk.core.IResolvable connectionType) {
            this.props.connectionType(connectionType);
            return this;
        }

        /**
         * Property instanceId: Instance ID (globally unique).
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Instance ID (globally unique). This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: Instance ID (globally unique).
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Instance ID (globally unique). This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property port: The service port number of the ApsaraDB for Redis instance.
         * <p>
         * Valid values: 1024 to 65535.
         * <p>
         * @return {@code this}
         * @param port Property port: The service port number of the ApsaraDB for Redis instance. This parameter is required.
         */
        public Builder port(final java.lang.Number port) {
            this.props.port(port);
            return this;
        }
        /**
         * Property port: The service port number of the ApsaraDB for Redis instance.
         * <p>
         * Valid values: 1024 to 65535.
         * <p>
         * @return {@code this}
         * @param port Property port: The service port number of the ApsaraDB for Redis instance. This parameter is required.
         */
        public Builder port(final com.aliyun.ros.cdk.core.IResolvable port) {
            this.props.port(port);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.redis.Connection}.
         */
        @Override
        public com.aliyun.ros.cdk.redis.Connection build() {
            return new com.aliyun.ros.cdk.redis.Connection(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
