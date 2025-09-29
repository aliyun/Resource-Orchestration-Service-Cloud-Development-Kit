package com.aliyun.ros.cdk.mse;

/**
 * Properties for defining a <code>EngineNamespace</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-enginenamespace
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:27.026Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.EngineNamespaceProps")
@software.amazon.jsii.Jsii.Proxy(EngineNamespaceProps.Jsii$Proxy.class)
public interface EngineNamespaceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property name: The display name of the namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property desc: The description of the namespace.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDesc() {
        return null;
    }

    /**
     * Property identity: The custom ID of the namespace.
     * <p>
     * If you do not specify this parameter, the automatically generated Universally Unique Identifier (UUID) is returned.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIdentity() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link EngineNamespaceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EngineNamespaceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EngineNamespaceProps> {
        java.lang.Object instanceId;
        java.lang.Object name;
        java.lang.Object desc;
        java.lang.Object identity;

        /**
         * Sets the value of {@link EngineNamespaceProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link EngineNamespaceProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link EngineNamespaceProps#getName}
         * @param name Property name: The display name of the namespace. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link EngineNamespaceProps#getName}
         * @param name Property name: The display name of the namespace. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link EngineNamespaceProps#getDesc}
         * @param desc Property desc: The description of the namespace.
         * @return {@code this}
         */
        public Builder desc(java.lang.String desc) {
            this.desc = desc;
            return this;
        }

        /**
         * Sets the value of {@link EngineNamespaceProps#getDesc}
         * @param desc Property desc: The description of the namespace.
         * @return {@code this}
         */
        public Builder desc(com.aliyun.ros.cdk.core.IResolvable desc) {
            this.desc = desc;
            return this;
        }

        /**
         * Sets the value of {@link EngineNamespaceProps#getIdentity}
         * @param identity Property identity: The custom ID of the namespace.
         *                 If you do not specify this parameter, the automatically generated Universally Unique Identifier (UUID) is returned.
         * @return {@code this}
         */
        public Builder identity(java.lang.String identity) {
            this.identity = identity;
            return this;
        }

        /**
         * Sets the value of {@link EngineNamespaceProps#getIdentity}
         * @param identity Property identity: The custom ID of the namespace.
         *                 If you do not specify this parameter, the automatically generated Universally Unique Identifier (UUID) is returned.
         * @return {@code this}
         */
        public Builder identity(com.aliyun.ros.cdk.core.IResolvable identity) {
            this.identity = identity;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EngineNamespaceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EngineNamespaceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link EngineNamespaceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EngineNamespaceProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object name;
        private final java.lang.Object desc;
        private final java.lang.Object identity;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.desc = software.amazon.jsii.Kernel.get(this, "desc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.identity = software.amazon.jsii.Kernel.get(this, "identity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.desc = builder.desc;
            this.identity = builder.identity;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getDesc() {
            return this.desc;
        }

        @Override
        public final java.lang.Object getIdentity() {
            return this.identity;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("name", om.valueToTree(this.getName()));
            if (this.getDesc() != null) {
                data.set("desc", om.valueToTree(this.getDesc()));
            }
            if (this.getIdentity() != null) {
                data.set("identity", om.valueToTree(this.getIdentity()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.EngineNamespaceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EngineNamespaceProps.Jsii$Proxy that = (EngineNamespaceProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!name.equals(that.name)) return false;
            if (this.desc != null ? !this.desc.equals(that.desc) : that.desc != null) return false;
            return this.identity != null ? this.identity.equals(that.identity) : that.identity == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.desc != null ? this.desc.hashCode() : 0);
            result = 31 * result + (this.identity != null ? this.identity.hashCode() : 0);
            return result;
        }
    }
}
