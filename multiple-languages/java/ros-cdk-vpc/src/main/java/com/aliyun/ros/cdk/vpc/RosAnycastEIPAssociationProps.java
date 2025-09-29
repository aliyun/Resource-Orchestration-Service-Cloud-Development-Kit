package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosAnycastEIPAssociation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteipassociation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:30.483Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosAnycastEIPAssociationProps")
@software.amazon.jsii.Jsii.Proxy(RosAnycastEIPAssociationProps.Jsii$Proxy.class)
public interface RosAnycastEIPAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAnycastId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBindInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBindInstanceRegionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBindInstanceType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAssociationMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPopLocations() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAnycastEIPAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAnycastEIPAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAnycastEIPAssociationProps> {
        java.lang.Object anycastId;
        java.lang.Object bindInstanceId;
        java.lang.Object bindInstanceRegionId;
        java.lang.Object bindInstanceType;
        java.lang.Object associationMode;
        java.lang.Object popLocations;
        java.lang.Object privateIpAddress;

        /**
         * Sets the value of {@link RosAnycastEIPAssociationProps#getAnycastId}
         * @param anycastId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder anycastId(java.lang.String anycastId) {
            this.anycastId = anycastId;
            return this;
        }

        /**
         * Sets the value of {@link RosAnycastEIPAssociationProps#getAnycastId}
         * @param anycastId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder anycastId(com.aliyun.ros.cdk.core.IResolvable anycastId) {
            this.anycastId = anycastId;
            return this;
        }

        /**
         * Sets the value of {@link RosAnycastEIPAssociationProps#getBindInstanceId}
         * @param bindInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bindInstanceId(java.lang.String bindInstanceId) {
            this.bindInstanceId = bindInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosAnycastEIPAssociationProps#getBindInstanceId}
         * @param bindInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bindInstanceId(com.aliyun.ros.cdk.core.IResolvable bindInstanceId) {
            this.bindInstanceId = bindInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosAnycastEIPAssociationProps#getBindInstanceRegionId}
         * @param bindInstanceRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bindInstanceRegionId(java.lang.String bindInstanceRegionId) {
            this.bindInstanceRegionId = bindInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosAnycastEIPAssociationProps#getBindInstanceRegionId}
         * @param bindInstanceRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bindInstanceRegionId(com.aliyun.ros.cdk.core.IResolvable bindInstanceRegionId) {
            this.bindInstanceRegionId = bindInstanceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosAnycastEIPAssociationProps#getBindInstanceType}
         * @param bindInstanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bindInstanceType(java.lang.String bindInstanceType) {
            this.bindInstanceType = bindInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosAnycastEIPAssociationProps#getBindInstanceType}
         * @param bindInstanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bindInstanceType(com.aliyun.ros.cdk.core.IResolvable bindInstanceType) {
            this.bindInstanceType = bindInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosAnycastEIPAssociationProps#getAssociationMode}
         * @param associationMode the value to be set.
         * @return {@code this}
         */
        public Builder associationMode(java.lang.String associationMode) {
            this.associationMode = associationMode;
            return this;
        }

        /**
         * Sets the value of {@link RosAnycastEIPAssociationProps#getAssociationMode}
         * @param associationMode the value to be set.
         * @return {@code this}
         */
        public Builder associationMode(com.aliyun.ros.cdk.core.IResolvable associationMode) {
            this.associationMode = associationMode;
            return this;
        }

        /**
         * Sets the value of {@link RosAnycastEIPAssociationProps#getPopLocations}
         * @param popLocations the value to be set.
         * @return {@code this}
         */
        public Builder popLocations(com.aliyun.ros.cdk.core.IResolvable popLocations) {
            this.popLocations = popLocations;
            return this;
        }

        /**
         * Sets the value of {@link RosAnycastEIPAssociationProps#getPopLocations}
         * @param popLocations the value to be set.
         * @return {@code this}
         */
        public Builder popLocations(java.util.List<? extends java.lang.Object> popLocations) {
            this.popLocations = popLocations;
            return this;
        }

        /**
         * Sets the value of {@link RosAnycastEIPAssociationProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosAnycastEIPAssociationProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAnycastEIPAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAnycastEIPAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAnycastEIPAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAnycastEIPAssociationProps {
        private final java.lang.Object anycastId;
        private final java.lang.Object bindInstanceId;
        private final java.lang.Object bindInstanceRegionId;
        private final java.lang.Object bindInstanceType;
        private final java.lang.Object associationMode;
        private final java.lang.Object popLocations;
        private final java.lang.Object privateIpAddress;

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
            this.associationMode = software.amazon.jsii.Kernel.get(this, "associationMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.popLocations = software.amazon.jsii.Kernel.get(this, "popLocations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.associationMode = builder.associationMode;
            this.popLocations = builder.popLocations;
            this.privateIpAddress = builder.privateIpAddress;
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
        public final java.lang.Object getAssociationMode() {
            return this.associationMode;
        }

        @Override
        public final java.lang.Object getPopLocations() {
            return this.popLocations;
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

            data.set("anycastId", om.valueToTree(this.getAnycastId()));
            data.set("bindInstanceId", om.valueToTree(this.getBindInstanceId()));
            data.set("bindInstanceRegionId", om.valueToTree(this.getBindInstanceRegionId()));
            data.set("bindInstanceType", om.valueToTree(this.getBindInstanceType()));
            if (this.getAssociationMode() != null) {
                data.set("associationMode", om.valueToTree(this.getAssociationMode()));
            }
            if (this.getPopLocations() != null) {
                data.set("popLocations", om.valueToTree(this.getPopLocations()));
            }
            if (this.getPrivateIpAddress() != null) {
                data.set("privateIpAddress", om.valueToTree(this.getPrivateIpAddress()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosAnycastEIPAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAnycastEIPAssociationProps.Jsii$Proxy that = (RosAnycastEIPAssociationProps.Jsii$Proxy) o;

            if (!anycastId.equals(that.anycastId)) return false;
            if (!bindInstanceId.equals(that.bindInstanceId)) return false;
            if (!bindInstanceRegionId.equals(that.bindInstanceRegionId)) return false;
            if (!bindInstanceType.equals(that.bindInstanceType)) return false;
            if (this.associationMode != null ? !this.associationMode.equals(that.associationMode) : that.associationMode != null) return false;
            if (this.popLocations != null ? !this.popLocations.equals(that.popLocations) : that.popLocations != null) return false;
            return this.privateIpAddress != null ? this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress == null;
        }

        @Override
        public final int hashCode() {
            int result = this.anycastId.hashCode();
            result = 31 * result + (this.bindInstanceId.hashCode());
            result = 31 * result + (this.bindInstanceRegionId.hashCode());
            result = 31 * result + (this.bindInstanceType.hashCode());
            result = 31 * result + (this.associationMode != null ? this.associationMode.hashCode() : 0);
            result = 31 * result + (this.popLocations != null ? this.popLocations.hashCode() : 0);
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            return result;
        }
    }
}
