package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a `ALIYUN::RDS::DBInstanceSecurityIps`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:36.244Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.DBInstanceSecurityIpsProps")
@software.amazon.jsii.Jsii.Proxy(DBInstanceSecurityIpsProps.Jsii$Proxy.class)
public interface DBInstanceSecurityIpsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceIpArrayAttribute();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDbInstanceIpArrayName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DBInstanceSecurityIpsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DBInstanceSecurityIpsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DBInstanceSecurityIpsProps> {
        private java.lang.String dbInstanceId;
        private java.lang.String dbInstanceIpArrayAttribute;
        private java.lang.String dbInstanceIpArrayName;

        /**
         * Sets the value of {@link DBInstanceSecurityIpsProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceSecurityIpsProps#getDbInstanceIpArrayAttribute}
         * @param dbInstanceIpArrayAttribute the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceIpArrayAttribute(java.lang.String dbInstanceIpArrayAttribute) {
            this.dbInstanceIpArrayAttribute = dbInstanceIpArrayAttribute;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceSecurityIpsProps#getDbInstanceIpArrayName}
         * @param dbInstanceIpArrayName the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceIpArrayName(java.lang.String dbInstanceIpArrayName) {
            this.dbInstanceIpArrayName = dbInstanceIpArrayName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DBInstanceSecurityIpsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DBInstanceSecurityIpsProps build() {
            return new Jsii$Proxy(dbInstanceId, dbInstanceIpArrayAttribute, dbInstanceIpArrayName);
        }
    }

    /**
     * An implementation for {@link DBInstanceSecurityIpsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBInstanceSecurityIpsProps {
        private final java.lang.String dbInstanceId;
        private final java.lang.String dbInstanceIpArrayAttribute;
        private final java.lang.String dbInstanceIpArrayName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbInstanceIpArrayAttribute = software.amazon.jsii.Kernel.get(this, "dbInstanceIpArrayAttribute", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbInstanceIpArrayName = software.amazon.jsii.Kernel.get(this, "dbInstanceIpArrayName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String dbInstanceId, final java.lang.String dbInstanceIpArrayAttribute, final java.lang.String dbInstanceIpArrayName) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceId = java.util.Objects.requireNonNull(dbInstanceId, "dbInstanceId is required");
            this.dbInstanceIpArrayAttribute = java.util.Objects.requireNonNull(dbInstanceIpArrayAttribute, "dbInstanceIpArrayAttribute is required");
            this.dbInstanceIpArrayName = dbInstanceIpArrayName;
        }

        @Override
        public final java.lang.String getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.String getDbInstanceIpArrayAttribute() {
            return this.dbInstanceIpArrayAttribute;
        }

        @Override
        public final java.lang.String getDbInstanceIpArrayName() {
            return this.dbInstanceIpArrayName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("dbInstanceIpArrayAttribute", om.valueToTree(this.getDbInstanceIpArrayAttribute()));
            if (this.getDbInstanceIpArrayName() != null) {
                data.set("dbInstanceIpArrayName", om.valueToTree(this.getDbInstanceIpArrayName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.DBInstanceSecurityIpsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DBInstanceSecurityIpsProps.Jsii$Proxy that = (DBInstanceSecurityIpsProps.Jsii$Proxy) o;

            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!dbInstanceIpArrayAttribute.equals(that.dbInstanceIpArrayAttribute)) return false;
            return this.dbInstanceIpArrayName != null ? this.dbInstanceIpArrayName.equals(that.dbInstanceIpArrayName) : that.dbInstanceIpArrayName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceId.hashCode();
            result = 31 * result + (this.dbInstanceIpArrayAttribute.hashCode());
            result = 31 * result + (this.dbInstanceIpArrayName != null ? this.dbInstanceIpArrayName.hashCode() : 0);
            return result;
        }
    }
}
