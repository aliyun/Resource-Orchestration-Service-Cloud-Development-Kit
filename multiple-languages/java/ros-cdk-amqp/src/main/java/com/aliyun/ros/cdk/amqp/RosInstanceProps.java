package com.aliyun.ros.cdk.amqp;

/**
 * Properties for defining a <code>ALIYUN::AMQP::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:23.315Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.RosInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceProps.Jsii$Proxy.class)
public interface RosInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMaxTps();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQueueCapacity();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStorageSize();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxEipTps() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOrderNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSupportEip() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSupportTracing() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTracingStorageTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInstanceProps> {
        java.lang.Object instanceType;
        java.lang.Object maxTps;
        java.lang.Object queueCapacity;
        java.lang.Object storageSize;
        java.lang.Object instanceName;
        java.lang.Object maxEipTps;
        java.lang.Object orderNum;
        java.lang.Object payType;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object supportEip;
        java.lang.Object supportTracing;
        java.lang.Object tracingStorageTime;

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceType}
         * @param instanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceType}
         * @param instanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getMaxTps}
         * @param maxTps the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder maxTps(java.lang.Number maxTps) {
            this.maxTps = maxTps;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getMaxTps}
         * @param maxTps the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder maxTps(com.aliyun.ros.cdk.core.IResolvable maxTps) {
            this.maxTps = maxTps;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getQueueCapacity}
         * @param queueCapacity the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queueCapacity(java.lang.Number queueCapacity) {
            this.queueCapacity = queueCapacity;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getQueueCapacity}
         * @param queueCapacity the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder queueCapacity(com.aliyun.ros.cdk.core.IResolvable queueCapacity) {
            this.queueCapacity = queueCapacity;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getStorageSize}
         * @param storageSize the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder storageSize(java.lang.Number storageSize) {
            this.storageSize = storageSize;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getStorageSize}
         * @param storageSize the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder storageSize(com.aliyun.ros.cdk.core.IResolvable storageSize) {
            this.storageSize = storageSize;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getMaxEipTps}
         * @param maxEipTps the value to be set.
         * @return {@code this}
         */
        public Builder maxEipTps(java.lang.Number maxEipTps) {
            this.maxEipTps = maxEipTps;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getMaxEipTps}
         * @param maxEipTps the value to be set.
         * @return {@code this}
         */
        public Builder maxEipTps(com.aliyun.ros.cdk.core.IResolvable maxEipTps) {
            this.maxEipTps = maxEipTps;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getOrderNum}
         * @param orderNum the value to be set.
         * @return {@code this}
         */
        public Builder orderNum(java.lang.Number orderNum) {
            this.orderNum = orderNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getOrderNum}
         * @param orderNum the value to be set.
         * @return {@code this}
         */
        public Builder orderNum(com.aliyun.ros.cdk.core.IResolvable orderNum) {
            this.orderNum = orderNum;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPayType}
         * @param payType the value to be set.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPayType}
         * @param payType the value to be set.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSupportEip}
         * @param supportEip the value to be set.
         * @return {@code this}
         */
        public Builder supportEip(java.lang.String supportEip) {
            this.supportEip = supportEip;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSupportEip}
         * @param supportEip the value to be set.
         * @return {@code this}
         */
        public Builder supportEip(com.aliyun.ros.cdk.core.IResolvable supportEip) {
            this.supportEip = supportEip;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSupportTracing}
         * @param supportTracing the value to be set.
         * @return {@code this}
         */
        public Builder supportTracing(java.lang.String supportTracing) {
            this.supportTracing = supportTracing;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getSupportTracing}
         * @param supportTracing the value to be set.
         * @return {@code this}
         */
        public Builder supportTracing(com.aliyun.ros.cdk.core.IResolvable supportTracing) {
            this.supportTracing = supportTracing;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getTracingStorageTime}
         * @param tracingStorageTime the value to be set.
         * @return {@code this}
         */
        public Builder tracingStorageTime(java.lang.Number tracingStorageTime) {
            this.tracingStorageTime = tracingStorageTime;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceProps#getTracingStorageTime}
         * @param tracingStorageTime the value to be set.
         * @return {@code this}
         */
        public Builder tracingStorageTime(com.aliyun.ros.cdk.core.IResolvable tracingStorageTime) {
            this.tracingStorageTime = tracingStorageTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstanceProps {
        private final java.lang.Object instanceType;
        private final java.lang.Object maxTps;
        private final java.lang.Object queueCapacity;
        private final java.lang.Object storageSize;
        private final java.lang.Object instanceName;
        private final java.lang.Object maxEipTps;
        private final java.lang.Object orderNum;
        private final java.lang.Object payType;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object supportEip;
        private final java.lang.Object supportTracing;
        private final java.lang.Object tracingStorageTime;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxTps = software.amazon.jsii.Kernel.get(this, "maxTps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queueCapacity = software.amazon.jsii.Kernel.get(this, "queueCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageSize = software.amazon.jsii.Kernel.get(this, "storageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxEipTps = software.amazon.jsii.Kernel.get(this, "maxEipTps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.orderNum = software.amazon.jsii.Kernel.get(this, "orderNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.supportEip = software.amazon.jsii.Kernel.get(this, "supportEip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.supportTracing = software.amazon.jsii.Kernel.get(this, "supportTracing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tracingStorageTime = software.amazon.jsii.Kernel.get(this, "tracingStorageTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
            this.maxTps = java.util.Objects.requireNonNull(builder.maxTps, "maxTps is required");
            this.queueCapacity = java.util.Objects.requireNonNull(builder.queueCapacity, "queueCapacity is required");
            this.storageSize = java.util.Objects.requireNonNull(builder.storageSize, "storageSize is required");
            this.instanceName = builder.instanceName;
            this.maxEipTps = builder.maxEipTps;
            this.orderNum = builder.orderNum;
            this.payType = builder.payType;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.supportEip = builder.supportEip;
            this.supportTracing = builder.supportTracing;
            this.tracingStorageTime = builder.tracingStorageTime;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getMaxTps() {
            return this.maxTps;
        }

        @Override
        public final java.lang.Object getQueueCapacity() {
            return this.queueCapacity;
        }

        @Override
        public final java.lang.Object getStorageSize() {
            return this.storageSize;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getMaxEipTps() {
            return this.maxEipTps;
        }

        @Override
        public final java.lang.Object getOrderNum() {
            return this.orderNum;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getSupportEip() {
            return this.supportEip;
        }

        @Override
        public final java.lang.Object getSupportTracing() {
            return this.supportTracing;
        }

        @Override
        public final java.lang.Object getTracingStorageTime() {
            return this.tracingStorageTime;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceType", om.valueToTree(this.getInstanceType()));
            data.set("maxTps", om.valueToTree(this.getMaxTps()));
            data.set("queueCapacity", om.valueToTree(this.getQueueCapacity()));
            data.set("storageSize", om.valueToTree(this.getStorageSize()));
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getMaxEipTps() != null) {
                data.set("maxEipTps", om.valueToTree(this.getMaxEipTps()));
            }
            if (this.getOrderNum() != null) {
                data.set("orderNum", om.valueToTree(this.getOrderNum()));
            }
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getSupportEip() != null) {
                data.set("supportEip", om.valueToTree(this.getSupportEip()));
            }
            if (this.getSupportTracing() != null) {
                data.set("supportTracing", om.valueToTree(this.getSupportTracing()));
            }
            if (this.getTracingStorageTime() != null) {
                data.set("tracingStorageTime", om.valueToTree(this.getTracingStorageTime()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-amqp.RosInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInstanceProps.Jsii$Proxy that = (RosInstanceProps.Jsii$Proxy) o;

            if (!instanceType.equals(that.instanceType)) return false;
            if (!maxTps.equals(that.maxTps)) return false;
            if (!queueCapacity.equals(that.queueCapacity)) return false;
            if (!storageSize.equals(that.storageSize)) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.maxEipTps != null ? !this.maxEipTps.equals(that.maxEipTps) : that.maxEipTps != null) return false;
            if (this.orderNum != null ? !this.orderNum.equals(that.orderNum) : that.orderNum != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.supportEip != null ? !this.supportEip.equals(that.supportEip) : that.supportEip != null) return false;
            if (this.supportTracing != null ? !this.supportTracing.equals(that.supportTracing) : that.supportTracing != null) return false;
            return this.tracingStorageTime != null ? this.tracingStorageTime.equals(that.tracingStorageTime) : that.tracingStorageTime == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceType.hashCode();
            result = 31 * result + (this.maxTps.hashCode());
            result = 31 * result + (this.queueCapacity.hashCode());
            result = 31 * result + (this.storageSize.hashCode());
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.maxEipTps != null ? this.maxEipTps.hashCode() : 0);
            result = 31 * result + (this.orderNum != null ? this.orderNum.hashCode() : 0);
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.supportEip != null ? this.supportEip.hashCode() : 0);
            result = 31 * result + (this.supportTracing != null ? this.supportTracing.hashCode() : 0);
            result = 31 * result + (this.tracingStorageTime != null ? this.tracingStorageTime.hashCode() : 0);
            return result;
        }
    }
}
