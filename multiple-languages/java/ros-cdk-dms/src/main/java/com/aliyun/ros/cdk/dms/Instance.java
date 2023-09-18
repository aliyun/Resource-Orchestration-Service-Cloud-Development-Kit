package com.aliyun.ros.cdk.dms;

/**
 * A ROS resource type:  <code>ALIYUN::DMS::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:24.636Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dms.$Module.class, fqn = "@alicloud/ros-cdk-dms.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::DMS::Instance</code>.
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::DMS::Instance</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Host: The endpoint of the database instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHost() {
        return software.amazon.jsii.Kernel.get(this, "attrHost", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: The ID of the database instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Port: The connection port of the database instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dms.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dms.Instance> {
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
        private final com.aliyun.ros.cdk.dms.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dms.InstanceProps.Builder();
        }

        /**
         * Property databasePassword: The logon password of the database instance.
         * <p>
         * @return {@code this}
         * @param databasePassword Property databasePassword: The logon password of the database instance. This parameter is required.
         */
        public Builder databasePassword(final java.lang.String databasePassword) {
            this.props.databasePassword(databasePassword);
            return this;
        }
        /**
         * Property databasePassword: The logon password of the database instance.
         * <p>
         * @return {@code this}
         * @param databasePassword Property databasePassword: The logon password of the database instance. This parameter is required.
         */
        public Builder databasePassword(final com.aliyun.ros.cdk.core.IResolvable databasePassword) {
            this.props.databasePassword(databasePassword);
            return this;
        }

        /**
         * Property databaseUser: The logon username of the database instance.
         * <p>
         * @return {@code this}
         * @param databaseUser Property databaseUser: The logon username of the database instance. This parameter is required.
         */
        public Builder databaseUser(final java.lang.String databaseUser) {
            this.props.databaseUser(databaseUser);
            return this;
        }
        /**
         * Property databaseUser: The logon username of the database instance.
         * <p>
         * @return {@code this}
         * @param databaseUser Property databaseUser: The logon username of the database instance. This parameter is required.
         */
        public Builder databaseUser(final com.aliyun.ros.cdk.core.IResolvable databaseUser) {
            this.props.databaseUser(databaseUser);
            return this;
        }

        /**
         * Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database instance.
         * <p>
         * Note To query the UID, log on to the DMS Enterprise console and choose System Management
         * <p>
         * <blockquote>
         * <p>
         * User Management.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param dbaUid Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database instance. This parameter is required.
         */
        public Builder dbaUid(final java.lang.Number dbaUid) {
            this.props.dbaUid(dbaUid);
            return this;
        }
        /**
         * Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database instance.
         * <p>
         * Note To query the UID, log on to the DMS Enterprise console and choose System Management
         * <p>
         * <blockquote>
         * <p>
         * User Management.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param dbaUid Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database instance. This parameter is required.
         */
        public Builder dbaUid(final com.aliyun.ros.cdk.core.IResolvable dbaUid) {
            this.props.dbaUid(dbaUid);
            return this;
        }

        /**
         * Property envType: The type of the environment to which the database instance belongs.
         * <p>
         * Valid values:
         * product: the production environment.
         * dev: the test environment.
         * <p>
         * @return {@code this}
         * @param envType Property envType: The type of the environment to which the database instance belongs. This parameter is required.
         */
        public Builder envType(final java.lang.String envType) {
            this.props.envType(envType);
            return this;
        }
        /**
         * Property envType: The type of the environment to which the database instance belongs.
         * <p>
         * Valid values:
         * product: the production environment.
         * dev: the test environment.
         * <p>
         * @return {@code this}
         * @param envType Property envType: The type of the environment to which the database instance belongs. This parameter is required.
         */
        public Builder envType(final com.aliyun.ros.cdk.core.IResolvable envType) {
            this.props.envType(envType);
            return this;
        }

        /**
         * Property exportTimeout: The timeout period for exporting the database instance.
         * <p>
         * Unit: seconds.
         * <p>
         * @return {@code this}
         * @param exportTimeout Property exportTimeout: The timeout period for exporting the database instance. This parameter is required.
         */
        public Builder exportTimeout(final java.lang.Number exportTimeout) {
            this.props.exportTimeout(exportTimeout);
            return this;
        }
        /**
         * Property exportTimeout: The timeout period for exporting the database instance.
         * <p>
         * Unit: seconds.
         * <p>
         * @return {@code this}
         * @param exportTimeout Property exportTimeout: The timeout period for exporting the database instance. This parameter is required.
         */
        public Builder exportTimeout(final com.aliyun.ros.cdk.core.IResolvable exportTimeout) {
            this.props.exportTimeout(exportTimeout);
            return this;
        }

        /**
         * Property host: The endpoint of the database instance.
         * <p>
         * @return {@code this}
         * @param host Property host: The endpoint of the database instance. This parameter is required.
         */
        public Builder host(final java.lang.String host) {
            this.props.host(host);
            return this;
        }
        /**
         * Property host: The endpoint of the database instance.
         * <p>
         * @return {@code this}
         * @param host Property host: The endpoint of the database instance. This parameter is required.
         */
        public Builder host(final com.aliyun.ros.cdk.core.IResolvable host) {
            this.props.host(host);
            return this;
        }

        /**
         * Property instanceAlias: The alias of the database instance.
         * <p>
         * The alias helps you quickly find the required
         * instance.
         * <p>
         * @return {@code this}
         * @param instanceAlias Property instanceAlias: The alias of the database instance. This parameter is required.
         */
        public Builder instanceAlias(final java.lang.String instanceAlias) {
            this.props.instanceAlias(instanceAlias);
            return this;
        }
        /**
         * Property instanceAlias: The alias of the database instance.
         * <p>
         * The alias helps you quickly find the required
         * instance.
         * <p>
         * @return {@code this}
         * @param instanceAlias Property instanceAlias: The alias of the database instance. This parameter is required.
         */
        public Builder instanceAlias(final com.aliyun.ros.cdk.core.IResolvable instanceAlias) {
            this.props.instanceAlias(instanceAlias);
            return this;
        }

        /**
         * Property instanceSource: The source of the database instance.
         * <p>
         * Valid values:
         * PUBLIC_OWN: an on-premises database built on the public network.
         * RDS: an ApsaraDB for RDS (RDS) instance.
         * ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
         * VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
         * Cloud (VPC).
         * <p>
         * @return {@code this}
         * @param instanceSource Property instanceSource: The source of the database instance. This parameter is required.
         */
        public Builder instanceSource(final java.lang.String instanceSource) {
            this.props.instanceSource(instanceSource);
            return this;
        }
        /**
         * Property instanceSource: The source of the database instance.
         * <p>
         * Valid values:
         * PUBLIC_OWN: an on-premises database built on the public network.
         * RDS: an ApsaraDB for RDS (RDS) instance.
         * ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
         * VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
         * Cloud (VPC).
         * <p>
         * @return {@code this}
         * @param instanceSource Property instanceSource: The source of the database instance. This parameter is required.
         */
        public Builder instanceSource(final com.aliyun.ros.cdk.core.IResolvable instanceSource) {
            this.props.instanceSource(instanceSource);
            return this;
        }

        /**
         * Property instanceType: The type of the database instance.
         * <p>
         * Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The type of the database instance. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The type of the database instance.
         * <p>
         * Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The type of the database instance. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * Property networkType: The network type of the database instance.
         * <p>
         * Valid values:
         * CLASSIC
         * VPC
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The network type of the database instance. This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props.networkType(networkType);
            return this;
        }
        /**
         * Property networkType: The network type of the database instance.
         * <p>
         * Valid values:
         * CLASSIC
         * VPC
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The network type of the database instance. This parameter is required.
         */
        public Builder networkType(final com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.props.networkType(networkType);
            return this;
        }

        /**
         * Property port: The connection port of the database instance.
         * <p>
         * @return {@code this}
         * @param port Property port: The connection port of the database instance. This parameter is required.
         */
        public Builder port(final java.lang.Number port) {
            this.props.port(port);
            return this;
        }
        /**
         * Property port: The connection port of the database instance.
         * <p>
         * @return {@code this}
         * @param port Property port: The connection port of the database instance. This parameter is required.
         */
        public Builder port(final com.aliyun.ros.cdk.core.IResolvable port) {
            this.props.port(port);
            return this;
        }

        /**
         * Property queryTimeout: The timeout period for querying the database instance.
         * <p>
         * Unit: seconds.
         * <p>
         * @return {@code this}
         * @param queryTimeout Property queryTimeout: The timeout period for querying the database instance. This parameter is required.
         */
        public Builder queryTimeout(final java.lang.Number queryTimeout) {
            this.props.queryTimeout(queryTimeout);
            return this;
        }
        /**
         * Property queryTimeout: The timeout period for querying the database instance.
         * <p>
         * Unit: seconds.
         * <p>
         * @return {@code this}
         * @param queryTimeout Property queryTimeout: The timeout period for querying the database instance. This parameter is required.
         */
        public Builder queryTimeout(final com.aliyun.ros.cdk.core.IResolvable queryTimeout) {
            this.props.queryTimeout(queryTimeout);
            return this;
        }

        /**
         * Property safeRule: The security rule of the database instance.
         * <p>
         * Enter the name of the security rule for
         * your enterprise.
         * Note To query a specified security rule, log on to the DMS Enterprise console and choose
         * System Management &gt; Security Rules. The security rule appears in the security rule
         * list.
         * <p>
         * @return {@code this}
         * @param safeRule Property safeRule: The security rule of the database instance. This parameter is required.
         */
        public Builder safeRule(final java.lang.String safeRule) {
            this.props.safeRule(safeRule);
            return this;
        }
        /**
         * Property safeRule: The security rule of the database instance.
         * <p>
         * Enter the name of the security rule for
         * your enterprise.
         * Note To query a specified security rule, log on to the DMS Enterprise console and choose
         * System Management &gt; Security Rules. The security rule appears in the security rule
         * list.
         * <p>
         * @return {@code this}
         * @param safeRule Property safeRule: The security rule of the database instance. This parameter is required.
         */
        public Builder safeRule(final com.aliyun.ros.cdk.core.IResolvable safeRule) {
            this.props.safeRule(safeRule);
            return this;
        }

        /**
         * Property tid: The ID of the tenant.
         * <p>
         * Note To query the ID, log on to the DMS Enterprise console and choose System Management
         * <p>
         * <blockquote>
         * <p>
         * Instance Management or System Management &gt; User Management. The ID of the tenant
         * appears in the Service Specification section.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param tid Property tid: The ID of the tenant. This parameter is required.
         */
        public Builder tid(final java.lang.Number tid) {
            this.props.tid(tid);
            return this;
        }
        /**
         * Property tid: The ID of the tenant.
         * <p>
         * Note To query the ID, log on to the DMS Enterprise console and choose System Management
         * <p>
         * <blockquote>
         * <p>
         * Instance Management or System Management &gt; User Management. The ID of the tenant
         * appears in the Service Specification section.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param tid Property tid: The ID of the tenant. This parameter is required.
         */
        public Builder tid(final com.aliyun.ros.cdk.core.IResolvable tid) {
            this.props.tid(tid);
            return this;
        }

        /**
         * Property dataLinkName: The name of the data link for cross-database query.
         * <p>
         * @return {@code this}
         * @param dataLinkName Property dataLinkName: The name of the data link for cross-database query. This parameter is required.
         */
        public Builder dataLinkName(final java.lang.String dataLinkName) {
            this.props.dataLinkName(dataLinkName);
            return this;
        }
        /**
         * Property dataLinkName: The name of the data link for cross-database query.
         * <p>
         * @return {@code this}
         * @param dataLinkName Property dataLinkName: The name of the data link for cross-database query. This parameter is required.
         */
        public Builder dataLinkName(final com.aliyun.ros.cdk.core.IResolvable dataLinkName) {
            this.props.dataLinkName(dataLinkName);
            return this;
        }

        /**
         * Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL) service.
         * <p>
         * Currently, this service is available only for the MySQL and PolarDB databases.
         * 0: The service is disabled.
         * 1: The native online DDL service prevails.
         * 2: Data change without table locking provided by DMS prevails.
         * <p>
         * @return {@code this}
         * @param ddlOnline Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL) service. This parameter is required.
         */
        public Builder ddlOnline(final java.lang.Number ddlOnline) {
            this.props.ddlOnline(ddlOnline);
            return this;
        }
        /**
         * Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL) service.
         * <p>
         * Currently, this service is available only for the MySQL and PolarDB databases.
         * 0: The service is disabled.
         * 1: The native online DDL service prevails.
         * 2: Data change without table locking provided by DMS prevails.
         * <p>
         * @return {@code this}
         * @param ddlOnline Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL) service. This parameter is required.
         */
        public Builder ddlOnline(final com.aliyun.ros.cdk.core.IResolvable ddlOnline) {
            this.props.ddlOnline(ddlOnline);
            return this;
        }

        /**
         * Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
         * <p>
         * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
         * <p>
         * @return {@code this}
         * @param ecsInstanceId Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs. This parameter is required.
         */
        public Builder ecsInstanceId(final java.lang.String ecsInstanceId) {
            this.props.ecsInstanceId(ecsInstanceId);
            return this;
        }
        /**
         * Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
         * <p>
         * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
         * <p>
         * @return {@code this}
         * @param ecsInstanceId Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs. This parameter is required.
         */
        public Builder ecsInstanceId(final com.aliyun.ros.cdk.core.IResolvable ecsInstanceId) {
            this.props.ecsInstanceId(ecsInstanceId);
            return this;
        }

        /**
         * Property ecsRegion: The region where the database instance resides.
         * <p>
         * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
         * <p>
         * @return {@code this}
         * @param ecsRegion Property ecsRegion: The region where the database instance resides. This parameter is required.
         */
        public Builder ecsRegion(final java.lang.String ecsRegion) {
            this.props.ecsRegion(ecsRegion);
            return this;
        }
        /**
         * Property ecsRegion: The region where the database instance resides.
         * <p>
         * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
         * <p>
         * @return {@code this}
         * @param ecsRegion Property ecsRegion: The region where the database instance resides. This parameter is required.
         */
        public Builder ecsRegion(final com.aliyun.ros.cdk.core.IResolvable ecsRegion) {
            this.props.ecsRegion(ecsRegion);
            return this;
        }

        /**
         * Property sid: The system ID (SID) of the database instance.
         * <p>
         * Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
         * <p>
         * @return {@code this}
         * @param sid Property sid: The system ID (SID) of the database instance. This parameter is required.
         */
        public Builder sid(final java.lang.String sid) {
            this.props.sid(sid);
            return this;
        }
        /**
         * Property sid: The system ID (SID) of the database instance.
         * <p>
         * Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
         * <p>
         * @return {@code this}
         * @param sid Property sid: The system ID (SID) of the database instance. This parameter is required.
         */
        public Builder sid(final com.aliyun.ros.cdk.core.IResolvable sid) {
            this.props.sid(sid);
            return this;
        }

        /**
         * Property useDsql: Specifies whether to enable cross-database query for the database instance.
         * <p>
         * Valid
         * values:
         * 0: disabled
         * 1: enabled
         * <p>
         * @return {@code this}
         * @param useDsql Property useDsql: Specifies whether to enable cross-database query for the database instance. This parameter is required.
         */
        public Builder useDsql(final java.lang.Number useDsql) {
            this.props.useDsql(useDsql);
            return this;
        }
        /**
         * Property useDsql: Specifies whether to enable cross-database query for the database instance.
         * <p>
         * Valid
         * values:
         * 0: disabled
         * 1: enabled
         * <p>
         * @return {@code this}
         * @param useDsql Property useDsql: Specifies whether to enable cross-database query for the database instance. This parameter is required.
         */
        public Builder useDsql(final com.aliyun.ros.cdk.core.IResolvable useDsql) {
            this.props.useDsql(useDsql);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC to which the database instance belongs.
         * <p>
         * Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC to which the database instance belongs. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC to which the database instance belongs.
         * <p>
         * Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC to which the database instance belongs. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dms.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.dms.Instance build() {
            return new com.aliyun.ros.cdk.dms.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
