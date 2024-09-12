package com.aliyun.ros.cdk.tsdb;

/**
 * Properties for defining a <code>InfluxDBUser</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbuser
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:31.203Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.tsdb.$Module.class, fqn = "@alicloud/ros-cdk-tsdb.InfluxDBUserProps")
@software.amazon.jsii.Jsii.Proxy(InfluxDBUserProps.Jsii$Proxy.class)
public interface InfluxDBUserProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The ID of TSDB for InfluxDB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!&#64;#$%^&amp;*()_+-=.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPassword();

    /**
     * Property userName: The name of user.
     * <p>
     * The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserName();

    /**
     * Property userType: The type of user.
     * <p>
     * Valid values:
     * normal: normal user
     * admin: administrator user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserType();

    /**
     * Property databasePermissions: The list of databases that the user can access.
     * <p>
     * If the user type is admin, do not specify this parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDatabasePermissions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InfluxDBUserProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InfluxDBUserProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InfluxDBUserProps> {
        java.lang.Object instanceId;
        java.lang.Object password;
        java.lang.Object userName;
        java.lang.Object userType;
        java.lang.Object databasePermissions;

        /**
         * Sets the value of {@link InfluxDBUserProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of TSDB for InfluxDB. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link InfluxDBUserProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of TSDB for InfluxDB. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link InfluxDBUserProps#getPassword}
         * @param password Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!&#64;#$%^&amp;*()_+-=. This parameter is required.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link InfluxDBUserProps#getPassword}
         * @param password Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!&#64;#$%^&amp;*()_+-=. This parameter is required.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link InfluxDBUserProps#getUserName}
         * @param userName Property userName: The name of user. This parameter is required.
         *                 The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
         * @return {@code this}
         */
        public Builder userName(java.lang.String userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link InfluxDBUserProps#getUserName}
         * @param userName Property userName: The name of user. This parameter is required.
         *                 The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
         * @return {@code this}
         */
        public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link InfluxDBUserProps#getUserType}
         * @param userType Property userType: The type of user. This parameter is required.
         *                 Valid values:
         *                 normal: normal user
         *                 admin: administrator user.
         * @return {@code this}
         */
        public Builder userType(java.lang.String userType) {
            this.userType = userType;
            return this;
        }

        /**
         * Sets the value of {@link InfluxDBUserProps#getUserType}
         * @param userType Property userType: The type of user. This parameter is required.
         *                 Valid values:
         *                 normal: normal user
         *                 admin: administrator user.
         * @return {@code this}
         */
        public Builder userType(com.aliyun.ros.cdk.core.IResolvable userType) {
            this.userType = userType;
            return this;
        }

        /**
         * Sets the value of {@link InfluxDBUserProps#getDatabasePermissions}
         * @param databasePermissions Property databasePermissions: The list of databases that the user can access.
         *                            If the user type is admin, do not specify this parameter.
         * @return {@code this}
         */
        public Builder databasePermissions(com.aliyun.ros.cdk.core.IResolvable databasePermissions) {
            this.databasePermissions = databasePermissions;
            return this;
        }

        /**
         * Sets the value of {@link InfluxDBUserProps#getDatabasePermissions}
         * @param databasePermissions Property databasePermissions: The list of databases that the user can access.
         *                            If the user type is admin, do not specify this parameter.
         * @return {@code this}
         */
        public Builder databasePermissions(java.util.List<? extends java.lang.Object> databasePermissions) {
            this.databasePermissions = databasePermissions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InfluxDBUserProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InfluxDBUserProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InfluxDBUserProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InfluxDBUserProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object password;
        private final java.lang.Object userName;
        private final java.lang.Object userType;
        private final java.lang.Object databasePermissions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userType = software.amazon.jsii.Kernel.get(this, "userType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.databasePermissions = software.amazon.jsii.Kernel.get(this, "databasePermissions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.password = java.util.Objects.requireNonNull(builder.password, "password is required");
            this.userName = java.util.Objects.requireNonNull(builder.userName, "userName is required");
            this.userType = java.util.Objects.requireNonNull(builder.userType, "userType is required");
            this.databasePermissions = builder.databasePermissions;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getUserName() {
            return this.userName;
        }

        @Override
        public final java.lang.Object getUserType() {
            return this.userType;
        }

        @Override
        public final java.lang.Object getDatabasePermissions() {
            return this.databasePermissions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("password", om.valueToTree(this.getPassword()));
            data.set("userName", om.valueToTree(this.getUserName()));
            data.set("userType", om.valueToTree(this.getUserType()));
            if (this.getDatabasePermissions() != null) {
                data.set("databasePermissions", om.valueToTree(this.getDatabasePermissions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-tsdb.InfluxDBUserProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InfluxDBUserProps.Jsii$Proxy that = (InfluxDBUserProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!password.equals(that.password)) return false;
            if (!userName.equals(that.userName)) return false;
            if (!userType.equals(that.userType)) return false;
            return this.databasePermissions != null ? this.databasePermissions.equals(that.databasePermissions) : that.databasePermissions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.password.hashCode());
            result = 31 * result + (this.userName.hashCode());
            result = 31 * result + (this.userType.hashCode());
            result = 31 * result + (this.databasePermissions != null ? this.databasePermissions.hashCode() : 0);
            return result;
        }
    }
}
