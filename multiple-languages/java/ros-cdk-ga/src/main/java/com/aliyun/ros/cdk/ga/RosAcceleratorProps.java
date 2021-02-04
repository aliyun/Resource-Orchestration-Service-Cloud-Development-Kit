package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a `ALIYUN::GA::Accelerator`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:36.000Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosAcceleratorProps")
@software.amazon.jsii.Jsii.Proxy(RosAcceleratorProps.Jsii$Proxy.class)
public interface RosAcceleratorProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDuration();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPricingCycle();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSpec();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAcceleratorName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAutoPay() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAutoUseCoupon() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAcceleratorProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAcceleratorProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAcceleratorProps> {
        private java.lang.String duration;
        private java.lang.String pricingCycle;
        private java.lang.String spec;
        private java.lang.String acceleratorName;
        private java.lang.String autoPay;
        private java.lang.String autoUseCoupon;

        /**
         * Sets the value of {@link RosAcceleratorProps#getDuration}
         * @param duration the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder duration(java.lang.String duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link RosAcceleratorProps#getPricingCycle}
         * @param pricingCycle the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link RosAcceleratorProps#getSpec}
         * @param spec the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder spec(java.lang.String spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link RosAcceleratorProps#getAcceleratorName}
         * @param acceleratorName the value to be set.
         * @return {@code this}
         */
        public Builder acceleratorName(java.lang.String acceleratorName) {
            this.acceleratorName = acceleratorName;
            return this;
        }

        /**
         * Sets the value of {@link RosAcceleratorProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.String autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RosAcceleratorProps#getAutoUseCoupon}
         * @param autoUseCoupon the value to be set.
         * @return {@code this}
         */
        public Builder autoUseCoupon(java.lang.String autoUseCoupon) {
            this.autoUseCoupon = autoUseCoupon;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAcceleratorProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAcceleratorProps build() {
            return new Jsii$Proxy(duration, pricingCycle, spec, acceleratorName, autoPay, autoUseCoupon);
        }
    }

    /**
     * An implementation for {@link RosAcceleratorProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAcceleratorProps {
        private final java.lang.String duration;
        private final java.lang.String pricingCycle;
        private final java.lang.String spec;
        private final java.lang.String acceleratorName;
        private final java.lang.String autoPay;
        private final java.lang.String autoUseCoupon;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.acceleratorName = software.amazon.jsii.Kernel.get(this, "acceleratorName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoUseCoupon = software.amazon.jsii.Kernel.get(this, "autoUseCoupon", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String duration, final java.lang.String pricingCycle, final java.lang.String spec, final java.lang.String acceleratorName, final java.lang.String autoPay, final java.lang.String autoUseCoupon) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.duration = java.util.Objects.requireNonNull(duration, "duration is required");
            this.pricingCycle = java.util.Objects.requireNonNull(pricingCycle, "pricingCycle is required");
            this.spec = java.util.Objects.requireNonNull(spec, "spec is required");
            this.acceleratorName = acceleratorName;
            this.autoPay = autoPay;
            this.autoUseCoupon = autoUseCoupon;
        }

        @Override
        public final java.lang.String getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.String getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        public final java.lang.String getSpec() {
            return this.spec;
        }

        @Override
        public final java.lang.String getAcceleratorName() {
            return this.acceleratorName;
        }

        @Override
        public final java.lang.String getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.String getAutoUseCoupon() {
            return this.autoUseCoupon;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("duration", om.valueToTree(this.getDuration()));
            data.set("pricingCycle", om.valueToTree(this.getPricingCycle()));
            data.set("spec", om.valueToTree(this.getSpec()));
            if (this.getAcceleratorName() != null) {
                data.set("acceleratorName", om.valueToTree(this.getAcceleratorName()));
            }
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoUseCoupon() != null) {
                data.set("autoUseCoupon", om.valueToTree(this.getAutoUseCoupon()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosAcceleratorProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAcceleratorProps.Jsii$Proxy that = (RosAcceleratorProps.Jsii$Proxy) o;

            if (!duration.equals(that.duration)) return false;
            if (!pricingCycle.equals(that.pricingCycle)) return false;
            if (!spec.equals(that.spec)) return false;
            if (this.acceleratorName != null ? !this.acceleratorName.equals(that.acceleratorName) : that.acceleratorName != null) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            return this.autoUseCoupon != null ? this.autoUseCoupon.equals(that.autoUseCoupon) : that.autoUseCoupon == null;
        }

        @Override
        public final int hashCode() {
            int result = this.duration.hashCode();
            result = 31 * result + (this.pricingCycle.hashCode());
            result = 31 * result + (this.spec.hashCode());
            result = 31 * result + (this.acceleratorName != null ? this.acceleratorName.hashCode() : 0);
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoUseCoupon != null ? this.autoUseCoupon.hashCode() : 0);
            return result;
        }
    }
}
