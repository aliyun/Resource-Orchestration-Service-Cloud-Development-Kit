package com.aliyun.ros.cdk.dms;

/**
 * Properties for defining a <code>Instance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:25.291Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dms.$Module.class, fqn = "@alicloud/ros-cdk-dms.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property databasePassword: The logon password of the database instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDatabasePassword();

    /**
     * Property databaseUser: The logon username of the database instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDatabaseUser();

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
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbaUid();

    /**
     * Property envType: The type of the environment to which the database instance belongs.
     * <p>
     * Valid values:
     * product: the production environment.
     * dev: the test environment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnvType();

    /**
     * Property exportTimeout: The timeout period for exporting the database instance.
     * <p>
     * Unit: seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExportTimeout();

    /**
     * Property host: The endpoint of the database instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHost();

    /**
     * Property instanceAlias: The alias of the database instance.
     * <p>
     * The alias helps you quickly find the required
     * instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceAlias();

    /**
     * Property instanceSource: The source of the database instance.
     * <p>
     * Valid values:
     * PUBLIC_OWN: an on-premises database built on the public network.
     * RDS: an ApsaraDB for RDS (RDS) instance.
     * ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
     * VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
     * Cloud (VPC).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceSource();

    /**
     * Property instanceType: The type of the database instance.
     * <p>
     * Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

    /**
     * Property networkType: The network type of the database instance.
     * <p>
     * Valid values:
     * CLASSIC
     * VPC
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkType();

    /**
     * Property port: The connection port of the database instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPort();

    /**
     * Property queryTimeout: The timeout period for querying the database instance.
     * <p>
     * Unit: seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQueryTimeout();

    /**
     * Property safeRule: The security rule of the database instance.
     * <p>
     * Enter the name of the security rule for
     * your enterprise.
     * Note To query a specified security rule, log on to the DMS Enterprise console and choose
     * System Management &gt; Security Rules. The security rule appears in the security rule
     * list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSafeRule();

    /**
     * Property dataLinkName: The name of the data link for cross-database query.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataLinkName() {
        return null;
    }

    /**
     * Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL) service.
     * <p>
     * Currently, this service is available only for the MySQL and PolarDB databases.
     * 0: The service is disabled.
     * 1: The native online DDL service prevails.
     * 2: Data change without table locking provided by DMS prevails.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDdlOnline() {
        return null;
    }

    /**
     * Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
     * <p>
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcsInstanceId() {
        return null;
    }

    /**
     * Property ecsRegion: The region where the database instance resides.
     * <p>
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcsRegion() {
        return null;
    }

    /**
     * Property sid: The system ID (SID) of the database instance.
     * <p>
     * Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSid() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTid() {
        return null;
    }

    /**
     * Property useDsql: Specifies whether to enable cross-database query for the database instance.
     * <p>
     * Valid
     * values:
     * 0: disabled
     * 1: enabled
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUseDsql() {
        return null;
    }

    /**
     * Property vpcId: The ID of the VPC to which the database instance belongs.
     * <p>
     * Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceProps> {
        java.lang.Object databasePassword;
        java.lang.Object databaseUser;
        java.lang.Object dbaUid;
        java.lang.Object envType;
        java.lang.Object exportTimeout;
        java.lang.Object host;
        java.lang.Object instanceAlias;
        java.lang.Object instanceSource;
        java.lang.Object instanceType;
        java.lang.Object networkType;
        java.lang.Object port;
        java.lang.Object queryTimeout;
        java.lang.Object safeRule;
        java.lang.Object dataLinkName;
        java.lang.Object ddlOnline;
        java.lang.Object ecsInstanceId;
        java.lang.Object ecsRegion;
        java.lang.Object sid;
        java.lang.Object tid;
        java.lang.Object useDsql;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link InstanceProps#getDatabasePassword}
         * @param databasePassword Property databasePassword: The logon password of the database instance. This parameter is required.
         * @return {@code this}
         */
        public Builder databasePassword(java.lang.String databasePassword) {
            this.databasePassword = databasePassword;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDatabasePassword}
         * @param databasePassword Property databasePassword: The logon password of the database instance. This parameter is required.
         * @return {@code this}
         */
        public Builder databasePassword(com.aliyun.ros.cdk.core.IResolvable databasePassword) {
            this.databasePassword = databasePassword;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDatabaseUser}
         * @param databaseUser Property databaseUser: The logon username of the database instance. This parameter is required.
         * @return {@code this}
         */
        public Builder databaseUser(java.lang.String databaseUser) {
            this.databaseUser = databaseUser;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDatabaseUser}
         * @param databaseUser Property databaseUser: The logon username of the database instance. This parameter is required.
         * @return {@code this}
         */
        public Builder databaseUser(com.aliyun.ros.cdk.core.IResolvable databaseUser) {
            this.databaseUser = databaseUser;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDbaUid}
         * @param dbaUid Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database instance. This parameter is required.
         *               Note To query the UID, log on to the DMS Enterprise console and choose System Management
         *               <p>
         *               <blockquote>
         *               <p>
         *               User Management.
         *               <p>
         *               </blockquote>
         * @return {@code this}
         */
        public Builder dbaUid(java.lang.Number dbaUid) {
            this.dbaUid = dbaUid;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDbaUid}
         * @param dbaUid Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database instance. This parameter is required.
         *               Note To query the UID, log on to the DMS Enterprise console and choose System Management
         *               <p>
         *               <blockquote>
         *               <p>
         *               User Management.
         *               <p>
         *               </blockquote>
         * @return {@code this}
         */
        public Builder dbaUid(com.aliyun.ros.cdk.core.IResolvable dbaUid) {
            this.dbaUid = dbaUid;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEnvType}
         * @param envType Property envType: The type of the environment to which the database instance belongs. This parameter is required.
         *                Valid values:
         *                product: the production environment.
         *                dev: the test environment.
         * @return {@code this}
         */
        public Builder envType(java.lang.String envType) {
            this.envType = envType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEnvType}
         * @param envType Property envType: The type of the environment to which the database instance belongs. This parameter is required.
         *                Valid values:
         *                product: the production environment.
         *                dev: the test environment.
         * @return {@code this}
         */
        public Builder envType(com.aliyun.ros.cdk.core.IResolvable envType) {
            this.envType = envType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getExportTimeout}
         * @param exportTimeout Property exportTimeout: The timeout period for exporting the database instance. This parameter is required.
         *                      Unit: seconds.
         * @return {@code this}
         */
        public Builder exportTimeout(java.lang.Number exportTimeout) {
            this.exportTimeout = exportTimeout;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getExportTimeout}
         * @param exportTimeout Property exportTimeout: The timeout period for exporting the database instance. This parameter is required.
         *                      Unit: seconds.
         * @return {@code this}
         */
        public Builder exportTimeout(com.aliyun.ros.cdk.core.IResolvable exportTimeout) {
            this.exportTimeout = exportTimeout;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getHost}
         * @param host Property host: The endpoint of the database instance. This parameter is required.
         * @return {@code this}
         */
        public Builder host(java.lang.String host) {
            this.host = host;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getHost}
         * @param host Property host: The endpoint of the database instance. This parameter is required.
         * @return {@code this}
         */
        public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
            this.host = host;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceAlias}
         * @param instanceAlias Property instanceAlias: The alias of the database instance. This parameter is required.
         *                      The alias helps you quickly find the required
         *                      instance.
         * @return {@code this}
         */
        public Builder instanceAlias(java.lang.String instanceAlias) {
            this.instanceAlias = instanceAlias;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceAlias}
         * @param instanceAlias Property instanceAlias: The alias of the database instance. This parameter is required.
         *                      The alias helps you quickly find the required
         *                      instance.
         * @return {@code this}
         */
        public Builder instanceAlias(com.aliyun.ros.cdk.core.IResolvable instanceAlias) {
            this.instanceAlias = instanceAlias;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceSource}
         * @param instanceSource Property instanceSource: The source of the database instance. This parameter is required.
         *                       Valid values:
         *                       PUBLIC_OWN: an on-premises database built on the public network.
         *                       RDS: an ApsaraDB for RDS (RDS) instance.
         *                       ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
         *                       VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
         *                       Cloud (VPC).
         * @return {@code this}
         */
        public Builder instanceSource(java.lang.String instanceSource) {
            this.instanceSource = instanceSource;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceSource}
         * @param instanceSource Property instanceSource: The source of the database instance. This parameter is required.
         *                       Valid values:
         *                       PUBLIC_OWN: an on-premises database built on the public network.
         *                       RDS: an ApsaraDB for RDS (RDS) instance.
         *                       ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
         *                       VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
         *                       Cloud (VPC).
         * @return {@code this}
         */
        public Builder instanceSource(com.aliyun.ros.cdk.core.IResolvable instanceSource) {
            this.instanceSource = instanceSource;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceType}
         * @param instanceType Property instanceType: The type of the database instance. This parameter is required.
         *                     Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceType}
         * @param instanceType Property instanceType: The type of the database instance. This parameter is required.
         *                     Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getNetworkType}
         * @param networkType Property networkType: The network type of the database instance. This parameter is required.
         *                    Valid values:
         *                    CLASSIC
         *                    VPC
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getNetworkType}
         * @param networkType Property networkType: The network type of the database instance. This parameter is required.
         *                    Valid values:
         *                    CLASSIC
         *                    VPC
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPort}
         * @param port Property port: The connection port of the database instance. This parameter is required.
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPort}
         * @param port Property port: The connection port of the database instance. This parameter is required.
         * @return {@code this}
         */
        public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getQueryTimeout}
         * @param queryTimeout Property queryTimeout: The timeout period for querying the database instance. This parameter is required.
         *                     Unit: seconds.
         * @return {@code this}
         */
        public Builder queryTimeout(java.lang.Number queryTimeout) {
            this.queryTimeout = queryTimeout;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getQueryTimeout}
         * @param queryTimeout Property queryTimeout: The timeout period for querying the database instance. This parameter is required.
         *                     Unit: seconds.
         * @return {@code this}
         */
        public Builder queryTimeout(com.aliyun.ros.cdk.core.IResolvable queryTimeout) {
            this.queryTimeout = queryTimeout;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSafeRule}
         * @param safeRule Property safeRule: The security rule of the database instance. This parameter is required.
         *                 Enter the name of the security rule for
         *                 your enterprise.
         *                 Note To query a specified security rule, log on to the DMS Enterprise console and choose
         *                 System Management &gt; Security Rules. The security rule appears in the security rule
         *                 list.
         * @return {@code this}
         */
        public Builder safeRule(java.lang.String safeRule) {
            this.safeRule = safeRule;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSafeRule}
         * @param safeRule Property safeRule: The security rule of the database instance. This parameter is required.
         *                 Enter the name of the security rule for
         *                 your enterprise.
         *                 Note To query a specified security rule, log on to the DMS Enterprise console and choose
         *                 System Management &gt; Security Rules. The security rule appears in the security rule
         *                 list.
         * @return {@code this}
         */
        public Builder safeRule(com.aliyun.ros.cdk.core.IResolvable safeRule) {
            this.safeRule = safeRule;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDataLinkName}
         * @param dataLinkName Property dataLinkName: The name of the data link for cross-database query.
         * @return {@code this}
         */
        public Builder dataLinkName(java.lang.String dataLinkName) {
            this.dataLinkName = dataLinkName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDataLinkName}
         * @param dataLinkName Property dataLinkName: The name of the data link for cross-database query.
         * @return {@code this}
         */
        public Builder dataLinkName(com.aliyun.ros.cdk.core.IResolvable dataLinkName) {
            this.dataLinkName = dataLinkName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDdlOnline}
         * @param ddlOnline Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL) service.
         *                  Currently, this service is available only for the MySQL and PolarDB databases.
         *                  0: The service is disabled.
         *                  1: The native online DDL service prevails.
         *                  2: Data change without table locking provided by DMS prevails.
         * @return {@code this}
         */
        public Builder ddlOnline(java.lang.Number ddlOnline) {
            this.ddlOnline = ddlOnline;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDdlOnline}
         * @param ddlOnline Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL) service.
         *                  Currently, this service is available only for the MySQL and PolarDB databases.
         *                  0: The service is disabled.
         *                  1: The native online DDL service prevails.
         *                  2: Data change without table locking provided by DMS prevails.
         * @return {@code this}
         */
        public Builder ddlOnline(com.aliyun.ros.cdk.core.IResolvable ddlOnline) {
            this.ddlOnline = ddlOnline;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEcsInstanceId}
         * @param ecsInstanceId Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
         *                      Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
         * @return {@code this}
         */
        public Builder ecsInstanceId(java.lang.String ecsInstanceId) {
            this.ecsInstanceId = ecsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEcsInstanceId}
         * @param ecsInstanceId Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
         *                      Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
         * @return {@code this}
         */
        public Builder ecsInstanceId(com.aliyun.ros.cdk.core.IResolvable ecsInstanceId) {
            this.ecsInstanceId = ecsInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEcsRegion}
         * @param ecsRegion Property ecsRegion: The region where the database instance resides.
         *                  Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
         * @return {@code this}
         */
        public Builder ecsRegion(java.lang.String ecsRegion) {
            this.ecsRegion = ecsRegion;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEcsRegion}
         * @param ecsRegion Property ecsRegion: The region where the database instance resides.
         *                  Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
         * @return {@code this}
         */
        public Builder ecsRegion(com.aliyun.ros.cdk.core.IResolvable ecsRegion) {
            this.ecsRegion = ecsRegion;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSid}
         * @param sid Property sid: The system ID (SID) of the database instance.
         *            Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
         * @return {@code this}
         */
        public Builder sid(java.lang.String sid) {
            this.sid = sid;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSid}
         * @param sid Property sid: The system ID (SID) of the database instance.
         *            Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
         * @return {@code this}
         */
        public Builder sid(com.aliyun.ros.cdk.core.IResolvable sid) {
            this.sid = sid;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTid}
         * @param tid Property tid: The ID of the tenant.
         *            Note To query the ID, log on to the DMS Enterprise console and choose System Management
         *            <p>
         *            <blockquote>
         *            <p>
         *            Instance Management or System Management &gt; User Management. The ID of the tenant
         *            appears in the Service Specification section.
         *            <p>
         *            </blockquote>
         * @return {@code this}
         */
        public Builder tid(java.lang.Number tid) {
            this.tid = tid;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTid}
         * @param tid Property tid: The ID of the tenant.
         *            Note To query the ID, log on to the DMS Enterprise console and choose System Management
         *            <p>
         *            <blockquote>
         *            <p>
         *            Instance Management or System Management &gt; User Management. The ID of the tenant
         *            appears in the Service Specification section.
         *            <p>
         *            </blockquote>
         * @return {@code this}
         */
        public Builder tid(com.aliyun.ros.cdk.core.IResolvable tid) {
            this.tid = tid;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getUseDsql}
         * @param useDsql Property useDsql: Specifies whether to enable cross-database query for the database instance.
         *                Valid
         *                values:
         *                0: disabled
         *                1: enabled
         * @return {@code this}
         */
        public Builder useDsql(java.lang.Number useDsql) {
            this.useDsql = useDsql;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getUseDsql}
         * @param useDsql Property useDsql: Specifies whether to enable cross-database query for the database instance.
         *                Valid
         *                values:
         *                0: disabled
         *                1: enabled
         * @return {@code this}
         */
        public Builder useDsql(com.aliyun.ros.cdk.core.IResolvable useDsql) {
            this.useDsql = useDsql;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to which the database instance belongs.
         *              Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to which the database instance belongs.
         *              Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceProps {
        private final java.lang.Object databasePassword;
        private final java.lang.Object databaseUser;
        private final java.lang.Object dbaUid;
        private final java.lang.Object envType;
        private final java.lang.Object exportTimeout;
        private final java.lang.Object host;
        private final java.lang.Object instanceAlias;
        private final java.lang.Object instanceSource;
        private final java.lang.Object instanceType;
        private final java.lang.Object networkType;
        private final java.lang.Object port;
        private final java.lang.Object queryTimeout;
        private final java.lang.Object safeRule;
        private final java.lang.Object dataLinkName;
        private final java.lang.Object ddlOnline;
        private final java.lang.Object ecsInstanceId;
        private final java.lang.Object ecsRegion;
        private final java.lang.Object sid;
        private final java.lang.Object tid;
        private final java.lang.Object useDsql;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.databasePassword = software.amazon.jsii.Kernel.get(this, "databasePassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.databaseUser = software.amazon.jsii.Kernel.get(this, "databaseUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbaUid = software.amazon.jsii.Kernel.get(this, "dbaUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.envType = software.amazon.jsii.Kernel.get(this, "envType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.exportTimeout = software.amazon.jsii.Kernel.get(this, "exportTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceAlias = software.amazon.jsii.Kernel.get(this, "instanceAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceSource = software.amazon.jsii.Kernel.get(this, "instanceSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queryTimeout = software.amazon.jsii.Kernel.get(this, "queryTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.safeRule = software.amazon.jsii.Kernel.get(this, "safeRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataLinkName = software.amazon.jsii.Kernel.get(this, "dataLinkName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ddlOnline = software.amazon.jsii.Kernel.get(this, "ddlOnline", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsInstanceId = software.amazon.jsii.Kernel.get(this, "ecsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsRegion = software.amazon.jsii.Kernel.get(this, "ecsRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sid = software.amazon.jsii.Kernel.get(this, "sid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tid = software.amazon.jsii.Kernel.get(this, "tid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.useDsql = software.amazon.jsii.Kernel.get(this, "useDsql", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.databasePassword = java.util.Objects.requireNonNull(builder.databasePassword, "databasePassword is required");
            this.databaseUser = java.util.Objects.requireNonNull(builder.databaseUser, "databaseUser is required");
            this.dbaUid = java.util.Objects.requireNonNull(builder.dbaUid, "dbaUid is required");
            this.envType = java.util.Objects.requireNonNull(builder.envType, "envType is required");
            this.exportTimeout = java.util.Objects.requireNonNull(builder.exportTimeout, "exportTimeout is required");
            this.host = java.util.Objects.requireNonNull(builder.host, "host is required");
            this.instanceAlias = java.util.Objects.requireNonNull(builder.instanceAlias, "instanceAlias is required");
            this.instanceSource = java.util.Objects.requireNonNull(builder.instanceSource, "instanceSource is required");
            this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
            this.networkType = java.util.Objects.requireNonNull(builder.networkType, "networkType is required");
            this.port = java.util.Objects.requireNonNull(builder.port, "port is required");
            this.queryTimeout = java.util.Objects.requireNonNull(builder.queryTimeout, "queryTimeout is required");
            this.safeRule = java.util.Objects.requireNonNull(builder.safeRule, "safeRule is required");
            this.dataLinkName = builder.dataLinkName;
            this.ddlOnline = builder.ddlOnline;
            this.ecsInstanceId = builder.ecsInstanceId;
            this.ecsRegion = builder.ecsRegion;
            this.sid = builder.sid;
            this.tid = builder.tid;
            this.useDsql = builder.useDsql;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getDatabasePassword() {
            return this.databasePassword;
        }

        @Override
        public final java.lang.Object getDatabaseUser() {
            return this.databaseUser;
        }

        @Override
        public final java.lang.Object getDbaUid() {
            return this.dbaUid;
        }

        @Override
        public final java.lang.Object getEnvType() {
            return this.envType;
        }

        @Override
        public final java.lang.Object getExportTimeout() {
            return this.exportTimeout;
        }

        @Override
        public final java.lang.Object getHost() {
            return this.host;
        }

        @Override
        public final java.lang.Object getInstanceAlias() {
            return this.instanceAlias;
        }

        @Override
        public final java.lang.Object getInstanceSource() {
            return this.instanceSource;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
        }

        @Override
        public final java.lang.Object getPort() {
            return this.port;
        }

        @Override
        public final java.lang.Object getQueryTimeout() {
            return this.queryTimeout;
        }

        @Override
        public final java.lang.Object getSafeRule() {
            return this.safeRule;
        }

        @Override
        public final java.lang.Object getDataLinkName() {
            return this.dataLinkName;
        }

        @Override
        public final java.lang.Object getDdlOnline() {
            return this.ddlOnline;
        }

        @Override
        public final java.lang.Object getEcsInstanceId() {
            return this.ecsInstanceId;
        }

        @Override
        public final java.lang.Object getEcsRegion() {
            return this.ecsRegion;
        }

        @Override
        public final java.lang.Object getSid() {
            return this.sid;
        }

        @Override
        public final java.lang.Object getTid() {
            return this.tid;
        }

        @Override
        public final java.lang.Object getUseDsql() {
            return this.useDsql;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("databasePassword", om.valueToTree(this.getDatabasePassword()));
            data.set("databaseUser", om.valueToTree(this.getDatabaseUser()));
            data.set("dbaUid", om.valueToTree(this.getDbaUid()));
            data.set("envType", om.valueToTree(this.getEnvType()));
            data.set("exportTimeout", om.valueToTree(this.getExportTimeout()));
            data.set("host", om.valueToTree(this.getHost()));
            data.set("instanceAlias", om.valueToTree(this.getInstanceAlias()));
            data.set("instanceSource", om.valueToTree(this.getInstanceSource()));
            data.set("instanceType", om.valueToTree(this.getInstanceType()));
            data.set("networkType", om.valueToTree(this.getNetworkType()));
            data.set("port", om.valueToTree(this.getPort()));
            data.set("queryTimeout", om.valueToTree(this.getQueryTimeout()));
            data.set("safeRule", om.valueToTree(this.getSafeRule()));
            if (this.getDataLinkName() != null) {
                data.set("dataLinkName", om.valueToTree(this.getDataLinkName()));
            }
            if (this.getDdlOnline() != null) {
                data.set("ddlOnline", om.valueToTree(this.getDdlOnline()));
            }
            if (this.getEcsInstanceId() != null) {
                data.set("ecsInstanceId", om.valueToTree(this.getEcsInstanceId()));
            }
            if (this.getEcsRegion() != null) {
                data.set("ecsRegion", om.valueToTree(this.getEcsRegion()));
            }
            if (this.getSid() != null) {
                data.set("sid", om.valueToTree(this.getSid()));
            }
            if (this.getTid() != null) {
                data.set("tid", om.valueToTree(this.getTid()));
            }
            if (this.getUseDsql() != null) {
                data.set("useDsql", om.valueToTree(this.getUseDsql()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dms.InstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceProps.Jsii$Proxy that = (InstanceProps.Jsii$Proxy) o;

            if (!databasePassword.equals(that.databasePassword)) return false;
            if (!databaseUser.equals(that.databaseUser)) return false;
            if (!dbaUid.equals(that.dbaUid)) return false;
            if (!envType.equals(that.envType)) return false;
            if (!exportTimeout.equals(that.exportTimeout)) return false;
            if (!host.equals(that.host)) return false;
            if (!instanceAlias.equals(that.instanceAlias)) return false;
            if (!instanceSource.equals(that.instanceSource)) return false;
            if (!instanceType.equals(that.instanceType)) return false;
            if (!networkType.equals(that.networkType)) return false;
            if (!port.equals(that.port)) return false;
            if (!queryTimeout.equals(that.queryTimeout)) return false;
            if (!safeRule.equals(that.safeRule)) return false;
            if (this.dataLinkName != null ? !this.dataLinkName.equals(that.dataLinkName) : that.dataLinkName != null) return false;
            if (this.ddlOnline != null ? !this.ddlOnline.equals(that.ddlOnline) : that.ddlOnline != null) return false;
            if (this.ecsInstanceId != null ? !this.ecsInstanceId.equals(that.ecsInstanceId) : that.ecsInstanceId != null) return false;
            if (this.ecsRegion != null ? !this.ecsRegion.equals(that.ecsRegion) : that.ecsRegion != null) return false;
            if (this.sid != null ? !this.sid.equals(that.sid) : that.sid != null) return false;
            if (this.tid != null ? !this.tid.equals(that.tid) : that.tid != null) return false;
            if (this.useDsql != null ? !this.useDsql.equals(that.useDsql) : that.useDsql != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.databasePassword.hashCode();
            result = 31 * result + (this.databaseUser.hashCode());
            result = 31 * result + (this.dbaUid.hashCode());
            result = 31 * result + (this.envType.hashCode());
            result = 31 * result + (this.exportTimeout.hashCode());
            result = 31 * result + (this.host.hashCode());
            result = 31 * result + (this.instanceAlias.hashCode());
            result = 31 * result + (this.instanceSource.hashCode());
            result = 31 * result + (this.instanceType.hashCode());
            result = 31 * result + (this.networkType.hashCode());
            result = 31 * result + (this.port.hashCode());
            result = 31 * result + (this.queryTimeout.hashCode());
            result = 31 * result + (this.safeRule.hashCode());
            result = 31 * result + (this.dataLinkName != null ? this.dataLinkName.hashCode() : 0);
            result = 31 * result + (this.ddlOnline != null ? this.ddlOnline.hashCode() : 0);
            result = 31 * result + (this.ecsInstanceId != null ? this.ecsInstanceId.hashCode() : 0);
            result = 31 * result + (this.ecsRegion != null ? this.ecsRegion.hashCode() : 0);
            result = 31 * result + (this.sid != null ? this.sid.hashCode() : 0);
            result = 31 * result + (this.tid != null ? this.tid.hashCode() : 0);
            result = 31 * result + (this.useDsql != null ? this.useDsql.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
