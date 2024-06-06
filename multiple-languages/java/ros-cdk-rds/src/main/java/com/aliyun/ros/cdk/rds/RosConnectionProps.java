package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a <code>RosConnection</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-connection
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:17.002Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosConnectionProps")
@software.amazon.jsii.Jsii.Proxy(RosConnectionProps.Jsii$Proxy.class)
public interface RosConnectionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPort();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBabelfishPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionStringPrefix() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGeneralGroupName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosConnectionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosConnectionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosConnectionProps> {
        java.lang.Object dbInstanceId;
        java.lang.Object port;
        java.lang.Object babelfishPort;
        java.lang.Object connectionStringPrefix;
        java.lang.Object generalGroupName;

        /**
         * Sets the value of {@link RosConnectionProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosConnectionProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosConnectionProps#getPort}
         * @param port the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link RosConnectionProps#getPort}
         * @param port the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link RosConnectionProps#getBabelfishPort}
         * @param babelfishPort the value to be set.
         * @return {@code this}
         */
        public Builder babelfishPort(java.lang.String babelfishPort) {
            this.babelfishPort = babelfishPort;
            return this;
        }

        /**
         * Sets the value of {@link RosConnectionProps#getBabelfishPort}
         * @param babelfishPort the value to be set.
         * @return {@code this}
         */
        public Builder babelfishPort(com.aliyun.ros.cdk.core.IResolvable babelfishPort) {
            this.babelfishPort = babelfishPort;
            return this;
        }

        /**
         * Sets the value of {@link RosConnectionProps#getConnectionStringPrefix}
         * @param connectionStringPrefix the value to be set.
         * @return {@code this}
         */
        public Builder connectionStringPrefix(java.lang.String connectionStringPrefix) {
            this.connectionStringPrefix = connectionStringPrefix;
            return this;
        }

        /**
         * Sets the value of {@link RosConnectionProps#getConnectionStringPrefix}
         * @param connectionStringPrefix the value to be set.
         * @return {@code this}
         */
        public Builder connectionStringPrefix(com.aliyun.ros.cdk.core.IResolvable connectionStringPrefix) {
            this.connectionStringPrefix = connectionStringPrefix;
            return this;
        }

        /**
         * Sets the value of {@link RosConnectionProps#getGeneralGroupName}
         * @param generalGroupName the value to be set.
         * @return {@code this}
         */
        public Builder generalGroupName(java.lang.String generalGroupName) {
            this.generalGroupName = generalGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosConnectionProps#getGeneralGroupName}
         * @param generalGroupName the value to be set.
         * @return {@code this}
         */
        public Builder generalGroupName(com.aliyun.ros.cdk.core.IResolvable generalGroupName) {
            this.generalGroupName = generalGroupName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosConnectionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosConnectionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosConnectionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosConnectionProps {
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object port;
        private final java.lang.Object babelfishPort;
        private final java.lang.Object connectionStringPrefix;
        private final java.lang.Object generalGroupName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.babelfishPort = software.amazon.jsii.Kernel.get(this, "babelfishPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionStringPrefix = software.amazon.jsii.Kernel.get(this, "connectionStringPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.generalGroupName = software.amazon.jsii.Kernel.get(this, "generalGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.port = java.util.Objects.requireNonNull(builder.port, "port is required");
            this.babelfishPort = builder.babelfishPort;
            this.connectionStringPrefix = builder.connectionStringPrefix;
            this.generalGroupName = builder.generalGroupName;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getPort() {
            return this.port;
        }

        @Override
        public final java.lang.Object getBabelfishPort() {
            return this.babelfishPort;
        }

        @Override
        public final java.lang.Object getConnectionStringPrefix() {
            return this.connectionStringPrefix;
        }

        @Override
        public final java.lang.Object getGeneralGroupName() {
            return this.generalGroupName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("port", om.valueToTree(this.getPort()));
            if (this.getBabelfishPort() != null) {
                data.set("babelfishPort", om.valueToTree(this.getBabelfishPort()));
            }
            if (this.getConnectionStringPrefix() != null) {
                data.set("connectionStringPrefix", om.valueToTree(this.getConnectionStringPrefix()));
            }
            if (this.getGeneralGroupName() != null) {
                data.set("generalGroupName", om.valueToTree(this.getGeneralGroupName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.RosConnectionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosConnectionProps.Jsii$Proxy that = (RosConnectionProps.Jsii$Proxy) o;

            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!port.equals(that.port)) return false;
            if (this.babelfishPort != null ? !this.babelfishPort.equals(that.babelfishPort) : that.babelfishPort != null) return false;
            if (this.connectionStringPrefix != null ? !this.connectionStringPrefix.equals(that.connectionStringPrefix) : that.connectionStringPrefix != null) return false;
            return this.generalGroupName != null ? this.generalGroupName.equals(that.generalGroupName) : that.generalGroupName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceId.hashCode();
            result = 31 * result + (this.port.hashCode());
            result = 31 * result + (this.babelfishPort != null ? this.babelfishPort.hashCode() : 0);
            result = 31 * result + (this.connectionStringPrefix != null ? this.connectionStringPrefix.hashCode() : 0);
            result = 31 * result + (this.generalGroupName != null ? this.generalGroupName.hashCode() : 0);
            return result;
        }
    }
}
