package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::GrantInstanceToCen`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.654Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosGrantInstanceToCenProps")
@software.amazon.jsii.Jsii.Proxy(RosGrantInstanceToCenProps.Jsii$Proxy.class)
public interface RosGrantInstanceToCenProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getCenId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getCenOwnerId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getInstanceType();

    /**
     * @return a {@link Builder} of {@link RosGrantInstanceToCenProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosGrantInstanceToCenProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosGrantInstanceToCenProps> {
        private java.lang.String cenId;
        private java.lang.Number cenOwnerId;
        private java.lang.String instanceId;
        private java.lang.String instanceType;

        /**
         * Sets the value of {@link RosGrantInstanceToCenProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosGrantInstanceToCenProps#getCenOwnerId}
         * @param cenOwnerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenOwnerId(java.lang.Number cenOwnerId) {
            this.cenOwnerId = cenOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link RosGrantInstanceToCenProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosGrantInstanceToCenProps#getInstanceType}
         * @param instanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosGrantInstanceToCenProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosGrantInstanceToCenProps build() {
            return new Jsii$Proxy(cenId, cenOwnerId, instanceId, instanceType);
        }
    }

    /**
     * An implementation for {@link RosGrantInstanceToCenProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosGrantInstanceToCenProps {
        private final java.lang.String cenId;
        private final java.lang.Number cenOwnerId;
        private final java.lang.String instanceId;
        private final java.lang.String instanceType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.cenOwnerId = software.amazon.jsii.Kernel.get(this, "cenOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String cenId, final java.lang.Number cenOwnerId, final java.lang.String instanceId, final java.lang.String instanceType) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = java.util.Objects.requireNonNull(cenId, "cenId is required");
            this.cenOwnerId = java.util.Objects.requireNonNull(cenOwnerId, "cenOwnerId is required");
            this.instanceId = java.util.Objects.requireNonNull(instanceId, "instanceId is required");
            this.instanceType = java.util.Objects.requireNonNull(instanceType, "instanceType is required");
        }

        @Override
        public final java.lang.String getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Number getCenOwnerId() {
            return this.cenOwnerId;
        }

        @Override
        public final java.lang.String getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.String getInstanceType() {
            return this.instanceType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cenId", om.valueToTree(this.getCenId()));
            data.set("cenOwnerId", om.valueToTree(this.getCenOwnerId()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("instanceType", om.valueToTree(this.getInstanceType()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosGrantInstanceToCenProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosGrantInstanceToCenProps.Jsii$Proxy that = (RosGrantInstanceToCenProps.Jsii$Proxy) o;

            if (!cenId.equals(that.cenId)) return false;
            if (!cenOwnerId.equals(that.cenOwnerId)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            return this.instanceType.equals(that.instanceType);
        }

        @Override
        public final int hashCode() {
            int result = this.cenId.hashCode();
            result = 31 * result + (this.cenOwnerId.hashCode());
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.instanceType.hashCode());
            return result;
        }
    }
}
