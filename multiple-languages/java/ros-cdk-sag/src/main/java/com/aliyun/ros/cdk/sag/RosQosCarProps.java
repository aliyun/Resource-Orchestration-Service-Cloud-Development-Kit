package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a `ALIYUN::SAG::QosCar`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-06-08T09:23:36.328Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.RosQosCarProps")
@software.amazon.jsii.Jsii.Proxy(RosQosCarProps.Jsii$Proxy.class)
public interface RosQosCarProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLimitType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPriority();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQosId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxBandwidthAbs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxBandwidthPercent() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMinBandwidthAbs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMinBandwidthPercent() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPercentSourceType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosQosCarProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosQosCarProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosQosCarProps> {
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
         * Sets the value of {@link RosQosCarProps#getLimitType}
         * @param limitType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder limitType(java.lang.String limitType) {
            this.limitType = limitType;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getLimitType}
         * @param limitType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder limitType(com.aliyun.ros.cdk.core.IResolvable limitType) {
            this.limitType = limitType;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getPriority}
         * @param priority the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getPriority}
         * @param priority the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getQosId}
         * @param qosId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder qosId(java.lang.String qosId) {
            this.qosId = qosId;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getQosId}
         * @param qosId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder qosId(com.aliyun.ros.cdk.core.IResolvable qosId) {
            this.qosId = qosId;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getMaxBandwidthAbs}
         * @param maxBandwidthAbs the value to be set.
         * @return {@code this}
         */
        public Builder maxBandwidthAbs(java.lang.Number maxBandwidthAbs) {
            this.maxBandwidthAbs = maxBandwidthAbs;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getMaxBandwidthAbs}
         * @param maxBandwidthAbs the value to be set.
         * @return {@code this}
         */
        public Builder maxBandwidthAbs(com.aliyun.ros.cdk.core.IResolvable maxBandwidthAbs) {
            this.maxBandwidthAbs = maxBandwidthAbs;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getMaxBandwidthPercent}
         * @param maxBandwidthPercent the value to be set.
         * @return {@code this}
         */
        public Builder maxBandwidthPercent(java.lang.Number maxBandwidthPercent) {
            this.maxBandwidthPercent = maxBandwidthPercent;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getMaxBandwidthPercent}
         * @param maxBandwidthPercent the value to be set.
         * @return {@code this}
         */
        public Builder maxBandwidthPercent(com.aliyun.ros.cdk.core.IResolvable maxBandwidthPercent) {
            this.maxBandwidthPercent = maxBandwidthPercent;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getMinBandwidthAbs}
         * @param minBandwidthAbs the value to be set.
         * @return {@code this}
         */
        public Builder minBandwidthAbs(java.lang.Number minBandwidthAbs) {
            this.minBandwidthAbs = minBandwidthAbs;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getMinBandwidthAbs}
         * @param minBandwidthAbs the value to be set.
         * @return {@code this}
         */
        public Builder minBandwidthAbs(com.aliyun.ros.cdk.core.IResolvable minBandwidthAbs) {
            this.minBandwidthAbs = minBandwidthAbs;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getMinBandwidthPercent}
         * @param minBandwidthPercent the value to be set.
         * @return {@code this}
         */
        public Builder minBandwidthPercent(java.lang.Number minBandwidthPercent) {
            this.minBandwidthPercent = minBandwidthPercent;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getMinBandwidthPercent}
         * @param minBandwidthPercent the value to be set.
         * @return {@code this}
         */
        public Builder minBandwidthPercent(com.aliyun.ros.cdk.core.IResolvable minBandwidthPercent) {
            this.minBandwidthPercent = minBandwidthPercent;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getPercentSourceType}
         * @param percentSourceType the value to be set.
         * @return {@code this}
         */
        public Builder percentSourceType(java.lang.String percentSourceType) {
            this.percentSourceType = percentSourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosQosCarProps#getPercentSourceType}
         * @param percentSourceType the value to be set.
         * @return {@code this}
         */
        public Builder percentSourceType(com.aliyun.ros.cdk.core.IResolvable percentSourceType) {
            this.percentSourceType = percentSourceType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosQosCarProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosQosCarProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosQosCarProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosQosCarProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.RosQosCarProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosQosCarProps.Jsii$Proxy that = (RosQosCarProps.Jsii$Proxy) o;

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
