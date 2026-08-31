package com.aliyun.ros.cdk.iot;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::IOT::Device</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T09:45:11.616Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.Device")
public class Device extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.iot.IDevice {

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
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeviceName() {
        return software.amazon.jsii.Kernel.get(this, "attrDeviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DeviceSecret: Device key.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeviceSecret() {
        return software.amazon.jsii.Kernel.get(this, "attrDeviceSecret", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.
     * <p>
     * Description Keep, do not leak.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIotId() {
        return software.amazon.jsii.Kernel.get(this, "attrIotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IotInstanceId: IOT instance ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIotInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrIotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IpAddress: IP address.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NickName: Nick name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNickName() {
        return software.amazon.jsii.Kernel.get(this, "attrNickName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NodeType: Node type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeType() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProductKey: Product key.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductKey() {
        return software.amazon.jsii.Kernel.get(this, "attrProductKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProductName: Product name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductName() {
        return software.amazon.jsii.Kernel.get(this, "attrProductName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.DeviceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.iot.DeviceProps.class));
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
         * Property devEui: The DevEUI of the LoRaWAN device.
         * <p>
         * This parameter is required when you create a LoRaWAN device.
         * <p>
         * @return {@code this}
         * @param devEui Property devEui: The DevEUI of the LoRaWAN device. This parameter is required.
         */
        public Builder devEui(final java.lang.String devEui) {
            this.props.devEui(devEui);
            return this;
        }
        /**
         * Property devEui: The DevEUI of the LoRaWAN device.
         * <p>
         * This parameter is required when you create a LoRaWAN device.
         * <p>
         * @return {@code this}
         * @param devEui Property devEui: The DevEUI of the LoRaWAN device. This parameter is required.
         */
        public Builder devEui(final com.aliyun.ros.cdk.core.IResolvable devEui) {
            this.props.devEui(devEui);
            return this;
        }

        /**
         * Property deviceName: The DeviceName of the device.
         * <p>
         * The name must be 4 to 32 characters in length, and
         * can contain letters, digits, hyphens (-), underscores (_), at signs (&#64;), periods
         * (.), and colons (:).
         * You can use a combination of the DeviceName and ProductKey parameters to identify
         * a device.
         * <p>
         * <blockquote>
         * <p>
         * If you do not specify this parameter, IoT Platform randomly generates a
         * DeviceName.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param deviceName Property deviceName: The DeviceName of the device. This parameter is required.
         */
        public Builder deviceName(final java.lang.String deviceName) {
            this.props.deviceName(deviceName);
            return this;
        }
        /**
         * Property deviceName: The DeviceName of the device.
         * <p>
         * The name must be 4 to 32 characters in length, and
         * can contain letters, digits, hyphens (-), underscores (_), at signs (&#64;), periods
         * (.), and colons (:).
         * You can use a combination of the DeviceName and ProductKey parameters to identify
         * a device.
         * <p>
         * <blockquote>
         * <p>
         * If you do not specify this parameter, IoT Platform randomly generates a
         * DeviceName.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param deviceName Property deviceName: The DeviceName of the device. This parameter is required.
         */
        public Builder deviceName(final com.aliyun.ros.cdk.core.IResolvable deviceName) {
            this.props.deviceName(deviceName);
            return this;
        }

        /**
         * Property iotInstanceId: The ID of the instance.
         * <p>
         * You can view the instance ID on the Overview page in the
         * IoT Platform console.
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>If your instance has an ID, you must configure this parameter. If you do not
         * set this parameter, the call fails.</li>
         * <li>If your instance has no Overview page or ID, you do not need to set this
         * parameter.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param iotInstanceId Property iotInstanceId: The ID of the instance. This parameter is required.
         */
        public Builder iotInstanceId(final java.lang.String iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }
        /**
         * Property iotInstanceId: The ID of the instance.
         * <p>
         * You can view the instance ID on the Overview page in the
         * IoT Platform console.
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>If your instance has an ID, you must configure this parameter. If you do not
         * set this parameter, the call fails.</li>
         * <li>If your instance has no Overview page or ID, you do not need to set this
         * parameter.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param iotInstanceId Property iotInstanceId: The ID of the instance. This parameter is required.
         */
        public Builder iotInstanceId(final com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }

        /**
         * Property nickname: The alias of the device.
         * <p>
         * The alias must be 4 to 64 characters in length, and can
         * contain letters, digits, and underscores (_).
         * <p>
         * <blockquote>
         * <p>
         * If you do not specify this parameter, IoT Platform does not generate an alias
         * for the device.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param nickname Property nickname: The alias of the device. This parameter is required.
         */
        public Builder nickname(final java.lang.String nickname) {
            this.props.nickname(nickname);
            return this;
        }
        /**
         * Property nickname: The alias of the device.
         * <p>
         * The alias must be 4 to 64 characters in length, and can
         * contain letters, digits, and underscores (_).
         * <p>
         * <blockquote>
         * <p>
         * If you do not specify this parameter, IoT Platform does not generate an alias
         * for the device.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param nickname Property nickname: The alias of the device. This parameter is required.
         */
        public Builder nickname(final com.aliyun.ros.cdk.core.IResolvable nickname) {
            this.props.nickname(nickname);
            return this;
        }

        /**
         * Property pinCode: The PIN code of the LoRaWAN device.
         * <p>
         * This parameter is used to verify the DevEUI.
         * When you create a LoRaWAN device, set LoraNodeType to CUSTOMDEFINED. This
         * parameter is required.
         * <p>
         * @return {@code this}
         * @param pinCode Property pinCode: The PIN code of the LoRaWAN device. This parameter is required.
         */
        public Builder pinCode(final java.lang.String pinCode) {
            this.props.pinCode(pinCode);
            return this;
        }
        /**
         * Property pinCode: The PIN code of the LoRaWAN device.
         * <p>
         * This parameter is used to verify the DevEUI.
         * When you create a LoRaWAN device, set LoraNodeType to CUSTOMDEFINED. This
         * parameter is required.
         * <p>
         * @return {@code this}
         * @param pinCode Property pinCode: The PIN code of the LoRaWAN device. This parameter is required.
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
