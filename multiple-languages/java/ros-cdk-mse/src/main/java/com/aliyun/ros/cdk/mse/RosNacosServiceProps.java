package com.aliyun.ros.cdk.mse;

/**
 * Properties for defining a <code>RosNacosService</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosservice
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:29.681Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.RosNacosServiceProps")
@software.amazon.jsii.Jsii.Proxy(RosNacosServiceProps.Jsii$Proxy.class)
public interface RosNacosServiceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEphemeral() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespaceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProtectThreshold() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosNacosServiceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosNacosServiceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosNacosServiceProps> {
        java.lang.Object instanceId;
        java.lang.Object serviceName;
        java.lang.Object ephemeral;
        java.lang.Object groupName;
        java.lang.Object namespaceId;
        java.lang.Object protectThreshold;

        /**
         * Sets the value of {@link RosNacosServiceProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNacosServiceProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNacosServiceProps#getServiceName}
         * @param serviceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link RosNacosServiceProps#getServiceName}
         * @param serviceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link RosNacosServiceProps#getEphemeral}
         * @param ephemeral the value to be set.
         * @return {@code this}
         */
        public Builder ephemeral(java.lang.Boolean ephemeral) {
            this.ephemeral = ephemeral;
            return this;
        }

        /**
         * Sets the value of {@link RosNacosServiceProps#getEphemeral}
         * @param ephemeral the value to be set.
         * @return {@code this}
         */
        public Builder ephemeral(com.aliyun.ros.cdk.core.IResolvable ephemeral) {
            this.ephemeral = ephemeral;
            return this;
        }

        /**
         * Sets the value of {@link RosNacosServiceProps#getGroupName}
         * @param groupName the value to be set.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link RosNacosServiceProps#getGroupName}
         * @param groupName the value to be set.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link RosNacosServiceProps#getNamespaceId}
         * @param namespaceId the value to be set.
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNacosServiceProps#getNamespaceId}
         * @param namespaceId the value to be set.
         * @return {@code this}
         */
        public Builder namespaceId(com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosNacosServiceProps#getProtectThreshold}
         * @param protectThreshold the value to be set.
         * @return {@code this}
         */
        public Builder protectThreshold(java.lang.String protectThreshold) {
            this.protectThreshold = protectThreshold;
            return this;
        }

        /**
         * Sets the value of {@link RosNacosServiceProps#getProtectThreshold}
         * @param protectThreshold the value to be set.
         * @return {@code this}
         */
        public Builder protectThreshold(com.aliyun.ros.cdk.core.IResolvable protectThreshold) {
            this.protectThreshold = protectThreshold;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosNacosServiceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosNacosServiceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosNacosServiceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosNacosServiceProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object serviceName;
        private final java.lang.Object ephemeral;
        private final java.lang.Object groupName;
        private final java.lang.Object namespaceId;
        private final java.lang.Object protectThreshold;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ephemeral = software.amazon.jsii.Kernel.get(this, "ephemeral", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespaceId = software.amazon.jsii.Kernel.get(this, "namespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protectThreshold = software.amazon.jsii.Kernel.get(this, "protectThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.serviceName = java.util.Objects.requireNonNull(builder.serviceName, "serviceName is required");
            this.ephemeral = builder.ephemeral;
            this.groupName = builder.groupName;
            this.namespaceId = builder.namespaceId;
            this.protectThreshold = builder.protectThreshold;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getServiceName() {
            return this.serviceName;
        }

        @Override
        public final java.lang.Object getEphemeral() {
            return this.ephemeral;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.Object getNamespaceId() {
            return this.namespaceId;
        }

        @Override
        public final java.lang.Object getProtectThreshold() {
            return this.protectThreshold;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("serviceName", om.valueToTree(this.getServiceName()));
            if (this.getEphemeral() != null) {
                data.set("ephemeral", om.valueToTree(this.getEphemeral()));
            }
            if (this.getGroupName() != null) {
                data.set("groupName", om.valueToTree(this.getGroupName()));
            }
            if (this.getNamespaceId() != null) {
                data.set("namespaceId", om.valueToTree(this.getNamespaceId()));
            }
            if (this.getProtectThreshold() != null) {
                data.set("protectThreshold", om.valueToTree(this.getProtectThreshold()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.RosNacosServiceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosNacosServiceProps.Jsii$Proxy that = (RosNacosServiceProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!serviceName.equals(that.serviceName)) return false;
            if (this.ephemeral != null ? !this.ephemeral.equals(that.ephemeral) : that.ephemeral != null) return false;
            if (this.groupName != null ? !this.groupName.equals(that.groupName) : that.groupName != null) return false;
            if (this.namespaceId != null ? !this.namespaceId.equals(that.namespaceId) : that.namespaceId != null) return false;
            return this.protectThreshold != null ? this.protectThreshold.equals(that.protectThreshold) : that.protectThreshold == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.serviceName.hashCode());
            result = 31 * result + (this.ephemeral != null ? this.ephemeral.hashCode() : 0);
            result = 31 * result + (this.groupName != null ? this.groupName.hashCode() : 0);
            result = 31 * result + (this.namespaceId != null ? this.namespaceId.hashCode() : 0);
            result = 31 * result + (this.protectThreshold != null ? this.protectThreshold.hashCode() : 0);
            return result;
        }
    }
}
