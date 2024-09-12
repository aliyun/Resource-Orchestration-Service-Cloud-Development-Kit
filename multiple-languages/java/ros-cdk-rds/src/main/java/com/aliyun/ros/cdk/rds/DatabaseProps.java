package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a <code>Database</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-database
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:29.832Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.DatabaseProps")
@software.amazon.jsii.Jsii.Proxy(DatabaseProps.Jsii$Proxy.class)
public interface DatabaseProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property characterSetName: The character set you want to use for the database.
     * <p>
     * Valid values:
     * MySQL and MariaDB: utf8 | gbk | latin1 | utf8mb4.
     * SQL Server: Chinese_PRC_CI_AS | Chinese_PRC_CS_AS | SQL_Latin1_General_CP1_CI_AS | SQL_Latin1_General_CP1_CS_AS
     * | Chinese_PRC_BIN.
     * PostgreSQL: KOI8U | UTF8 | WIN866 | WIN874 | WIN1250 | WIN1251 | WIN1252 | WIN1253 | WIN1254 |
     * WIN1255 | WIN1256 | WIN1257 | WIN1258 | EUC_CN | EUC_KR | EUC_TW | EUC_JP | EUC_JIS_2004
     * | KOI8R | MULE_INTERNAL | LATIN1 | LATIN2 | LATIN3 | LATIN4 | LATIN5 | LATIN6 | LATIN7
     * | LATIN8 | LATIN9 | LATIN10 | ISO_8859_5 | ISO_8859_6 | ISO_8859_7 | ISO_8859_8 |
     * SQL_ASCII.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCharacterSetName();

    /**
     * Property dbInstanceId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property dbName: The name of the database you want to create.
     * <p>
     * Note
     * The name must be 2 to 64 characters in length.
     * The name must start with a lowercase letter and end with a lowercase letter or digit.
     * The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
     * The name must be unique in the instance.
     * For more information about invalid characters, see Forbidden keywords table.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbName();

    /**
     * Property dbDescription: The description of the database.
     * <p>
     * The description must be 2 to 256 characters in length.
     * The description must start with a letter and can contain letters, digits, underscores
     * (_), and hyphens (-).
     * Note The description cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DatabaseProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DatabaseProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DatabaseProps> {
        java.lang.Object characterSetName;
        java.lang.Object dbInstanceId;
        java.lang.Object dbName;
        java.lang.Object dbDescription;

        /**
         * Sets the value of {@link DatabaseProps#getCharacterSetName}
         * @param characterSetName Property characterSetName: The character set you want to use for the database. This parameter is required.
         *                         Valid values:
         *                         MySQL and MariaDB: utf8 | gbk | latin1 | utf8mb4.
         *                         SQL Server: Chinese_PRC_CI_AS | Chinese_PRC_CS_AS | SQL_Latin1_General_CP1_CI_AS | SQL_Latin1_General_CP1_CS_AS
         *                         | Chinese_PRC_BIN.
         *                         PostgreSQL: KOI8U | UTF8 | WIN866 | WIN874 | WIN1250 | WIN1251 | WIN1252 | WIN1253 | WIN1254 |
         *                         WIN1255 | WIN1256 | WIN1257 | WIN1258 | EUC_CN | EUC_KR | EUC_TW | EUC_JP | EUC_JIS_2004
         *                         | KOI8R | MULE_INTERNAL | LATIN1 | LATIN2 | LATIN3 | LATIN4 | LATIN5 | LATIN6 | LATIN7
         *                         | LATIN8 | LATIN9 | LATIN10 | ISO_8859_5 | ISO_8859_6 | ISO_8859_7 | ISO_8859_8 |
         *                         SQL_ASCII.
         * @return {@code this}
         */
        public Builder characterSetName(java.lang.String characterSetName) {
            this.characterSetName = characterSetName;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getCharacterSetName}
         * @param characterSetName Property characterSetName: The character set you want to use for the database. This parameter is required.
         *                         Valid values:
         *                         MySQL and MariaDB: utf8 | gbk | latin1 | utf8mb4.
         *                         SQL Server: Chinese_PRC_CI_AS | Chinese_PRC_CS_AS | SQL_Latin1_General_CP1_CI_AS | SQL_Latin1_General_CP1_CS_AS
         *                         | Chinese_PRC_BIN.
         *                         PostgreSQL: KOI8U | UTF8 | WIN866 | WIN874 | WIN1250 | WIN1251 | WIN1252 | WIN1253 | WIN1254 |
         *                         WIN1255 | WIN1256 | WIN1257 | WIN1258 | EUC_CN | EUC_KR | EUC_TW | EUC_JP | EUC_JIS_2004
         *                         | KOI8R | MULE_INTERNAL | LATIN1 | LATIN2 | LATIN3 | LATIN4 | LATIN5 | LATIN6 | LATIN7
         *                         | LATIN8 | LATIN9 | LATIN10 | ISO_8859_5 | ISO_8859_6 | ISO_8859_7 | ISO_8859_8 |
         *                         SQL_ASCII.
         * @return {@code this}
         */
        public Builder characterSetName(com.aliyun.ros.cdk.core.IResolvable characterSetName) {
            this.characterSetName = characterSetName;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getDbName}
         * @param dbName Property dbName: The name of the database you want to create. This parameter is required.
         *               Note
         *               The name must be 2 to 64 characters in length.
         *               The name must start with a lowercase letter and end with a lowercase letter or digit.
         *               The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
         *               The name must be unique in the instance.
         *               For more information about invalid characters, see Forbidden keywords table.
         * @return {@code this}
         */
        public Builder dbName(java.lang.String dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getDbName}
         * @param dbName Property dbName: The name of the database you want to create. This parameter is required.
         *               Note
         *               The name must be 2 to 64 characters in length.
         *               The name must start with a lowercase letter and end with a lowercase letter or digit.
         *               The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
         *               The name must be unique in the instance.
         *               For more information about invalid characters, see Forbidden keywords table.
         * @return {@code this}
         */
        public Builder dbName(com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getDbDescription}
         * @param dbDescription Property dbDescription: The description of the database.
         *                      The description must be 2 to 256 characters in length.
         *                      The description must start with a letter and can contain letters, digits, underscores
         *                      (_), and hyphens (-).
         *                      Note The description cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder dbDescription(java.lang.String dbDescription) {
            this.dbDescription = dbDescription;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getDbDescription}
         * @param dbDescription Property dbDescription: The description of the database.
         *                      The description must be 2 to 256 characters in length.
         *                      The description must start with a letter and can contain letters, digits, underscores
         *                      (_), and hyphens (-).
         *                      Note The description cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder dbDescription(com.aliyun.ros.cdk.core.IResolvable dbDescription) {
            this.dbDescription = dbDescription;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DatabaseProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DatabaseProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DatabaseProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DatabaseProps {
        private final java.lang.Object characterSetName;
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object dbName;
        private final java.lang.Object dbDescription;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.characterSetName = software.amazon.jsii.Kernel.get(this, "characterSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbDescription = software.amazon.jsii.Kernel.get(this, "dbDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.characterSetName = java.util.Objects.requireNonNull(builder.characterSetName, "characterSetName is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.dbName = java.util.Objects.requireNonNull(builder.dbName, "dbName is required");
            this.dbDescription = builder.dbDescription;
        }

        @Override
        public final java.lang.Object getCharacterSetName() {
            return this.characterSetName;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getDbName() {
            return this.dbName;
        }

        @Override
        public final java.lang.Object getDbDescription() {
            return this.dbDescription;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("characterSetName", om.valueToTree(this.getCharacterSetName()));
            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("dbName", om.valueToTree(this.getDbName()));
            if (this.getDbDescription() != null) {
                data.set("dbDescription", om.valueToTree(this.getDbDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.DatabaseProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DatabaseProps.Jsii$Proxy that = (DatabaseProps.Jsii$Proxy) o;

            if (!characterSetName.equals(that.characterSetName)) return false;
            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!dbName.equals(that.dbName)) return false;
            return this.dbDescription != null ? this.dbDescription.equals(that.dbDescription) : that.dbDescription == null;
        }

        @Override
        public final int hashCode() {
            int result = this.characterSetName.hashCode();
            result = 31 * result + (this.dbInstanceId.hashCode());
            result = 31 * result + (this.dbName.hashCode());
            result = 31 * result + (this.dbDescription != null ? this.dbDescription.hashCode() : 0);
            return result;
        }
    }
}
