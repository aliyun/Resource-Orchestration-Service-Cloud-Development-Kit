package com.aliyun.ros.cdk.mse;

/**
 * Properties for defining a <code>Znode</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-znode
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:57:24.406Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.ZnodeProps")
@software.amazon.jsii.Jsii.Proxy(ZnodeProps.Jsii$Proxy.class)
public interface ZnodeProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterId: The ID of the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     * Property path: The path of the znode.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPath();

    /**
     * Property data: The data of the znode.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getData() {
        return null;
    }

    /**
     * Property instanceId: The ID of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     * Property type: The type of the znode.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ZnodeProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ZnodeProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ZnodeProps> {
        java.lang.Object clusterId;
        java.lang.Object path;
        java.lang.Object data;
        java.lang.Object instanceId;
        java.lang.Object type;

        /**
         * Sets the value of {@link ZnodeProps#getClusterId}
         * @param clusterId Property clusterId: The ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ZnodeProps#getClusterId}
         * @param clusterId Property clusterId: The ID of the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ZnodeProps#getPath}
         * @param path Property path: The path of the znode. This parameter is required.
         * @return {@code this}
         */
        public Builder path(java.lang.String path) {
            this.path = path;
            return this;
        }

        /**
         * Sets the value of {@link ZnodeProps#getPath}
         * @param path Property path: The path of the znode. This parameter is required.
         * @return {@code this}
         */
        public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
            this.path = path;
            return this;
        }

        /**
         * Sets the value of {@link ZnodeProps#getData}
         * @param data Property data: The data of the znode.
         * @return {@code this}
         */
        public Builder data(java.lang.String data) {
            this.data = data;
            return this;
        }

        /**
         * Sets the value of {@link ZnodeProps#getData}
         * @param data Property data: The data of the znode.
         * @return {@code this}
         */
        public Builder data(com.aliyun.ros.cdk.core.IResolvable data) {
            this.data = data;
            return this;
        }

        /**
         * Sets the value of {@link ZnodeProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ZnodeProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ZnodeProps#getType}
         * @param type Property type: The type of the znode.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link ZnodeProps#getType}
         * @param type Property type: The type of the znode.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ZnodeProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ZnodeProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ZnodeProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ZnodeProps {
        private final java.lang.Object clusterId;
        private final java.lang.Object path;
        private final java.lang.Object data;
        private final java.lang.Object instanceId;
        private final java.lang.Object type;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.data = software.amazon.jsii.Kernel.get(this, "data", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.path = java.util.Objects.requireNonNull(builder.path, "path is required");
            this.data = builder.data;
            this.instanceId = builder.instanceId;
            this.type = builder.type;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getPath() {
            return this.path;
        }

        @Override
        public final java.lang.Object getData() {
            return this.data;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterId", om.valueToTree(this.getClusterId()));
            data.set("path", om.valueToTree(this.getPath()));
            if (this.getData() != null) {
                data.set("data", om.valueToTree(this.getData()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.ZnodeProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ZnodeProps.Jsii$Proxy that = (ZnodeProps.Jsii$Proxy) o;

            if (!clusterId.equals(that.clusterId)) return false;
            if (!path.equals(that.path)) return false;
            if (this.data != null ? !this.data.equals(that.data) : that.data != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            return this.type != null ? this.type.equals(that.type) : that.type == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterId.hashCode();
            result = 31 * result + (this.path.hashCode());
            result = 31 * result + (this.data != null ? this.data.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            return result;
        }
    }
}
