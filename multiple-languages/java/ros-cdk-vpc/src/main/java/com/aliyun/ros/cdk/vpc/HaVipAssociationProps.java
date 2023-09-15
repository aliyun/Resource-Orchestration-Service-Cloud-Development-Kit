package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>ALIYUN::VPC::HaVipAssociation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:50.696Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.HaVipAssociationProps")
@software.amazon.jsii.Jsii.Proxy(HaVipAssociationProps.Jsii$Proxy.class)
public interface HaVipAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property haVipId: The ID of the HAVIP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHaVipId();

    /**
     * Property instanceId: The ID of the ECS instance to be associated with the HAVIP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property instanceType: The type of the instance to be associated with the HAVIP.
     * <p>
     * Valid values:
     * EcsInstance: an ECS instance
     * NetworkInterface: an ENI. If you want to associate the HAVIP with an ENI, this parameter is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link HaVipAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HaVipAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HaVipAssociationProps> {
        java.lang.Object haVipId;
        java.lang.Object instanceId;
        java.lang.Object instanceType;

        /**
         * Sets the value of {@link HaVipAssociationProps#getHaVipId}
         * @param haVipId Property haVipId: The ID of the HAVIP. This parameter is required.
         * @return {@code this}
         */
        public Builder haVipId(java.lang.String haVipId) {
            this.haVipId = haVipId;
            return this;
        }

        /**
         * Sets the value of {@link HaVipAssociationProps#getHaVipId}
         * @param haVipId Property haVipId: The ID of the HAVIP. This parameter is required.
         * @return {@code this}
         */
        public Builder haVipId(com.aliyun.ros.cdk.core.IResolvable haVipId) {
            this.haVipId = haVipId;
            return this;
        }

        /**
         * Sets the value of {@link HaVipAssociationProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the ECS instance to be associated with the HAVIP. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link HaVipAssociationProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the ECS instance to be associated with the HAVIP. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link HaVipAssociationProps#getInstanceType}
         * @param instanceType Property instanceType: The type of the instance to be associated with the HAVIP.
         *                     Valid values:
         *                     EcsInstance: an ECS instance
         *                     NetworkInterface: an ENI. If you want to associate the HAVIP with an ENI, this parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link HaVipAssociationProps#getInstanceType}
         * @param instanceType Property instanceType: The type of the instance to be associated with the HAVIP.
         *                     Valid values:
         *                     EcsInstance: an ECS instance
         *                     NetworkInterface: an ENI. If you want to associate the HAVIP with an ENI, this parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HaVipAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HaVipAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HaVipAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HaVipAssociationProps {
        private final java.lang.Object haVipId;
        private final java.lang.Object instanceId;
        private final java.lang.Object instanceType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.haVipId = software.amazon.jsii.Kernel.get(this, "haVipId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.haVipId = java.util.Objects.requireNonNull(builder.haVipId, "haVipId is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.instanceType = builder.instanceType;
        }

        @Override
        public final java.lang.Object getHaVipId() {
            return this.haVipId;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("haVipId", om.valueToTree(this.getHaVipId()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.HaVipAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HaVipAssociationProps.Jsii$Proxy that = (HaVipAssociationProps.Jsii$Proxy) o;

            if (!haVipId.equals(that.haVipId)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            return this.instanceType != null ? this.instanceType.equals(that.instanceType) : that.instanceType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.haVipId.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            return result;
        }
    }
}
