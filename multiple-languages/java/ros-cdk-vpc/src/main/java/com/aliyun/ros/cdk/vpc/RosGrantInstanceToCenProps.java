package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosGrantInstanceToCen</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-grantinstancetocen
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.403Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosGrantInstanceToCenProps")
@software.amazon.jsii.Jsii.Proxy(RosGrantInstanceToCenProps.Jsii$Proxy.class)
public interface RosGrantInstanceToCenProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenOwnerId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

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
        java.lang.Object cenId;
        java.lang.Object cenOwnerId;
        java.lang.Object instanceId;
        java.lang.Object instanceType;

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
         * Sets the value of {@link RosGrantInstanceToCenProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
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
         * Sets the value of {@link RosGrantInstanceToCenProps#getCenOwnerId}
         * @param cenOwnerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenOwnerId(com.aliyun.ros.cdk.core.IResolvable cenOwnerId) {
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
         * Sets the value of {@link RosGrantInstanceToCenProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
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
         * Sets the value of {@link RosGrantInstanceToCenProps#getInstanceType}
         * @param instanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
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
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosGrantInstanceToCenProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosGrantInstanceToCenProps {
        private final java.lang.Object cenId;
        private final java.lang.Object cenOwnerId;
        private final java.lang.Object instanceId;
        private final java.lang.Object instanceType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenOwnerId = software.amazon.jsii.Kernel.get(this, "cenOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenId = java.util.Objects.requireNonNull(builder.cenId, "cenId is required");
            this.cenOwnerId = java.util.Objects.requireNonNull(builder.cenOwnerId, "cenOwnerId is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getCenOwnerId() {
            return this.cenOwnerId;
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
