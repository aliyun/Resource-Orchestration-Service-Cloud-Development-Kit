package com.aliyun.ros.cdk.mse;

/**
 * Properties for defining a <code>ALIYUN::MSE::NacosService</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:26.934Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.NacosServiceProps")
@software.amazon.jsii.Jsii.Proxy(NacosServiceProps.Jsii$Proxy.class)
public interface NacosServiceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property serviceName: The name of the service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceName();

    /**
     * Property ephemeral: Specifies whether the instance is a temporary node.
     * <p>
     * Valid values:
     * true: yes
     * false: no
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEphemeral() {
        return null;
    }

    /**
     * Property groupName: The name of the group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupName() {
        return null;
    }

    /**
     * Property namespaceId: The ID of the namespace.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespaceId() {
        return null;
    }

    /**
     * Property protectThreshold: The protection threshold.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProtectThreshold() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link NacosServiceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NacosServiceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NacosServiceProps> {
        java.lang.Object instanceId;
        java.lang.Object serviceName;
        java.lang.Object ephemeral;
        java.lang.Object groupName;
        java.lang.Object namespaceId;
        java.lang.Object protectThreshold;

        /**
         * Sets the value of {@link NacosServiceProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link NacosServiceProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link NacosServiceProps#getServiceName}
         * @param serviceName Property serviceName: The name of the service. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link NacosServiceProps#getServiceName}
         * @param serviceName Property serviceName: The name of the service. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link NacosServiceProps#getEphemeral}
         * @param ephemeral Property ephemeral: Specifies whether the instance is a temporary node.
         *                  Valid values:
         *                  true: yes
         *                  false: no
         * @return {@code this}
         */
        public Builder ephemeral(java.lang.Boolean ephemeral) {
            this.ephemeral = ephemeral;
            return this;
        }

        /**
         * Sets the value of {@link NacosServiceProps#getEphemeral}
         * @param ephemeral Property ephemeral: Specifies whether the instance is a temporary node.
         *                  Valid values:
         *                  true: yes
         *                  false: no
         * @return {@code this}
         */
        public Builder ephemeral(com.aliyun.ros.cdk.core.IResolvable ephemeral) {
            this.ephemeral = ephemeral;
            return this;
        }

        /**
         * Sets the value of {@link NacosServiceProps#getGroupName}
         * @param groupName Property groupName: The name of the group.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link NacosServiceProps#getGroupName}
         * @param groupName Property groupName: The name of the group.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link NacosServiceProps#getNamespaceId}
         * @param namespaceId Property namespaceId: The ID of the namespace.
         * @return {@code this}
         */
        public Builder namespaceId(java.lang.String namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link NacosServiceProps#getNamespaceId}
         * @param namespaceId Property namespaceId: The ID of the namespace.
         * @return {@code this}
         */
        public Builder namespaceId(com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.namespaceId = namespaceId;
            return this;
        }

        /**
         * Sets the value of {@link NacosServiceProps#getProtectThreshold}
         * @param protectThreshold Property protectThreshold: The protection threshold.
         * @return {@code this}
         */
        public Builder protectThreshold(java.lang.String protectThreshold) {
            this.protectThreshold = protectThreshold;
            return this;
        }

        /**
         * Sets the value of {@link NacosServiceProps#getProtectThreshold}
         * @param protectThreshold Property protectThreshold: The protection threshold.
         * @return {@code this}
         */
        public Builder protectThreshold(com.aliyun.ros.cdk.core.IResolvable protectThreshold) {
            this.protectThreshold = protectThreshold;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NacosServiceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NacosServiceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NacosServiceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NacosServiceProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.NacosServiceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NacosServiceProps.Jsii$Proxy that = (NacosServiceProps.Jsii$Proxy) o;

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
