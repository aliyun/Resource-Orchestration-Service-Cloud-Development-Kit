package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>AnycastEIPAssociation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteipassociation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:24.597Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.AnycastEIPAssociationProps")
@software.amazon.jsii.Jsii.Proxy(AnycastEIPAssociationProps.Jsii$Proxy.class)
public interface AnycastEIPAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property anycastId: Anycast EIP instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAnycastId();

    /**
     * Property bindInstanceId: The ID of the cloud resource instance to be bound.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBindInstanceId();

    /**
     * Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBindInstanceRegionId();

    /**
     * Property bindInstanceType: The cloud resource instance type to be bound.
     * <p>
     * Valid value: SlbInstance, SLB instance of private network type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBindInstanceType();

    /**
     * @return a {@link Builder} of {@link AnycastEIPAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AnycastEIPAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AnycastEIPAssociationProps> {
        java.lang.Object anycastId;
        java.lang.Object bindInstanceId;
        java.lang.Object bindInstanceRegionId;
        java.lang.Object bindInstanceType;

        /**
         * Sets the value of {@link AnycastEIPAssociationProps#getAnycastId}
         * @param anycastId Property anycastId: Anycast EIP instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder anycastId(java.lang.String anycastId) {
            this.anycastId = anycastId;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEIPAssociationProps#getAnycastId}
         * @param anycastId Property anycastId: Anycast EIP instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder anycastId(com.aliyun.ros.cdk.core.IResolvable anycastId) {
            this.anycastId = anycastId;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEIPAssociationProps#getBindInstanceId}
         * @param bindInstanceId Property bindInstanceId: The ID of the cloud resource instance to be bound. This parameter is required.
         * @return {@code this}
         */
        public Builder bindInstanceId(java.lang.String bindInstanceId) {
            this.bindInstanceId = bindInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEIPAssociationProps#getBindInstanceId}
         * @param bindInstanceId Property bindInstanceId: The ID of the cloud resource instance to be bound. This parameter is required.
         * @return {@code this}
         */
        public Builder bindInstanceId(com.aliyun.ros.cdk.core.IResolvable bindInstanceId) {
            this.bindInstanceId = bindInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEIPAssociationProps#getBindInstanceRegionId}
         * @param bindInstanceRegionId Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound. This parameter is required.
         * @return {@code this}
         */
        public Builder bindInstanceRegionId(java.lang.String bindInstanceRegionId) {
            this.bindInstanceRegionId = bindInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEIPAssociationProps#getBindInstanceRegionId}
         * @param bindInstanceRegionId Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound. This parameter is required.
         * @return {@code this}
         */
        public Builder bindInstanceRegionId(com.aliyun.ros.cdk.core.IResolvable bindInstanceRegionId) {
            this.bindInstanceRegionId = bindInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEIPAssociationProps#getBindInstanceType}
         * @param bindInstanceType Property bindInstanceType: The cloud resource instance type to be bound. This parameter is required.
         *                         Valid value: SlbInstance, SLB instance of private network type.
         * @return {@code this}
         */
        public Builder bindInstanceType(java.lang.String bindInstanceType) {
            this.bindInstanceType = bindInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link AnycastEIPAssociationProps#getBindInstanceType}
         * @param bindInstanceType Property bindInstanceType: The cloud resource instance type to be bound. This parameter is required.
         *                         Valid value: SlbInstance, SLB instance of private network type.
         * @return {@code this}
         */
        public Builder bindInstanceType(com.aliyun.ros.cdk.core.IResolvable bindInstanceType) {
            this.bindInstanceType = bindInstanceType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AnycastEIPAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AnycastEIPAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AnycastEIPAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AnycastEIPAssociationProps {
        private final java.lang.Object anycastId;
        private final java.lang.Object bindInstanceId;
        private final java.lang.Object bindInstanceRegionId;
        private final java.lang.Object bindInstanceType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.anycastId = software.amazon.jsii.Kernel.get(this, "anycastId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bindInstanceId = software.amazon.jsii.Kernel.get(this, "bindInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bindInstanceRegionId = software.amazon.jsii.Kernel.get(this, "bindInstanceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bindInstanceType = software.amazon.jsii.Kernel.get(this, "bindInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.anycastId = java.util.Objects.requireNonNull(builder.anycastId, "anycastId is required");
            this.bindInstanceId = java.util.Objects.requireNonNull(builder.bindInstanceId, "bindInstanceId is required");
            this.bindInstanceRegionId = java.util.Objects.requireNonNull(builder.bindInstanceRegionId, "bindInstanceRegionId is required");
            this.bindInstanceType = java.util.Objects.requireNonNull(builder.bindInstanceType, "bindInstanceType is required");
        }

        @Override
        public final java.lang.Object getAnycastId() {
            return this.anycastId;
        }

        @Override
        public final java.lang.Object getBindInstanceId() {
            return this.bindInstanceId;
        }

        @Override
        public final java.lang.Object getBindInstanceRegionId() {
            return this.bindInstanceRegionId;
        }

        @Override
        public final java.lang.Object getBindInstanceType() {
            return this.bindInstanceType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("anycastId", om.valueToTree(this.getAnycastId()));
            data.set("bindInstanceId", om.valueToTree(this.getBindInstanceId()));
            data.set("bindInstanceRegionId", om.valueToTree(this.getBindInstanceRegionId()));
            data.set("bindInstanceType", om.valueToTree(this.getBindInstanceType()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.AnycastEIPAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AnycastEIPAssociationProps.Jsii$Proxy that = (AnycastEIPAssociationProps.Jsii$Proxy) o;

            if (!anycastId.equals(that.anycastId)) return false;
            if (!bindInstanceId.equals(that.bindInstanceId)) return false;
            if (!bindInstanceRegionId.equals(that.bindInstanceRegionId)) return false;
            return this.bindInstanceType.equals(that.bindInstanceType);
        }

        @Override
        public final int hashCode() {
            int result = this.anycastId.hashCode();
            result = 31 * result + (this.bindInstanceId.hashCode());
            result = 31 * result + (this.bindInstanceRegionId.hashCode());
            result = 31 * result + (this.bindInstanceType.hashCode());
            return result;
        }
    }
}
