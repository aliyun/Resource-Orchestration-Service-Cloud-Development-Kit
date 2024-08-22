package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a <code>QosCar</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qoscar
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:24.062Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.QosCarProps")
@software.amazon.jsii.Jsii.Proxy(QosCarProps.Jsii$Proxy.class)
public interface QosCarProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property limitType: The type of the traffic throttling policy.
     * <p>
     * Valid values:
     * Absolute: throttles traffic by a specific bandwidth range.
     * Percent: throttles traffic by a specific range of bandwidth percentage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLimitType();

    /**
     * Property priority: The priority of the traffic throttling policy.
     * <p>
     * A smaller value represents a higher
     * priority. If policies are assigned the same priority, the one applied the earliest
     * prevails. Valid values: 1 to 7.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPriority();

    /**
     * Property qosId: The ID of the QoS policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQosId();

    /**
     * Property description: The description of the traffic throttling policy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property maxBandwidthAbs: The maximum bandwidth.
     * <p>
     * This parameter is required when LimitType is set to Absolute.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxBandwidthAbs() {
        return null;
    }

    /**
     * Property maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG instance.
     * <p>
     * This parameter is required when LimitType is set to Percent.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxBandwidthPercent() {
        return null;
    }

    /**
     * Property minBandwidthAbs: The minimum bandwidth.
     * <p>
     * This parameter is required when LimitType is set to Absolute.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMinBandwidthAbs() {
        return null;
    }

    /**
     * Property minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG instance.
     * <p>
     * This parameter is required when LimitType is set to Percent.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMinBandwidthPercent() {
        return null;
    }

    /**
     * Property name: The name of the traffic throttling policy.
     * <p>
     * The name must be 2 to 128 characters in
     * length, and can contain Chinese characters, letters, digits, periods (.), underscores
     * (_), and hyphens (-).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following options are available: CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.
     * <p>
     * InternetUpBandwidth: Internet upstream bandwidth.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPercentSourceType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link QosCarProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link QosCarProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<QosCarProps> {
        java.lang.Object limitType;
        java.lang.Object priority;
        java.lang.Object qosId;
        java.lang.Object description;
        java.lang.Object maxBandwidthAbs;
        java.lang.Object maxBandwidthPercent;
        java.lang.Object minBandwidthAbs;
        java.lang.Object minBandwidthPercent;
        java.lang.Object name;
        java.lang.Object percentSourceType;

        /**
         * Sets the value of {@link QosCarProps#getLimitType}
         * @param limitType Property limitType: The type of the traffic throttling policy. This parameter is required.
         *                  Valid values:
         *                  Absolute: throttles traffic by a specific bandwidth range.
         *                  Percent: throttles traffic by a specific range of bandwidth percentage.
         * @return {@code this}
         */
        public Builder limitType(java.lang.String limitType) {
            this.limitType = limitType;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getLimitType}
         * @param limitType Property limitType: The type of the traffic throttling policy. This parameter is required.
         *                  Valid values:
         *                  Absolute: throttles traffic by a specific bandwidth range.
         *                  Percent: throttles traffic by a specific range of bandwidth percentage.
         * @return {@code this}
         */
        public Builder limitType(com.aliyun.ros.cdk.core.IResolvable limitType) {
            this.limitType = limitType;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getPriority}
         * @param priority Property priority: The priority of the traffic throttling policy. This parameter is required.
         *                 A smaller value represents a higher
         *                 priority. If policies are assigned the same priority, the one applied the earliest
         *                 prevails. Valid values: 1 to 7.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getPriority}
         * @param priority Property priority: The priority of the traffic throttling policy. This parameter is required.
         *                 A smaller value represents a higher
         *                 priority. If policies are assigned the same priority, the one applied the earliest
         *                 prevails. Valid values: 1 to 7.
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getQosId}
         * @param qosId Property qosId: The ID of the QoS policy. This parameter is required.
         * @return {@code this}
         */
        public Builder qosId(java.lang.String qosId) {
            this.qosId = qosId;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getQosId}
         * @param qosId Property qosId: The ID of the QoS policy. This parameter is required.
         * @return {@code this}
         */
        public Builder qosId(com.aliyun.ros.cdk.core.IResolvable qosId) {
            this.qosId = qosId;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getDescription}
         * @param description Property description: The description of the traffic throttling policy.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getDescription}
         * @param description Property description: The description of the traffic throttling policy.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getMaxBandwidthAbs}
         * @param maxBandwidthAbs Property maxBandwidthAbs: The maximum bandwidth.
         *                        This parameter is required when LimitType is set to Absolute.
         * @return {@code this}
         */
        public Builder maxBandwidthAbs(java.lang.Number maxBandwidthAbs) {
            this.maxBandwidthAbs = maxBandwidthAbs;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getMaxBandwidthAbs}
         * @param maxBandwidthAbs Property maxBandwidthAbs: The maximum bandwidth.
         *                        This parameter is required when LimitType is set to Absolute.
         * @return {@code this}
         */
        public Builder maxBandwidthAbs(com.aliyun.ros.cdk.core.IResolvable maxBandwidthAbs) {
            this.maxBandwidthAbs = maxBandwidthAbs;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getMaxBandwidthPercent}
         * @param maxBandwidthPercent Property maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG instance.
         *                            This parameter is required when LimitType is set to Percent.
         * @return {@code this}
         */
        public Builder maxBandwidthPercent(java.lang.Number maxBandwidthPercent) {
            this.maxBandwidthPercent = maxBandwidthPercent;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getMaxBandwidthPercent}
         * @param maxBandwidthPercent Property maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG instance.
         *                            This parameter is required when LimitType is set to Percent.
         * @return {@code this}
         */
        public Builder maxBandwidthPercent(com.aliyun.ros.cdk.core.IResolvable maxBandwidthPercent) {
            this.maxBandwidthPercent = maxBandwidthPercent;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getMinBandwidthAbs}
         * @param minBandwidthAbs Property minBandwidthAbs: The minimum bandwidth.
         *                        This parameter is required when LimitType is set to Absolute.
         * @return {@code this}
         */
        public Builder minBandwidthAbs(java.lang.Number minBandwidthAbs) {
            this.minBandwidthAbs = minBandwidthAbs;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getMinBandwidthAbs}
         * @param minBandwidthAbs Property minBandwidthAbs: The minimum bandwidth.
         *                        This parameter is required when LimitType is set to Absolute.
         * @return {@code this}
         */
        public Builder minBandwidthAbs(com.aliyun.ros.cdk.core.IResolvable minBandwidthAbs) {
            this.minBandwidthAbs = minBandwidthAbs;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getMinBandwidthPercent}
         * @param minBandwidthPercent Property minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG instance.
         *                            This parameter is required when LimitType is set to Percent.
         * @return {@code this}
         */
        public Builder minBandwidthPercent(java.lang.Number minBandwidthPercent) {
            this.minBandwidthPercent = minBandwidthPercent;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getMinBandwidthPercent}
         * @param minBandwidthPercent Property minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG instance.
         *                            This parameter is required when LimitType is set to Percent.
         * @return {@code this}
         */
        public Builder minBandwidthPercent(com.aliyun.ros.cdk.core.IResolvable minBandwidthPercent) {
            this.minBandwidthPercent = minBandwidthPercent;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getName}
         * @param name Property name: The name of the traffic throttling policy.
         *             The name must be 2 to 128 characters in
         *             length, and can contain Chinese characters, letters, digits, periods (.), underscores
         *             (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getName}
         * @param name Property name: The name of the traffic throttling policy.
         *             The name must be 2 to 128 characters in
         *             length, and can contain Chinese characters, letters, digits, periods (.), underscores
         *             (_), and hyphens (-).
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getPercentSourceType}
         * @param percentSourceType Property percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following options are available: CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.
         *                          InternetUpBandwidth: Internet upstream bandwidth.
         * @return {@code this}
         */
        public Builder percentSourceType(java.lang.String percentSourceType) {
            this.percentSourceType = percentSourceType;
            return this;
        }

        /**
         * Sets the value of {@link QosCarProps#getPercentSourceType}
         * @param percentSourceType Property percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following options are available: CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.
         *                          InternetUpBandwidth: Internet upstream bandwidth.
         * @return {@code this}
         */
        public Builder percentSourceType(com.aliyun.ros.cdk.core.IResolvable percentSourceType) {
            this.percentSourceType = percentSourceType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link QosCarProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public QosCarProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link QosCarProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QosCarProps {
        private final java.lang.Object limitType;
        private final java.lang.Object priority;
        private final java.lang.Object qosId;
        private final java.lang.Object description;
        private final java.lang.Object maxBandwidthAbs;
        private final java.lang.Object maxBandwidthPercent;
        private final java.lang.Object minBandwidthAbs;
        private final java.lang.Object minBandwidthPercent;
        private final java.lang.Object name;
        private final java.lang.Object percentSourceType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.limitType = software.amazon.jsii.Kernel.get(this, "limitType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.qosId = software.amazon.jsii.Kernel.get(this, "qosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxBandwidthAbs = software.amazon.jsii.Kernel.get(this, "maxBandwidthAbs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxBandwidthPercent = software.amazon.jsii.Kernel.get(this, "maxBandwidthPercent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.minBandwidthAbs = software.amazon.jsii.Kernel.get(this, "minBandwidthAbs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.minBandwidthPercent = software.amazon.jsii.Kernel.get(this, "minBandwidthPercent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.percentSourceType = software.amazon.jsii.Kernel.get(this, "percentSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.limitType = java.util.Objects.requireNonNull(builder.limitType, "limitType is required");
            this.priority = java.util.Objects.requireNonNull(builder.priority, "priority is required");
            this.qosId = java.util.Objects.requireNonNull(builder.qosId, "qosId is required");
            this.description = builder.description;
            this.maxBandwidthAbs = builder.maxBandwidthAbs;
            this.maxBandwidthPercent = builder.maxBandwidthPercent;
            this.minBandwidthAbs = builder.minBandwidthAbs;
            this.minBandwidthPercent = builder.minBandwidthPercent;
            this.name = builder.name;
            this.percentSourceType = builder.percentSourceType;
        }

        @Override
        public final java.lang.Object getLimitType() {
            return this.limitType;
        }

        @Override
        public final java.lang.Object getPriority() {
            return this.priority;
        }

        @Override
        public final java.lang.Object getQosId() {
            return this.qosId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getMaxBandwidthAbs() {
            return this.maxBandwidthAbs;
        }

        @Override
        public final java.lang.Object getMaxBandwidthPercent() {
            return this.maxBandwidthPercent;
        }

        @Override
        public final java.lang.Object getMinBandwidthAbs() {
            return this.minBandwidthAbs;
        }

        @Override
        public final java.lang.Object getMinBandwidthPercent() {
            return this.minBandwidthPercent;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getPercentSourceType() {
            return this.percentSourceType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("limitType", om.valueToTree(this.getLimitType()));
            data.set("priority", om.valueToTree(this.getPriority()));
            data.set("qosId", om.valueToTree(this.getQosId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getMaxBandwidthAbs() != null) {
                data.set("maxBandwidthAbs", om.valueToTree(this.getMaxBandwidthAbs()));
            }
            if (this.getMaxBandwidthPercent() != null) {
                data.set("maxBandwidthPercent", om.valueToTree(this.getMaxBandwidthPercent()));
            }
            if (this.getMinBandwidthAbs() != null) {
                data.set("minBandwidthAbs", om.valueToTree(this.getMinBandwidthAbs()));
            }
            if (this.getMinBandwidthPercent() != null) {
                data.set("minBandwidthPercent", om.valueToTree(this.getMinBandwidthPercent()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getPercentSourceType() != null) {
                data.set("percentSourceType", om.valueToTree(this.getPercentSourceType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.QosCarProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            QosCarProps.Jsii$Proxy that = (QosCarProps.Jsii$Proxy) o;

            if (!limitType.equals(that.limitType)) return false;
            if (!priority.equals(that.priority)) return false;
            if (!qosId.equals(that.qosId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.maxBandwidthAbs != null ? !this.maxBandwidthAbs.equals(that.maxBandwidthAbs) : that.maxBandwidthAbs != null) return false;
            if (this.maxBandwidthPercent != null ? !this.maxBandwidthPercent.equals(that.maxBandwidthPercent) : that.maxBandwidthPercent != null) return false;
            if (this.minBandwidthAbs != null ? !this.minBandwidthAbs.equals(that.minBandwidthAbs) : that.minBandwidthAbs != null) return false;
            if (this.minBandwidthPercent != null ? !this.minBandwidthPercent.equals(that.minBandwidthPercent) : that.minBandwidthPercent != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            return this.percentSourceType != null ? this.percentSourceType.equals(that.percentSourceType) : that.percentSourceType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.limitType.hashCode();
            result = 31 * result + (this.priority.hashCode());
            result = 31 * result + (this.qosId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.maxBandwidthAbs != null ? this.maxBandwidthAbs.hashCode() : 0);
            result = 31 * result + (this.maxBandwidthPercent != null ? this.maxBandwidthPercent.hashCode() : 0);
            result = 31 * result + (this.minBandwidthAbs != null ? this.minBandwidthAbs.hashCode() : 0);
            result = 31 * result + (this.minBandwidthPercent != null ? this.minBandwidthPercent.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.percentSourceType != null ? this.percentSourceType.hashCode() : 0);
            return result;
        }
    }
}
