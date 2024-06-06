package com.aliyun.ros.cdk.iot;

/**
 * Properties for defining a <code>Device</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-device
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:15.635Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.DeviceProps")
@software.amazon.jsii.Jsii.Proxy(DeviceProps.Jsii$Proxy.class)
public interface DeviceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property productKey: The identifier of the product to which the device to be registered belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProductKey();

    /**
     * Property devEui: DevEUI LoRaWAN equipment.
     * <p>
     * When you create a LoRaWAN devices, this will pass.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDevEui() {
        return null;
    }

    /**
     * Property deviceName: The name of the device that you want to register.
     * <p>
     * The device name must consist of
     * 4 to 32 characters, including English letters, digits, and special characters, for
     * example, hyphens (-), underscores (_), at signs (&#64;), periods (.) , and colons (:).
     * DeviceName is used with ProductKey to identify a specified device.
     * Note If you do not specify this parameter, the system will generate a name for the device.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeviceName() {
        return null;
    }

    /**
     * Property iotInstanceId: Public instance does not pass this parameter;
     * <p>
     * instance that you need to buy the incoming instance ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIotInstanceId() {
        return null;
    }

    /**
     * Property nickname: Add a nickname for the device.
     * <p>
     * A nickname can be 4-64 characters in length, and can
     * contain Chinese characters, English letters, numbers and underscores (_). A Chinese
     * character counts as two characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNickname() {
        return null;
    }

    /**
     * Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
     * <p>
     * When you create a LoRaWAN devices, this will pass.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPinCode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DeviceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DeviceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DeviceProps> {
        java.lang.Object productKey;
        java.lang.Object devEui;
        java.lang.Object deviceName;
        java.lang.Object iotInstanceId;
        java.lang.Object nickname;
        java.lang.Object pinCode;

        /**
         * Sets the value of {@link DeviceProps#getProductKey}
         * @param productKey Property productKey: The identifier of the product to which the device to be registered belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder productKey(java.lang.String productKey) {
            this.productKey = productKey;
            return this;
        }

        /**
         * Sets the value of {@link DeviceProps#getProductKey}
         * @param productKey Property productKey: The identifier of the product to which the device to be registered belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder productKey(com.aliyun.ros.cdk.core.IResolvable productKey) {
            this.productKey = productKey;
            return this;
        }

        /**
         * Sets the value of {@link DeviceProps#getDevEui}
         * @param devEui Property devEui: DevEUI LoRaWAN equipment.
         *               When you create a LoRaWAN devices, this will pass.
         * @return {@code this}
         */
        public Builder devEui(java.lang.String devEui) {
            this.devEui = devEui;
            return this;
        }

        /**
         * Sets the value of {@link DeviceProps#getDevEui}
         * @param devEui Property devEui: DevEUI LoRaWAN equipment.
         *               When you create a LoRaWAN devices, this will pass.
         * @return {@code this}
         */
        public Builder devEui(com.aliyun.ros.cdk.core.IResolvable devEui) {
            this.devEui = devEui;
            return this;
        }

        /**
         * Sets the value of {@link DeviceProps#getDeviceName}
         * @param deviceName Property deviceName: The name of the device that you want to register.
         *                   The device name must consist of
         *                   4 to 32 characters, including English letters, digits, and special characters, for
         *                   example, hyphens (-), underscores (_), at signs (&#64;), periods (.) , and colons (:).
         *                   DeviceName is used with ProductKey to identify a specified device.
         *                   Note If you do not specify this parameter, the system will generate a name for the device.
         * @return {@code this}
         */
        public Builder deviceName(java.lang.String deviceName) {
            this.deviceName = deviceName;
            return this;
        }

        /**
         * Sets the value of {@link DeviceProps#getDeviceName}
         * @param deviceName Property deviceName: The name of the device that you want to register.
         *                   The device name must consist of
         *                   4 to 32 characters, including English letters, digits, and special characters, for
         *                   example, hyphens (-), underscores (_), at signs (&#64;), periods (.) , and colons (:).
         *                   DeviceName is used with ProductKey to identify a specified device.
         *                   Note If you do not specify this parameter, the system will generate a name for the device.
         * @return {@code this}
         */
        public Builder deviceName(com.aliyun.ros.cdk.core.IResolvable deviceName) {
            this.deviceName = deviceName;
            return this;
        }

        /**
         * Sets the value of {@link DeviceProps#getIotInstanceId}
         * @param iotInstanceId Property iotInstanceId: Public instance does not pass this parameter;.
         *                      instance that you need to buy the incoming instance ID.
         * @return {@code this}
         */
        public Builder iotInstanceId(java.lang.String iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DeviceProps#getIotInstanceId}
         * @param iotInstanceId Property iotInstanceId: Public instance does not pass this parameter;.
         *                      instance that you need to buy the incoming instance ID.
         * @return {@code this}
         */
        public Builder iotInstanceId(com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.iotInstanceId = iotInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DeviceProps#getNickname}
         * @param nickname Property nickname: Add a nickname for the device.
         *                 A nickname can be 4-64 characters in length, and can
         *                 contain Chinese characters, English letters, numbers and underscores (_). A Chinese
         *                 character counts as two characters.
         * @return {@code this}
         */
        public Builder nickname(java.lang.String nickname) {
            this.nickname = nickname;
            return this;
        }

        /**
         * Sets the value of {@link DeviceProps#getNickname}
         * @param nickname Property nickname: Add a nickname for the device.
         *                 A nickname can be 4-64 characters in length, and can
         *                 contain Chinese characters, English letters, numbers and underscores (_). A Chinese
         *                 character counts as two characters.
         * @return {@code this}
         */
        public Builder nickname(com.aliyun.ros.cdk.core.IResolvable nickname) {
            this.nickname = nickname;
            return this;
        }

        /**
         * Sets the value of {@link DeviceProps#getPinCode}
         * @param pinCode Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
         *                When you create a LoRaWAN devices, this will pass.
         * @return {@code this}
         */
        public Builder pinCode(java.lang.String pinCode) {
            this.pinCode = pinCode;
            return this;
        }

        /**
         * Sets the value of {@link DeviceProps#getPinCode}
         * @param pinCode Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
         *                When you create a LoRaWAN devices, this will pass.
         * @return {@code this}
         */
        public Builder pinCode(com.aliyun.ros.cdk.core.IResolvable pinCode) {
            this.pinCode = pinCode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DeviceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DeviceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DeviceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DeviceProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-iot.DeviceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DeviceProps.Jsii$Proxy that = (DeviceProps.Jsii$Proxy) o;

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
