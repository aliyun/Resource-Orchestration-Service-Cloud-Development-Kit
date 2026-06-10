package com.aliyun.ros.cdk.gpdb;

/**
 * Properties for defining a <code>DBInstanceIPArray</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstanceiparray
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:13:37.699Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.DBInstanceIPArrayProps")
@software.amazon.jsii.Jsii.Proxy(DBInstanceIPArrayProps.Jsii$Proxy.class)
public interface DBInstanceIPArrayProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbInstanceId: The instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property dbInstanceIpArrayName: The name of the IP address whitelist.
     * <p>
     * If you do not specify this parameter, the default whitelist is queried.
     * <p>
     * <blockquote>
     * <p>
     * Each instance supports up to 50 IP address whitelists.
     * <p>
     * </blockquote>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceIpArrayName();

    /**
     * Property securityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats: - 0.0.0.0/0 - 10.23.12.24(IP) - 10.23.12.24/24(CIDR mode, Classless Inter-Domain Routing, '/24' indicates the length of the prefix in the address, and the range is '[1,32]').
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityIpList();

    /**
     * Property dbInstanceIpArrayAttribute: The default is empty.
     * <p>
     * To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceIpArrayAttribute() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DBInstanceIPArrayProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DBInstanceIPArrayProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DBInstanceIPArrayProps> {
        java.lang.Object dbInstanceId;
        java.lang.Object dbInstanceIpArrayName;
        java.lang.Object securityIpList;
        java.lang.Object dbInstanceIpArrayAttribute;

        /**
         * Sets the value of {@link DBInstanceIPArrayProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceIPArrayProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: The instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceIPArrayProps#getDbInstanceIpArrayName}
         * @param dbInstanceIpArrayName Property dbInstanceIpArrayName: The name of the IP address whitelist. This parameter is required.
         *                              If you do not specify this parameter, the default whitelist is queried.
         *                              <p>
         *                              <blockquote>
         *                              <p>
         *                              Each instance supports up to 50 IP address whitelists.
         *                              <p>
         *                              </blockquote>
         * @return {@code this}
         */
        public Builder dbInstanceIpArrayName(java.lang.String dbInstanceIpArrayName) {
            this.dbInstanceIpArrayName = dbInstanceIpArrayName;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceIPArrayProps#getDbInstanceIpArrayName}
         * @param dbInstanceIpArrayName Property dbInstanceIpArrayName: The name of the IP address whitelist. This parameter is required.
         *                              If you do not specify this parameter, the default whitelist is queried.
         *                              <p>
         *                              <blockquote>
         *                              <p>
         *                              Each instance supports up to 50 IP address whitelists.
         *                              <p>
         *                              </blockquote>
         * @return {@code this}
         */
        public Builder dbInstanceIpArrayName(com.aliyun.ros.cdk.core.IResolvable dbInstanceIpArrayName) {
            this.dbInstanceIpArrayName = dbInstanceIpArrayName;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceIPArrayProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats: - 0.0.0.0/0 - 10.23.12.24(IP) - 10.23.12.24/24(CIDR mode, Classless Inter-Domain Routing, '/24' indicates the length of the prefix in the address, and the range is '[1,32]'). This parameter is required.
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceIPArrayProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats: - 0.0.0.0/0 - 10.23.12.24(IP) - 10.23.12.24/24(CIDR mode, Classless Inter-Domain Routing, '/24' indicates the length of the prefix in the address, and the range is '[1,32]'). This parameter is required.
         * @return {@code this}
         */
        public Builder securityIpList(java.util.List<? extends java.lang.Object> securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceIPArrayProps#getDbInstanceIpArrayAttribute}
         * @param dbInstanceIpArrayAttribute Property dbInstanceIpArrayAttribute: The default is empty.
         *                                   To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
         * @return {@code this}
         */
        public Builder dbInstanceIpArrayAttribute(java.lang.String dbInstanceIpArrayAttribute) {
            this.dbInstanceIpArrayAttribute = dbInstanceIpArrayAttribute;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceIPArrayProps#getDbInstanceIpArrayAttribute}
         * @param dbInstanceIpArrayAttribute Property dbInstanceIpArrayAttribute: The default is empty.
         *                                   To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
         * @return {@code this}
         */
        public Builder dbInstanceIpArrayAttribute(com.aliyun.ros.cdk.core.IResolvable dbInstanceIpArrayAttribute) {
            this.dbInstanceIpArrayAttribute = dbInstanceIpArrayAttribute;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DBInstanceIPArrayProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DBInstanceIPArrayProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DBInstanceIPArrayProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBInstanceIPArrayProps {
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object dbInstanceIpArrayName;
        private final java.lang.Object securityIpList;
        private final java.lang.Object dbInstanceIpArrayAttribute;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceIpArrayName = software.amazon.jsii.Kernel.get(this, "dbInstanceIpArrayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceIpArrayAttribute = software.amazon.jsii.Kernel.get(this, "dbInstanceIpArrayAttribute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.dbInstanceIpArrayName = java.util.Objects.requireNonNull(builder.dbInstanceIpArrayName, "dbInstanceIpArrayName is required");
            this.securityIpList = java.util.Objects.requireNonNull(builder.securityIpList, "securityIpList is required");
            this.dbInstanceIpArrayAttribute = builder.dbInstanceIpArrayAttribute;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getDbInstanceIpArrayName() {
            return this.dbInstanceIpArrayName;
        }

        @Override
        public final java.lang.Object getSecurityIpList() {
            return this.securityIpList;
        }

        @Override
        public final java.lang.Object getDbInstanceIpArrayAttribute() {
            return this.dbInstanceIpArrayAttribute;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("dbInstanceIpArrayName", om.valueToTree(this.getDbInstanceIpArrayName()));
            data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
            if (this.getDbInstanceIpArrayAttribute() != null) {
                data.set("dbInstanceIpArrayAttribute", om.valueToTree(this.getDbInstanceIpArrayAttribute()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-gpdb.DBInstanceIPArrayProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DBInstanceIPArrayProps.Jsii$Proxy that = (DBInstanceIPArrayProps.Jsii$Proxy) o;

            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!dbInstanceIpArrayName.equals(that.dbInstanceIpArrayName)) return false;
            if (!securityIpList.equals(that.securityIpList)) return false;
            return this.dbInstanceIpArrayAttribute != null ? this.dbInstanceIpArrayAttribute.equals(that.dbInstanceIpArrayAttribute) : that.dbInstanceIpArrayAttribute == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceId.hashCode();
            result = 31 * result + (this.dbInstanceIpArrayName.hashCode());
            result = 31 * result + (this.securityIpList.hashCode());
            result = 31 * result + (this.dbInstanceIpArrayAttribute != null ? this.dbInstanceIpArrayAttribute.hashCode() : 0);
            return result;
        }
    }
}
