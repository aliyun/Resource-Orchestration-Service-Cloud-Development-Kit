package com.aliyun.ros.cdk.config;

/**
 * Properties for defining a `ALIYUN::Config::DeliveryChannel`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:18.460Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.RosDeliveryChannelProps")
@software.amazon.jsii.Jsii.Proxy(RosDeliveryChannelProps.Jsii$Proxy.class)
public interface RosDeliveryChannelProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDeliveryChannelAssumeRoleArn();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDeliveryChannelTargetArn();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDeliveryChannelType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeliveryChannelCondition() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeliveryChannelName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDeliveryChannelProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDeliveryChannelProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDeliveryChannelProps> {
        java.lang.Object deliveryChannelAssumeRoleArn;
        java.lang.Object deliveryChannelTargetArn;
        java.lang.Object deliveryChannelType;
        java.lang.Object deliveryChannelCondition;
        java.lang.Object deliveryChannelName;
        java.lang.Object description;

        /**
         * Sets the value of {@link RosDeliveryChannelProps#getDeliveryChannelAssumeRoleArn}
         * @param deliveryChannelAssumeRoleArn the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deliveryChannelAssumeRoleArn(java.lang.String deliveryChannelAssumeRoleArn) {
            this.deliveryChannelAssumeRoleArn = deliveryChannelAssumeRoleArn;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliveryChannelProps#getDeliveryChannelAssumeRoleArn}
         * @param deliveryChannelAssumeRoleArn the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deliveryChannelAssumeRoleArn(com.aliyun.ros.cdk.core.IResolvable deliveryChannelAssumeRoleArn) {
            this.deliveryChannelAssumeRoleArn = deliveryChannelAssumeRoleArn;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliveryChannelProps#getDeliveryChannelTargetArn}
         * @param deliveryChannelTargetArn the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deliveryChannelTargetArn(java.lang.String deliveryChannelTargetArn) {
            this.deliveryChannelTargetArn = deliveryChannelTargetArn;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliveryChannelProps#getDeliveryChannelTargetArn}
         * @param deliveryChannelTargetArn the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deliveryChannelTargetArn(com.aliyun.ros.cdk.core.IResolvable deliveryChannelTargetArn) {
            this.deliveryChannelTargetArn = deliveryChannelTargetArn;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliveryChannelProps#getDeliveryChannelType}
         * @param deliveryChannelType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deliveryChannelType(java.lang.String deliveryChannelType) {
            this.deliveryChannelType = deliveryChannelType;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliveryChannelProps#getDeliveryChannelType}
         * @param deliveryChannelType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deliveryChannelType(com.aliyun.ros.cdk.core.IResolvable deliveryChannelType) {
            this.deliveryChannelType = deliveryChannelType;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliveryChannelProps#getDeliveryChannelCondition}
         * @param deliveryChannelCondition the value to be set.
         * @return {@code this}
         */
        public Builder deliveryChannelCondition(java.lang.String deliveryChannelCondition) {
            this.deliveryChannelCondition = deliveryChannelCondition;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliveryChannelProps#getDeliveryChannelCondition}
         * @param deliveryChannelCondition the value to be set.
         * @return {@code this}
         */
        public Builder deliveryChannelCondition(com.aliyun.ros.cdk.core.IResolvable deliveryChannelCondition) {
            this.deliveryChannelCondition = deliveryChannelCondition;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliveryChannelProps#getDeliveryChannelName}
         * @param deliveryChannelName the value to be set.
         * @return {@code this}
         */
        public Builder deliveryChannelName(java.lang.String deliveryChannelName) {
            this.deliveryChannelName = deliveryChannelName;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliveryChannelProps#getDeliveryChannelName}
         * @param deliveryChannelName the value to be set.
         * @return {@code this}
         */
        public Builder deliveryChannelName(com.aliyun.ros.cdk.core.IResolvable deliveryChannelName) {
            this.deliveryChannelName = deliveryChannelName;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliveryChannelProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliveryChannelProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDeliveryChannelProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDeliveryChannelProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDeliveryChannelProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDeliveryChannelProps {
        private final java.lang.Object deliveryChannelAssumeRoleArn;
        private final java.lang.Object deliveryChannelTargetArn;
        private final java.lang.Object deliveryChannelType;
        private final java.lang.Object deliveryChannelCondition;
        private final java.lang.Object deliveryChannelName;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.deliveryChannelAssumeRoleArn = software.amazon.jsii.Kernel.get(this, "deliveryChannelAssumeRoleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deliveryChannelTargetArn = software.amazon.jsii.Kernel.get(this, "deliveryChannelTargetArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deliveryChannelType = software.amazon.jsii.Kernel.get(this, "deliveryChannelType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deliveryChannelCondition = software.amazon.jsii.Kernel.get(this, "deliveryChannelCondition", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deliveryChannelName = software.amazon.jsii.Kernel.get(this, "deliveryChannelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.deliveryChannelAssumeRoleArn = java.util.Objects.requireNonNull(builder.deliveryChannelAssumeRoleArn, "deliveryChannelAssumeRoleArn is required");
            this.deliveryChannelTargetArn = java.util.Objects.requireNonNull(builder.deliveryChannelTargetArn, "deliveryChannelTargetArn is required");
            this.deliveryChannelType = java.util.Objects.requireNonNull(builder.deliveryChannelType, "deliveryChannelType is required");
            this.deliveryChannelCondition = builder.deliveryChannelCondition;
            this.deliveryChannelName = builder.deliveryChannelName;
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getDeliveryChannelAssumeRoleArn() {
            return this.deliveryChannelAssumeRoleArn;
        }

        @Override
        public final java.lang.Object getDeliveryChannelTargetArn() {
            return this.deliveryChannelTargetArn;
        }

        @Override
        public final java.lang.Object getDeliveryChannelType() {
            return this.deliveryChannelType;
        }

        @Override
        public final java.lang.Object getDeliveryChannelCondition() {
            return this.deliveryChannelCondition;
        }

        @Override
        public final java.lang.Object getDeliveryChannelName() {
            return this.deliveryChannelName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("deliveryChannelAssumeRoleArn", om.valueToTree(this.getDeliveryChannelAssumeRoleArn()));
            data.set("deliveryChannelTargetArn", om.valueToTree(this.getDeliveryChannelTargetArn()));
            data.set("deliveryChannelType", om.valueToTree(this.getDeliveryChannelType()));
            if (this.getDeliveryChannelCondition() != null) {
                data.set("deliveryChannelCondition", om.valueToTree(this.getDeliveryChannelCondition()));
            }
            if (this.getDeliveryChannelName() != null) {
                data.set("deliveryChannelName", om.valueToTree(this.getDeliveryChannelName()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-config.RosDeliveryChannelProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDeliveryChannelProps.Jsii$Proxy that = (RosDeliveryChannelProps.Jsii$Proxy) o;

            if (!deliveryChannelAssumeRoleArn.equals(that.deliveryChannelAssumeRoleArn)) return false;
            if (!deliveryChannelTargetArn.equals(that.deliveryChannelTargetArn)) return false;
            if (!deliveryChannelType.equals(that.deliveryChannelType)) return false;
            if (this.deliveryChannelCondition != null ? !this.deliveryChannelCondition.equals(that.deliveryChannelCondition) : that.deliveryChannelCondition != null) return false;
            if (this.deliveryChannelName != null ? !this.deliveryChannelName.equals(that.deliveryChannelName) : that.deliveryChannelName != null) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.deliveryChannelAssumeRoleArn.hashCode();
            result = 31 * result + (this.deliveryChannelTargetArn.hashCode());
            result = 31 * result + (this.deliveryChannelType.hashCode());
            result = 31 * result + (this.deliveryChannelCondition != null ? this.deliveryChannelCondition.hashCode() : 0);
            result = 31 * result + (this.deliveryChannelName != null ? this.deliveryChannelName.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
