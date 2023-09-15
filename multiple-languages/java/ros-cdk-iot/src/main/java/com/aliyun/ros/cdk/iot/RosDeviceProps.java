package com.aliyun.ros.cdk.iot;

/**
 * Properties for defining a <code>ALIYUN::IOT::Device</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:49.148Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.RosDeviceProps")
@software.amazon.jsii.Jsii.Proxy(RosDeviceProps.Jsii$Proxy.class)
public interface RosDeviceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProductKey();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDevEui() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeviceName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIotInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNickname() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPinCode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDeviceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDeviceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDeviceProps> {
        java.lang.Object productKey;
        java.lang.Object devEui;
        java.lang.Object deviceName;
        java.lang.Object iotInstanceId;
        java.lang.Object nickname;
        java.lang.Object pinCode;

        /**
         * Sets the value of {@link RosDeviceProps#getProductKey}
         * @param productKey the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productKey(java.lang.String productKey) {
            this.productKey = productKey;
            return this;
        }

        /**
         * Sets the value of {@link RosDeviceProps#getProductKey}
         * @param productKey the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productKey(com.aliyun.ros.cdk.core.IResolvable productKey) {
            this.productKey = productKey;
            return this;
        }

        /**
         * Sets the value of {@link RosDeviceProps#getDevEui}
         * @param devEui the value to be set.
         * @return {@code this}
         */
        public Builder devEui(java.lang.String devEui) {
            this.devEui = devEui;
            return this;
        }

        /**
         * Sets the value of {@link RosDeviceProps#getDevEui}
         * @param devEui the value to be set.
         * @return {@code this}
         */
        public Builder devEui(com.aliyun.ros.cdk.core.IResolvable devEui) {
            this.devEui = devEui;
            return this;
        }

        /**
         * Sets the value of {@link RosDeviceProps#getDeviceName}
         * @param deviceName the value to be set.
         * @return {@code this}
         */
        public Builder deviceName(java.lang.String deviceName) {
            this.deviceName = deviceName;
            return this;
        }

        /**
         * Sets the value of {@link RosDeviceProps#getDeviceName}
         * @param deviceName the value to be set.
         * @return {@code this}
         */
        public Builder deviceName(com.aliyun.ros.cdk.core.IResolvable deviceName) {
            this.deviceName = deviceName;
            return this;
        }

        /**
         * Sets the value of {@link RosDeviceProps#getIotInstanceId}
         * @param iotInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder iotInstanceId(java.lang.String iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDeviceProps#getIotInstanceId}
         * @param iotInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder iotInstanceId(com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDeviceProps#getNickname}
         * @param nickname the value to be set.
         * @return {@code this}
         */
        public Builder nickname(java.lang.String nickname) {
            this.nickname = nickname;
            return this;
        }

        /**
         * Sets the value of {@link RosDeviceProps#getNickname}
         * @param nickname the value to be set.
         * @return {@code this}
         */
        public Builder nickname(com.aliyun.ros.cdk.core.IResolvable nickname) {
            this.nickname = nickname;
            return this;
        }

        /**
         * Sets the value of {@link RosDeviceProps#getPinCode}
         * @param pinCode the value to be set.
         * @return {@code this}
         */
        public Builder pinCode(java.lang.String pinCode) {
            this.pinCode = pinCode;
            return this;
        }

        /**
         * Sets the value of {@link RosDeviceProps#getPinCode}
         * @param pinCode the value to be set.
         * @return {@code this}
         */
        public Builder pinCode(com.aliyun.ros.cdk.core.IResolvable pinCode) {
            this.pinCode = pinCode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDeviceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDeviceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDeviceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDeviceProps {
        private final java.lang.Object productKey;
        private final java.lang.Object devEui;
        private final java.lang.Object deviceName;
        private final java.lang.Object iotInstanceId;
        private final java.lang.Object nickname;
        private final java.lang.Object pinCode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.productKey = software.amazon.jsii.Kernel.get(this, "productKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.devEui = software.amazon.jsii.Kernel.get(this, "devEui", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deviceName = software.amazon.jsii.Kernel.get(this, "deviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.iotInstanceId = software.amazon.jsii.Kernel.get(this, "iotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nickname = software.amazon.jsii.Kernel.get(this, "nickname", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pinCode = software.amazon.jsii.Kernel.get(this, "pinCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.productKey = java.util.Objects.requireNonNull(builder.productKey, "productKey is required");
            this.devEui = builder.devEui;
            this.deviceName = builder.deviceName;
            this.iotInstanceId = builder.iotInstanceId;
            this.nickname = builder.nickname;
            this.pinCode = builder.pinCode;
        }

        @Override
        public final java.lang.Object getProductKey() {
            return this.productKey;
        }

        @Override
        public final java.lang.Object getDevEui() {
            return this.devEui;
        }

        @Override
        public final java.lang.Object getDeviceName() {
            return this.deviceName;
        }

        @Override
        public final java.lang.Object getIotInstanceId() {
            return this.iotInstanceId;
        }

        @Override
        public final java.lang.Object getNickname() {
            return this.nickname;
        }

        @Override
        public final java.lang.Object getPinCode() {
            return this.pinCode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("productKey", om.valueToTree(this.getProductKey()));
            if (this.getDevEui() != null) {
                data.set("devEui", om.valueToTree(this.getDevEui()));
            }
            if (this.getDeviceName() != null) {
                data.set("deviceName", om.valueToTree(this.getDeviceName()));
            }
            if (this.getIotInstanceId() != null) {
                data.set("iotInstanceId", om.valueToTree(this.getIotInstanceId()));
            }
            if (this.getNickname() != null) {
                data.set("nickname", om.valueToTree(this.getNickname()));
            }
            if (this.getPinCode() != null) {
                data.set("pinCode", om.valueToTree(this.getPinCode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-iot.RosDeviceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDeviceProps.Jsii$Proxy that = (RosDeviceProps.Jsii$Proxy) o;

            if (!productKey.equals(that.productKey)) return false;
            if (this.devEui != null ? !this.devEui.equals(that.devEui) : that.devEui != null) return false;
            if (this.deviceName != null ? !this.deviceName.equals(that.deviceName) : that.deviceName != null) return false;
            if (this.iotInstanceId != null ? !this.iotInstanceId.equals(that.iotInstanceId) : that.iotInstanceId != null) return false;
            if (this.nickname != null ? !this.nickname.equals(that.nickname) : that.nickname != null) return false;
            return this.pinCode != null ? this.pinCode.equals(that.pinCode) : that.pinCode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.productKey.hashCode();
            result = 31 * result + (this.devEui != null ? this.devEui.hashCode() : 0);
            result = 31 * result + (this.deviceName != null ? this.deviceName.hashCode() : 0);
            result = 31 * result + (this.iotInstanceId != null ? this.iotInstanceId.hashCode() : 0);
            result = 31 * result + (this.nickname != null ? this.nickname.hashCode() : 0);
            result = 31 * result + (this.pinCode != null ? this.pinCode.hashCode() : 0);
            return result;
        }
    }
}
