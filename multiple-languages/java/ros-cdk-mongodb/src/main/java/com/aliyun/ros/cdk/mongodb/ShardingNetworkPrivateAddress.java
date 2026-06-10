package com.aliyun.ros.cdk.mongodb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MONGODB::ShardingNetworkPrivateAddress</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T14:10:27.897Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.ShardingNetworkPrivateAddress")
public class ShardingNetworkPrivateAddress extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.mongodb.IShardingNetworkPrivateAddress {

    protected ShardingNetworkPrivateAddress(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ShardingNetworkPrivateAddress(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ShardingNetworkPrivateAddress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.ShardingNetworkPrivateAddressProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ShardingNetworkPrivateAddress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.ShardingNetworkPrivateAddressProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CompatibleConnections: The list of connection addresses of the DynamoDB protocol instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCompatibleConnections() {
        return software.amazon.jsii.Kernel.get(this, "attrCompatibleConnections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkAddresses() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.ShardingNetworkPrivateAddressProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mongodb.ShardingNetworkPrivateAddressProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.mongodb.ShardingNetworkPrivateAddress}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mongodb.ShardingNetworkPrivateAddress> {
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
        private final com.aliyun.ros.cdk.mongodb.ShardingNetworkPrivateAddressProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mongodb.ShardingNetworkPrivateAddressProps.Builder();
        }

        /**
         * Property dbInstanceId: The ID of the Shard cluster instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the Shard cluster instance. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: The ID of the Shard cluster instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the Shard cluster instance. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance.
         * <p>
         * <blockquote>
         * <p>
         * You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param nodeId Property nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance. This parameter is required.
         */
        public Builder nodeId(final java.lang.String nodeId) {
            this.props.nodeId(nodeId);
            return this;
        }
        /**
         * Property nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance.
         * <p>
         * <blockquote>
         * <p>
         * You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param nodeId Property nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance. This parameter is required.
         */
        public Builder nodeId(final com.aliyun.ros.cdk.core.IResolvable nodeId) {
            this.props.nodeId(nodeId);
            return this;
        }

        /**
         * Property accountName: Account name.
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * <ul>
         * <li>Only when you apply for the Shard/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.</li>
         * <li>The permissions of this account are fixed to read-only.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: Account name. This parameter is required.
         */
        public Builder accountName(final java.lang.String accountName) {
            this.props.accountName(accountName);
            return this;
        }
        /**
         * Property accountName: Account name.
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * <ul>
         * <li>Only when you apply for the Shard/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.</li>
         * <li>The permissions of this account are fixed to read-only.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accountName Property accountName: Account name. This parameter is required.
         */
        public Builder accountName(final com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.props.accountName(accountName);
            return this;
        }

        /**
         * Property accountPassword: Account password.
         * <p>
         * <ul>
         * <li>The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^&amp; *()_+-='</li>
         * <li>The password length is 8-32 bits.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accountPassword Property accountPassword: Account password. This parameter is required.
         */
        public Builder accountPassword(final java.lang.String accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }
        /**
         * Property accountPassword: Account password.
         * <p>
         * <ul>
         * <li>The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^&amp; *()_+-='</li>
         * <li>The password length is 8-32 bits.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accountPassword Property accountPassword: Account password. This parameter is required.
         */
        public Builder accountPassword(final com.aliyun.ros.cdk.core.IResolvable accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }

        /**
         * Property zoneId: The ID of the zone to which the instance belongs.
         * <p>
         * <blockquote>
         * <p>
         * You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone to which the instance belongs. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone to which the instance belongs.
         * <p>
         * <blockquote>
         * <p>
         * You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone to which the instance belongs. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mongodb.ShardingNetworkPrivateAddress}.
         */
        @Override
        public com.aliyun.ros.cdk.mongodb.ShardingNetworkPrivateAddress build() {
            return new com.aliyun.ros.cdk.mongodb.ShardingNetworkPrivateAddress(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
