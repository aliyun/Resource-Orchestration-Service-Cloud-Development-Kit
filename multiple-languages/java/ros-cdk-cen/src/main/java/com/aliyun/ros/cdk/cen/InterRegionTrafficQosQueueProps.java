package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>InterRegionTrafficQosQueue</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqosqueue
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.334Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.InterRegionTrafficQosQueueProps")
@software.amazon.jsii.Jsii.Proxy(InterRegionTrafficQosQueueProps.Jsii$Proxy.class)
public interface InterRegionTrafficQosQueueProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dscps: The DSCP value of the traffic packet to be matched in the current queue, ranging from 0 to 63.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDscps();

    /**
     * Property trafficQosPolicyId: The ID of the QoS policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTrafficQosPolicyId();

    /**
     * Property bandwidth: The maximum absolute bandwidth value that can be allocated to the queue.
     * <p>
     * Unit: Mbit/s.
     * <p>
     * <ul>
     * <li>The value specifies an absolute bandwidth. For example, a value of 20 specifies that the queue can consume at most 20 Mbit/s of bandwidth.</li>
     * <li>The sum of the bandwidth values specified for all queues that belong to the same inter-region connection cannot exceed the maximum bandwidth of the inter-region connection.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return null;
    }

    /**
     * Property interRegionTrafficQosQueueDescription: The description of the queue.
     * <p>
     * This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInterRegionTrafficQosQueueDescription() {
        return null;
    }

    /**
     * Property interRegionTrafficQosQueueName: The name of the queue.
     * <p>
     * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInterRegionTrafficQosQueueName() {
        return null;
    }

    /**
     * Property remainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.
     * <p>
     * <ul>
     * <li>Unit: percentage. For example, a value of 20 specifies that the queue can consume at most 20% of inter-region bandwidth.
     * <p>
     * <ul>
     * <li>The sum of the percentage values specified for all queues that belong to the same inter-region connection cannot exceed 100%.</li>
     * </ul></li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemainBandwidthPercent() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InterRegionTrafficQosQueueProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InterRegionTrafficQosQueueProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InterRegionTrafficQosQueueProps> {
        java.lang.Object dscps;
        java.lang.Object trafficQosPolicyId;
        java.lang.Object bandwidth;
        java.lang.Object interRegionTrafficQosQueueDescription;
        java.lang.Object interRegionTrafficQosQueueName;
        java.lang.Object remainBandwidthPercent;

        /**
         * Sets the value of {@link InterRegionTrafficQosQueueProps#getDscps}
         * @param dscps Property dscps: The DSCP value of the traffic packet to be matched in the current queue, ranging from 0 to 63. This parameter is required.
         * @return {@code this}
         */
        public Builder dscps(com.aliyun.ros.cdk.core.IResolvable dscps) {
            this.dscps = dscps;
            return this;
        }

        /**
         * Sets the value of {@link InterRegionTrafficQosQueueProps#getDscps}
         * @param dscps Property dscps: The DSCP value of the traffic packet to be matched in the current queue, ranging from 0 to 63. This parameter is required.
         * @return {@code this}
         */
        public Builder dscps(java.util.List<? extends java.lang.Object> dscps) {
            this.dscps = dscps;
            return this;
        }

        /**
         * Sets the value of {@link InterRegionTrafficQosQueueProps#getTrafficQosPolicyId}
         * @param trafficQosPolicyId Property trafficQosPolicyId: The ID of the QoS policy. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficQosPolicyId(java.lang.String trafficQosPolicyId) {
            this.trafficQosPolicyId = trafficQosPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link InterRegionTrafficQosQueueProps#getTrafficQosPolicyId}
         * @param trafficQosPolicyId Property trafficQosPolicyId: The ID of the QoS policy. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficQosPolicyId(com.aliyun.ros.cdk.core.IResolvable trafficQosPolicyId) {
            this.trafficQosPolicyId = trafficQosPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link InterRegionTrafficQosQueueProps#getBandwidth}
         * @param bandwidth Property bandwidth: The maximum absolute bandwidth value that can be allocated to the queue.
         *                  Unit: Mbit/s.
         *                  <p>
         *                  <ul>
         *                  <li>The value specifies an absolute bandwidth. For example, a value of 20 specifies that the queue can consume at most 20 Mbit/s of bandwidth.</li>
         *                  <li>The sum of the bandwidth values specified for all queues that belong to the same inter-region connection cannot exceed the maximum bandwidth of the inter-region connection.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link InterRegionTrafficQosQueueProps#getBandwidth}
         * @param bandwidth Property bandwidth: The maximum absolute bandwidth value that can be allocated to the queue.
         *                  Unit: Mbit/s.
         *                  <p>
         *                  <ul>
         *                  <li>The value specifies an absolute bandwidth. For example, a value of 20 specifies that the queue can consume at most 20 Mbit/s of bandwidth.</li>
         *                  <li>The sum of the bandwidth values specified for all queues that belong to the same inter-region connection cannot exceed the maximum bandwidth of the inter-region connection.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link InterRegionTrafficQosQueueProps#getInterRegionTrafficQosQueueDescription}
         * @param interRegionTrafficQosQueueDescription Property interRegionTrafficQosQueueDescription: The description of the queue.
         *                                              This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder interRegionTrafficQosQueueDescription(java.lang.String interRegionTrafficQosQueueDescription) {
            this.interRegionTrafficQosQueueDescription = interRegionTrafficQosQueueDescription;
            return this;
        }

        /**
         * Sets the value of {@link InterRegionTrafficQosQueueProps#getInterRegionTrafficQosQueueDescription}
         * @param interRegionTrafficQosQueueDescription Property interRegionTrafficQosQueueDescription: The description of the queue.
         *                                              This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder interRegionTrafficQosQueueDescription(com.aliyun.ros.cdk.core.IResolvable interRegionTrafficQosQueueDescription) {
            this.interRegionTrafficQosQueueDescription = interRegionTrafficQosQueueDescription;
            return this;
        }

        /**
         * Sets the value of {@link InterRegionTrafficQosQueueProps#getInterRegionTrafficQosQueueName}
         * @param interRegionTrafficQosQueueName Property interRegionTrafficQosQueueName: The name of the queue.
         *                                       The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder interRegionTrafficQosQueueName(java.lang.String interRegionTrafficQosQueueName) {
            this.interRegionTrafficQosQueueName = interRegionTrafficQosQueueName;
            return this;
        }

        /**
         * Sets the value of {@link InterRegionTrafficQosQueueProps#getInterRegionTrafficQosQueueName}
         * @param interRegionTrafficQosQueueName Property interRegionTrafficQosQueueName: The name of the queue.
         *                                       The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder interRegionTrafficQosQueueName(com.aliyun.ros.cdk.core.IResolvable interRegionTrafficQosQueueName) {
            this.interRegionTrafficQosQueueName = interRegionTrafficQosQueueName;
            return this;
        }

        /**
         * Sets the value of {@link InterRegionTrafficQosQueueProps#getRemainBandwidthPercent}
         * @param remainBandwidthPercent Property remainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.
         *                               <ul>
         *                               <li>Unit: percentage. For example, a value of 20 specifies that the queue can consume at most 20% of inter-region bandwidth.
         *                               <p>
         *                               <ul>
         *                               <li>The sum of the percentage values specified for all queues that belong to the same inter-region connection cannot exceed 100%.</li>
         *                               </ul></li>
         *                               </ul>
         * @return {@code this}
         */
        public Builder remainBandwidthPercent(java.lang.Number remainBandwidthPercent) {
            this.remainBandwidthPercent = remainBandwidthPercent;
            return this;
        }

        /**
         * Sets the value of {@link InterRegionTrafficQosQueueProps#getRemainBandwidthPercent}
         * @param remainBandwidthPercent Property remainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.
         *                               <ul>
         *                               <li>Unit: percentage. For example, a value of 20 specifies that the queue can consume at most 20% of inter-region bandwidth.
         *                               <p>
         *                               <ul>
         *                               <li>The sum of the percentage values specified for all queues that belong to the same inter-region connection cannot exceed 100%.</li>
         *                               </ul></li>
         *                               </ul>
         * @return {@code this}
         */
        public Builder remainBandwidthPercent(com.aliyun.ros.cdk.core.IResolvable remainBandwidthPercent) {
            this.remainBandwidthPercent = remainBandwidthPercent;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InterRegionTrafficQosQueueProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InterRegionTrafficQosQueueProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InterRegionTrafficQosQueueProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InterRegionTrafficQosQueueProps {
        private final java.lang.Object dscps;
        private final java.lang.Object trafficQosPolicyId;
        private final java.lang.Object bandwidth;
        private final java.lang.Object interRegionTrafficQosQueueDescription;
        private final java.lang.Object interRegionTrafficQosQueueName;
        private final java.lang.Object remainBandwidthPercent;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dscps = software.amazon.jsii.Kernel.get(this, "dscps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficQosPolicyId = software.amazon.jsii.Kernel.get(this, "trafficQosPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.interRegionTrafficQosQueueDescription = software.amazon.jsii.Kernel.get(this, "interRegionTrafficQosQueueDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.interRegionTrafficQosQueueName = software.amazon.jsii.Kernel.get(this, "interRegionTrafficQosQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remainBandwidthPercent = software.amazon.jsii.Kernel.get(this, "remainBandwidthPercent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dscps = java.util.Objects.requireNonNull(builder.dscps, "dscps is required");
            this.trafficQosPolicyId = java.util.Objects.requireNonNull(builder.trafficQosPolicyId, "trafficQosPolicyId is required");
            this.bandwidth = builder.bandwidth;
            this.interRegionTrafficQosQueueDescription = builder.interRegionTrafficQosQueueDescription;
            this.interRegionTrafficQosQueueName = builder.interRegionTrafficQosQueueName;
            this.remainBandwidthPercent = builder.remainBandwidthPercent;
        }

        @Override
        public final java.lang.Object getDscps() {
            return this.dscps;
        }

        @Override
        public final java.lang.Object getTrafficQosPolicyId() {
            return this.trafficQosPolicyId;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getInterRegionTrafficQosQueueDescription() {
            return this.interRegionTrafficQosQueueDescription;
        }

        @Override
        public final java.lang.Object getInterRegionTrafficQosQueueName() {
            return this.interRegionTrafficQosQueueName;
        }

        @Override
        public final java.lang.Object getRemainBandwidthPercent() {
            return this.remainBandwidthPercent;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dscps", om.valueToTree(this.getDscps()));
            data.set("trafficQosPolicyId", om.valueToTree(this.getTrafficQosPolicyId()));
            if (this.getBandwidth() != null) {
                data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            }
            if (this.getInterRegionTrafficQosQueueDescription() != null) {
                data.set("interRegionTrafficQosQueueDescription", om.valueToTree(this.getInterRegionTrafficQosQueueDescription()));
            }
            if (this.getInterRegionTrafficQosQueueName() != null) {
                data.set("interRegionTrafficQosQueueName", om.valueToTree(this.getInterRegionTrafficQosQueueName()));
            }
            if (this.getRemainBandwidthPercent() != null) {
                data.set("remainBandwidthPercent", om.valueToTree(this.getRemainBandwidthPercent()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.InterRegionTrafficQosQueueProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InterRegionTrafficQosQueueProps.Jsii$Proxy that = (InterRegionTrafficQosQueueProps.Jsii$Proxy) o;

            if (!dscps.equals(that.dscps)) return false;
            if (!trafficQosPolicyId.equals(that.trafficQosPolicyId)) return false;
            if (this.bandwidth != null ? !this.bandwidth.equals(that.bandwidth) : that.bandwidth != null) return false;
            if (this.interRegionTrafficQosQueueDescription != null ? !this.interRegionTrafficQosQueueDescription.equals(that.interRegionTrafficQosQueueDescription) : that.interRegionTrafficQosQueueDescription != null) return false;
            if (this.interRegionTrafficQosQueueName != null ? !this.interRegionTrafficQosQueueName.equals(that.interRegionTrafficQosQueueName) : that.interRegionTrafficQosQueueName != null) return false;
            return this.remainBandwidthPercent != null ? this.remainBandwidthPercent.equals(that.remainBandwidthPercent) : that.remainBandwidthPercent == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dscps.hashCode();
            result = 31 * result + (this.trafficQosPolicyId.hashCode());
            result = 31 * result + (this.bandwidth != null ? this.bandwidth.hashCode() : 0);
            result = 31 * result + (this.interRegionTrafficQosQueueDescription != null ? this.interRegionTrafficQosQueueDescription.hashCode() : 0);
            result = 31 * result + (this.interRegionTrafficQosQueueName != null ? this.interRegionTrafficQosQueueName.hashCode() : 0);
            result = 31 * result + (this.remainBandwidthPercent != null ? this.remainBandwidthPercent.hashCode() : 0);
            return result;
        }
    }
}
