package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::Ipv6Gateway`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:27.160Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.Ipv6GatewayProps")
@software.amazon.jsii.Jsii.Proxy(Ipv6GatewayProps.Jsii$Proxy.class)
public interface Ipv6GatewayProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property vpcId: To open VPC ID IPv6 gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property description: Description of IPv6 gateway.
     * <p>
     * Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property name: Name of the IPv6 gateway.
     * <p>
     * Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property spec: Specifications IPv6 gateway, the value: Small (default): Free.
     * <p>
     * Medium: Enterprise Edition.
     * Large: Enterprise Enhanced Edition.
     * Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpec() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosIpv6Gateway.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link Ipv6GatewayProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link Ipv6GatewayProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<Ipv6GatewayProps> {
        java.lang.Object vpcId;
        java.lang.Object description;
        java.lang.Object name;
        java.lang.Object spec;
        java.util.List<com.aliyun.ros.cdk.vpc.RosIpv6Gateway.TagsProperty> tags;

        /**
         * Sets the value of {@link Ipv6GatewayProps#getVpcId}
         * @param vpcId Property vpcId: To open VPC ID IPv6 gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link Ipv6GatewayProps#getVpcId}
         * @param vpcId Property vpcId: To open VPC ID IPv6 gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link Ipv6GatewayProps#getDescription}
         * @param description Property description: Description of IPv6 gateway.
         *                    Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link Ipv6GatewayProps#getDescription}
         * @param description Property description: Description of IPv6 gateway.
         *                    Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link Ipv6GatewayProps#getName}
         * @param name Property name: Name of the IPv6 gateway.
         *             Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link Ipv6GatewayProps#getName}
         * @param name Property name: Name of the IPv6 gateway.
         *             Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link Ipv6GatewayProps#getSpec}
         * @param spec Property spec: Specifications IPv6 gateway, the value: Small (default): Free.
         *             Medium: Enterprise Edition.
         *             Large: Enterprise Enhanced Edition.
         *             Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
         * @return {@code this}
         */
        public Builder spec(java.lang.String spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link Ipv6GatewayProps#getSpec}
         * @param spec Property spec: Specifications IPv6 gateway, the value: Small (default): Free.
         *             Medium: Enterprise Edition.
         *             Large: Enterprise Enhanced Edition.
         *             Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
         * @return {@code this}
         */
        public Builder spec(com.aliyun.ros.cdk.core.IResolvable spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link Ipv6GatewayProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.vpc.RosIpv6Gateway.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosIpv6Gateway.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link Ipv6GatewayProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public Ipv6GatewayProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link Ipv6GatewayProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements Ipv6GatewayProps {
        private final java.lang.Object vpcId;
        private final java.lang.Object description;
        private final java.lang.Object name;
        private final java.lang.Object spec;
        private final java.util.List<com.aliyun.ros.cdk.vpc.RosIpv6Gateway.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.RosIpv6Gateway.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.description = builder.description;
            this.name = builder.name;
            this.spec = builder.spec;
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosIpv6Gateway.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getSpec() {
            return this.spec;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.vpc.RosIpv6Gateway.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getSpec() != null) {
                data.set("spec", om.valueToTree(this.getSpec()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.Ipv6GatewayProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            Ipv6GatewayProps.Jsii$Proxy that = (Ipv6GatewayProps.Jsii$Proxy) o;

            if (!vpcId.equals(that.vpcId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.spec != null ? !this.spec.equals(that.spec) : that.spec != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vpcId.hashCode();
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.spec != null ? this.spec.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
