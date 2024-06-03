package com.aliyun.ros.cdk.iot;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::IOT::Device</code>, which is used to register a Device.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:52.634Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.Device")
public class Device extends com.aliyun.ros.cdk.core.Resource {

    protected Device(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Device(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Device(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.DeviceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Device(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.DeviceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DeviceName: Device name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeviceName() {
        return software.amazon.jsii.Kernel.get(this, "attrDeviceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DeviceSecret: Device key.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeviceSecret() {
        return software.amazon.jsii.Kernel.get(this, "attrDeviceSecret", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.
     * <p>
     * Description Keep, do not leak.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIotId() {
        return software.amazon.jsii.Kernel.get(this, "attrIotId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IotInstanceId: IOT instance ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIotInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrIotInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IpAddress: IP address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute NickName: Nick name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNickName() {
        return software.amazon.jsii.Kernel.get(this, "attrNickName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute NodeType: Node type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNodeType() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ProductKey: Product key.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProductKey() {
        return software.amazon.jsii.Kernel.get(this, "attrProductKey", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ProductName: Product name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProductName() {
        return software.amazon.jsii.Kernel.get(this, "attrProductName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.DeviceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.iot.DeviceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.DeviceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.iot.Device}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.iot.Device> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.iot.DeviceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.iot.DeviceProps.Builder();
        }

        /**
         * Property productKey: The identifier of the product to which the device to be registered belongs.
         * <p>
         * @return {@code this}
         * @param productKey Property productKey: The identifier of the product to which the device to be registered belongs. This parameter is required.
         */
        public Builder productKey(final java.lang.String productKey) {
            this.props.productKey(productKey);
            return this;
        }
        /**
         * Property productKey: The identifier of the product to which the device to be registered belongs.
         * <p>
         * @return {@code this}
         * @param productKey Property productKey: The identifier of the product to which the device to be registered belongs. This parameter is required.
         */
        public Builder productKey(final com.aliyun.ros.cdk.core.IResolvable productKey) {
            this.props.productKey(productKey);
            return this;
        }

        /**
         * Property devEui: DevEUI LoRaWAN equipment.
         * <p>
         * When you create a LoRaWAN devices, this will pass.
         * <p>
         * @return {@code this}
         * @param devEui Property devEui: DevEUI LoRaWAN equipment. This parameter is required.
         */
        public Builder devEui(final java.lang.String devEui) {
            this.props.devEui(devEui);
            return this;
        }
        /**
         * Property devEui: DevEUI LoRaWAN equipment.
         * <p>
         * When you create a LoRaWAN devices, this will pass.
         * <p>
         * @return {@code this}
         * @param devEui Property devEui: DevEUI LoRaWAN equipment. This parameter is required.
         */
        public Builder devEui(final com.aliyun.ros.cdk.core.IResolvable devEui) {
            this.props.devEui(devEui);
            return this;
        }

        /**
         * Property deviceName: The name of the device that you want to register.
         * <p>
         * The device name must consist of
         * 4 to 32 characters, including English letters, digits, and special characters, for
         * example, hyphens (-), underscores (_), at signs (&#64;), periods (.) , and colons (:).
         * DeviceName is used with ProductKey to identify a specified device.
         * Note If you do not specify this parameter, the system will generate a name for the device.
         * <p>
         * @return {@code this}
         * @param deviceName Property deviceName: The name of the device that you want to register. This parameter is required.
         */
        public Builder deviceName(final java.lang.String deviceName) {
            this.props.deviceName(deviceName);
            return this;
        }
        /**
         * Property deviceName: The name of the device that you want to register.
         * <p>
         * The device name must consist of
         * 4 to 32 characters, including English letters, digits, and special characters, for
         * example, hyphens (-), underscores (_), at signs (&#64;), periods (.) , and colons (:).
         * DeviceName is used with ProductKey to identify a specified device.
         * Note If you do not specify this parameter, the system will generate a name for the device.
         * <p>
         * @return {@code this}
         * @param deviceName Property deviceName: The name of the device that you want to register. This parameter is required.
         */
        public Builder deviceName(final com.aliyun.ros.cdk.core.IResolvable deviceName) {
            this.props.deviceName(deviceName);
            return this;
        }

        /**
         * Property iotInstanceId: Public instance does not pass this parameter;
         * <p>
         * instance that you need to buy the incoming instance ID.
         * <p>
         * @return {@code this}
         * @param iotInstanceId Property iotInstanceId: Public instance does not pass this parameter;. This parameter is required.
         */
        public Builder iotInstanceId(final java.lang.String iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }
        /**
         * Property iotInstanceId: Public instance does not pass this parameter;
         * <p>
         * instance that you need to buy the incoming instance ID.
         * <p>
         * @return {@code this}
         * @param iotInstanceId Property iotInstanceId: Public instance does not pass this parameter;. This parameter is required.
         */
        public Builder iotInstanceId(final com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }

        /**
         * Property nickname: Add a nickname for the device.
         * <p>
         * A nickname can be 4-64 characters in length, and can
         * contain Chinese characters, English letters, numbers and underscores (_). A Chinese
         * character counts as two characters.
         * <p>
         * @return {@code this}
         * @param nickname Property nickname: Add a nickname for the device. This parameter is required.
         */
        public Builder nickname(final java.lang.String nickname) {
            this.props.nickname(nickname);
            return this;
        }
        /**
         * Property nickname: Add a nickname for the device.
         * <p>
         * A nickname can be 4-64 characters in length, and can
         * contain Chinese characters, English letters, numbers and underscores (_). A Chinese
         * character counts as two characters.
         * <p>
         * @return {@code this}
         * @param nickname Property nickname: Add a nickname for the device. This parameter is required.
         */
        public Builder nickname(final com.aliyun.ros.cdk.core.IResolvable nickname) {
            this.props.nickname(nickname);
            return this;
        }

        /**
         * Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
         * <p>
         * When you create a LoRaWAN devices, this will pass.
         * <p>
         * @return {@code this}
         * @param pinCode Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI. This parameter is required.
         */
        public Builder pinCode(final java.lang.String pinCode) {
            this.props.pinCode(pinCode);
            return this;
        }
        /**
         * Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
         * <p>
         * When you create a LoRaWAN devices, this will pass.
         * <p>
         * @return {@code this}
         * @param pinCode Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI. This parameter is required.
         */
        public Builder pinCode(final com.aliyun.ros.cdk.core.IResolvable pinCode) {
            this.props.pinCode(pinCode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.iot.Device}.
         */
        @Override
        public com.aliyun.ros.cdk.iot.Device build() {
            return new com.aliyun.ros.cdk.iot.Device(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
