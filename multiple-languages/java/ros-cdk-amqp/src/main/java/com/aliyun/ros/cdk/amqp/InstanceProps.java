package com.aliyun.ros.cdk.amqp;

/**
 * Properties for defining a <code>ALIYUN::AMQP::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:23.303Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.amqp.$Module.class, fqn = "@alicloud/ros-cdk-amqp.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceType: The Instance Type.
     * <p>
     * Valid values: professional, enterprise, vip.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

    /**
     * Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].
     * <p>
     * If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
     * If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMaxTps();

    /**
     * Property queueCapacity: The queue capacity.
     * <p>
     * If instance type is professional, the valid value is [50, 1000] with the step size 5.
     * If instance type is enterprise, the valid value is [200, 6000] with the step size 100
     * If instance type is vip, the valid value is [200, 80000] with the step size 100
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQueueCapacity();

    /**
     * Property storageSize: The storage size.
     * <p>
     * It is valid when instance_type is vip.
     * If instance type is professional or enterprise, the valid value is 0.If instance type is vip, the valid value is [700, 2800] with the step size 100
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStorageSize();

    /**
     * Property instanceName: The instance name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     * Property maxEipTps: The max eip tps.
     * <p>
     * It is valid when support_eip is true.
     * The minimum value is 128, with the step size 128.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxEipTps() {
        return null;
    }

    /**
     * Property orderNum: Set the number of instances to be created.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOrderNum() {
        return null;
    }

    /**
     * Property payType: The billing method of the instance.
     * <p>
     * The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
     * PrePaid: subscription
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     * Property period: The period.
     * <p>
     * Valid values: 1, 2, 3, 6, 12, 24, 36.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: The unit of the subscription duration.
     * <p>
     * Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property supportEip: Whether to support EIP.
     * <p>
     * Valid values: true, false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSupportEip() {
        return null;
    }

    /**
     * Property supportTracing: Whether to support tracing.
     * <p>
     * Valid values: true, false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSupportTracing() {
        return null;
    }

    /**
     * Property tracingStorageTime: The retention period of message traces was set.
     * <p>
     * Valid values: 3, 7, 15.
     * If instance_type=vip, the valid values is 15.
     * If instance_type!=vip, the valid values is 3, 7, 15.
     * If support_tracing == tracing_false, the valid values is 0.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTracingStorageTime() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceProps> {
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
         * Sets the value of {@link InstanceProps#getInstanceType}
         * @param instanceType Property instanceType: The Instance Type. This parameter is required.
         *                     Valid values: professional, enterprise, vip.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceType}
         * @param instanceType Property instanceType: The Instance Type. This parameter is required.
         *                     Valid values: professional, enterprise, vip.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getMaxTps}
         * @param maxTps Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000]. This parameter is required.
         *               If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
         *               If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
         * @return {@code this}
         */
        public Builder maxTps(java.lang.Number maxTps) {
            this.maxTps = maxTps;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getMaxTps}
         * @param maxTps Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000]. This parameter is required.
         *               If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
         *               If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
         * @return {@code this}
         */
        public Builder maxTps(com.aliyun.ros.cdk.core.IResolvable maxTps) {
            this.maxTps = maxTps;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getQueueCapacity}
         * @param queueCapacity Property queueCapacity: The queue capacity. This parameter is required.
         *                      If instance type is professional, the valid value is [50, 1000] with the step size 5.
         *                      If instance type is enterprise, the valid value is [200, 6000] with the step size 100
         *                      If instance type is vip, the valid value is [200, 80000] with the step size 100
         * @return {@code this}
         */
        public Builder queueCapacity(java.lang.Number queueCapacity) {
            this.queueCapacity = queueCapacity;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getQueueCapacity}
         * @param queueCapacity Property queueCapacity: The queue capacity. This parameter is required.
         *                      If instance type is professional, the valid value is [50, 1000] with the step size 5.
         *                      If instance type is enterprise, the valid value is [200, 6000] with the step size 100
         *                      If instance type is vip, the valid value is [200, 80000] with the step size 100
         * @return {@code this}
         */
        public Builder queueCapacity(com.aliyun.ros.cdk.core.IResolvable queueCapacity) {
            this.queueCapacity = queueCapacity;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getStorageSize}
         * @param storageSize Property storageSize: The storage size. This parameter is required.
         *                    It is valid when instance_type is vip.
         *                    If instance type is professional or enterprise, the valid value is 0.If instance type is vip, the valid value is [700, 2800] with the step size 100
         * @return {@code this}
         */
        public Builder storageSize(java.lang.Number storageSize) {
            this.storageSize = storageSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getStorageSize}
         * @param storageSize Property storageSize: The storage size. This parameter is required.
         *                    It is valid when instance_type is vip.
         *                    If instance type is professional or enterprise, the valid value is 0.If instance type is vip, the valid value is [700, 2800] with the step size 100
         * @return {@code this}
         */
        public Builder storageSize(com.aliyun.ros.cdk.core.IResolvable storageSize) {
            this.storageSize = storageSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The instance name.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The instance name.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getMaxEipTps}
         * @param maxEipTps Property maxEipTps: The max eip tps.
         *                  It is valid when support_eip is true.
         *                  The minimum value is 128, with the step size 128.
         * @return {@code this}
         */
        public Builder maxEipTps(java.lang.Number maxEipTps) {
            this.maxEipTps = maxEipTps;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getMaxEipTps}
         * @param maxEipTps Property maxEipTps: The max eip tps.
         *                  It is valid when support_eip is true.
         *                  The minimum value is 128, with the step size 128.
         * @return {@code this}
         */
        public Builder maxEipTps(com.aliyun.ros.cdk.core.IResolvable maxEipTps) {
            this.maxEipTps = maxEipTps;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getOrderNum}
         * @param orderNum Property orderNum: Set the number of instances to be created.
         * @return {@code this}
         */
        public Builder orderNum(java.lang.Number orderNum) {
            this.orderNum = orderNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getOrderNum}
         * @param orderNum Property orderNum: Set the number of instances to be created.
         * @return {@code this}
         */
        public Builder orderNum(com.aliyun.ros.cdk.core.IResolvable orderNum) {
            this.orderNum = orderNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPayType}
         * @param payType Property payType: The billing method of the instance.
         *                The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
         *                PrePaid: subscription
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPayType}
         * @param payType Property payType: The billing method of the instance.
         *                The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
         *                PrePaid: subscription
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: The period.
         *               Valid values: 1, 2, 3, 6, 12, 24, 36.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: The period.
         *               Valid values: 1, 2, 3, 6, 12, 24, 36.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the subscription duration.
         *                   Valid values:
         *                   Month
         *                   Year
         *                   Default value: Month.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the subscription duration.
         *                   Valid values:
         *                   Month
         *                   Year
         *                   Default value: Month.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSupportEip}
         * @param supportEip Property supportEip: Whether to support EIP.
         *                   Valid values: true, false.
         * @return {@code this}
         */
        public Builder supportEip(java.lang.String supportEip) {
            this.supportEip = supportEip;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSupportEip}
         * @param supportEip Property supportEip: Whether to support EIP.
         *                   Valid values: true, false.
         * @return {@code this}
         */
        public Builder supportEip(com.aliyun.ros.cdk.core.IResolvable supportEip) {
            this.supportEip = supportEip;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSupportTracing}
         * @param supportTracing Property supportTracing: Whether to support tracing.
         *                       Valid values: true, false.
         * @return {@code this}
         */
        public Builder supportTracing(java.lang.String supportTracing) {
            this.supportTracing = supportTracing;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSupportTracing}
         * @param supportTracing Property supportTracing: Whether to support tracing.
         *                       Valid values: true, false.
         * @return {@code this}
         */
        public Builder supportTracing(com.aliyun.ros.cdk.core.IResolvable supportTracing) {
            this.supportTracing = supportTracing;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTracingStorageTime}
         * @param tracingStorageTime Property tracingStorageTime: The retention period of message traces was set.
         *                           Valid values: 3, 7, 15.
         *                           If instance_type=vip, the valid values is 15.
         *                           If instance_type!=vip, the valid values is 3, 7, 15.
         *                           If support_tracing == tracing_false, the valid values is 0.
         * @return {@code this}
         */
        public Builder tracingStorageTime(java.lang.Number tracingStorageTime) {
            this.tracingStorageTime = tracingStorageTime;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTracingStorageTime}
         * @param tracingStorageTime Property tracingStorageTime: The retention period of message traces was set.
         *                           Valid values: 3, 7, 15.
         *                           If instance_type=vip, the valid values is 15.
         *                           If instance_type!=vip, the valid values is 3, 7, 15.
         *                           If support_tracing == tracing_false, the valid values is 0.
         * @return {@code this}
         */
        public Builder tracingStorageTime(com.aliyun.ros.cdk.core.IResolvable tracingStorageTime) {
            this.tracingStorageTime = tracingStorageTime;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-amqp.InstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceProps.Jsii$Proxy that = (InstanceProps.Jsii$Proxy) o;

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
