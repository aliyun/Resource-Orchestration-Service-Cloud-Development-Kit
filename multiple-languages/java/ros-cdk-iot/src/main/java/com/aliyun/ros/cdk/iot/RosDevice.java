package com.aliyun.ros.cdk.iot;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::IOT::Device</code>, which is used to register a Device.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:55.930Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.iot.$Module.class, fqn = "@alicloud/ros-cdk-iot.RosDevice")
public class RosDevice extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDevice(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDevice(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.iot.RosDevice.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDevice(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.iot.RosDeviceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeviceName() {
        return software.amazon.jsii.Kernel.get(this, "attrDeviceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDeviceSecret() {
        return software.amazon.jsii.Kernel.get(this, "attrDeviceSecret", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIotId() {
        return software.amazon.jsii.Kernel.get(this, "attrIotId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIotInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrIotInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrIpAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNickName() {
        return software.amazon.jsii.Kernel.get(this, "attrNickName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNodeType() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProductKey() {
        return software.amazon.jsii.Kernel.get(this, "attrProductKey", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProductName() {
        return software.amazon.jsii.Kernel.get(this, "attrProductName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProductKey() {
        return software.amazon.jsii.Kernel.get(this, "productKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProductKey(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "productKey", java.util.Objects.requireNonNull(value, "productKey is required"));
    }

    /**
     */
    public void setProductKey(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "productKey", java.util.Objects.requireNonNull(value, "productKey is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDevEui() {
        return software.amazon.jsii.Kernel.get(this, "devEui", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDevEui(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "devEui", value);
    }

    /**
     */
    public void setDevEui(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "devEui", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeviceName() {
        return software.amazon.jsii.Kernel.get(this, "deviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeviceName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deviceName", value);
    }

    /**
     */
    public void setDeviceName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deviceName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIotInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "iotInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIotInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "iotInstanceId", value);
    }

    /**
     */
    public void setIotInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "iotInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNickname() {
        return software.amazon.jsii.Kernel.get(this, "nickname", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNickname(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "nickname", value);
    }

    /**
     */
    public void setNickname(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nickname", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPinCode() {
        return software.amazon.jsii.Kernel.get(this, "pinCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPinCode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pinCode", value);
    }

    /**
     */
    public void setPinCode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pinCode", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.iot.RosDevice}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.iot.RosDevice> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.iot.RosDeviceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.iot.RosDeviceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param productKey This parameter is required.
         */
        public Builder productKey(final java.lang.String productKey) {
            this.props.productKey(productKey);
            return this;
        }
        /**
         * @return {@code this}
         * @param productKey This parameter is required.
         */
        public Builder productKey(final com.aliyun.ros.cdk.core.IResolvable productKey) {
            this.props.productKey(productKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param devEui This parameter is required.
         */
        public Builder devEui(final java.lang.String devEui) {
            this.props.devEui(devEui);
            return this;
        }
        /**
         * @return {@code this}
         * @param devEui This parameter is required.
         */
        public Builder devEui(final com.aliyun.ros.cdk.core.IResolvable devEui) {
            this.props.devEui(devEui);
            return this;
        }

        /**
         * @return {@code this}
         * @param deviceName This parameter is required.
         */
        public Builder deviceName(final java.lang.String deviceName) {
            this.props.deviceName(deviceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param deviceName This parameter is required.
         */
        public Builder deviceName(final com.aliyun.ros.cdk.core.IResolvable deviceName) {
            this.props.deviceName(deviceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param iotInstanceId This parameter is required.
         */
        public Builder iotInstanceId(final java.lang.String iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param iotInstanceId This parameter is required.
         */
        public Builder iotInstanceId(final com.aliyun.ros.cdk.core.IResolvable iotInstanceId) {
            this.props.iotInstanceId(iotInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param nickname This parameter is required.
         */
        public Builder nickname(final java.lang.String nickname) {
            this.props.nickname(nickname);
            return this;
        }
        /**
         * @return {@code this}
         * @param nickname This parameter is required.
         */
        public Builder nickname(final com.aliyun.ros.cdk.core.IResolvable nickname) {
            this.props.nickname(nickname);
            return this;
        }

        /**
         * @return {@code this}
         * @param pinCode This parameter is required.
         */
        public Builder pinCode(final java.lang.String pinCode) {
            this.props.pinCode(pinCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param pinCode This parameter is required.
         */
        public Builder pinCode(final com.aliyun.ros.cdk.core.IResolvable pinCode) {
            this.props.pinCode(pinCode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.iot.RosDevice}.
         */
        @Override
        public com.aliyun.ros.cdk.iot.RosDevice build() {
            return new com.aliyun.ros.cdk.iot.RosDevice(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
