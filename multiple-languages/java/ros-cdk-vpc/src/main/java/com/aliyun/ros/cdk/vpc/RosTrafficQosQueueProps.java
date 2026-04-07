package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosTrafficQosQueue</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqosqueue
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:31.091Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosTrafficQosQueueProps")
@software.amazon.jsii.Jsii.Proxy(RosTrafficQosQueueProps.Jsii$Proxy.class)
public interface RosTrafficQosQueueProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQosId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQueueType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidthPercent() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueueDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueueName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTrafficQosQueueProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTrafficQosQueueProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTrafficQosQueueProps> {
        java.lang.Object qosId;
        java.lang.Object queueType;
        java.lang.Object bandwidthPercent;
        java.lang.Object queueDescription;
        java.lang.Object queueName;

        /**
         * Sets the value of {@link RosTrafficQosQueueProps#getQosId}
         * @param qosId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder qosId(java.lang.String qosId) {
            this.qosId = qosId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosQueueProps#getQosId}
         * @param qosId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder qosId(com.aliyun.ros.cdk.core.IResolvable qosId) {
            this.qosId = qosId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosQueueProps#getQueueType}
         * @param queueType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queueType(java.lang.String queueType) {
            this.queueType = queueType;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosQueueProps#getQueueType}
         * @param queueType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queueType(com.aliyun.ros.cdk.core.IResolvable queueType) {
            this.queueType = queueType;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosQueueProps#getBandwidthPercent}
         * @param bandwidthPercent the value to be set.
         * @return {@code this}
         */
        public Builder bandwidthPercent(java.lang.String bandwidthPercent) {
            this.bandwidthPercent = bandwidthPercent;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosQueueProps#getBandwidthPercent}
         * @param bandwidthPercent the value to be set.
         * @return {@code this}
         */
        public Builder bandwidthPercent(com.aliyun.ros.cdk.core.IResolvable bandwidthPercent) {
            this.bandwidthPercent = bandwidthPercent;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosQueueProps#getQueueDescription}
         * @param queueDescription the value to be set.
         * @return {@code this}
         */
        public Builder queueDescription(java.lang.String queueDescription) {
            this.queueDescription = queueDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosQueueProps#getQueueDescription}
         * @param queueDescription the value to be set.
         * @return {@code this}
         */
        public Builder queueDescription(com.aliyun.ros.cdk.core.IResolvable queueDescription) {
            this.queueDescription = queueDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosQueueProps#getQueueName}
         * @param queueName the value to be set.
         * @return {@code this}
         */
        public Builder queueName(java.lang.String queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficQosQueueProps#getQueueName}
         * @param queueName the value to be set.
         * @return {@code this}
         */
        public Builder queueName(com.aliyun.ros.cdk.core.IResolvable queueName) {
            this.queueName = queueName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTrafficQosQueueProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTrafficQosQueueProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTrafficQosQueueProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTrafficQosQueueProps {
        private final java.lang.Object qosId;
        private final java.lang.Object queueType;
        private final java.lang.Object bandwidthPercent;
        private final java.lang.Object queueDescription;
        private final java.lang.Object queueName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.qosId = software.amazon.jsii.Kernel.get(this, "qosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queueType = software.amazon.jsii.Kernel.get(this, "queueType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidthPercent = software.amazon.jsii.Kernel.get(this, "bandwidthPercent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queueDescription = software.amazon.jsii.Kernel.get(this, "queueDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queueName = software.amazon.jsii.Kernel.get(this, "queueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.qosId = java.util.Objects.requireNonNull(builder.qosId, "qosId is required");
            this.queueType = java.util.Objects.requireNonNull(builder.queueType, "queueType is required");
            this.bandwidthPercent = builder.bandwidthPercent;
            this.queueDescription = builder.queueDescription;
            this.queueName = builder.queueName;
        }

        @Override
        public final java.lang.Object getQosId() {
            return this.qosId;
        }

        @Override
        public final java.lang.Object getQueueType() {
            return this.queueType;
        }

        @Override
        public final java.lang.Object getBandwidthPercent() {
            return this.bandwidthPercent;
        }

        @Override
        public final java.lang.Object getQueueDescription() {
            return this.queueDescription;
        }

        @Override
        public final java.lang.Object getQueueName() {
            return this.queueName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("qosId", om.valueToTree(this.getQosId()));
            data.set("queueType", om.valueToTree(this.getQueueType()));
            if (this.getBandwidthPercent() != null) {
                data.set("bandwidthPercent", om.valueToTree(this.getBandwidthPercent()));
            }
            if (this.getQueueDescription() != null) {
                data.set("queueDescription", om.valueToTree(this.getQueueDescription()));
            }
            if (this.getQueueName() != null) {
                data.set("queueName", om.valueToTree(this.getQueueName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosTrafficQosQueueProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTrafficQosQueueProps.Jsii$Proxy that = (RosTrafficQosQueueProps.Jsii$Proxy) o;

            if (!qosId.equals(that.qosId)) return false;
            if (!queueType.equals(that.queueType)) return false;
            if (this.bandwidthPercent != null ? !this.bandwidthPercent.equals(that.bandwidthPercent) : that.bandwidthPercent != null) return false;
            if (this.queueDescription != null ? !this.queueDescription.equals(that.queueDescription) : that.queueDescription != null) return false;
            return this.queueName != null ? this.queueName.equals(that.queueName) : that.queueName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.qosId.hashCode();
            result = 31 * result + (this.queueType.hashCode());
            result = 31 * result + (this.bandwidthPercent != null ? this.bandwidthPercent.hashCode() : 0);
            result = 31 * result + (this.queueDescription != null ? this.queueDescription.hashCode() : 0);
            result = 31 * result + (this.queueName != null ? this.queueName.hashCode() : 0);
            return result;
        }
    }
}
