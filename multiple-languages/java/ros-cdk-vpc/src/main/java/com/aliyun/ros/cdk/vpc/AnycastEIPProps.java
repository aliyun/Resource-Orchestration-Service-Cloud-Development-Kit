package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::AnycastEIP`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:44.155Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.AnycastEIPProps")
@software.amazon.jsii.Jsii.Proxy(AnycastEIPProps.Jsii$Proxy.class)
public interface AnycastEIPProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property description: Anycast EIP instance description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property instanceChargeType: Anycast EIP instance charge type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     * Property internetChargeType: Anycast EIP instance access public network billing method.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
        return null;
    }

    /**
     * Property name: Anycast EIP instance name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property serviceLocation: Anycast EIP instance access area.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceLocation() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AnycastEIPProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AnycastEIPProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AnycastEIPProps> {
        private java.lang.Object description;
        private java.lang.Object instanceChargeType;
        private java.lang.Object internetChargeType;
        private java.lang.Object name;
        private java.lang.Object serviceLocation;

        /**
         * Sets the value of {@link AnycastEIPProps#getDescription}
         * @param description Property description: Anycast EIP instance description.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEIPProps#getDescription}
         * @param description Property description: Anycast EIP instance description.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEIPProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: Anycast EIP instance charge type.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEIPProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: Anycast EIP instance charge type.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEIPProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Anycast EIP instance access public network billing method.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEIPProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Anycast EIP instance access public network billing method.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEIPProps#getName}
         * @param name Property name: Anycast EIP instance name.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEIPProps#getName}
         * @param name Property name: Anycast EIP instance name.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEIPProps#getServiceLocation}
         * @param serviceLocation Property serviceLocation: Anycast EIP instance access area.
         * @return {@code this}
         */
        public Builder serviceLocation(java.lang.String serviceLocation) {
            this.serviceLocation = serviceLocation;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEIPProps#getServiceLocation}
         * @param serviceLocation Property serviceLocation: Anycast EIP instance access area.
         * @return {@code this}
         */
        public Builder serviceLocation(com.aliyun.ros.cdk.core.IResolvable serviceLocation) {
            this.serviceLocation = serviceLocation;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AnycastEIPProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AnycastEIPProps build() {
            return new Jsii$Proxy(description, instanceChargeType, internetChargeType, name, serviceLocation);
        }
    }

    /**
     * An implementation for {@link AnycastEIPProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AnycastEIPProps {
        private final java.lang.Object description;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object name;
        private final java.lang.Object serviceLocation;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceLocation = software.amazon.jsii.Kernel.get(this, "serviceLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object description, final java.lang.Object instanceChargeType, final java.lang.Object internetChargeType, final java.lang.Object name, final java.lang.Object serviceLocation) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.description = description;
            this.instanceChargeType = instanceChargeType;
            this.internetChargeType = internetChargeType;
            this.name = name;
            this.serviceLocation = serviceLocation;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getServiceLocation() {
            return this.serviceLocation;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getServiceLocation() != null) {
                data.set("serviceLocation", om.valueToTree(this.getServiceLocation()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.AnycastEIPProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AnycastEIPProps.Jsii$Proxy that = (AnycastEIPProps.Jsii$Proxy) o;

            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            return this.serviceLocation != null ? this.serviceLocation.equals(that.serviceLocation) : that.serviceLocation == null;
        }

        @Override
        public final int hashCode() {
            int result = this.description != null ? this.description.hashCode() : 0;
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.serviceLocation != null ? this.serviceLocation.hashCode() : 0);
            return result;
        }
    }
}
