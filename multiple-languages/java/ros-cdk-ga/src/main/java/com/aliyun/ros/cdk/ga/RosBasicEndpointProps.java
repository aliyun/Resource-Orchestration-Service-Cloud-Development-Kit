package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>RosBasicEndpoint</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpoint
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:17.160Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosBasicEndpointProps")
@software.amazon.jsii.Jsii.Proxy(RosBasicEndpointProps.Jsii$Proxy.class)
public interface RosBasicEndpointProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpointAddress();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpointGroupId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointSubAddress() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointSubAddressType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointZoneId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosBasicEndpointProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBasicEndpointProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBasicEndpointProps> {
        java.lang.Object acceleratorId;
        java.lang.Object endpointAddress;
        java.lang.Object endpointGroupId;
        java.lang.Object endpointSubAddress;
        java.lang.Object endpointSubAddressType;
        java.lang.Object endpointType;
        java.lang.Object endpointZoneId;
        java.lang.Object name;

        /**
         * Sets the value of {@link RosBasicEndpointProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicEndpointProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicEndpointProps#getEndpointAddress}
         * @param endpointAddress the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointAddress(java.lang.String endpointAddress) {
            this.endpointAddress = endpointAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicEndpointProps#getEndpointAddress}
         * @param endpointAddress the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointAddress(com.aliyun.ros.cdk.core.IResolvable endpointAddress) {
            this.endpointAddress = endpointAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicEndpointProps#getEndpointGroupId}
         * @param endpointGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointGroupId(java.lang.String endpointGroupId) {
            this.endpointGroupId = endpointGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicEndpointProps#getEndpointGroupId}
         * @param endpointGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointGroupId(com.aliyun.ros.cdk.core.IResolvable endpointGroupId) {
            this.endpointGroupId = endpointGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicEndpointProps#getEndpointSubAddress}
         * @param endpointSubAddress the value to be set.
         * @return {@code this}
         */
        public Builder endpointSubAddress(java.lang.String endpointSubAddress) {
            this.endpointSubAddress = endpointSubAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicEndpointProps#getEndpointSubAddress}
         * @param endpointSubAddress the value to be set.
         * @return {@code this}
         */
        public Builder endpointSubAddress(com.aliyun.ros.cdk.core.IResolvable endpointSubAddress) {
            this.endpointSubAddress = endpointSubAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicEndpointProps#getEndpointSubAddressType}
         * @param endpointSubAddressType the value to be set.
         * @return {@code this}
         */
        public Builder endpointSubAddressType(java.lang.String endpointSubAddressType) {
            this.endpointSubAddressType = endpointSubAddressType;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicEndpointProps#getEndpointSubAddressType}
         * @param endpointSubAddressType the value to be set.
         * @return {@code this}
         */
        public Builder endpointSubAddressType(com.aliyun.ros.cdk.core.IResolvable endpointSubAddressType) {
            this.endpointSubAddressType = endpointSubAddressType;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicEndpointProps#getEndpointType}
         * @param endpointType the value to be set.
         * @return {@code this}
         */
        public Builder endpointType(java.lang.String endpointType) {
            this.endpointType = endpointType;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicEndpointProps#getEndpointType}
         * @param endpointType the value to be set.
         * @return {@code this}
         */
        public Builder endpointType(com.aliyun.ros.cdk.core.IResolvable endpointType) {
            this.endpointType = endpointType;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicEndpointProps#getEndpointZoneId}
         * @param endpointZoneId the value to be set.
         * @return {@code this}
         */
        public Builder endpointZoneId(java.lang.String endpointZoneId) {
            this.endpointZoneId = endpointZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicEndpointProps#getEndpointZoneId}
         * @param endpointZoneId the value to be set.
         * @return {@code this}
         */
        public Builder endpointZoneId(com.aliyun.ros.cdk.core.IResolvable endpointZoneId) {
            this.endpointZoneId = endpointZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicEndpointProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicEndpointProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBasicEndpointProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBasicEndpointProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBasicEndpointProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBasicEndpointProps {
        private final java.lang.Object acceleratorId;
        private final java.lang.Object endpointAddress;
        private final java.lang.Object endpointGroupId;
        private final java.lang.Object endpointSubAddress;
        private final java.lang.Object endpointSubAddressType;
        private final java.lang.Object endpointType;
        private final java.lang.Object endpointZoneId;
        private final java.lang.Object name;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceleratorId = software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointAddress = software.amazon.jsii.Kernel.get(this, "endpointAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointGroupId = software.amazon.jsii.Kernel.get(this, "endpointGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointSubAddress = software.amazon.jsii.Kernel.get(this, "endpointSubAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointSubAddressType = software.amazon.jsii.Kernel.get(this, "endpointSubAddressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointType = software.amazon.jsii.Kernel.get(this, "endpointType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointZoneId = software.amazon.jsii.Kernel.get(this, "endpointZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceleratorId = java.util.Objects.requireNonNull(builder.acceleratorId, "acceleratorId is required");
            this.endpointAddress = java.util.Objects.requireNonNull(builder.endpointAddress, "endpointAddress is required");
            this.endpointGroupId = java.util.Objects.requireNonNull(builder.endpointGroupId, "endpointGroupId is required");
            this.endpointSubAddress = builder.endpointSubAddress;
            this.endpointSubAddressType = builder.endpointSubAddressType;
            this.endpointType = builder.endpointType;
            this.endpointZoneId = builder.endpointZoneId;
            this.name = builder.name;
        }

        @Override
        public final java.lang.Object getAcceleratorId() {
            return this.acceleratorId;
        }

        @Override
        public final java.lang.Object getEndpointAddress() {
            return this.endpointAddress;
        }

        @Override
        public final java.lang.Object getEndpointGroupId() {
            return this.endpointGroupId;
        }

        @Override
        public final java.lang.Object getEndpointSubAddress() {
            return this.endpointSubAddress;
        }

        @Override
        public final java.lang.Object getEndpointSubAddressType() {
            return this.endpointSubAddressType;
        }

        @Override
        public final java.lang.Object getEndpointType() {
            return this.endpointType;
        }

        @Override
        public final java.lang.Object getEndpointZoneId() {
            return this.endpointZoneId;
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
            data.set("endpointAddress", om.valueToTree(this.getEndpointAddress()));
            data.set("endpointGroupId", om.valueToTree(this.getEndpointGroupId()));
            if (this.getEndpointSubAddress() != null) {
                data.set("endpointSubAddress", om.valueToTree(this.getEndpointSubAddress()));
            }
            if (this.getEndpointSubAddressType() != null) {
                data.set("endpointSubAddressType", om.valueToTree(this.getEndpointSubAddressType()));
            }
            if (this.getEndpointType() != null) {
                data.set("endpointType", om.valueToTree(this.getEndpointType()));
            }
            if (this.getEndpointZoneId() != null) {
                data.set("endpointZoneId", om.valueToTree(this.getEndpointZoneId()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosBasicEndpointProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBasicEndpointProps.Jsii$Proxy that = (RosBasicEndpointProps.Jsii$Proxy) o;

            if (!acceleratorId.equals(that.acceleratorId)) return false;
            if (!endpointAddress.equals(that.endpointAddress)) return false;
            if (!endpointGroupId.equals(that.endpointGroupId)) return false;
            if (this.endpointSubAddress != null ? !this.endpointSubAddress.equals(that.endpointSubAddress) : that.endpointSubAddress != null) return false;
            if (this.endpointSubAddressType != null ? !this.endpointSubAddressType.equals(that.endpointSubAddressType) : that.endpointSubAddressType != null) return false;
            if (this.endpointType != null ? !this.endpointType.equals(that.endpointType) : that.endpointType != null) return false;
            if (this.endpointZoneId != null ? !this.endpointZoneId.equals(that.endpointZoneId) : that.endpointZoneId != null) return false;
            return this.name != null ? this.name.equals(that.name) : that.name == null;
        }

        @Override
        public final int hashCode() {
            int result = this.acceleratorId.hashCode();
            result = 31 * result + (this.endpointAddress.hashCode());
            result = 31 * result + (this.endpointGroupId.hashCode());
            result = 31 * result + (this.endpointSubAddress != null ? this.endpointSubAddress.hashCode() : 0);
            result = 31 * result + (this.endpointSubAddressType != null ? this.endpointSubAddressType.hashCode() : 0);
            result = 31 * result + (this.endpointType != null ? this.endpointType.hashCode() : 0);
            result = 31 * result + (this.endpointZoneId != null ? this.endpointZoneId.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            return result;
        }
    }
}
