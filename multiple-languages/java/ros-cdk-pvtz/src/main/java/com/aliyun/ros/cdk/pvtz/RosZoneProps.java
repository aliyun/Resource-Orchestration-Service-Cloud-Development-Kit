package com.aliyun.ros.cdk.pvtz;

/**
 * Properties for defining a `ALIYUN::PVTZ::Zone`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:43.803Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.RosZoneProps")
@software.amazon.jsii.Jsii.Proxy(RosZoneProps.Jsii$Proxy.class)
public interface RosZoneProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxyPattern() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosZoneProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosZoneProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosZoneProps> {
        private java.lang.Object zoneName;
        private java.lang.Object proxyPattern;
        private java.lang.Object remark;

        /**
         * Sets the value of {@link RosZoneProps#getZoneName}
         * @param zoneName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneName(java.lang.String zoneName) {
            this.zoneName = zoneName;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getZoneName}
         * @param zoneName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneName(com.aliyun.ros.cdk.core.IResolvable zoneName) {
            this.zoneName = zoneName;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getProxyPattern}
         * @param proxyPattern the value to be set.
         * @return {@code this}
         */
        public Builder proxyPattern(java.lang.String proxyPattern) {
            this.proxyPattern = proxyPattern;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getProxyPattern}
         * @param proxyPattern the value to be set.
         * @return {@code this}
         */
        public Builder proxyPattern(com.aliyun.ros.cdk.core.IResolvable proxyPattern) {
            this.proxyPattern = proxyPattern;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getRemark}
         * @param remark the value to be set.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getRemark}
         * @param remark the value to be set.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosZoneProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosZoneProps build() {
            return new Jsii$Proxy(zoneName, proxyPattern, remark);
        }
    }

    /**
     * An implementation for {@link RosZoneProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosZoneProps {
        private final java.lang.Object zoneName;
        private final java.lang.Object proxyPattern;
        private final java.lang.Object remark;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.zoneName = software.amazon.jsii.Kernel.get(this, "zoneName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyPattern = software.amazon.jsii.Kernel.get(this, "proxyPattern", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object zoneName, final java.lang.Object proxyPattern, final java.lang.Object remark) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.zoneName = java.util.Objects.requireNonNull(zoneName, "zoneName is required");
            this.proxyPattern = proxyPattern;
            this.remark = remark;
        }

        @Override
        public final java.lang.Object getZoneName() {
            return this.zoneName;
        }

        @Override
        public final java.lang.Object getProxyPattern() {
            return this.proxyPattern;
        }

        @Override
        public final java.lang.Object getRemark() {
            return this.remark;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("zoneName", om.valueToTree(this.getZoneName()));
            if (this.getProxyPattern() != null) {
                data.set("proxyPattern", om.valueToTree(this.getProxyPattern()));
            }
            if (this.getRemark() != null) {
                data.set("remark", om.valueToTree(this.getRemark()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pvtz.RosZoneProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosZoneProps.Jsii$Proxy that = (RosZoneProps.Jsii$Proxy) o;

            if (!zoneName.equals(that.zoneName)) return false;
            if (this.proxyPattern != null ? !this.proxyPattern.equals(that.proxyPattern) : that.proxyPattern != null) return false;
            return this.remark != null ? this.remark.equals(that.remark) : that.remark == null;
        }

        @Override
        public final int hashCode() {
            int result = this.zoneName.hashCode();
            result = 31 * result + (this.proxyPattern != null ? this.proxyPattern.hashCode() : 0);
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            return result;
        }
    }
}
