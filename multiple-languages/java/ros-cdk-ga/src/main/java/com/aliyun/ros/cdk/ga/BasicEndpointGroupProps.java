package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>BasicEndpointGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpointgroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.092Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.BasicEndpointGroupProps")
@software.amazon.jsii.Jsii.Proxy(BasicEndpointGroupProps.Jsii$Proxy.class)
public interface BasicEndpointGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property acceleratorId: The ID of the basic GA instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId();

    /**
     * Property endpointGroupRegion: The ID of the region to which the endpoint group belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpointGroupRegion();

    /**
     * Property description: The description of the endpoint group.
     * <p>
     * The description can be up to 200 characters in length and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property endpointAddress: The endpoint address.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointAddress() {
        return null;
    }

    /**
     * Property endpointSubAddress: The secondary address of the endpoint.
     * <p>
     * You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
     * When the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
     * If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointSubAddress() {
        return null;
    }

    /**
     * Property endpointType: The type of the endpoint.
     * <p>
     * Valid values:
     * ENI
     * SLB
     * ECS
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointType() {
        return null;
    }

    /**
     * Property name: The name of the endpoint group.
     * <p>
     * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link BasicEndpointGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link BasicEndpointGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<BasicEndpointGroupProps> {
        java.lang.Object acceleratorId;
        java.lang.Object endpointGroupRegion;
        java.lang.Object description;
        java.lang.Object endpointAddress;
        java.lang.Object endpointSubAddress;
        java.lang.Object endpointType;
        java.lang.Object name;

        /**
         * Sets the value of {@link BasicEndpointGroupProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: The ID of the basic GA instance. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link BasicEndpointGroupProps#getAcceleratorId}
         * @param acceleratorId Property acceleratorId: The ID of the basic GA instance. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link BasicEndpointGroupProps#getEndpointGroupRegion}
         * @param endpointGroupRegion Property endpointGroupRegion: The ID of the region to which the endpoint group belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointGroupRegion(java.lang.String endpointGroupRegion) {
            this.endpointGroupRegion = endpointGroupRegion;
            return this;
        }

        /**
         * Sets the value of {@link BasicEndpointGroupProps#getEndpointGroupRegion}
         * @param endpointGroupRegion Property endpointGroupRegion: The ID of the region to which the endpoint group belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointGroupRegion(com.aliyun.ros.cdk.core.IResolvable endpointGroupRegion) {
            this.endpointGroupRegion = endpointGroupRegion;
            return this;
        }

        /**
         * Sets the value of {@link BasicEndpointGroupProps#getDescription}
         * @param description Property description: The description of the endpoint group.
         *                    The description can be up to 200 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link BasicEndpointGroupProps#getDescription}
         * @param description Property description: The description of the endpoint group.
         *                    The description can be up to 200 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link BasicEndpointGroupProps#getEndpointAddress}
         * @param endpointAddress Property endpointAddress: The endpoint address.
         * @return {@code this}
         */
        public Builder endpointAddress(java.lang.String endpointAddress) {
            this.endpointAddress = endpointAddress;
            return this;
        }

        /**
         * Sets the value of {@link BasicEndpointGroupProps#getEndpointAddress}
         * @param endpointAddress Property endpointAddress: The endpoint address.
         * @return {@code this}
         */
        public Builder endpointAddress(com.aliyun.ros.cdk.core.IResolvable endpointAddress) {
            this.endpointAddress = endpointAddress;
            return this;
        }

        /**
         * Sets the value of {@link BasicEndpointGroupProps#getEndpointSubAddress}
         * @param endpointSubAddress Property endpointSubAddress: The secondary address of the endpoint.
         *                           You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
         *                           When the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
         *                           If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
         * @return {@code this}
         */
        public Builder endpointSubAddress(java.lang.String endpointSubAddress) {
            this.endpointSubAddress = endpointSubAddress;
            return this;
        }

        /**
         * Sets the value of {@link BasicEndpointGroupProps#getEndpointSubAddress}
         * @param endpointSubAddress Property endpointSubAddress: The secondary address of the endpoint.
         *                           You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
         *                           When the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
         *                           If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
         * @return {@code this}
         */
        public Builder endpointSubAddress(com.aliyun.ros.cdk.core.IResolvable endpointSubAddress) {
            this.endpointSubAddress = endpointSubAddress;
            return this;
        }

        /**
         * Sets the value of {@link BasicEndpointGroupProps#getEndpointType}
         * @param endpointType Property endpointType: The type of the endpoint.
         *                     Valid values:
         *                     ENI
         *                     SLB
         *                     ECS
         * @return {@code this}
         */
        public Builder endpointType(java.lang.String endpointType) {
            this.endpointType = endpointType;
            return this;
        }

        /**
         * Sets the value of {@link BasicEndpointGroupProps#getEndpointType}
         * @param endpointType Property endpointType: The type of the endpoint.
         *                     Valid values:
         *                     ENI
         *                     SLB
         *                     ECS
         * @return {@code this}
         */
        public Builder endpointType(com.aliyun.ros.cdk.core.IResolvable endpointType) {
            this.endpointType = endpointType;
            return this;
        }

        /**
         * Sets the value of {@link BasicEndpointGroupProps#getName}
         * @param name Property name: The name of the endpoint group.
         *             The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link BasicEndpointGroupProps#getName}
         * @param name Property name: The name of the endpoint group.
         *             The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link BasicEndpointGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public BasicEndpointGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link BasicEndpointGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements BasicEndpointGroupProps {
        private final java.lang.Object acceleratorId;
        private final java.lang.Object endpointGroupRegion;
        private final java.lang.Object description;
        private final java.lang.Object endpointAddress;
        private final java.lang.Object endpointSubAddress;
        private final java.lang.Object endpointType;
        private final java.lang.Object name;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceleratorId = software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointGroupRegion = software.amazon.jsii.Kernel.get(this, "endpointGroupRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointAddress = software.amazon.jsii.Kernel.get(this, "endpointAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointSubAddress = software.amazon.jsii.Kernel.get(this, "endpointSubAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointType = software.amazon.jsii.Kernel.get(this, "endpointType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceleratorId = java.util.Objects.requireNonNull(builder.acceleratorId, "acceleratorId is required");
            this.endpointGroupRegion = java.util.Objects.requireNonNull(builder.endpointGroupRegion, "endpointGroupRegion is required");
            this.description = builder.description;
            this.endpointAddress = builder.endpointAddress;
            this.endpointSubAddress = builder.endpointSubAddress;
            this.endpointType = builder.endpointType;
            this.name = builder.name;
        }

        @Override
        public final java.lang.Object getAcceleratorId() {
            return this.acceleratorId;
        }

        @Override
        public final java.lang.Object getEndpointGroupRegion() {
            return this.endpointGroupRegion;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEndpointAddress() {
            return this.endpointAddress;
        }

        @Override
        public final java.lang.Object getEndpointSubAddress() {
            return this.endpointSubAddress;
        }

        @Override
        public final java.lang.Object getEndpointType() {
            return this.endpointType;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("acceleratorId", om.valueToTree(this.getAcceleratorId()));
            data.set("endpointGroupRegion", om.valueToTree(this.getEndpointGroupRegion()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEndpointAddress() != null) {
                data.set("endpointAddress", om.valueToTree(this.getEndpointAddress()));
            }
            if (this.getEndpointSubAddress() != null) {
                data.set("endpointSubAddress", om.valueToTree(this.getEndpointSubAddress()));
            }
            if (this.getEndpointType() != null) {
                data.set("endpointType", om.valueToTree(this.getEndpointType()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.BasicEndpointGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            BasicEndpointGroupProps.Jsii$Proxy that = (BasicEndpointGroupProps.Jsii$Proxy) o;

            if (!acceleratorId.equals(that.acceleratorId)) return false;
            if (!endpointGroupRegion.equals(that.endpointGroupRegion)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.endpointAddress != null ? !this.endpointAddress.equals(that.endpointAddress) : that.endpointAddress != null) return false;
            if (this.endpointSubAddress != null ? !this.endpointSubAddress.equals(that.endpointSubAddress) : that.endpointSubAddress != null) return false;
            if (this.endpointType != null ? !this.endpointType.equals(that.endpointType) : that.endpointType != null) return false;
            return this.name != null ? this.name.equals(that.name) : that.name == null;
        }

        @Override
        public final int hashCode() {
            int result = this.acceleratorId.hashCode();
            result = 31 * result + (this.endpointGroupRegion.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.endpointAddress != null ? this.endpointAddress.hashCode() : 0);
            result = 31 * result + (this.endpointSubAddress != null ? this.endpointSubAddress.hashCode() : 0);
            result = 31 * result + (this.endpointType != null ? this.endpointType.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            return result;
        }
    }
}
