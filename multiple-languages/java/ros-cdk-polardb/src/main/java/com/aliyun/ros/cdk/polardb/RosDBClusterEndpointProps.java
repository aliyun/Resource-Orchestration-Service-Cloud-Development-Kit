package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a <code>RosDBClusterEndpoint</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbclusterendpoint
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:09.002Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosDBClusterEndpointProps")
@software.amazon.jsii.Jsii.Proxy(RosDBClusterEndpointProps.Jsii$Proxy.class)
public interface RosDBClusterEndpointProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoAddNewNodes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNodes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReadWriteMode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDBClusterEndpointProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDBClusterEndpointProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDBClusterEndpointProps> {
        java.lang.Object dbClusterId;
        java.lang.Object autoAddNewNodes;
        java.lang.Object endpointConfig;
        java.lang.Object endpointType;
        java.lang.Object nodes;
        java.lang.Object readWriteMode;

        /**
         * Sets the value of {@link RosDBClusterEndpointProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointProps#getAutoAddNewNodes}
         * @param autoAddNewNodes the value to be set.
         * @return {@code this}
         */
        public Builder autoAddNewNodes(java.lang.String autoAddNewNodes) {
            this.autoAddNewNodes = autoAddNewNodes;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointProps#getAutoAddNewNodes}
         * @param autoAddNewNodes the value to be set.
         * @return {@code this}
         */
        public Builder autoAddNewNodes(com.aliyun.ros.cdk.core.IResolvable autoAddNewNodes) {
            this.autoAddNewNodes = autoAddNewNodes;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointProps#getEndpointConfig}
         * @param endpointConfig the value to be set.
         * @return {@code this}
         */
        public Builder endpointConfig(com.aliyun.ros.cdk.core.IResolvable endpointConfig) {
            this.endpointConfig = endpointConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointProps#getEndpointConfig}
         * @param endpointConfig the value to be set.
         * @return {@code this}
         */
        public Builder endpointConfig(com.aliyun.ros.cdk.polardb.RosDBClusterEndpoint.EndpointConfigProperty endpointConfig) {
            this.endpointConfig = endpointConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointProps#getEndpointType}
         * @param endpointType the value to be set.
         * @return {@code this}
         */
        public Builder endpointType(java.lang.String endpointType) {
            this.endpointType = endpointType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointProps#getEndpointType}
         * @param endpointType the value to be set.
         * @return {@code this}
         */
        public Builder endpointType(com.aliyun.ros.cdk.core.IResolvable endpointType) {
            this.endpointType = endpointType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointProps#getNodes}
         * @param nodes the value to be set.
         * @return {@code this}
         */
        public Builder nodes(java.util.List<? extends java.lang.Object> nodes) {
            this.nodes = nodes;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointProps#getNodes}
         * @param nodes the value to be set.
         * @return {@code this}
         */
        public Builder nodes(com.aliyun.ros.cdk.core.IResolvable nodes) {
            this.nodes = nodes;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointProps#getReadWriteMode}
         * @param readWriteMode the value to be set.
         * @return {@code this}
         */
        public Builder readWriteMode(java.lang.String readWriteMode) {
            this.readWriteMode = readWriteMode;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterEndpointProps#getReadWriteMode}
         * @param readWriteMode the value to be set.
         * @return {@code this}
         */
        public Builder readWriteMode(com.aliyun.ros.cdk.core.IResolvable readWriteMode) {
            this.readWriteMode = readWriteMode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDBClusterEndpointProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDBClusterEndpointProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDBClusterEndpointProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDBClusterEndpointProps {
        private final java.lang.Object dbClusterId;
        private final java.lang.Object autoAddNewNodes;
        private final java.lang.Object endpointConfig;
        private final java.lang.Object endpointType;
        private final java.lang.Object nodes;
        private final java.lang.Object readWriteMode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoAddNewNodes = software.amazon.jsii.Kernel.get(this, "autoAddNewNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointConfig = software.amazon.jsii.Kernel.get(this, "endpointConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointType = software.amazon.jsii.Kernel.get(this, "endpointType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodes = software.amazon.jsii.Kernel.get(this, "nodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.readWriteMode = software.amazon.jsii.Kernel.get(this, "readWriteMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.autoAddNewNodes = builder.autoAddNewNodes;
            this.endpointConfig = builder.endpointConfig;
            this.endpointType = builder.endpointType;
            this.nodes = builder.nodes;
            this.readWriteMode = builder.readWriteMode;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getAutoAddNewNodes() {
            return this.autoAddNewNodes;
        }

        @Override
        public final java.lang.Object getEndpointConfig() {
            return this.endpointConfig;
        }

        @Override
        public final java.lang.Object getEndpointType() {
            return this.endpointType;
        }

        @Override
        public final java.lang.Object getNodes() {
            return this.nodes;
        }

        @Override
        public final java.lang.Object getReadWriteMode() {
            return this.readWriteMode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            if (this.getAutoAddNewNodes() != null) {
                data.set("autoAddNewNodes", om.valueToTree(this.getAutoAddNewNodes()));
            }
            if (this.getEndpointConfig() != null) {
                data.set("endpointConfig", om.valueToTree(this.getEndpointConfig()));
            }
            if (this.getEndpointType() != null) {
                data.set("endpointType", om.valueToTree(this.getEndpointType()));
            }
            if (this.getNodes() != null) {
                data.set("nodes", om.valueToTree(this.getNodes()));
            }
            if (this.getReadWriteMode() != null) {
                data.set("readWriteMode", om.valueToTree(this.getReadWriteMode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.RosDBClusterEndpointProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDBClusterEndpointProps.Jsii$Proxy that = (RosDBClusterEndpointProps.Jsii$Proxy) o;

            if (!dbClusterId.equals(that.dbClusterId)) return false;
            if (this.autoAddNewNodes != null ? !this.autoAddNewNodes.equals(that.autoAddNewNodes) : that.autoAddNewNodes != null) return false;
            if (this.endpointConfig != null ? !this.endpointConfig.equals(that.endpointConfig) : that.endpointConfig != null) return false;
            if (this.endpointType != null ? !this.endpointType.equals(that.endpointType) : that.endpointType != null) return false;
            if (this.nodes != null ? !this.nodes.equals(that.nodes) : that.nodes != null) return false;
            return this.readWriteMode != null ? this.readWriteMode.equals(that.readWriteMode) : that.readWriteMode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbClusterId.hashCode();
            result = 31 * result + (this.autoAddNewNodes != null ? this.autoAddNewNodes.hashCode() : 0);
            result = 31 * result + (this.endpointConfig != null ? this.endpointConfig.hashCode() : 0);
            result = 31 * result + (this.endpointType != null ? this.endpointType.hashCode() : 0);
            result = 31 * result + (this.nodes != null ? this.nodes.hashCode() : 0);
            result = 31 * result + (this.readWriteMode != null ? this.readWriteMode.hashCode() : 0);
            return result;
        }
    }
}
