package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>ALIYUN::VPC::EIPAssociation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:40.234Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosEIPAssociationProps")
@software.amazon.jsii.Jsii.Proxy(RosEIPAssociationProps.Jsii$Proxy.class)
public interface RosEIPAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAllocationId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosEIPAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosEIPAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosEIPAssociationProps> {
        java.lang.Object allocationId;
        java.lang.Object instanceId;
        java.lang.Object mode;
        java.lang.Object privateIpAddress;

        /**
         * Sets the value of {@link RosEIPAssociationProps#getAllocationId}
         * @param allocationId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder allocationId(java.lang.String allocationId) {
            this.allocationId = allocationId;
            return this;
        }

        /**
         * Sets the value of {@link RosEIPAssociationProps#getAllocationId}
         * @param allocationId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder allocationId(com.aliyun.ros.cdk.core.IResolvable allocationId) {
            this.allocationId = allocationId;
            return this;
        }

        /**
         * Sets the value of {@link RosEIPAssociationProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosEIPAssociationProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosEIPAssociationProps#getMode}
         * @param mode the value to be set.
         * @return {@code this}
         */
        public Builder mode(java.lang.String mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Sets the value of {@link RosEIPAssociationProps#getMode}
         * @param mode the value to be set.
         * @return {@code this}
         */
        public Builder mode(com.aliyun.ros.cdk.core.IResolvable mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Sets the value of {@link RosEIPAssociationProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosEIPAssociationProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosEIPAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosEIPAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosEIPAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosEIPAssociationProps {
        private final java.lang.Object allocationId;
        private final java.lang.Object instanceId;
        private final java.lang.Object mode;
        private final java.lang.Object privateIpAddress;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.allocationId = software.amazon.jsii.Kernel.get(this, "allocationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mode = software.amazon.jsii.Kernel.get(this, "mode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.allocationId = java.util.Objects.requireNonNull(builder.allocationId, "allocationId is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.mode = builder.mode;
            this.privateIpAddress = builder.privateIpAddress;
        }

        @Override
        public final java.lang.Object getAllocationId() {
            return this.allocationId;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getMode() {
            return this.mode;
        }

        @Override
        public final java.lang.Object getPrivateIpAddress() {
            return this.privateIpAddress;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("allocationId", om.valueToTree(this.getAllocationId()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            if (this.getMode() != null) {
                data.set("mode", om.valueToTree(this.getMode()));
            }
            if (this.getPrivateIpAddress() != null) {
                data.set("privateIpAddress", om.valueToTree(this.getPrivateIpAddress()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosEIPAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosEIPAssociationProps.Jsii$Proxy that = (RosEIPAssociationProps.Jsii$Proxy) o;

            if (!allocationId.equals(that.allocationId)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (this.mode != null ? !this.mode.equals(that.mode) : that.mode != null) return false;
            return this.privateIpAddress != null ? this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress == null;
        }

        @Override
        public final int hashCode() {
            int result = this.allocationId.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.mode != null ? this.mode.hashCode() : 0);
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            return result;
        }
    }
}
