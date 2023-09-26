package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a <code>ALIYUN::POLARDB::DBInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:46.994Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.DBInstanceProps")
@software.amazon.jsii.Jsii.Proxy(DBInstanceProps.Jsii$Proxy.class)
public interface DBInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property characterSetName: The character set of the database.
     * <p>
     * For more information, see Character sets.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCharacterSetName();

    /**
     * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     * Property dbName: The name of the database to be created.
     * <p>
     * The name must comply with the following rules:
     * It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
     * (-), and underscores (_).
     * It must end with a letter or a digit. It can be up to 64 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbName();

    /**
     * Property accountName: The name of the database account to be used.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountName() {
        return null;
    }

    /**
     * Property accountPrivilege: The permissions of the database account on the database.
     * <p>
     * Valid values:
     * ReadWrite: has read and write permissions on the database.
     * ReadOnly: has the read-only permission on the database.
     * DMLOnly: runs only data manipulation language (DML) statements.
     * DDLOnly: runs only data definition language (DDL) statements.
     * Default value: ReadWrite.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountPrivilege() {
        return null;
    }

    /**
     * Property collate: A locale setting that specifies the collation for newly created databases.
     * <p>
     * The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
     * when the cluster is PolarDB MySQL, this parameter is not supported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCollate() {
        return null;
    }

    /**
     * Property ctype: A locale setting that specifies the character classification of the database.
     * <p>
     * The locale must be compatible with the character set set by the CharacterSetName parameter.
     * It is consistent with the incoming information of Collate.
     * When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
     * when the cluster is PolarDB MySQL, this parameter is optional.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCtype() {
        return null;
    }

    /**
     * Property dbDescription: The description of the database.
     * <p>
     * Valid values:
     * It cannot start with http:// or https://.
     * It must be 2 to 256 characters in length.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DBInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DBInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DBInstanceProps> {
        java.lang.Object characterSetName;
        java.lang.Object dbClusterId;
        java.lang.Object dbName;
        java.lang.Object accountName;
        java.lang.Object accountPrivilege;
        java.lang.Object collate;
        java.lang.Object ctype;
        java.lang.Object dbDescription;

        /**
         * Sets the value of {@link DBInstanceProps#getCharacterSetName}
         * @param characterSetName Property characterSetName: The character set of the database. This parameter is required.
         *                         For more information, see Character sets.
         * @return {@code this}
         */
        public Builder characterSetName(java.lang.String characterSetName) {
            this.characterSetName = characterSetName;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getCharacterSetName}
         * @param characterSetName Property characterSetName: The character set of the database. This parameter is required.
         *                         For more information, see Character sets.
         * @return {@code this}
         */
        public Builder characterSetName(com.aliyun.ros.cdk.core.IResolvable characterSetName) {
            this.characterSetName = characterSetName;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbClusterId}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbName}
         * @param dbName Property dbName: The name of the database to be created. This parameter is required.
         *               The name must comply with the following rules:
         *               It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
         *               (-), and underscores (_).
         *               It must end with a letter or a digit. It can be up to 64 characters in length.
         * @return {@code this}
         */
        public Builder dbName(java.lang.String dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbName}
         * @param dbName Property dbName: The name of the database to be created. This parameter is required.
         *               The name must comply with the following rules:
         *               It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
         *               (-), and underscores (_).
         *               It must end with a letter or a digit. It can be up to 64 characters in length.
         * @return {@code this}
         */
        public Builder dbName(com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.dbName = dbName;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getAccountName}
         * @param accountName Property accountName: The name of the database account to be used.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getAccountName}
         * @param accountName Property accountName: The name of the database account to be used.
         * @return {@code this}
         */
        public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getAccountPrivilege}
         * @param accountPrivilege Property accountPrivilege: The permissions of the database account on the database.
         *                         Valid values:
         *                         ReadWrite: has read and write permissions on the database.
         *                         ReadOnly: has the read-only permission on the database.
         *                         DMLOnly: runs only data manipulation language (DML) statements.
         *                         DDLOnly: runs only data definition language (DDL) statements.
         *                         Default value: ReadWrite.
         * @return {@code this}
         */
        public Builder accountPrivilege(java.lang.String accountPrivilege) {
            this.accountPrivilege = accountPrivilege;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getAccountPrivilege}
         * @param accountPrivilege Property accountPrivilege: The permissions of the database account on the database.
         *                         Valid values:
         *                         ReadWrite: has read and write permissions on the database.
         *                         ReadOnly: has the read-only permission on the database.
         *                         DMLOnly: runs only data manipulation language (DML) statements.
         *                         DDLOnly: runs only data definition language (DDL) statements.
         *                         Default value: ReadWrite.
         * @return {@code this}
         */
        public Builder accountPrivilege(com.aliyun.ros.cdk.core.IResolvable accountPrivilege) {
            this.accountPrivilege = accountPrivilege;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getCollate}
         * @param collate Property collate: A locale setting that specifies the collation for newly created databases.
         *                The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
         *                when the cluster is PolarDB MySQL, this parameter is not supported.
         * @return {@code this}
         */
        public Builder collate(java.lang.String collate) {
            this.collate = collate;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getCollate}
         * @param collate Property collate: A locale setting that specifies the collation for newly created databases.
         *                The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
         *                when the cluster is PolarDB MySQL, this parameter is not supported.
         * @return {@code this}
         */
        public Builder collate(com.aliyun.ros.cdk.core.IResolvable collate) {
            this.collate = collate;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getCtype}
         * @param ctype Property ctype: A locale setting that specifies the character classification of the database.
         *              The locale must be compatible with the character set set by the CharacterSetName parameter.
         *              It is consistent with the incoming information of Collate.
         *              When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
         *              when the cluster is PolarDB MySQL, this parameter is optional.
         * @return {@code this}
         */
        public Builder ctype(java.lang.String ctype) {
            this.ctype = ctype;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getCtype}
         * @param ctype Property ctype: A locale setting that specifies the character classification of the database.
         *              The locale must be compatible with the character set set by the CharacterSetName parameter.
         *              It is consistent with the incoming information of Collate.
         *              When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
         *              when the cluster is PolarDB MySQL, this parameter is optional.
         * @return {@code this}
         */
        public Builder ctype(com.aliyun.ros.cdk.core.IResolvable ctype) {
            this.ctype = ctype;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbDescription}
         * @param dbDescription Property dbDescription: The description of the database.
         *                      Valid values:
         *                      It cannot start with http:// or https://.
         *                      It must be 2 to 256 characters in length.
         * @return {@code this}
         */
        public Builder dbDescription(java.lang.String dbDescription) {
            this.dbDescription = dbDescription;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceProps#getDbDescription}
         * @param dbDescription Property dbDescription: The description of the database.
         *                      Valid values:
         *                      It cannot start with http:// or https://.
         *                      It must be 2 to 256 characters in length.
         * @return {@code this}
         */
        public Builder dbDescription(com.aliyun.ros.cdk.core.IResolvable dbDescription) {
            this.dbDescription = dbDescription;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DBInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DBInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DBInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBInstanceProps {
        private final java.lang.Object characterSetName;
        private final java.lang.Object dbClusterId;
        private final java.lang.Object dbName;
        private final java.lang.Object accountName;
        private final java.lang.Object accountPrivilege;
        private final java.lang.Object collate;
        private final java.lang.Object ctype;
        private final java.lang.Object dbDescription;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.characterSetName = software.amazon.jsii.Kernel.get(this, "characterSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountPrivilege = software.amazon.jsii.Kernel.get(this, "accountPrivilege", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.collate = software.amazon.jsii.Kernel.get(this, "collate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ctype = software.amazon.jsii.Kernel.get(this, "ctype", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbDescription = software.amazon.jsii.Kernel.get(this, "dbDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.characterSetName = java.util.Objects.requireNonNull(builder.characterSetName, "characterSetName is required");
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.dbName = java.util.Objects.requireNonNull(builder.dbName, "dbName is required");
            this.accountName = builder.accountName;
            this.accountPrivilege = builder.accountPrivilege;
            this.collate = builder.collate;
            this.ctype = builder.ctype;
            this.dbDescription = builder.dbDescription;
        }

        @Override
        public final java.lang.Object getCharacterSetName() {
            return this.characterSetName;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getDbName() {
            return this.dbName;
        }

        @Override
        public final java.lang.Object getAccountName() {
            return this.accountName;
        }

        @Override
        public final java.lang.Object getAccountPrivilege() {
            return this.accountPrivilege;
        }

        @Override
        public final java.lang.Object getCollate() {
            return this.collate;
        }

        @Override
        public final java.lang.Object getCtype() {
            return this.ctype;
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
            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            data.set("dbName", om.valueToTree(this.getDbName()));
            if (this.getAccountName() != null) {
                data.set("accountName", om.valueToTree(this.getAccountName()));
            }
            if (this.getAccountPrivilege() != null) {
                data.set("accountPrivilege", om.valueToTree(this.getAccountPrivilege()));
            }
            if (this.getCollate() != null) {
                data.set("collate", om.valueToTree(this.getCollate()));
            }
            if (this.getCtype() != null) {
                data.set("ctype", om.valueToTree(this.getCtype()));
            }
            if (this.getDbDescription() != null) {
                data.set("dbDescription", om.valueToTree(this.getDbDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.DBInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DBInstanceProps.Jsii$Proxy that = (DBInstanceProps.Jsii$Proxy) o;

            if (!characterSetName.equals(that.characterSetName)) return false;
            if (!dbClusterId.equals(that.dbClusterId)) return false;
            if (!dbName.equals(that.dbName)) return false;
            if (this.accountName != null ? !this.accountName.equals(that.accountName) : that.accountName != null) return false;
            if (this.accountPrivilege != null ? !this.accountPrivilege.equals(that.accountPrivilege) : that.accountPrivilege != null) return false;
            if (this.collate != null ? !this.collate.equals(that.collate) : that.collate != null) return false;
            if (this.ctype != null ? !this.ctype.equals(that.ctype) : that.ctype != null) return false;
            return this.dbDescription != null ? this.dbDescription.equals(that.dbDescription) : that.dbDescription == null;
        }

        @Override
        public final int hashCode() {
            int result = this.characterSetName.hashCode();
            result = 31 * result + (this.dbClusterId.hashCode());
            result = 31 * result + (this.dbName.hashCode());
            result = 31 * result + (this.accountName != null ? this.accountName.hashCode() : 0);
            result = 31 * result + (this.accountPrivilege != null ? this.accountPrivilege.hashCode() : 0);
            result = 31 * result + (this.collate != null ? this.collate.hashCode() : 0);
            result = 31 * result + (this.ctype != null ? this.ctype.hashCode() : 0);
            result = 31 * result + (this.dbDescription != null ? this.dbDescription.hashCode() : 0);
            return result;
        }
    }
}
