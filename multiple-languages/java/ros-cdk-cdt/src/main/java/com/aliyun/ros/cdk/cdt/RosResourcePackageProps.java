package com.aliyun.ros.cdk.cdt;

/**
 * Properties for defining a <code>RosResourcePackage</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdt-resourcepackage
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.066Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdt.$Module.class, fqn = "@alicloud/ros-cdk-cdt.RosResourcePackageProps")
@software.amazon.jsii.Jsii.Proxy(RosResourcePackageProps.Jsii$Proxy.class)
public interface RosResourcePackageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCapacity();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPack();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRegion();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsp() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosResourcePackageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosResourcePackageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosResourcePackageProps> {
        java.lang.Object capacity;
        java.lang.Object pack;
        java.lang.Object region;
        java.lang.Object isp;

        /**
         * Sets the value of {@link RosResourcePackageProps#getCapacity}
         * @param capacity the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder capacity(java.lang.Number capacity) {
            this.capacity = capacity;
            return this;
        }

        /**
         * Sets the value of {@link RosResourcePackageProps#getCapacity}
         * @param capacity the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder capacity(com.aliyun.ros.cdk.core.IResolvable capacity) {
            this.capacity = capacity;
            return this;
        }

        /**
         * Sets the value of {@link RosResourcePackageProps#getPack}
         * @param pack the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pack(java.lang.String pack) {
            this.pack = pack;
            return this;
        }

        /**
         * Sets the value of {@link RosResourcePackageProps#getPack}
         * @param pack the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder pack(com.aliyun.ros.cdk.core.IResolvable pack) {
            this.pack = pack;
            return this;
        }

        /**
         * Sets the value of {@link RosResourcePackageProps#getRegion}
         * @param region the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link RosResourcePackageProps#getRegion}
         * @param region the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder region(com.aliyun.ros.cdk.core.IResolvable region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link RosResourcePackageProps#getIsp}
         * @param isp the value to be set.
         * @return {@code this}
         */
        public Builder isp(java.lang.String isp) {
            this.isp = isp;
            return this;
        }

        /**
         * Sets the value of {@link RosResourcePackageProps#getIsp}
         * @param isp the value to be set.
         * @return {@code this}
         */
        public Builder isp(com.aliyun.ros.cdk.core.IResolvable isp) {
            this.isp = isp;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosResourcePackageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosResourcePackageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosResourcePackageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosResourcePackageProps {
        private final java.lang.Object capacity;
        private final java.lang.Object pack;
        private final java.lang.Object region;
        private final java.lang.Object isp;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.capacity = software.amazon.jsii.Kernel.get(this, "capacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pack = software.amazon.jsii.Kernel.get(this, "pack", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isp = software.amazon.jsii.Kernel.get(this, "isp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.capacity = java.util.Objects.requireNonNull(builder.capacity, "capacity is required");
            this.pack = java.util.Objects.requireNonNull(builder.pack, "pack is required");
            this.region = java.util.Objects.requireNonNull(builder.region, "region is required");
            this.isp = builder.isp;
        }

        @Override
        public final java.lang.Object getCapacity() {
            return this.capacity;
        }

        @Override
        public final java.lang.Object getPack() {
            return this.pack;
        }

        @Override
        public final java.lang.Object getRegion() {
            return this.region;
        }

        @Override
        public final java.lang.Object getIsp() {
            return this.isp;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("capacity", om.valueToTree(this.getCapacity()));
            data.set("pack", om.valueToTree(this.getPack()));
            data.set("region", om.valueToTree(this.getRegion()));
            if (this.getIsp() != null) {
                data.set("isp", om.valueToTree(this.getIsp()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cdt.RosResourcePackageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosResourcePackageProps.Jsii$Proxy that = (RosResourcePackageProps.Jsii$Proxy) o;

            if (!capacity.equals(that.capacity)) return false;
            if (!pack.equals(that.pack)) return false;
            if (!region.equals(that.region)) return false;
            return this.isp != null ? this.isp.equals(that.isp) : that.isp == null;
        }

        @Override
        public final int hashCode() {
            int result = this.capacity.hashCode();
            result = 31 * result + (this.pack.hashCode());
            result = 31 * result + (this.region.hashCode());
            result = 31 * result + (this.isp != null ? this.isp.hashCode() : 0);
            return result;
        }
    }
}
