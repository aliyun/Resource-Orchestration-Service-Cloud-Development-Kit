package com.aliyun.ros.cdk.gpdb;

/**
 * Properties for defining a <code>Database</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-database
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.933Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.DatabaseProps")
@software.amazon.jsii.Jsii.Proxy(DatabaseProps.Jsii$Proxy.class)
public interface DatabaseProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property databaseName: Database Name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDatabaseName();

    /**
     * Property dbInstanceId: Instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property owner: Data Sheet owner.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOwner();

    /**
     * Property characterSetName: Character set, default value is UTF8.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCharacterSetName() {
        return null;
    }

    /**
     * Property collate: Database locale parameters, specifying string comparison/collation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCollate() {
        return null;
    }

    /**
     * Property ctype: Database locale parameters, specifying character classification/case conversion rules.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCtype() {
        return null;
    }

    /**
     * Property description: Database Description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
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
        java.lang.Object databaseName;
        java.lang.Object dbInstanceId;
        java.lang.Object owner;
        java.lang.Object characterSetName;
        java.lang.Object collate;
        java.lang.Object ctype;
        java.lang.Object description;

        /**
         * Sets the value of {@link DatabaseProps#getDatabaseName}
         * @param databaseName Property databaseName: Database Name. This parameter is required.
         * @return {@code this}
         */
        public Builder databaseName(java.lang.String databaseName) {
            this.databaseName = databaseName;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getDatabaseName}
         * @param databaseName Property databaseName: Database Name. This parameter is required.
         * @return {@code this}
         */
        public Builder databaseName(com.aliyun.ros.cdk.core.IResolvable databaseName) {
            this.databaseName = databaseName;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: Instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: Instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getOwner}
         * @param owner Property owner: Data Sheet owner. This parameter is required.
         * @return {@code this}
         */
        public Builder owner(java.lang.String owner) {
            this.owner = owner;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getOwner}
         * @param owner Property owner: Data Sheet owner. This parameter is required.
         * @return {@code this}
         */
        public Builder owner(com.aliyun.ros.cdk.core.IResolvable owner) {
            this.owner = owner;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getCharacterSetName}
         * @param characterSetName Property characterSetName: Character set, default value is UTF8.
         * @return {@code this}
         */
        public Builder characterSetName(java.lang.String characterSetName) {
            this.characterSetName = characterSetName;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getCharacterSetName}
         * @param characterSetName Property characterSetName: Character set, default value is UTF8.
         * @return {@code this}
         */
        public Builder characterSetName(com.aliyun.ros.cdk.core.IResolvable characterSetName) {
            this.characterSetName = characterSetName;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getCollate}
         * @param collate Property collate: Database locale parameters, specifying string comparison/collation.
         * @return {@code this}
         */
        public Builder collate(java.lang.String collate) {
            this.collate = collate;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getCollate}
         * @param collate Property collate: Database locale parameters, specifying string comparison/collation.
         * @return {@code this}
         */
        public Builder collate(com.aliyun.ros.cdk.core.IResolvable collate) {
            this.collate = collate;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getCtype}
         * @param ctype Property ctype: Database locale parameters, specifying character classification/case conversion rules.
         * @return {@code this}
         */
        public Builder ctype(java.lang.String ctype) {
            this.ctype = ctype;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getCtype}
         * @param ctype Property ctype: Database locale parameters, specifying character classification/case conversion rules.
         * @return {@code this}
         */
        public Builder ctype(com.aliyun.ros.cdk.core.IResolvable ctype) {
            this.ctype = ctype;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getDescription}
         * @param description Property description: Database Description.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DatabaseProps#getDescription}
         * @param description Property description: Database Description.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
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
        private final java.lang.Object databaseName;
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object owner;
        private final java.lang.Object characterSetName;
        private final java.lang.Object collate;
        private final java.lang.Object ctype;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.databaseName = software.amazon.jsii.Kernel.get(this, "databaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.owner = software.amazon.jsii.Kernel.get(this, "owner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.characterSetName = software.amazon.jsii.Kernel.get(this, "characterSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.collate = software.amazon.jsii.Kernel.get(this, "collate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ctype = software.amazon.jsii.Kernel.get(this, "ctype", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.databaseName = java.util.Objects.requireNonNull(builder.databaseName, "databaseName is required");
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.owner = java.util.Objects.requireNonNull(builder.owner, "owner is required");
            this.characterSetName = builder.characterSetName;
            this.collate = builder.collate;
            this.ctype = builder.ctype;
            this.description = builder.description;
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
        public final java.lang.Object getOwner() {
            return this.owner;
        }

        @Override
        public final java.lang.Object getCharacterSetName() {
            return this.characterSetName;
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
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("databaseName", om.valueToTree(this.getDatabaseName()));
            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("owner", om.valueToTree(this.getOwner()));
            if (this.getCharacterSetName() != null) {
                data.set("characterSetName", om.valueToTree(this.getCharacterSetName()));
            }
            if (this.getCollate() != null) {
                data.set("collate", om.valueToTree(this.getCollate()));
            }
            if (this.getCtype() != null) {
                data.set("ctype", om.valueToTree(this.getCtype()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-gpdb.DatabaseProps"));
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

            if (!databaseName.equals(that.databaseName)) return false;
            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!owner.equals(that.owner)) return false;
            if (this.characterSetName != null ? !this.characterSetName.equals(that.characterSetName) : that.characterSetName != null) return false;
            if (this.collate != null ? !this.collate.equals(that.collate) : that.collate != null) return false;
            if (this.ctype != null ? !this.ctype.equals(that.ctype) : that.ctype != null) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.databaseName.hashCode();
            result = 31 * result + (this.dbInstanceId.hashCode());
            result = 31 * result + (this.owner.hashCode());
            result = 31 * result + (this.characterSetName != null ? this.characterSetName.hashCode() : 0);
            result = 31 * result + (this.collate != null ? this.collate.hashCode() : 0);
            result = 31 * result + (this.ctype != null ? this.ctype.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
