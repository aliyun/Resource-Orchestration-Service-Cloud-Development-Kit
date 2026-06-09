package com.aliyun.ros.cdk.gpdb;

/**
 * Properties for defining a <code>JdbcDataSource</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-jdbcdatasource
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:13:37.762Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.JdbcDataSourceProps")
@software.amazon.jsii.Jsii.Proxy(JdbcDataSourceProps.Jsii$Proxy.class)
public interface JdbcDataSourceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbInstanceId: The instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property jdbcUserName: The name of the database account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getJdbcUserName();

    /**
     * Property dataSourceDescription: Data Source Description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataSourceDescription() {
        return null;
    }

    /**
     * Property dataSourceName: Data Source Name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataSourceName() {
        return null;
    }

    /**
     * Property dataSourceType: Data Source Type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataSourceType() {
        return null;
    }

    /**
     * Property jdbcConnectionString: The JDBC connection string.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJdbcConnectionString() {
        return null;
    }

    /**
     * Property jdbcPassword: The password of the database account.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJdbcPassword() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link JdbcDataSourceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link JdbcDataSourceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<JdbcDataSourceProps> {
        java.lang.Object dbInstanceId;
        java.lang.Object jdbcUserName;
        java.lang.Object dataSourceDescription;
        java.lang.Object dataSourceName;
        java.lang.Object dataSourceType;
        java.lang.Object jdbcConnectionString;
        java.lang.Object jdbcPassword;

        /**
         * Sets the value of {@link JdbcDataSourceProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link JdbcDataSourceProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link JdbcDataSourceProps#getJdbcUserName}
         * @param jdbcUserName Property jdbcUserName: The name of the database account. This parameter is required.
         * @return {@code this}
         */
        public Builder jdbcUserName(java.lang.String jdbcUserName) {
            this.jdbcUserName = jdbcUserName;
            return this;
        }

        /**
         * Sets the value of {@link JdbcDataSourceProps#getJdbcUserName}
         * @param jdbcUserName Property jdbcUserName: The name of the database account. This parameter is required.
         * @return {@code this}
         */
        public Builder jdbcUserName(com.aliyun.ros.cdk.core.IResolvable jdbcUserName) {
            this.jdbcUserName = jdbcUserName;
            return this;
        }

        /**
         * Sets the value of {@link JdbcDataSourceProps#getDataSourceDescription}
         * @param dataSourceDescription Property dataSourceDescription: Data Source Description.
         * @return {@code this}
         */
        public Builder dataSourceDescription(java.lang.String dataSourceDescription) {
            this.dataSourceDescription = dataSourceDescription;
            return this;
        }

        /**
         * Sets the value of {@link JdbcDataSourceProps#getDataSourceDescription}
         * @param dataSourceDescription Property dataSourceDescription: Data Source Description.
         * @return {@code this}
         */
        public Builder dataSourceDescription(com.aliyun.ros.cdk.core.IResolvable dataSourceDescription) {
            this.dataSourceDescription = dataSourceDescription;
            return this;
        }

        /**
         * Sets the value of {@link JdbcDataSourceProps#getDataSourceName}
         * @param dataSourceName Property dataSourceName: Data Source Name.
         * @return {@code this}
         */
        public Builder dataSourceName(java.lang.String dataSourceName) {
            this.dataSourceName = dataSourceName;
            return this;
        }

        /**
         * Sets the value of {@link JdbcDataSourceProps#getDataSourceName}
         * @param dataSourceName Property dataSourceName: Data Source Name.
         * @return {@code this}
         */
        public Builder dataSourceName(com.aliyun.ros.cdk.core.IResolvable dataSourceName) {
            this.dataSourceName = dataSourceName;
            return this;
        }

        /**
         * Sets the value of {@link JdbcDataSourceProps#getDataSourceType}
         * @param dataSourceType Property dataSourceType: Data Source Type.
         * @return {@code this}
         */
        public Builder dataSourceType(java.lang.String dataSourceType) {
            this.dataSourceType = dataSourceType;
            return this;
        }

        /**
         * Sets the value of {@link JdbcDataSourceProps#getDataSourceType}
         * @param dataSourceType Property dataSourceType: Data Source Type.
         * @return {@code this}
         */
        public Builder dataSourceType(com.aliyun.ros.cdk.core.IResolvable dataSourceType) {
            this.dataSourceType = dataSourceType;
            return this;
        }

        /**
         * Sets the value of {@link JdbcDataSourceProps#getJdbcConnectionString}
         * @param jdbcConnectionString Property jdbcConnectionString: The JDBC connection string.
         * @return {@code this}
         */
        public Builder jdbcConnectionString(java.lang.String jdbcConnectionString) {
            this.jdbcConnectionString = jdbcConnectionString;
            return this;
        }

        /**
         * Sets the value of {@link JdbcDataSourceProps#getJdbcConnectionString}
         * @param jdbcConnectionString Property jdbcConnectionString: The JDBC connection string.
         * @return {@code this}
         */
        public Builder jdbcConnectionString(com.aliyun.ros.cdk.core.IResolvable jdbcConnectionString) {
            this.jdbcConnectionString = jdbcConnectionString;
            return this;
        }

        /**
         * Sets the value of {@link JdbcDataSourceProps#getJdbcPassword}
         * @param jdbcPassword Property jdbcPassword: The password of the database account.
         * @return {@code this}
         */
        public Builder jdbcPassword(java.lang.String jdbcPassword) {
            this.jdbcPassword = jdbcPassword;
            return this;
        }

        /**
         * Sets the value of {@link JdbcDataSourceProps#getJdbcPassword}
         * @param jdbcPassword Property jdbcPassword: The password of the database account.
         * @return {@code this}
         */
        public Builder jdbcPassword(com.aliyun.ros.cdk.core.IResolvable jdbcPassword) {
            this.jdbcPassword = jdbcPassword;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link JdbcDataSourceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public JdbcDataSourceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link JdbcDataSourceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements JdbcDataSourceProps {
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object jdbcUserName;
        private final java.lang.Object dataSourceDescription;
        private final java.lang.Object dataSourceName;
        private final java.lang.Object dataSourceType;
        private final java.lang.Object jdbcConnectionString;
        private final java.lang.Object jdbcPassword;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jdbcUserName = software.amazon.jsii.Kernel.get(this, "jdbcUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataSourceDescription = software.amazon.jsii.Kernel.get(this, "dataSourceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataSourceName = software.amazon.jsii.Kernel.get(this, "dataSourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataSourceType = software.amazon.jsii.Kernel.get(this, "dataSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jdbcConnectionString = software.amazon.jsii.Kernel.get(this, "jdbcConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jdbcPassword = software.amazon.jsii.Kernel.get(this, "jdbcPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.jdbcUserName = java.util.Objects.requireNonNull(builder.jdbcUserName, "jdbcUserName is required");
            this.dataSourceDescription = builder.dataSourceDescription;
            this.dataSourceName = builder.dataSourceName;
            this.dataSourceType = builder.dataSourceType;
            this.jdbcConnectionString = builder.jdbcConnectionString;
            this.jdbcPassword = builder.jdbcPassword;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getJdbcUserName() {
            return this.jdbcUserName;
        }

        @Override
        public final java.lang.Object getDataSourceDescription() {
            return this.dataSourceDescription;
        }

        @Override
        public final java.lang.Object getDataSourceName() {
            return this.dataSourceName;
        }

        @Override
        public final java.lang.Object getDataSourceType() {
            return this.dataSourceType;
        }

        @Override
        public final java.lang.Object getJdbcConnectionString() {
            return this.jdbcConnectionString;
        }

        @Override
        public final java.lang.Object getJdbcPassword() {
            return this.jdbcPassword;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("jdbcUserName", om.valueToTree(this.getJdbcUserName()));
            if (this.getDataSourceDescription() != null) {
                data.set("dataSourceDescription", om.valueToTree(this.getDataSourceDescription()));
            }
            if (this.getDataSourceName() != null) {
                data.set("dataSourceName", om.valueToTree(this.getDataSourceName()));
            }
            if (this.getDataSourceType() != null) {
                data.set("dataSourceType", om.valueToTree(this.getDataSourceType()));
            }
            if (this.getJdbcConnectionString() != null) {
                data.set("jdbcConnectionString", om.valueToTree(this.getJdbcConnectionString()));
            }
            if (this.getJdbcPassword() != null) {
                data.set("jdbcPassword", om.valueToTree(this.getJdbcPassword()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-gpdb.JdbcDataSourceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            JdbcDataSourceProps.Jsii$Proxy that = (JdbcDataSourceProps.Jsii$Proxy) o;

            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!jdbcUserName.equals(that.jdbcUserName)) return false;
            if (this.dataSourceDescription != null ? !this.dataSourceDescription.equals(that.dataSourceDescription) : that.dataSourceDescription != null) return false;
            if (this.dataSourceName != null ? !this.dataSourceName.equals(that.dataSourceName) : that.dataSourceName != null) return false;
            if (this.dataSourceType != null ? !this.dataSourceType.equals(that.dataSourceType) : that.dataSourceType != null) return false;
            if (this.jdbcConnectionString != null ? !this.jdbcConnectionString.equals(that.jdbcConnectionString) : that.jdbcConnectionString != null) return false;
            return this.jdbcPassword != null ? this.jdbcPassword.equals(that.jdbcPassword) : that.jdbcPassword == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceId.hashCode();
            result = 31 * result + (this.jdbcUserName.hashCode());
            result = 31 * result + (this.dataSourceDescription != null ? this.dataSourceDescription.hashCode() : 0);
            result = 31 * result + (this.dataSourceName != null ? this.dataSourceName.hashCode() : 0);
            result = 31 * result + (this.dataSourceType != null ? this.dataSourceType.hashCode() : 0);
            result = 31 * result + (this.jdbcConnectionString != null ? this.jdbcConnectionString.hashCode() : 0);
            result = 31 * result + (this.jdbcPassword != null ? this.jdbcPassword.hashCode() : 0);
            return result;
        }
    }
}
