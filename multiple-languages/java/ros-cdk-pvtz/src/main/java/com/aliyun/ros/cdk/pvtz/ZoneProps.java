package com.aliyun.ros.cdk.pvtz;

/**
 * Properties for defining a `ALIYUN::PVTZ::Zone`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-29T01:47:29.963Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.ZoneProps")
@software.amazon.jsii.Jsii.Proxy(ZoneProps.Jsii$Proxy.class)
public interface ZoneProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property zoneName: Zone name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneName();

    /**
     * Property proxyPattern: ZONE: completely hijack the entire zone.
     * <p>
     * RECORD: Incomplete hijacking, recursive resolution agent.
     * Default to ZONE.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxyPattern() {
        return null;
    }

    /**
     * Property remark: 50 characters at most.
     * <p>
     * It can only contain numbers, Chinese, English and special characters: "_-,.，。".
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     * Property zoneTag: Zone label.
     * <p>
     * It will be ignored when ZoneType is AUTH_ZONE.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneTag() {
        return null;
    }

    /**
     * Property zoneType: Zone type.
     * <p>
     * For instance: AUTH_ZONE, CLOUD_PRODUCT_ZONE.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ZoneProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ZoneProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ZoneProps> {
        java.lang.Object zoneName;
        java.lang.Object proxyPattern;
        java.lang.Object remark;
        java.lang.Object zoneTag;
        java.lang.Object zoneType;

        /**
         * Sets the value of {@link ZoneProps#getZoneName}
         * @param zoneName Property zoneName: Zone name. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneName(java.lang.String zoneName) {
            this.zoneName = zoneName;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getZoneName}
         * @param zoneName Property zoneName: Zone name. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneName(com.aliyun.ros.cdk.core.IResolvable zoneName) {
            this.zoneName = zoneName;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getProxyPattern}
         * @param proxyPattern Property proxyPattern: ZONE: completely hijack the entire zone.
         *                     RECORD: Incomplete hijacking, recursive resolution agent.
         *                     Default to ZONE.
         * @return {@code this}
         */
        public Builder proxyPattern(java.lang.String proxyPattern) {
            this.proxyPattern = proxyPattern;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getProxyPattern}
         * @param proxyPattern Property proxyPattern: ZONE: completely hijack the entire zone.
         *                     RECORD: Incomplete hijacking, recursive resolution agent.
         *                     Default to ZONE.
         * @return {@code this}
         */
        public Builder proxyPattern(com.aliyun.ros.cdk.core.IResolvable proxyPattern) {
            this.proxyPattern = proxyPattern;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getRemark}
         * @param remark Property remark: 50 characters at most.
         *               It can only contain numbers, Chinese, English and special characters: "_-,.，。".
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getRemark}
         * @param remark Property remark: 50 characters at most.
         *               It can only contain numbers, Chinese, English and special characters: "_-,.，。".
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getZoneTag}
         * @param zoneTag Property zoneTag: Zone label.
         *                It will be ignored when ZoneType is AUTH_ZONE.
         * @return {@code this}
         */
        public Builder zoneTag(java.lang.String zoneTag) {
            this.zoneTag = zoneTag;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getZoneTag}
         * @param zoneTag Property zoneTag: Zone label.
         *                It will be ignored when ZoneType is AUTH_ZONE.
         * @return {@code this}
         */
        public Builder zoneTag(com.aliyun.ros.cdk.core.IResolvable zoneTag) {
            this.zoneTag = zoneTag;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getZoneType}
         * @param zoneType Property zoneType: Zone type.
         *                 For instance: AUTH_ZONE, CLOUD_PRODUCT_ZONE.
         * @return {@code this}
         */
        public Builder zoneType(java.lang.String zoneType) {
            this.zoneType = zoneType;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getZoneType}
         * @param zoneType Property zoneType: Zone type.
         *                 For instance: AUTH_ZONE, CLOUD_PRODUCT_ZONE.
         * @return {@code this}
         */
        public Builder zoneType(com.aliyun.ros.cdk.core.IResolvable zoneType) {
            this.zoneType = zoneType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ZoneProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ZoneProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ZoneProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ZoneProps {
        private final java.lang.Object zoneName;
        private final java.lang.Object proxyPattern;
        private final java.lang.Object remark;
        private final java.lang.Object zoneTag;
        private final java.lang.Object zoneType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.zoneName = software.amazon.jsii.Kernel.get(this, "zoneName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyPattern = software.amazon.jsii.Kernel.get(this, "proxyPattern", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneTag = software.amazon.jsii.Kernel.get(this, "zoneTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneType = software.amazon.jsii.Kernel.get(this, "zoneType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.zoneName = java.util.Objects.requireNonNull(builder.zoneName, "zoneName is required");
            this.proxyPattern = builder.proxyPattern;
            this.remark = builder.remark;
            this.zoneTag = builder.zoneTag;
            this.zoneType = builder.zoneType;
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
        public final java.lang.Object getZoneTag() {
            return this.zoneTag;
        }

        @Override
        public final java.lang.Object getZoneType() {
            return this.zoneType;
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
            if (this.getZoneTag() != null) {
                data.set("zoneTag", om.valueToTree(this.getZoneTag()));
            }
            if (this.getZoneType() != null) {
                data.set("zoneType", om.valueToTree(this.getZoneType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pvtz.ZoneProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ZoneProps.Jsii$Proxy that = (ZoneProps.Jsii$Proxy) o;

            if (!zoneName.equals(that.zoneName)) return false;
            if (this.proxyPattern != null ? !this.proxyPattern.equals(that.proxyPattern) : that.proxyPattern != null) return false;
            if (this.remark != null ? !this.remark.equals(that.remark) : that.remark != null) return false;
            if (this.zoneTag != null ? !this.zoneTag.equals(that.zoneTag) : that.zoneTag != null) return false;
            return this.zoneType != null ? this.zoneType.equals(that.zoneType) : that.zoneType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.zoneName.hashCode();
            result = 31 * result + (this.proxyPattern != null ? this.proxyPattern.hashCode() : 0);
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            result = 31 * result + (this.zoneTag != null ? this.zoneTag.hashCode() : 0);
            result = 31 * result + (this.zoneType != null ? this.zoneType.hashCode() : 0);
            return result;
        }
    }
}
