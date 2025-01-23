package com.aliyun.ros.cdk.polardb.datasource;

/**
 * Properties for defining a <code>DBNodeClasses</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbnodeclasses
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:42.532Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.datasource.DBNodeClassesProps")
@software.amazon.jsii.Jsii.Proxy(DBNodeClassesProps.Jsii$Proxy.class)
public interface DBNodeClassesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property payType: The billing method.
     * <p>
     * Valid values:
     * Postpaid: the pay-as-you-go billing method
     * Prepaid: the subscription billing method
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     * Property dbNodeClass: The node type.
     * <p>
     * For more information, see Specifications of compute nodes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbNodeClass() {
        return null;
    }

    /**
     * Property dbType: The database engine.
     * <p>
     * Valid values:
     * MySQL
     * PostgreSQL
     * Oracle
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbType() {
        return null;
    }

    /**
     * Property dbVersion: The version number of the database engine Valid values for the MySQL database engine: 5.6 5.7 8 Valid value for the PostgreSQL database engine: 11 Valid value for the Oracle database engine: 11 Note If you specify the DBType parameter, you must specify this parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbVersion() {
        return null;
    }

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
     * <p>
     * Note You can call the DescribeRegions operation to query information about zones.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DBNodeClassesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DBNodeClassesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DBNodeClassesProps> {
        java.lang.Object payType;
        java.lang.Object dbNodeClass;
        java.lang.Object dbType;
        java.lang.Object dbVersion;
        java.lang.Object refreshOptions;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link DBNodeClassesProps#getPayType}
         * @param payType Property payType: The billing method. This parameter is required.
         *                Valid values:
         *                Postpaid: the pay-as-you-go billing method
         *                Prepaid: the subscription billing method
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link DBNodeClassesProps#getPayType}
         * @param payType Property payType: The billing method. This parameter is required.
         *                Valid values:
         *                Postpaid: the pay-as-you-go billing method
         *                Prepaid: the subscription billing method
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link DBNodeClassesProps#getDbNodeClass}
         * @param dbNodeClass Property dbNodeClass: The node type.
         *                    For more information, see Specifications of compute nodes.
         * @return {@code this}
         */
        public Builder dbNodeClass(java.lang.String dbNodeClass) {
            this.dbNodeClass = dbNodeClass;
            return this;
        }

        /**
         * Sets the value of {@link DBNodeClassesProps#getDbNodeClass}
         * @param dbNodeClass Property dbNodeClass: The node type.
         *                    For more information, see Specifications of compute nodes.
         * @return {@code this}
         */
        public Builder dbNodeClass(com.aliyun.ros.cdk.core.IResolvable dbNodeClass) {
            this.dbNodeClass = dbNodeClass;
            return this;
        }

        /**
         * Sets the value of {@link DBNodeClassesProps#getDbType}
         * @param dbType Property dbType: The database engine.
         *               Valid values:
         *               MySQL
         *               PostgreSQL
         *               Oracle
         * @return {@code this}
         */
        public Builder dbType(java.lang.String dbType) {
            this.dbType = dbType;
            return this;
        }

        /**
         * Sets the value of {@link DBNodeClassesProps#getDbType}
         * @param dbType Property dbType: The database engine.
         *               Valid values:
         *               MySQL
         *               PostgreSQL
         *               Oracle
         * @return {@code this}
         */
        public Builder dbType(com.aliyun.ros.cdk.core.IResolvable dbType) {
            this.dbType = dbType;
            return this;
        }

        /**
         * Sets the value of {@link DBNodeClassesProps#getDbVersion}
         * @param dbVersion Property dbVersion: The version number of the database engine Valid values for the MySQL database engine: 5.6 5.7 8 Valid value for the PostgreSQL database engine: 11 Valid value for the Oracle database engine: 11 Note If you specify the DBType parameter, you must specify this parameter.
         * @return {@code this}
         */
        public Builder dbVersion(java.lang.String dbVersion) {
            this.dbVersion = dbVersion;
            return this;
        }

        /**
         * Sets the value of {@link DBNodeClassesProps#getDbVersion}
         * @param dbVersion Property dbVersion: The version number of the database engine Valid values for the MySQL database engine: 5.6 5.7 8 Valid value for the PostgreSQL database engine: 11 Valid value for the Oracle database engine: 11 Note If you specify the DBType parameter, you must specify this parameter.
         * @return {@code this}
         */
        public Builder dbVersion(com.aliyun.ros.cdk.core.IResolvable dbVersion) {
            this.dbVersion = dbVersion;
            return this;
        }

        /**
         * Sets the value of {@link DBNodeClassesProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link DBNodeClassesProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link DBNodeClassesProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
         *               Note You can call the DescribeRegions operation to query information about zones.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DBNodeClassesProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
         *               Note You can call the DescribeRegions operation to query information about zones.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DBNodeClassesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DBNodeClassesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DBNodeClassesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBNodeClassesProps {
        private final java.lang.Object payType;
        private final java.lang.Object dbNodeClass;
        private final java.lang.Object dbType;
        private final java.lang.Object dbVersion;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbNodeClass = software.amazon.jsii.Kernel.get(this, "dbNodeClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbType = software.amazon.jsii.Kernel.get(this, "dbType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbVersion = software.amazon.jsii.Kernel.get(this, "dbVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.dbNodeClass = builder.dbNodeClass;
            this.dbType = builder.dbType;
            this.dbVersion = builder.dbVersion;
            this.refreshOptions = builder.refreshOptions;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getDbNodeClass() {
            return this.dbNodeClass;
        }

        @Override
        public final java.lang.Object getDbType() {
            return this.dbType;
        }

        @Override
        public final java.lang.Object getDbVersion() {
            return this.dbVersion;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("payType", om.valueToTree(this.getPayType()));
            if (this.getDbNodeClass() != null) {
                data.set("dbNodeClass", om.valueToTree(this.getDbNodeClass()));
            }
            if (this.getDbType() != null) {
                data.set("dbType", om.valueToTree(this.getDbType()));
            }
            if (this.getDbVersion() != null) {
                data.set("dbVersion", om.valueToTree(this.getDbVersion()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.datasource.DBNodeClassesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DBNodeClassesProps.Jsii$Proxy that = (DBNodeClassesProps.Jsii$Proxy) o;

            if (!payType.equals(that.payType)) return false;
            if (this.dbNodeClass != null ? !this.dbNodeClass.equals(that.dbNodeClass) : that.dbNodeClass != null) return false;
            if (this.dbType != null ? !this.dbType.equals(that.dbType) : that.dbType != null) return false;
            if (this.dbVersion != null ? !this.dbVersion.equals(that.dbVersion) : that.dbVersion != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.payType.hashCode();
            result = 31 * result + (this.dbNodeClass != null ? this.dbNodeClass.hashCode() : 0);
            result = 31 * result + (this.dbType != null ? this.dbType.hashCode() : 0);
            result = 31 * result + (this.dbVersion != null ? this.dbVersion.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
