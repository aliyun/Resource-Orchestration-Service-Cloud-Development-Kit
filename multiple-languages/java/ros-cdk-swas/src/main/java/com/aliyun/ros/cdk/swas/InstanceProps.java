package com.aliyun.ros.cdk.swas;

/**
 * Properties for defining a <code>Instance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:12.510Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.swas.$Module.class, fqn = "@alicloud/ros-cdk-swas.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property imageId: The image ID.
     * <p>
     * You can call the ListImages operation to query the available images in the specified region.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageId();

    /**
     * Property period: The subscription period of the servers.
     * <p>
     * Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriod();

    /**
     * Property planId: The plan ID.
     * <p>
     * You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPlanId();

    /**
     * Property autoRenew: Specifies whether to enable auto-renewal.
     * <p>
     * Valid values:
     * true
     * false
     * Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property autoRenewPeriod: The auto-renewal period.
     * <p>
     * This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     * Property dataDiskSize: The size of the data disk that is attached to the server.
     * <p>
     * Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataDiskSize() {
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
        java.lang.Object imageId;
        java.lang.Object period;
        java.lang.Object planId;
        java.lang.Object autoRenew;
        java.lang.Object autoRenewPeriod;
        java.lang.Object dataDiskSize;

        /**
         * Sets the value of {@link InstanceProps#getImageId}
         * @param imageId Property imageId: The image ID. This parameter is required.
         *                You can call the ListImages operation to query the available images in the specified region.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getImageId}
         * @param imageId Property imageId: The image ID. This parameter is required.
         *                You can call the ListImages operation to query the available images in the specified region.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: The subscription period of the servers. This parameter is required.
         *               Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: The subscription period of the servers. This parameter is required.
         *               Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPlanId}
         * @param planId Property planId: The plan ID. This parameter is required.
         *               You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
         * @return {@code this}
         */
        public Builder planId(java.lang.String planId) {
            this.planId = planId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPlanId}
         * @param planId Property planId: The plan ID. This parameter is required.
         *               You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
         * @return {@code this}
         */
        public Builder planId(com.aliyun.ros.cdk.core.IResolvable planId) {
            this.planId = planId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal.
         *                  Valid values:
         *                  true
         *                  false
         *                  Default value: false.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal.
         *                  Valid values:
         *                  true
         *                  false
         *                  Default value: false.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The auto-renewal period.
         *                        This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The auto-renewal period.
         *                        This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDataDiskSize}
         * @param dataDiskSize Property dataDiskSize: The size of the data disk that is attached to the server.
         *                     Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
         *                     A value of 0 indicates that no data disk is attached.
         *                     If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
         *                     Default value: 0.
         * @return {@code this}
         */
        public Builder dataDiskSize(java.lang.Number dataDiskSize) {
            this.dataDiskSize = dataDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDataDiskSize}
         * @param dataDiskSize Property dataDiskSize: The size of the data disk that is attached to the server.
         *                     Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
         *                     A value of 0 indicates that no data disk is attached.
         *                     If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
         *                     Default value: 0.
         * @return {@code this}
         */
        public Builder dataDiskSize(com.aliyun.ros.cdk.core.IResolvable dataDiskSize) {
            this.dataDiskSize = dataDiskSize;
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
        private final java.lang.Object imageId;
        private final java.lang.Object period;
        private final java.lang.Object planId;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object dataDiskSize;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.planId = software.amazon.jsii.Kernel.get(this, "planId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataDiskSize = software.amazon.jsii.Kernel.get(this, "dataDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.imageId = java.util.Objects.requireNonNull(builder.imageId, "imageId is required");
            this.period = java.util.Objects.requireNonNull(builder.period, "period is required");
            this.planId = java.util.Objects.requireNonNull(builder.planId, "planId is required");
            this.autoRenew = builder.autoRenew;
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.dataDiskSize = builder.dataDiskSize;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPlanId() {
            return this.planId;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.Object getDataDiskSize() {
            return this.dataDiskSize;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("imageId", om.valueToTree(this.getImageId()));
            data.set("period", om.valueToTree(this.getPeriod()));
            data.set("planId", om.valueToTree(this.getPlanId()));
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getDataDiskSize() != null) {
                data.set("dataDiskSize", om.valueToTree(this.getDataDiskSize()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-swas.InstanceProps"));
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

            if (!imageId.equals(that.imageId)) return false;
            if (!period.equals(that.period)) return false;
            if (!planId.equals(that.planId)) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            return this.dataDiskSize != null ? this.dataDiskSize.equals(that.dataDiskSize) : that.dataDiskSize == null;
        }

        @Override
        public final int hashCode() {
            int result = this.imageId.hashCode();
            result = 31 * result + (this.period.hashCode());
            result = 31 * result + (this.planId.hashCode());
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.dataDiskSize != null ? this.dataDiskSize.hashCode() : 0);
            return result;
        }
    }
}
