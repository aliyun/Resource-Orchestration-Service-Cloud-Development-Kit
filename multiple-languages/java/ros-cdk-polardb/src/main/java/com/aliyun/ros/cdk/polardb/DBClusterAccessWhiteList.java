package com.aliyun.ros.cdk.polardb;

/**
 * A ROS resource type:  `ALIYUN::POLARDB::DBClusterAccessWhiteList`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:16.042Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.DBClusterAccessWhiteList")
public class DBClusterAccessWhiteList extends com.aliyun.ros.cdk.core.Resource {

    protected DBClusterAccessWhiteList(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DBClusterAccessWhiteList(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::POLARDB::DBClusterAccessWhiteList`.
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
    public DBClusterAccessWhiteList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterAccessWhiteListProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::POLARDB::DBClusterAccessWhiteList`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DBClusterAccessWhiteList(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterAccessWhiteListProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.DBClusterAccessWhiteList}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.DBClusterAccessWhiteList> {
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
        private final com.aliyun.ros.cdk.polardb.DBClusterAccessWhiteListProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardb.DBClusterAccessWhiteListProps.Builder();
        }

        /**
         * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified. This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster whose IP address whitelist is to be modified. This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified.
         * <p>
         * Each
         * whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
         * addresses with a comma (,). The following two formats are supported:
         * IP address: for example, 10.23.12.24.
         * Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the
         * suffix /24 indicates the number of bits for the prefix of the IP address. The suffix
         * ranges from 1 to 32.
         * <p>
         * @return {@code this}
         * @param securityIps Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified. This parameter is required.
         */
        public Builder securityIps(final java.lang.String securityIps) {
            this.props.securityIps(securityIps);
            return this;
        }
        /**
         * Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified.
         * <p>
         * Each
         * whitelist group can contain a maximum of 1,000 IP addresses. Separate multiple IP
         * addresses with a comma (,). The following two formats are supported:
         * IP address: for example, 10.23.12.24.
         * Classless inter-domain routing (CIDR) block: for example, 10.23.12.24/24, where the
         * suffix /24 indicates the number of bits for the prefix of the IP address. The suffix
         * ranges from 1 to 32.
         * <p>
         * @return {@code this}
         * @param securityIps Property securityIps: The IP addresses to be added to the IP address whitelist group to be modified. This parameter is required.
         */
        public Builder securityIps(final com.aliyun.ros.cdk.core.IResolvable securityIps) {
            this.props.securityIps(securityIps);
            return this;
        }

        /**
         * Property dbClusterIpArrayName: The name of the IP address whitelist group.
         * <p>
         * If you do not specify this parameter,
         * the Default whitelist group is modified by default.
         * Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterIpArrayName Property dbClusterIpArrayName: The name of the IP address whitelist group. This parameter is required.
         */
        public Builder dbClusterIpArrayName(final java.lang.String dbClusterIpArrayName) {
            this.props.dbClusterIpArrayName(dbClusterIpArrayName);
            return this;
        }
        /**
         * Property dbClusterIpArrayName: The name of the IP address whitelist group.
         * <p>
         * If you do not specify this parameter,
         * the Default whitelist group is modified by default.
         * Note You can create up to 50 whitelist groups for an ApsaraDB for POLARDB cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterIpArrayName Property dbClusterIpArrayName: The name of the IP address whitelist group. This parameter is required.
         */
        public Builder dbClusterIpArrayName(final com.aliyun.ros.cdk.core.IResolvable dbClusterIpArrayName) {
            this.props.dbClusterIpArrayName(dbClusterIpArrayName);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.polardb.DBClusterAccessWhiteList}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.DBClusterAccessWhiteList build() {
            return new com.aliyun.ros.cdk.polardb.DBClusterAccessWhiteList(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
