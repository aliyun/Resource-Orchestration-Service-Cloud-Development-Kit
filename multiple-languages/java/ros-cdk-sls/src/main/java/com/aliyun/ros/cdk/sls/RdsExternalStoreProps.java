package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a <code>RdsExternalStore</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-rdsexternalstore
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:50.881Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RdsExternalStoreProps")
@software.amazon.jsii.Jsii.Proxy(RdsExternalStoreProps.Jsii$Proxy.class)
public interface RdsExternalStoreProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property db: The name of the database in the ApsaraDB RDS for MySQL instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDb();

    /**
     * Property externalStoreName: The name of the external store.
     * <p>
     * The name must be unique in a project and different from Logstore.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getExternalStoreName();

    /**
     * Property host: The internal or public endpoint of the ApsaraDB RDS for MySQL instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHost();

    /**
     * Property password: The password that is used to log on to the ApsaraDB RDS for MySQL instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPassword();

    /**
     * Property port: The internal or public port of the ApsaraDB RDS for MySQL instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPort();

    /**
     * Property project: The name of the project.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProject();

    /**
     * Property region: The region where the ApsaraDB RDS for MySQL instance resides.
     * <p>
     * Valid values: cn-qingdao, cn-beijing, cn-hangzhou.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRegion();

    /**
     * Property storeType: The storage type.
     * <p>
     * Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStoreType();

    /**
     * Property table: The name of the database table in the ApsaraDB RDS for MySQL instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTable();

    /**
     * Property username: The username that is used to log on to the ApsaraDB RDS for MySQL instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUsername();

    /**
     * Property vpcId: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property instanceId: The id of the RDS instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RdsExternalStoreProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RdsExternalStoreProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RdsExternalStoreProps> {
        java.lang.Object db;
        java.lang.Object externalStoreName;
        java.lang.Object host;
        java.lang.Object password;
        java.lang.Object port;
        java.lang.Object project;
        java.lang.Object region;
        java.lang.Object storeType;
        java.lang.Object table;
        java.lang.Object username;
        java.lang.Object vpcId;
        java.lang.Object instanceId;

        /**
         * Sets the value of {@link RdsExternalStoreProps#getDb}
         * @param db Property db: The name of the database in the ApsaraDB RDS for MySQL instance. This parameter is required.
         * @return {@code this}
         */
        public Builder db(java.lang.String db) {
            this.db = db;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getDb}
         * @param db Property db: The name of the database in the ApsaraDB RDS for MySQL instance. This parameter is required.
         * @return {@code this}
         */
        public Builder db(com.aliyun.ros.cdk.core.IResolvable db) {
            this.db = db;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getExternalStoreName}
         * @param externalStoreName Property externalStoreName: The name of the external store. This parameter is required.
         *                          The name must be unique in a project and different from Logstore.
         * @return {@code this}
         */
        public Builder externalStoreName(java.lang.String externalStoreName) {
            this.externalStoreName = externalStoreName;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getExternalStoreName}
         * @param externalStoreName Property externalStoreName: The name of the external store. This parameter is required.
         *                          The name must be unique in a project and different from Logstore.
         * @return {@code this}
         */
        public Builder externalStoreName(com.aliyun.ros.cdk.core.IResolvable externalStoreName) {
            this.externalStoreName = externalStoreName;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getHost}
         * @param host Property host: The internal or public endpoint of the ApsaraDB RDS for MySQL instance. This parameter is required.
         * @return {@code this}
         */
        public Builder host(java.lang.String host) {
            this.host = host;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getHost}
         * @param host Property host: The internal or public endpoint of the ApsaraDB RDS for MySQL instance. This parameter is required.
         * @return {@code this}
         */
        public Builder host(com.aliyun.ros.cdk.core.IResolvable host) {
            this.host = host;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getPassword}
         * @param password Property password: The password that is used to log on to the ApsaraDB RDS for MySQL instance. This parameter is required.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getPassword}
         * @param password Property password: The password that is used to log on to the ApsaraDB RDS for MySQL instance. This parameter is required.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getPort}
         * @param port Property port: The internal or public port of the ApsaraDB RDS for MySQL instance. This parameter is required.
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getPort}
         * @param port Property port: The internal or public port of the ApsaraDB RDS for MySQL instance. This parameter is required.
         * @return {@code this}
         */
        public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getProject}
         * @param project Property project: The name of the project. This parameter is required.
         * @return {@code this}
         */
        public Builder project(java.lang.String project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getProject}
         * @param project Property project: The name of the project. This parameter is required.
         * @return {@code this}
         */
        public Builder project(com.aliyun.ros.cdk.core.IResolvable project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getRegion}
         * @param region Property region: The region where the ApsaraDB RDS for MySQL instance resides. This parameter is required.
         *               Valid values: cn-qingdao, cn-beijing, cn-hangzhou.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getRegion}
         * @param region Property region: The region where the ApsaraDB RDS for MySQL instance resides. This parameter is required.
         *               Valid values: cn-qingdao, cn-beijing, cn-hangzhou.
         * @return {@code this}
         */
        public Builder region(com.aliyun.ros.cdk.core.IResolvable region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getStoreType}
         * @param storeType Property storeType: The storage type. This parameter is required.
         *                  Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
         * @return {@code this}
         */
        public Builder storeType(java.lang.String storeType) {
            this.storeType = storeType;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getStoreType}
         * @param storeType Property storeType: The storage type. This parameter is required.
         *                  Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
         * @return {@code this}
         */
        public Builder storeType(com.aliyun.ros.cdk.core.IResolvable storeType) {
            this.storeType = storeType;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getTable}
         * @param table Property table: The name of the database table in the ApsaraDB RDS for MySQL instance. This parameter is required.
         * @return {@code this}
         */
        public Builder table(java.lang.String table) {
            this.table = table;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getTable}
         * @param table Property table: The name of the database table in the ApsaraDB RDS for MySQL instance. This parameter is required.
         * @return {@code this}
         */
        public Builder table(com.aliyun.ros.cdk.core.IResolvable table) {
            this.table = table;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getUsername}
         * @param username Property username: The username that is used to log on to the ApsaraDB RDS for MySQL instance. This parameter is required.
         * @return {@code this}
         */
        public Builder username(java.lang.String username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getUsername}
         * @param username Property username: The username that is used to log on to the ApsaraDB RDS for MySQL instance. This parameter is required.
         * @return {@code this}
         */
        public Builder username(com.aliyun.ros.cdk.core.IResolvable username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getInstanceId}
         * @param instanceId Property instanceId: The id of the RDS instance.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RdsExternalStoreProps#getInstanceId}
         * @param instanceId Property instanceId: The id of the RDS instance.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RdsExternalStoreProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RdsExternalStoreProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RdsExternalStoreProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RdsExternalStoreProps {
        private final java.lang.Object db;
        private final java.lang.Object externalStoreName;
        private final java.lang.Object host;
        private final java.lang.Object password;
        private final java.lang.Object port;
        private final java.lang.Object project;
        private final java.lang.Object region;
        private final java.lang.Object storeType;
        private final java.lang.Object table;
        private final java.lang.Object username;
        private final java.lang.Object vpcId;
        private final java.lang.Object instanceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.db = software.amazon.jsii.Kernel.get(this, "db", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.externalStoreName = software.amazon.jsii.Kernel.get(this, "externalStoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.host = software.amazon.jsii.Kernel.get(this, "host", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.project = software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storeType = software.amazon.jsii.Kernel.get(this, "storeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.table = software.amazon.jsii.Kernel.get(this, "table", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.username = software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.db = java.util.Objects.requireNonNull(builder.db, "db is required");
            this.externalStoreName = java.util.Objects.requireNonNull(builder.externalStoreName, "externalStoreName is required");
            this.host = java.util.Objects.requireNonNull(builder.host, "host is required");
            this.password = java.util.Objects.requireNonNull(builder.password, "password is required");
            this.port = java.util.Objects.requireNonNull(builder.port, "port is required");
            this.project = java.util.Objects.requireNonNull(builder.project, "project is required");
            this.region = java.util.Objects.requireNonNull(builder.region, "region is required");
            this.storeType = java.util.Objects.requireNonNull(builder.storeType, "storeType is required");
            this.table = java.util.Objects.requireNonNull(builder.table, "table is required");
            this.username = java.util.Objects.requireNonNull(builder.username, "username is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.instanceId = builder.instanceId;
        }

        @Override
        public final java.lang.Object getDb() {
            return this.db;
        }

        @Override
        public final java.lang.Object getExternalStoreName() {
            return this.externalStoreName;
        }

        @Override
        public final java.lang.Object getHost() {
            return this.host;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getPort() {
            return this.port;
        }

        @Override
        public final java.lang.Object getProject() {
            return this.project;
        }

        @Override
        public final java.lang.Object getRegion() {
            return this.region;
        }

        @Override
        public final java.lang.Object getStoreType() {
            return this.storeType;
        }

        @Override
        public final java.lang.Object getTable() {
            return this.table;
        }

        @Override
        public final java.lang.Object getUsername() {
            return this.username;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("db", om.valueToTree(this.getDb()));
            data.set("externalStoreName", om.valueToTree(this.getExternalStoreName()));
            data.set("host", om.valueToTree(this.getHost()));
            data.set("password", om.valueToTree(this.getPassword()));
            data.set("port", om.valueToTree(this.getPort()));
            data.set("project", om.valueToTree(this.getProject()));
            data.set("region", om.valueToTree(this.getRegion()));
            data.set("storeType", om.valueToTree(this.getStoreType()));
            data.set("table", om.valueToTree(this.getTable()));
            data.set("username", om.valueToTree(this.getUsername()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RdsExternalStoreProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RdsExternalStoreProps.Jsii$Proxy that = (RdsExternalStoreProps.Jsii$Proxy) o;

            if (!db.equals(that.db)) return false;
            if (!externalStoreName.equals(that.externalStoreName)) return false;
            if (!host.equals(that.host)) return false;
            if (!password.equals(that.password)) return false;
            if (!port.equals(that.port)) return false;
            if (!project.equals(that.project)) return false;
            if (!region.equals(that.region)) return false;
            if (!storeType.equals(that.storeType)) return false;
            if (!table.equals(that.table)) return false;
            if (!username.equals(that.username)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            return this.instanceId != null ? this.instanceId.equals(that.instanceId) : that.instanceId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.db.hashCode();
            result = 31 * result + (this.externalStoreName.hashCode());
            result = 31 * result + (this.host.hashCode());
            result = 31 * result + (this.password.hashCode());
            result = 31 * result + (this.port.hashCode());
            result = 31 * result + (this.project.hashCode());
            result = 31 * result + (this.region.hashCode());
            result = 31 * result + (this.storeType.hashCode());
            result = 31 * result + (this.table.hashCode());
            result = 31 * result + (this.username.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            return result;
        }
    }
}
