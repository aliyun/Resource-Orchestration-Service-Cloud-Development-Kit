package com.aliyun.ros.cdk.polardbx;

/**
 * Properties for defining a <code>Database</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-database
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:23.212Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardbx.$Module.class, fqn = "@alicloud/ros-cdk-polardbx.DatabaseProps")
@software.amazon.jsii.Jsii.Proxy(DatabaseProps.Jsii$Proxy.class)
public interface DatabaseProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property accounts: List of accounts.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccounts();

    /**
     * Property characterSetName: Character set, which supports the following character sets: - **utf8 * * - <strong>gbk</strong> - **latin1 * * - **utf8mb4 * *.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCharacterSetName();

    /**
     * Property databaseName: The name of the database.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDatabaseName();

    /**
     * Property dbInstanceId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property databaseDescription: Database description information.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDatabaseDescription() {
        return null;
    }

    /**
     * Property mode: The mode selected when creating the database.
     * <p>
     * The values are as follows:
     * <p>
     * <ul>
     * <li><strong>auto</strong>: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;</li>
     * <li><strong>drds</strong>: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMode() {
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
        java.lang.Object accounts;
        java.lang.Object characterSetName;
        java.lang.Object databaseName;
        java.lang.Object dbInstanceId;
        java.lang.Object databaseDescription;
        java.lang.Object mode;

        /**
         * Sets the value of {@link DatabaseProps#getAccounts}
         * @param accounts Property accounts: List of accounts. This parameter is required.
         * @return {@code this}
         */
        public Builder accounts(com.aliyun.ros.cdk.core.IResolvable accounts) {
            this.accounts = accounts;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getAccounts}
         * @param accounts Property accounts: List of accounts. This parameter is required.
         * @return {@code this}
         */
        public Builder accounts(java.util.List<? extends java.lang.Object> accounts) {
            this.accounts = accounts;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getCharacterSetName}
         * @param characterSetName Property characterSetName: Character set, which supports the following character sets: - **utf8 * * - <strong>gbk</strong> - **latin1 * * - **utf8mb4 * *. This parameter is required.
         * @return {@code this}
         */
        public Builder characterSetName(java.lang.String characterSetName) {
            this.characterSetName = characterSetName;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getCharacterSetName}
         * @param characterSetName Property characterSetName: Character set, which supports the following character sets: - **utf8 * * - <strong>gbk</strong> - **latin1 * * - **utf8mb4 * *. This parameter is required.
         * @return {@code this}
         */
        public Builder characterSetName(com.aliyun.ros.cdk.core.IResolvable characterSetName) {
            this.characterSetName = characterSetName;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getDatabaseName}
         * @param databaseName Property databaseName: The name of the database. This parameter is required.
         * @return {@code this}
         */
        public Builder databaseName(java.lang.String databaseName) {
            this.databaseName = databaseName;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getDatabaseName}
         * @param databaseName Property databaseName: The name of the database. This parameter is required.
         * @return {@code this}
         */
        public Builder databaseName(com.aliyun.ros.cdk.core.IResolvable databaseName) {
            this.databaseName = databaseName;
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
         * Sets the value of {@link DatabaseProps#getDatabaseDescription}
         * @param databaseDescription Property databaseDescription: Database description information.
         * @return {@code this}
         */
        public Builder databaseDescription(java.lang.String databaseDescription) {
            this.databaseDescription = databaseDescription;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getDatabaseDescription}
         * @param databaseDescription Property databaseDescription: Database description information.
         * @return {@code this}
         */
        public Builder databaseDescription(com.aliyun.ros.cdk.core.IResolvable databaseDescription) {
            this.databaseDescription = databaseDescription;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getMode}
         * @param mode Property mode: The mode selected when creating the database.
         *             The values are as follows:
         *             <p>
         *             <ul>
         *             <li><strong>auto</strong>: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;</li>
         *             <li><strong>drds</strong>: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder mode(java.lang.String mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getMode}
         * @param mode Property mode: The mode selected when creating the database.
         *             The values are as follows:
         *             <p>
         *             <ul>
         *             <li><strong>auto</strong>: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;</li>
         *             <li><strong>drds</strong>: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder mode(com.aliyun.ros.cdk.core.IResolvable mode) {
            this.mode = mode;
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
        private final java.lang.Object accounts;
        private final java.lang.Object characterSetName;
        private final java.lang.Object databaseName;
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object databaseDescription;
        private final java.lang.Object mode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accounts = software.amazon.jsii.Kernel.get(this, "accounts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.characterSetName = software.amazon.jsii.Kernel.get(this, "characterSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.databaseName = software.amazon.jsii.Kernel.get(this, "databaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.databaseDescription = software.amazon.jsii.Kernel.get(this, "databaseDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mode = software.amazon.jsii.Kernel.get(this, "mode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accounts = java.util.Objects.requireNonNull(builder.accounts, "accounts is required");
            this.characterSetName = java.util.Objects.requireNonNull(builder.characterSetName, "characterSetName is required");
            this.databaseName = java.util.Objects.requireNonNull(builder.databaseName, "databaseName is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.databaseDescription = builder.databaseDescription;
            this.mode = builder.mode;
        }

        @Override
        public final java.lang.Object getAccounts() {
            return this.accounts;
        }

        @Override
        public final java.lang.Object getCharacterSetName() {
            return this.characterSetName;
        }

        @Override
        public final java.lang.Object getDatabaseName() {
            return this.databaseName;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getDatabaseDescription() {
            return this.databaseDescription;
        }

        @Override
        public final java.lang.Object getMode() {
            return this.mode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accounts", om.valueToTree(this.getAccounts()));
            data.set("characterSetName", om.valueToTree(this.getCharacterSetName()));
            data.set("databaseName", om.valueToTree(this.getDatabaseName()));
            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            if (this.getDatabaseDescription() != null) {
                data.set("databaseDescription", om.valueToTree(this.getDatabaseDescription()));
            }
            if (this.getMode() != null) {
                data.set("mode", om.valueToTree(this.getMode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardbx.DatabaseProps"));
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

            if (!accounts.equals(that.accounts)) return false;
            if (!characterSetName.equals(that.characterSetName)) return false;
            if (!databaseName.equals(that.databaseName)) return false;
            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (this.databaseDescription != null ? !this.databaseDescription.equals(that.databaseDescription) : that.databaseDescription != null) return false;
            return this.mode != null ? this.mode.equals(that.mode) : that.mode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accounts.hashCode();
            result = 31 * result + (this.characterSetName.hashCode());
            result = 31 * result + (this.databaseName.hashCode());
            result = 31 * result + (this.dbInstanceId.hashCode());
            result = 31 * result + (this.databaseDescription != null ? this.databaseDescription.hashCode() : 0);
            result = 31 * result + (this.mode != null ? this.mode.hashCode() : 0);
            return result;
        }
    }
}
