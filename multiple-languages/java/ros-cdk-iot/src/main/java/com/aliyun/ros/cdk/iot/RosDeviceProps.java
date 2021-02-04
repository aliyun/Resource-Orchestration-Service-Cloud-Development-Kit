package com.aliyun.ros.cdk.iot;

/**
 * Properties for defining a `ALIYUN::IOT::Device`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:36.039Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.RosDeviceProps")
@software.amazon.jsii.Jsii.Proxy(RosDeviceProps.Jsii$Proxy.class)
public interface RosDeviceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getProductKey();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDevEui() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDeviceName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getIotInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getNickname() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPinCode() {
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
        private java.lang.String productKey;
        private java.lang.String devEui;
        private java.lang.String deviceName;
        private java.lang.String iotInstanceId;
        private java.lang.String nickname;
        private java.lang.String pinCode;

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
         * Sets the value of {@link RosDeviceProps#getDevEui}
         * @param devEui the value to be set.
         * @return {@code this}
         */
        public Builder devEui(java.lang.String devEui) {
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
         * Sets the value of {@link RosDeviceProps#getIotInstanceId}
         * @param iotInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder iotInstanceId(java.lang.String iotInstanceId) {
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
         * Sets the value of {@link RosDeviceProps#getPinCode}
         * @param pinCode the value to be set.
         * @return {@code this}
         */
        public Builder pinCode(java.lang.String pinCode) {
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
            return new Jsii$Proxy(productKey, devEui, deviceName, iotInstanceId, nickname, pinCode);
        }
    }

    /**
     * An implementation for {@link RosDeviceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDeviceProps {
        private final java.lang.String productKey;
        private final java.lang.String devEui;
        private final java.lang.String deviceName;
        private final java.lang.String iotInstanceId;
        private final java.lang.String nickname;
        private final java.lang.String pinCode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.productKey = software.amazon.jsii.Kernel.get(this, "productKey", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.devEui = software.amazon.jsii.Kernel.get(this, "devEui", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.deviceName = software.amazon.jsii.Kernel.get(this, "deviceName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.iotInstanceId = software.amazon.jsii.Kernel.get(this, "iotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.nickname = software.amazon.jsii.Kernel.get(this, "nickname", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.pinCode = software.amazon.jsii.Kernel.get(this, "pinCode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String productKey, final java.lang.String devEui, final java.lang.String deviceName, final java.lang.String iotInstanceId, final java.lang.String nickname, final java.lang.String pinCode) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.productKey = java.util.Objects.requireNonNull(productKey, "productKey is required");
            this.devEui = devEui;
            this.deviceName = deviceName;
            this.iotInstanceId = iotInstanceId;
            this.nickname = nickname;
            this.pinCode = pinCode;
        }

        @Override
        public final java.lang.String getProductKey() {
            return this.productKey;
        }

        @Override
        public final java.lang.String getDevEui() {
            return this.devEui;
        }

        @Override
        public final java.lang.String getDeviceName() {
            return this.deviceName;
        }

        @Override
        public final java.lang.String getIotInstanceId() {
            return this.iotInstanceId;
        }

        @Override
        public final java.lang.String getNickname() {
            return this.nickname;
        }

        @Override
        public final java.lang.String getPinCode() {
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
